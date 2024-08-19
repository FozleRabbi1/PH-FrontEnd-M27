import { Button, Table, TableColumnsType } from "antd";
import { TAcedemicSemester } from "../../../../types/academicManagment.types";
import { courseManegemnetApi } from "../../../../redux/fetures/admin/courseManagement/courseManagementApi";

export type TTableData = Pick<
  TAcedemicSemester,
  "_id" | "name" | "year" | "startMonth" | "endMonth"
>;

const RegistardSemester = () => {
  // const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
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
      startDate,
      endDate,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
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
      render: () => {
        return (
          <div>
            <Button> update </Button>
          </div>
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
