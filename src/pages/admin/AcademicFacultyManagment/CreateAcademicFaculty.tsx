import { Button, Col, Flex } from "antd";
import PHForm from "../../../components/form/PHForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PHInput from "../../../components/form/PHInput";
import { academicFacultyManagmentApi } from "../../../redux/fetures/admin/academicFacultyManagment.api";
import { toast } from "sonner";

const CreateAcademicFaculty = () => {
  const [addAcademicSemester, { isSuccess }] =
    academicFacultyManagmentApi.useAddAcademicFacultyMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    addAcademicSemester(data);
  };

  if (isSuccess) {
    toast.success(`Faculty Create SuccessFully`, {
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
      <Flex justify="center" align="center">
        <Col span={8}>
          <PHForm
            onSubmit={onSubmit}
            // resolver={zodResolver(academicSemesterSchema)}
          >
            <PHInput
              type="text"
              name="name"
              label="Academic Faculty Name"
            ></PHInput>
            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateAcademicFaculty;
