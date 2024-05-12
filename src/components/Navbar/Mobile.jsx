import { menuItems } from "./Navbar.config";
import styles from "./Navbar.module.css";

const Mobile = ({ isOpen, close }) => {
  return (
    <div className="lg:hidden">
      <div
        onClick={close}
        className={` ${
          isOpen ? `min-w-[100%] ${styles["sidebar-overlay"]} ` : "w-[0%]"
        }  absolute left-0 z-30 cursor-pointer`}
      ></div>
      <div
        className={`h-screen absolute top-0 z-50 ${
          isOpen ? `left-0  ${styles["site-sidebar"]} ` : "-left-[75%]"
        } transition-all duration-300`}
      >
        <ul className="mt-4">
          {menuItems.map((menuItem, index) => (
            <li key={index} className="py-[1px] px-5">
             
              <a
                href={menuItem.link}
                onClick={close}
                className="text-[#95979d] hover:text-[#3F4044] py-2 w-full px-1 rounded-sm block hover:bg-gray-100"
              >
                <span
                  style={{ fontWeight: "normal", textDecoration: "none" }}
                  className="fade-in"
                >
                  {menuItem.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Mobile;
