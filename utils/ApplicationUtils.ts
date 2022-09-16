import { isValidInteger } from "./ValidationUtils";

export function getNumber(value:string|null) {
    if(value && isValidInteger(value)) {
        return parseInt(value);
    }
    return 0;
}