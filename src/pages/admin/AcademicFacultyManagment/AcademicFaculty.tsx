import { Table, TableColumnsType } from "antd";
import { academicFacultyManagmentApi } from "../../../redux/fetures/admin/academicFacultyManagment.api";

type TTableData = {
  name: string;
  createdAt: string;
};

type TApiData = {
  _id: string;
  name: string;
  createdAt: string;
};

const AcademicFaculty = () => {
  const { data, isLoading } =
    academicFacultyManagmentApi.useGetAllAcademicFacultyQuery({});

  const tableData = data?.data?.map(({ _id, name, createdAt }: TApiData) => ({
    key: _id,
    name,
    createdAt,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "createdAt",
      dataIndex: "createdAt",
    },
  ];

  return (
    <Table
      loading={isLoading}
      columns={columns}
      dataSource={tableData}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};

export default AcademicFaculty;
