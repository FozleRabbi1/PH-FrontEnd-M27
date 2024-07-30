import { Table, TableColumnsType } from "antd";
import { academicDepartManagementApi } from "../../../redux/fetures/admin/academicDepartmentManagement.api";

type TAcademicFaculty = {
  name: string;
};

type TApiData = {
  _id: string;
  name: string;
  academicFaculty: TAcademicFaculty;
};

type TTableData = {
  name: string;
  facultyName: string;
};

const AcademicDepartment = () => {
  const { data, isLoading } =
    academicDepartManagementApi.useGetAllAcademicDepartmentManagementQuery({});

  const tableData = data?.data?.map(
    ({ _id, name, academicFaculty }: TApiData) => ({
      key: _id,
      name,
      facultyName: academicFaculty.name,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Department Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
    },
    {
      title: "Name Of Faculty",
      dataIndex: "facultyName",
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

export default AcademicDepartment;
