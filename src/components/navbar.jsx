
import {
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarLink,
    NavbarToggle,
    TextInput
  } from "flowbite-react";
  import { PiShoppingCartThin } from "react-icons/pi";
  import { IconContext } from "react-icons";
  import logo from '../assets/logo.PNG'

  export function NavComponent() {
    return (
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <Navbar fluid rounded className="px-4 lg:px-6 py-2.5">
        <NavbarBrand href="#home">
          <img src = {logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">EcomZone</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <TextInput id="searchbar" type="text" placeholder="Search" sizing="sm"/>  
          <NavbarToggle />
        </div>
        <NavbarCollapse>
          <NavbarLink href="#home" active>
            Home
          </NavbarLink>
          <NavbarLink href="#about">About</NavbarLink>
          <NavbarLink href="#products">Products</NavbarLink>
          <NavbarLink href="#contact">Contact</NavbarLink>
        </NavbarCollapse>
        <div className="relative inline-block mb-5">
        <IconContext.Provider value={{ color: "white",size: '2em' }}>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-4xl h-10 w-10 flex items-center justify-center">
            <PiShoppingCartThin />
            <span>0</span>
          </div>
        </IconContext.Provider>
        </div>
      </Navbar>
      </div>
    );
  }
  


export default NavComponent;