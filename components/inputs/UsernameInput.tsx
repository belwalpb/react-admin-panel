import { useEffect, useState } from "react";
import { UserNameInputProps } from "@app-types/AuthProps";
import { isValidEmail } from "@utils/ValidationUtils";

export function UsernameInput(props: UserNameInputProps) {
  const [isTouched, setTouched] = useState(false);
  const [shouldShowError, setShouldShowError] = useState(false);

  useEffect(() => {
    /* TODO document why this arrow function is empty */
  }, []);

  return (
    <div className="mb-24px">
      <label className="mb-4px input-label">Email ID / Username</label>
      <input
        type="text"
        value={props.username}
        className="w-100% text-input py-4px px-10px"
        placeholder="Enter Email ID / Username"
        onChange={(e) => {
          props.updateUserName(e.target.value);
        }}
        onFocus={() => {
          setShouldShowError(false);
        }}
        onBlur={() => {
          setTouched(true);
          setShouldShowError(true);
        }}
      />
      <label className="validation-error">
        {getErrorMessage(isTouched, shouldShowError, props.username)}
      </label>
    </div>
  );
}

const getErrorMessage = (
  isTouched: boolean,
  shouldShowError: boolean,
  value: string
) => {
  if (isTouched && shouldShowError) {
    if (value.trim().length === 0) {
      return "Email ID / Username is required";
    }
    return isValidEmail(value) ? "" : "Invalid Email ID / Username";
  }
  return "";
};
