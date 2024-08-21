import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  disabled?: boolean;
};

const PHInput = ({ type, name, label, disabled }: TInputProps) => {
  return (
    <div>
      {/* {label ? label : null}   <Form.Item এর মধ্যে label={label} use করার জন্য এখানে আর label লাগবে না  */}
      <Controller
        name={name} //{...register(name)} এটি উঠে যাবে কারন <Controller  name={name} এর সাহায্যে register করে ফেলছে ( v:2.18 )
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={name}
              size="large"
              disabled={disabled}
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PHInput;
