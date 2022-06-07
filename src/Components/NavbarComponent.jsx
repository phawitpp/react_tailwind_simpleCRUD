import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
const NavbarComponent = () => {
  return (
    <>
      <Navbar fluid={false} className="bg-white shadow-md">
        <Link to={"/"}>
          <Navbar.Brand>
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white font-sans">
              REACT CRUD
            </span>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to={"/"}>
            <Navbar.Link active={true}>Home</Navbar.Link>
          </Link>

          <Navbar.Link href="/navbars">About</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
