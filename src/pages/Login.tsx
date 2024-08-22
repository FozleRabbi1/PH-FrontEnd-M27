import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/fetures/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import authApi from "../redux/fetures/auth/authApi";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { register, handleSubmit } = useForm({ defaultValues: { id: "A-0001", password: "admin123" }});
  // const { register, handleSubmit } = useForm({});
  // const { register } = useFormContext();
  const [login] = authApi.useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
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

      if (res?.data?.needPasswordChange) {
        navigate("/change-password");
      } else {
        navigate(`/${user.role}/dashboard`);
      }
    } catch (err) {
      console.log(err);
      toast.error("Somthing went wrong", { id: tostId, duration: 3000 });
      //এর ফলে loding toast কে সে folsy করে ফেলবে & উক্ত toast এর মধ্যে error value show করবে
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="id" label="ID"></PHInput>
        <PHInput type="text" name="password" label="Password"></PHInput>
        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
