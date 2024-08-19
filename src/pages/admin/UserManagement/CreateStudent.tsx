import { Button, Col, Divider, Form, Input, Row } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHSelect from "../../../components/form/PHSelect";
import { bloodGroupsOptions, gendersOptions } from "../../../constants/global";
import PHDatePicker from "../../../components/form/PHDatePicker";
import { academicManagmentApi } from "../../../redux/fetures/admin/academicManagment.api";
import { academicDepartManagementApi } from "../../../redux/fetures/admin/academicDepartmentManagement.api";
import { toast } from "sonner";
import { userManagementApi } from "../../../redux/fetures/admin/UserManagement/userManagementApi";

// should be remove
const studentDefaucltValue = {
  name: {
    firstName: "Fozle",
    middleName: "rabbi",
    lastName: "shuvo",
  },
  gender: "male",
  bloodGroup: "O+",

  email: "shuvo@gmail.com",
  contactNumber: "+1234567890",
  emergencyContactNo: "+0987654321",
  presentAddress: "123 Main St, Springfield, IL",
  permanentAddress: "456 Elm St, Springfield, IL",

  guardian: {
    fatherName: "Robert Doe",
    fatherOccupation: "Engineer",
    fatherContactNo: "+1234567891",
    motherName: "Jane Doe",
    motherOccupation: "Teacher",
    motherContactNo: "+1234567892",
  },
  localguardian: {
    name: "Uncle Bob",
    occupation: "Doctor",
    contactNo: "+1234567893",
    address: "789 Maple St, Springfield, IL",
  },
  // profileImg: "",
  admissionSemester: "665887afdc3ec6a254a29b6c",
  academicDepartment: "66649c61c8780d533a6f3a29",
};

type TItem = {
  _id: string;
  name: string;
  year: string;
};

const CreateStudent = () => {
  const [addStudent, { isSuccess, isError }] =
    userManagementApi.useAddStudentMutation();

  const { data: semesterData, isLoading: sIsLoading } =
    academicManagmentApi.useGetAllSemesterQuery(undefined);
  const { data: academicData, isLoading: aIsLoading } =
    academicDepartManagementApi.useGetAllAcademicDepartmentManagementQuery(
      undefined
    );
  const semesterOptions = semesterData?.data?.map((item: TItem) => ({
    value: item._id,
    label: `${item.name} , ${item.year}`,
  }));

  const departOptions = academicData?.data?.map((item: TItem) => ({
    value: item._id,
    label: item.name,
  }));

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const studentData = {
      password: "student123",
      student: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image);
    addStudent(formData);
  };

  console.log({ isSuccess, isError });

  if (isSuccess) {
    toast.success(`Student Create SuccessFully`, {
      duration: 3000,
      style: {
        background: "green",
        color: "white",
        width: "250px",
      },
    });
  }

  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onSubmit} defaultValues={studentDefaucltValue}>
          {/* ================================== Persaonal Divider ===================================== */}
          <Divider>Persaonal Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.firstName"
                label="First Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.middleName"
                label="Middle Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="name.lastName"
                label="Last Name"
              ></PHInput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="gender"
                label="Gender"
                options={gendersOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker
                name="dethOfBirth"
                label="Deth Of Birth"
              ></PHDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="bloodGroup"
                label="blood Group"
                options={bloodGroupsOptions}
              ></PHSelect>
            </Col>
            <Controller
              name="image"
              render={({ field: { onChange, value, ...field } }) => (
                <Form.Item label="Picture">
                  <Input
                    type="file"
                    value={value?.fileName}
                    {...field}
                    onChange={(e) => onChange(e.target.files?.[0])}
                  />
                </Form.Item>
              )}
            />
          </Row>

          {/* ================================== Contact Divider ===================================== */}
          <Divider>Contact Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput type="text" name="email" label="Email"></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="contactNumber"
                label="Contact Number"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="emergencyContactNo"
                label="Emergency Contact Number"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="presentAddress"
                label="Present Address"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="permanentAddress"
                label="Permanent Address"
              ></PHInput>
            </Col>
          </Row>

          {/* ==================================  Guardian Divider ===================================== */}
          <Divider> Guardian Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherName"
                label="Father Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherOccupation"
                label="fatherOccupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.fatherContactNo"
                label="Father Contact No"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherName"
                label="Mother Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherOccupation"
                label="Mother Occupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="guardian.motherContactNo"
                label="Mother Contact No"
              ></PHInput>
            </Col>
          </Row>

          {/* ========================== Local Guardian Divider============================== */}
          <Divider>Local Guardian Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localguardian.name"
                label="Name"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localguardian.occupation"
                label="Occupation"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localguardian.contactNo"
                label="Contact No"
              ></PHInput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHInput
                type="text"
                name="localguardian.address"
                label="Address"
              ></PHInput>
            </Col>
          </Row>

          {/* ========================== Academic Divider============================== */}
          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="admissionSemester"
                label="Admission Semester"
                options={semesterOptions}
                disabled={sIsLoading}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name="academicDepartment"
                label="Academic Department"
                options={departOptions}
                disabled={aIsLoading}
              ></PHSelect>
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
