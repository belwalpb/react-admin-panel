import Image from "next/image";
import logo from "@public/images/logo.svg";
import ProfileIcon from "@components/Header/ProfileIcon";
import ClickableDropdown from "@ui/clickable-dropdown/index";

function ApplicationHeader() {
  return (
    <div className="header-container flex justify-between align-center p-6px my-2px sticky top-0 z-20 bg-white">
      <div></div>
      <Image
        src={logo}
        alt="Logo"
        className="header-logo h-auto overflow-hidden"
        width="70px"
        height="70px"
        priority={true}
      />
      <ClickableDropdown title="Profile"></ClickableDropdown>
    
    </div>
  );
}

export default ApplicationHeader;
