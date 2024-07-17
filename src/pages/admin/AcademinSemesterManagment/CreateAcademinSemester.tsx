import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOprions = [
  { value: "Autumn", label: "Autumn" },
  { value: "Summer", label: "Summer" },
  { value: "Fall", label: "Fall" },
];

const CreateAcademinSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const semesterData = {};
    console.log(semesterData);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect label="Name" name="name" options={nameOprions}></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademinSemester;
