import bg from "../assets/bg.png";
import NavBarBody from "./NavBarBody";
import NavBarFooter from "./NavBarFooter";
import NavBarTitle from "./NavBarTitle";

const Navbar = () => {
  return (
    <div
      className="h-60 p-4 pt-8 flex flex-col gap-4 rounded-b-2xl"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <NavBarTitle />
      <NavBarBody />
      <NavBarFooter />
    </div>
  );
};

export default Navbar;
