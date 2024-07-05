import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/fetures/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/fetures/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "A-0001", password: "admin123" },
  });
  const [login, { isError }] = useLoginMutation();

  const onSubmit = async (data) => {
    const res = await login(data).unwrap();
    const token = res.data.accessToken;
    const user = verifyToken(token);
    // const user = {
    //   userId: userData.userId,
    //   role: userData.role,
    // };
    dispatch(setUser({ user, token }));
  };

  return (
    <form style={{ margin: "50px" }} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID</label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;
