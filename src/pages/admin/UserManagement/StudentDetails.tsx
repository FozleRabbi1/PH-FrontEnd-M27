import { useParams } from "react-router-dom";

const StudentDetails = () => {
  const { studentId } = useParams();
  return (
    <div>
      <h2>single student details page {studentId}</h2>
    </div>
  );
};

export default StudentDetails;
