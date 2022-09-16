export function isValidEmail(email: string): boolean {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  return validEmailRegex.test(email);
}

export function isValidInteger(value: string) : boolean {
  if(!value) {
    return false;
  }
  return /^-?[0-9]+$/.test(value+'');
}
