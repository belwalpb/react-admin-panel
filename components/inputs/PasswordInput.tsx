import { useState } from "react";

export function PasswordInput() {
  const [isTouched, setTouched] = useState(false);
  const [shouldShowError, setShouldShowError] = useState(false);
  const [value, setValue] = useState("");
  const [shouldShowPassword, setShouldShowPassword] = useState(false);

  return (
    <div className="mb-24px">
      <label className="mb-4px input-label">Password</label>
      <div
        className="w-100% text-input p-0 flex justify-between align-center"
        onFocus={() => {
          setShouldShowError(false);
        }}
        onBlur={() => {
          setTouched(true);
          setShouldShowError(true);
        }}
      >
        <input
          type={shouldShowPassword ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-100% border-none inline-block outline-none py-4px px-10px"
          placeholder="Enter Password"
        />
        <span
          className="small-link w-10% inline-block mxr-6px"
          onClick={() => {
            setShouldShowPassword(!shouldShowPassword);
          }}
        >
          {shouldShowPassword ? "Hide" : "Show"}
        </span>
      </div>

      <label className="validation-error">
        {getErrorMessage(isTouched, shouldShowError, value)}
      </label>

      <div className="mt-18px flex justify-end">
        <span className="small-link">Forgot Password?</span>
      </div>
    </div>
  );
}

const getErrorMessage = (
  isTouched: boolean,
  shouldShowError: boolean,
  value: string
) => {
  if (isTouched && shouldShowError) {
    if (value.length === 0) {
      return "Password Should not be empty";
    }
    return value.length >= 8
      ? ""
      : "Password should be atleast 8 characters long";
  }
  return "";
};
