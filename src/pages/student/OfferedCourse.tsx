import { studentCourse } from "../../redux/fetures/student/studentCourseManagement";

const OfferedCourse = () => {
  const { data: OfferedCourseData } =
    studentCourse.useGetAllOfferedCoursesQuery(undefined);

  const singleObject = OfferedCourseData?.data?.reduce((acc, item) => {
    const key = item?.course?.title;
    acc[key] = acc[key] || { courseTitle: key, section: [] };
    acc[key].section.push({
      section: item.section,
      _id: item._id,
    });
    return acc;
  }, {});

  console.log(Object.values(singleObject ? singleObject : {}));

  return (
    <div>
      <h2>this is student offered course component</h2>
    </div>
  );
};

export default OfferedCourse;
