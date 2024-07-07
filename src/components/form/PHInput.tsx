import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "5px" }}>
      {label ? label : null}
      <Controller
        name={name} //{...register(name)} এটি উঠে যাবে কারন <Controller  name={name} এর সাহায্যে register করে ফেলছে ( v:2.18 )
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
