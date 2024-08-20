import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../../components/form/PHForm";
import PHInput from "../../../../components/form/PHInput";
import { toast } from "sonner";
import { courseManegemnetApi } from "../../../../redux/fetures/admin/courseManagement/courseManagementApi";
import PHSelect from "../../../../components/form/PHSelect";
import { TResponse } from "../../../../types";

const CreateCourse = () => {
  const { data: coursesData } =
    courseManegemnetApi.useGetAllCoursesQuery(undefined);
  const [addCourse] = courseManegemnetApi.useAddCourseMutation();

  const preRequisiteCoursesOptions = coursesData?.data?.map((item) => ({
    value: item._id,
    label: item?.title,
  }));

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating...");
    const courseData = {
      ...data,
      isDeleted: false,
      code: Number(data.code),
      credits: Number(data.credits),
      preRequisiteCourses: data?.preRequisiteCourses?.map((item) => ({
        course: item,
        isDeleted: false,
      })),
    };

    try {
      const res = (await addCourse(courseData)) as TResponse<any>;
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
            <PHInput type="text" name="title" label="Title" />
            <PHInput type="text" name="prefix" label="Prefix" />
            <PHInput type="text" name="code" label="Code" />
            <PHInput type="text" name="credits" label="Credits" />

            <PHSelect
              mode="multiple"
              options={preRequisiteCoursesOptions}
              name="preRequisiteCourses"
              label="preRequisiteCourses"
            />

            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </div>
  );
};

export default CreateCourse;
