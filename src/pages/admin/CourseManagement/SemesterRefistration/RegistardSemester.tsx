import { Button, Dropdown, Table, TableColumnsType, Tag } from "antd";
import { courseManegemnetApi } from "../../../../redux/fetures/admin/courseManagement/courseManagementApi";
import moment from "moment";
import { TSemester } from "../../../../types";
import { useState } from "react";

export type TTableData = Pick<
  TSemester,
  "_id" | "startDate" | "endDate" | "status"
>;

const items = [
  {
    label: "Upcomming",
    key: "UPCOMMING",
  },
  {
    label: "Ongoing",
    key: "ONGOING",
  },
  {
    label: "Ended",
    key: "ENDED",
  },
];

const RegistardSemester = () => {
  const [semesterId, setSemesterId] = useState("");
  const [updateRegisteredSemester] =
    courseManegemnetApi.useUpdateRegisteredSemesterMutation();
  const {
    data: semesterData,
    isFetching,
    isLoading,
  } = courseManegemnetApi.useGetAllRegisteredSemesterQuery(undefined);

  const tableData = semesterData?.data?.map(
    ({ _id, academicSemester, status, startDate, endDate }) => ({
      key: _id,
      _id,
      name: `${academicSemester?.name} ${academicSemester?.year}`,
      status,
      startDate: moment(new Date(startDate)).format("MMMM Do YYYY"),
      endDate: moment(new Date(endDate)).format("MMMM Do YYYY"),
    })
  );

  const handleStatusUpdate = (data) => {
    const updateData = {
      id: semesterId,
      data: {
        status: data.key,
      },
    };
    updateRegisteredSemester(updateData);
  };

  const menuProps = {
    items,
    onClick: handleStatusUpdate,
  };

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (item) => {
        return (
          <Tag
            color={`${
              item === "UPCOMMING"
                ? "blue"
                : item === "ONGOING"
                ? "green"
                : "red"
            }`}
          >
            {item}
          </Tag>
        );
      },
    },
    {
      title: "Start Month",
      dataIndex: "startDate",
    },
    {
      title: "End Month",
      dataIndex: "endDate",
    },
    {
      title: "Action",
      key: "X",
      render: (item) => {
        return (
          <Dropdown menu={menuProps} trigger={["click"]}>
            <Button onClick={() => setSemesterId(item?.key)}> update </Button>
          </Dropdown>
        );
      },
    },
  ];

  // const onChange: TableProps<TTableData>["onChange"] = (
  //   _pagination, // _ এই মানে এটি define করা হয়েছে but use করা হয়নি
  //   filters,
  //   _sorter,
  //   extra
  // ) => {
  //   if (extra.action === "filter") {
  //     const queryParams: TQueryParam[] = [];

  //     setParams(queryParams);
  //   }
  // };

  // if (isLoading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <Table
      loading={isFetching || isLoading}
      columns={columns}
      dataSource={tableData}
      // onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default RegistardSemester;
