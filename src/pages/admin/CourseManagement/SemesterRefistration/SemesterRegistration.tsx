import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../../components/form/PHForm";
import PHSelect from "../../../../components/form/PHSelect";
import { SemesterStatusOptions } from "../../../../constants/semester";
import { academicManagmentApi } from "../../../../redux/fetures/admin/academicManagment.api";
import PHDatePicker from "../../../../components/form/PHDatePicker";
import PHInput from "../../../../components/form/PHInput";
import { toast } from "sonner";
import { courseManegemnetApi } from "../../../../redux/fetures/admin/courseManagement/courseManagementApi";
import { TResponse } from "../../../../types";

const SemesterRegistration = () => {
  const [addRegisteredSemester] =
    courseManegemnetApi.useAddRegisteredSemesterMutation();
  const { data: academicSemester } =
    academicManagmentApi.useGetAllSemesterQuery([
      { name: "sort", value: "year" },
    ]);

  const createAcademicSemesterOprions = academicSemester?.data?.map((item) => ({
    value: item._id,
    label: `${item?.name} ${item?.year}`,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const semesterData = {
      ...data,
      maxCredit: Number(data.maxCredit),
      minCredit: Number(data.minCredit),
    };

    try {
      const res = (await addRegisteredSemester(semesterData)) as TResponse<any>;
      console.log(res);

      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, {
          id: toastId,
          style: {
            background: "green",
            color: "white",
          },
        });
      }
    } catch (err) {
      toast.error("somthing went wrong", { id: toastId });
    }
  };

  return (
    <div>
      <h2>create semester registration </h2>

      <Flex justify="center" align="center">
        <Col span={8}>
          <PHForm onSubmit={onSubmit}>
            <PHSelect
              label="aAademic Semester"
              name="academicSemester"
              options={createAcademicSemesterOprions}
            ></PHSelect>
            <PHSelect
              label="Status"
              name="status"
              options={SemesterStatusOptions}
            ></PHSelect>

            <PHDatePicker name="startDate" label="Start Date" />
            <PHDatePicker name="endDate" label="End Date" />
            <PHInput type="number" name="maxCredit" label="Max Credit" />
            <PHInput type="number" name="minCredit" label="Min Credit" />

            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default SemesterRegistration;
