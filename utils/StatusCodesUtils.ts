class StatusCodesUtils {
  public isOk(statusCode: number): boolean {
    if (!statusCode) {
      return false;
    }
    if (statusCode >= 200 && statusCode < 300) {
      return true;
    }
    return false;
  }
}

const statusCodesUtils = new StatusCodesUtils();
export default statusCodesUtils;
