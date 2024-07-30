import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import { userManagementApi } from "../../../redux/fetures/admin/UserManagement/userManagement.api";
import { TQueryParam, TStudent } from "../../../types";
import { useState } from "react";

export type TTableData = Pick<
  TStudent,
  "_id" | "fullName" | "id" | "profileImg" | "email"
>;

const StudentData = () => {
  const [params, setParams] = useState<TQueryParam[]>([]);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const {
    data: studentData,
    isLoading,
    isFetching,
  } = userManagementApi.useGetStudentDataQuery([
    { name: "limit", value: limit },
    { name: "page", value: page },
    { name: "sort", value: "id" },
    ...params,
  ]);

  const tableData = studentData?.data.map(
    ({ _id, fullName, id, profileImg, email }: TTableData) => ({
      key: _id,
      fullName,
      id,
      profileImg,
      email,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Profile Image",
      dataIndex: "profileImg",
      render: (text: string, record: TTableData) => (
        <img
          src={record.profileImg}
          //   alt={record.fullName}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            border: "1px solid gray",
          }}
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "fullName",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Roll No.",
      dataIndex: "id",
    },
    {
      title: "Email",
      dataIndex: "email",
    },

    {
      title: "Action",
      key: "X",
      render: () => {
        return (
          <Space>
            <Button> Details </Button>
            <Button> update </Button>
            <Button> Block </Button>
          </Space>
        );
      },
      width: "1%",
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

      setParams(queryParams);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

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

export default StudentData;
