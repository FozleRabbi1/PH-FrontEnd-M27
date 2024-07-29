import { FieldValues, SubmitHandler } from "react-hook-form";
import { academicFacultyManagmentApi } from "../../../redux/fetures/admin/academicFacultyManagment.api";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import PHSelect from "../../../components/form/PHSelect";
import { toast } from "sonner";
import { academicDepartManagementApi } from "../../../redux/fetures/admin/academicDepartmentManagement.api";

type TItem = {
  _id: string;
  name: string;
};

const CreateAcademicDepartment = () => {
  const { data } = academicFacultyManagmentApi.useGetAllAcademicFacultyQuery(
    {}
  );
  const [addAcademicSemester, { isSuccess }] =
    academicDepartManagementApi.useAddAcademicDepartmentManagementMutation();

  const facultyIdOptions = data?.data?.map((item: TItem) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    addAcademicSemester(data);
  };

  if (isSuccess) {
    toast.success(`Department Create SuccessFully`, {
      duration: 3000,
      style: {
        background: "green",
        color: "white",
        width: "250px",
      },
    });
  }

  return (
    <div>
      <h2>this is create academic department </h2>

      <Flex justify="center" align="center">
        <Col span={8}>
          <PHForm
            onSubmit={onSubmit}
            // resolver={zodResolver(academicSemesterSchema)}
          >
            <PHSelect
              label="Select Faculty"
              name="academicFaculty"
              options={facultyIdOptions}
            ></PHSelect>
            <PHInput
              type="text"
              name="name"
              label="Academic Department Name"
            ></PHInput>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicDepartment;
