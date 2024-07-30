import { Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";

const studentDummyData = {
  password: "student123",
  student: {
    name: {
      firstName: "sabbir",
      middleName: "hosain",
      lastName: "shanto ",
    },
    gender: "male",
    email: "sabbir@gmail.com",
    dethOfBirth: "1990-01-01",
    contactNumber: "+1234567890",
    emergencyContactNo: "+0987654321",
    bloodGroup: "O+",
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
    academicDepartment: "665d7e67e99ae88a986cf356",
    admissionSemester: "665887afdc3ec6a254a29b6c",
  },
};
//==================>>>>>  image uploaded by file input

const CreateStudent = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const fromData = new FormData();
    fromData.append("data", JSON.stringify(data));

    //! this is for testing purpose
    console.log(Object.fromEntries(fromData));
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" label="Name"></PHInput>
      <Button htmlType="submit">Submit</Button>
    </PHForm>
  );
};

export default CreateStudent;
