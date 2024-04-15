
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "./Navbar.config";

const Desktop = () => {
  return (
    <div>
      {/************************ desktop menu start here *************************/}
      <div className="flex items-end flex-col">
        <h2 className="text-white font-bold text-center mb-1 sticky top-2 -mt-8">
          PLEASE CONTACT 0404 289 437 FOR A QUOTE
        </h2>
      
      <ul className="flex items-center justify-end hover:text-[#5A5A5A] gap-4 mt-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            <></>

            <a
              className={`flex items-center text-lg  hover:text-white text-[17px] font-Inter focus:text-white `}
              href={item.link}
              style={{ textDecoration: "none" }}
            >
              <span
                style={{ fontWeight: "normal", textDecoration: "none" }}
                className="fade-in"
              >
                
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>

      </div>

      {/************************ desktop menu end here *************************/}
    </div>
  );
};

export default Desktop;
