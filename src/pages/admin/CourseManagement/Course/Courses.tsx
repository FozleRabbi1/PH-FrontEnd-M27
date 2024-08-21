import { Button, Modal, Table, TableColumnsType } from "antd";
import { courseManegemnetApi } from "../../../../redux/fetures/admin/courseManagement/courseManagementApi";
import { TSemester } from "../../../../types";
import { useState } from "react";
import PHForm from "../../../../components/form/PHForm";
import PHSelect from "../../../../components/form/PHSelect";
import { userManagementApi } from "../../../../redux/fetures/admin/UserManagement/userManagementApi";

export type TTableData = Pick<TSemester, "_id" | "title" | "code" | "prefix">;

const Courses = () => {
  const {
    data: coursesData,
    isFetching,
    isLoading,
  } = courseManegemnetApi.useGetAllCoursesQuery(undefined);

  const tableData = coursesData?.data?.map(({ _id, title, code, prefix }) => ({
    key: _id,
    _id,
    title,
    code: `${prefix} ${code}`,
  }));

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Code",
      dataIndex: "code",
    },

    {
      title: "Action",
      key: "X",
      render: (item) => {
        return <AddFacultyModal facultyInfo={item} />;
      },
    },
  ];

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

const AddFacultyModal = ({ facultyInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: facultyData } =
    userManagementApi.useGetAllFacultyDataQuery(undefined);
  const [addFaculties] = courseManegemnetApi.useAddFacultiesMutation();

  const facultiesOptions = facultyData?.data?.map((item) => ({
    value: item._id,
    label: `${item?.name.firstName} ${item?.name.middleName} ${item?.name.lastName}`,
  }));

  const handleSubmit = (data) => {
    const facultyData = {
      courseId: facultyInfo.key,
      data,
    };
    addFaculties(facultyData);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Faculty
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHSelect
            mode="multiple"
            options={facultiesOptions}
            name="faculties"
            label="Faculty"
          />
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};

export default Courses;
