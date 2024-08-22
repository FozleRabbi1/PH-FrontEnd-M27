import { Button, Col, Row } from "antd";
import { studentCourse } from "../../redux/fetures/student/studentCourseManagement";

type TCourse = {
  [index: string]: any;
};

const OfferedCourse = () => {
  const { data: OfferedCourseData, isLoading } =
    studentCourse.useGetAllOfferedCoursesQuery(undefined);
  const [enrollCourse] = studentCourse.useEnrollCourseMutation();

  const singleObject = OfferedCourseData?.data?.reduce((acc: TCourse, item) => {
    const key = item?.course?.title;
    acc[key] = acc[key] || { courseTitle: key, section: [] };
    acc[key].section.push({
      section: item.section,
      _id: item._id,
      startTile: item.startTime,
      endTime: item.endTime,
      days: item.days,
    });
    return acc;
  }, {});

  const modifiedData = Object.values(singleObject ? singleObject : {});

  const handleEnroll = async (id: string) => {
    const enrollData = {
      offeredCourse: id,
    };
    await enrollCourse(enrollData);
  };

  if (!modifiedData.length) {
    return <p>No Available Courses</p>;
  }

  return (
    <div>
      <h2 className="">this is student offered course component</h2>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Row gutter={[0, 20]}>
          {modifiedData.map((item) => (
            <Col
              span={24}
              style={{
                border: "solid #4d4d4d 1px",
                padding: "10px",
                borderRadius: "10px",
              }}
            >
              <div>
                <h2>{item?.courseTitle}</h2>
              </div>
              <div>
                {item?.section?.map((section) => (
                  <Row
                    justify="space-between"
                    align="middle"
                    style={{ borderTop: "solid #d4d4d4 2px" }}
                  >
                    <Col span={5}>Section : {section.section}</Col>
                    <Col span={5}>Star Time : {section.startTile}</Col>
                    <Col span={5}>End Time : {section.endTime}</Col>
                    <Col span={5}>
                      Days :{" "}
                      {section.days.map((day) => (
                        <span> {day} </span>
                      ))}
                    </Col>
                    <Button onClick={() => handleEnroll(section._id)}>
                      Enroll
                    </Button>
                  </Row>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default OfferedCourse;
