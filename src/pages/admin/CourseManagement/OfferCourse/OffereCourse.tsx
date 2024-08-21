import { Button, Col, Flex } from "antd";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { courseManegemnetApi } from "../../../../redux/fetures/admin/courseManagement/courseManagementApi";
import { academicManagmentApi } from "../../../../redux/fetures/admin/academicManagment.api";
import PHForm from "../../../../components/form/PHForm";
import PHSelect from "../../../../components/form/PHSelect";
import PHSlectWithWatch from "../../../../components/form/PHSelectWithWatch";
import PHInput from "../../../../components/form/PHInput";
import { weekDaysOptions } from "../../../../constants/global";
import PHTimePicker from "../../../../components/form/PHTimePicker";

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");
  // const [addOfferedCourse] = useCreateOfferedCourseMutation();

  // const { data: semesterRegistrationData } =
  //   courseManegemnetApi.useGetAllRegisteredSemesterQuery([
  //     { name: "sort", value: "year" },
  //     { name: "status", value: "UPCOMING" },
  //   ]);
  const { data: semesterRegistrationData } =
    courseManegemnetApi.useGetAllRegisteredSemesterQuery(undefined);

  console.log(semesterRegistrationData);

  const { data: academicFacultyData } =
    academicManagmentApi.useGetAcademicFacultiesQuery(undefined);

  const { data: academicDepartmentData } =
    academicManagmentApi.useGetAcademicDepartmentsQuery(undefined);

  const { data: coursesData } =
    courseManegemnetApi.useGetAllCoursesQuery(undefined);

  const { data: facultiesData, isFetching: fetchingFaculties } =
    courseManegemnetApi.useGetCourseFacultiesQuery(courseId, {
      skip: !courseId,
    });
  console.log(facultiesData);
  const semesterRegistrationOptions = semesterRegistrationData?.data?.map(
    (item) => ({
      value: item._id,
      label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    })
  );

  const academicFacultyOptions = academicFacultyData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }));

  const academicDepartmentOptions = academicDepartmentData?.data?.map(
    (item) => ({
      value: item._id,
      label: item.name,
    })
  );

  const courseOptions = coursesData?.data?.map((item) => ({
    value: item._id,
    label: item.title,
  }));

  const facultiesOptions = facultiesData?.data?.faculties?.map((item) => ({
    value: item._id,
    label: `${item.name.firstName} ${item.name.middleName} ${item.name.lastName}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="semesterRegistration"
            label="Semester Registrations"
            options={semesterRegistrationOptions}
          />
          <PHSelect
            name="academicFaculty"
            label="Academic Faculty"
            options={academicFacultyOptions}
          />
          <PHSelect
            name="academicDepartment"
            label="Academic Department"
            options={academicDepartmentOptions}
          />
          <PHSlectWithWatch
            onvalueChange={setCourseId}
            options={courseOptions}
            name="course"
            label="Course"
          />
          <PHSelect
            disabled={!courseId || fetchingFaculties}
            name="faculty"
            label="Faculty"
            options={facultiesOptions}
          />
          <PHInput type="text" name="section" label="Section" />
          <PHInput type="text" name="maxCapacity" label="Max Capacity" />
          <PHSelect
            mode="multiple"
            options={weekDaysOptions}
            name="days"
            label="Days"
          />
          <PHTimePicker name="startTime" label="Start Time" />
          <PHTimePicker name="endTime" label="End Time" />

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default OfferCourse;
