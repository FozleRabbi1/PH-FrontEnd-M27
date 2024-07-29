import { Button, Table, TableColumnsType, TableProps } from "antd";
import { academicManagmentApi } from "../../../redux/fetures/admin/academicManagment.api";
import { TAcedemicSemester } from "../../../types/academicManagment.types";
import { useState } from "react";
import { TQueryParam } from "../../../types";

export type TTableData = Pick<
  TAcedemicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const AcademinSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const {
    data: semesterData,
    isLoading,
    isFetching,
  } = academicManagmentApi.useGetAllSemesterQuery(params);

  const tableData = semesterData?.data?.map(({ _id, name, startMonth, endMonth, year }) => ({
      key: _id,
      _id,
      name,
      startMonth,
      endMonth,
      year,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Autumn",
          value: "Autumn",
        },
        {
          text: "Fall",
          value: "Fall",
        },
        {
          text: "Summar",
          value: "Summar",
        },
      ],
    },
    {
      title: "Year",
      dataIndex: "year",
      filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
        {
          text: "2030",
          value: "2030",
        },
        {
          text: "2031",
          value: "2031",
        },
      ],
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
    {
      title: "Action",
      key: "X",
      render: () => {
        return (
          <div>
            <Button> update </Button>
          </div>
        );
      },
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination, // _ এই মানে এটি define করা হয়েছে but use করা হয়নি
    filters,
    _sorter,
    extra
  ) => {
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );
      filters.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );
      setParams(queryParams);
    }
  };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Table
      loading={isFetching || isLoading}
      columns={columns}
      dataSource={tableData}
      onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademinSemester;
