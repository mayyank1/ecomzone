
"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from "../assets/logo.PNG";

export function Foot() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <FooterBrand
              href="#about"
              src={logo}
              alt="Ecomzone Logo"
              name="Ecomzone"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="about" />
              <FooterLinkGroup col>
                <FooterLink href="#home">Ecomzone</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Contact us" />
              <FooterLinkGroup col>
                <FooterLink href="#email">E-Mail</FooterLink>
                <FooterLink href="#contactno">Contact no</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" />
              <FooterLinkGroup col>
                <FooterLink href="#policy">Privacy Policy</FooterLink>
                <FooterLink href="#conditions">Terms &amp; Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="Ecomzone™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#fb" icon={BsFacebook} />
            <FooterIcon href="#insta" icon={BsInstagram} />
            <FooterIcon href="#x" icon={BsTwitter} />
            <FooterIcon href="#git" icon={BsGithub} />
            <FooterIcon href="#drib" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
