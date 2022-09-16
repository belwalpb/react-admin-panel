import { useEffect, useState } from "react";
import { OtpInputProps } from "@app-types/AuthProps";
import { isValidInteger } from "@utils/ValidationUtils";


export function OtpInput(props: OtpInputProps) {
  const [isTouched, setTouched] = useState(false);
  const [shouldShowError, setShouldShowError] = useState(false);

  useEffect(() => {
    /* TODO document why this arrow function is empty */
  }, []);

  return (
    <div className="mb-24px">
      <label className="mb-4px input-label">OTP</label>
      <input
        type="number"
        value={props.otp}
        className="w-100% text-input py-4px px-10px"
        placeholder="Enter OTP Reveived On Email"
        onChange={(e) => {
          props.updateOtp(e.target.value);
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
        {getErrorMessage(isTouched, shouldShowError, props.otp)}
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
    if (!value || value.trim().length === 0) {
      return "Otp is required.";
    }

    if(value.trim().length !== 6) {
        return "Otp should be 6 digits.";
    }
    return isValidInteger(value) ? "" : "Invalid Otp Entered.";
  }
  return "";
};
