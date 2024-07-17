import { academicManagmentApi } from "../../../redux/fetures/admin/academicManagment.api";

const AcademinSemester = () => {
  const { data } = academicManagmentApi.useGetAllSemesterQuery(undefined);
  console.log(data?.data);

  return (
    <div>
      <h2>this is academic semester managment</h2>
      {data?.data?.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
};

export default AcademinSemester;
