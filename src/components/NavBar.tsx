import { useState } from "react";
import Projects from "./Projects";

interface NavbarButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavbarButton({ label, isActive, onClick }: NavbarButtonProps) {
  return (
    <button
      style={{ backgroundColor: isActive ? "green" : undefined }}
      className="lg:text-3xl md:text-1xl text-base"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

const NavBar = () => {
  const [isActive, setIsActive] = useState<null | string>("Projects");

  const buttons: string[] = ["Projects", "About me"];

  return (
    <>
      <div className="nav-bar">
        {buttons.map((label) => (
          <NavbarButton
            label={label}
            isActive={label === isActive}
            onClick={() => setIsActive(label)}
          />
        ))}
      </div>
      {isActive === "Projects" && <Projects />}
    </>
  );
};

export default NavBar;
