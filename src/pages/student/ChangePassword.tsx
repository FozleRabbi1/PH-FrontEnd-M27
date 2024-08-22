import { Button, Row } from "antd";
import PHForm from "../../components/form/PHForm";
import PHInput from "../../components/form/PHInput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { userManagementApi } from "../../redux/fetures/admin/UserManagement/userManagementApi";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/fetures/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const ChangePassword = () => {
  const [ChangePassword] = userManagementApi.useChangePasswordMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const res = await ChangePassword(data);
    console.log(res);
    if (res?.data?.success) {
      dispatch(logOut());
      navigate("/login");
    } else {
      toast.error(res.data.error.message);
    }
  };

  return (
    <div>
      this is change password component
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <PHForm onSubmit={onSubmit}>
          <PHInput
            type="text"
            name="oldPassword"
            label="Old Password"
          ></PHInput>
          <PHInput
            type="text"
            name="newPassword"
            label="New Password"
          ></PHInput>
          <Button htmlType="submit">password change</Button>
        </PHForm>
      </Row>
    </div>
  );
};

export default ChangePassword;
