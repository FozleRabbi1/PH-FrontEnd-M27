import academicSemesterApi from "../../../redux/fetures/academicSemester/academicSemesterApi";

const AcademinSemester = () => {
  const { data } = academicSemesterApi.useGetAllSemesterQuery(undefined);
  console.log(data?.data);

  return (
    <div>
      <h2>this is academic semester managment</h2>
      {data?.data?.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default AcademinSemester;
