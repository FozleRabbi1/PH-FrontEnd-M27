import { Button, Col, Flex } from "antd";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";
import { academicFacultyManagmentApi } from "../../../../redux/fetures/admin/academicFacultyManagment.api";
import PHSlectWithWatch from "../../../../components/form/PHSelectWithWatch";
import { useState } from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

const OffereCourse = () => {
  const { data: academicFacultyData } =
    academicFacultyManagmentApi.useGetAllAcademicFacultyQuery(undefined);
  const [id, setId] = useState("");
  console.log("inside parent component =", id);

  const facultiesOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>create Offered Course</h2>

      <Flex justify="center" align="center">
        <Col span={8}>
          <PHForm onSubmit={onSubmit}>
            <PHSlectWithWatch
              onvalueChange={setId}
              label="Aademic Faculty"
              name="academicFaculty"
              options={facultiesOptions}
            ></PHSlectWithWatch>
            <PHInput disabled={!id} type="text" name="test" label="test" />

            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default OffereCourse;
