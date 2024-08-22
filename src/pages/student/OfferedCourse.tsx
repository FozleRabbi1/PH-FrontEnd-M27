import { studentCourse } from "../../redux/fetures/student/studentCourseManagement";

const OfferedCourse = () => {
  const { data: OfferedCourseData } =
    studentCourse.useGetAllOfferedCoursesQuery(undefined);
  console.log(OfferedCourseData?.data);
  return (
    <div>
      <h2>this is student offered course component</h2>
    </div>
  );
};

export default OfferedCourse;
