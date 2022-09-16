import Image from "next/image";
import githubSignInImage from "@public/images/github-sign-in.svg";

function GithubSignIn() {
  return (
    <a className="social-btn flex align-center justify-center pointer mt-12px">
      <Image
        src={githubSignInImage}
        alt="Github Sign In"
        width="20px"
        height="20px"
      />
      <span className="mxl-12px">Sign In With Github</span>
    </a>
  );
}

export default GithubSignIn;
