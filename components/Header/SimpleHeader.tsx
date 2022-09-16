import Image from "next/image";
import logo from "@public/images/logo.svg";

function SimpleHeader() {
  return (
    <div className="header-container flex justify-center align-center p-6px my-2px sticky top-0 z-20 bg-white">
      <Image
        src={logo}
        alt="Logo"
        className="header-logo h-auto overflow-hidden"
        width="70px"
        height="70px"
        priority={true}
      />
    </div>
  );
}

export default SimpleHeader;
