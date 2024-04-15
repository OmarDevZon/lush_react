import { useEffect, useState } from "react";

export const menuItems = [
  { name: "Home", link: "/", icon: "" },
  { name: "Our Services", link: "#ourservices", icon: "" },
  { name: "Gallery", link: "#gallery", icon: "" },
  { name: "About Us", link: "#about-us", icon: "" },
  { name: "Contact Us", link: "#contact-us", icon: "" },
];

export const UseOpenAndClose = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return { isOpen, open, close };
};
