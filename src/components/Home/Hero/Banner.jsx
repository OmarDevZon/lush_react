import Slider from "react-slick";
import bathroom_1 from "../../../assets/images/banner/bathroom_1.jpeg";
import kitchen_1 from "../../../assets/images/banner/kitchen_1.jpeg";
import kitchen_2 from "../../../assets/images/banner/kitchen_2.jpeg";
import kitchen_3 from "../../../assets/images/banner//kitchen_3.jpeg";

import { useState } from "react";

export const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          width: "10%",
          position: "absolute",
          top: "46%",
          left: "7%",
        }}
      >
        <ul
          style={{ margin: "0px" }}
          className="flex flex-col justify-center gap-5 relative"
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }} className="relative">
                {" "}
                {dots}{" "}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#fff",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full mt-2 ">
        <link
          rel="stylesheet"
          type="text/css"
          // charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
        />

        <Slider {...settings} className="relative sp rounded-xl">
          <div>
            <img
              className="w-full md:h-screen h-80  rounded-md"
              src={bathroom_1}
              alt="Home renovations Kitchen remodeling New building construction"
            />
          </div>
          <div>
            <img
              className="w-full md:h-screen h-80  rounded-md"
              src={kitchen_1}
              alt="Home renovations Kitchen remodeling New building construction"
            />
          </div>
          <div>
            <img
              className="w-full md:h-screen h-80  rounded-md"
              src={kitchen_2}
              alt="Home renovations Kitchen remodeling New building construction"
            />
          </div>
          <div>
            <img
              className="w-full md:h-screen h-80  rounded-md"
              src={kitchen_3}
              alt="Home renovations Kitchen remodeling New building construction"
            />
          </div>
        </Slider>
      </div>
    </>
  );
};
