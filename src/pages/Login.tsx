import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/fetures/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/fetures/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: { id: "A-0001", password: "admin123" },
  });
  const [login, { isError }] = useLoginMutation();

  if (isError) {
    return <p>Error</p>;
  }

  const onSubmit = async (data : FieldValues) => {
    const tostId = toast.loading("Logging in");
    try {
      const res = await login(data).unwrap();
      const token = res.data.accessToken;
      const user = verifyToken(token) as TUser;
      dispatch(setUser({ user, token }));
      toast.success(`${user.role} Login SuccessFully`, {
        id: tostId, //এর ফলে loding toast কে সে folsy করে ফেলবে & উক্ত toast এর মধ্যে success value show করবে
        duration: 3000,
        style: {
          background: "green",
          color: "white",
          width: "250px",
        },
      });

      navigate(`/${user.role}/dashboard`);
    } catch (err) {
      toast.error("Somthing went wrong", { id: tostId, duration: 3000 });
      //এর ফলে loding toast কে সে folsy করে ফেলবে & উক্ত toast এর মধ্যে error value show করবে
    }
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
