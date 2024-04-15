import pic_1 from "../../assets/images/set_1/pic02.png";
import pic_2 from "../../assets/images/set_1/pic02.png";
import pic_3 from "../../assets/images/set_1/pic03.png";
import pic_4 from "../../assets/images/set_1/pic04.png";
import pic_5 from "../../assets/images/set_1/pic05.png";
import pic_6 from "../../assets/images/set_1/pic06.png";
import pic_7 from "../../assets/images/set_1/pic07.png";
import pic_8 from "../../assets/images/set_1/pic08.png";
import pic_9 from "../../assets/images/set_1/pic09.png";
import { Scale } from "../../utils/Scale";

const serviceContent = [
  {
    image: pic_1,
    title: "Paints",
    alt: "Paints Design Solution",
    description:
      "We paint all your internal and external structures to your satisfactions. Call us at 0404 289 437 for quotes.",
  },
  {
    image: pic_2,
    title: "Kitchens",
    alt: "Kitchens Upgrades Kitchen remodeling",
    description:
      "We bring life to your kitchens. Call us at 0404 289 437 for design ideas and quotes.",
  },
  {
    image: pic_3,
    title: "Extensions / additions",
    alt: "Water Proofing",
    description:
      "We improve your living by adding more space to your home. Call us at 0404 289 437 for quotes.  ",
  },
  {
    image: pic_4,
    title: "Bathrooms",
    alt: "Bathroom Fit",
    description:
      "We renovate your bathroom to your budget. Call us at 0404 289 437 for quotes.",
  },
  {
    image: pic_5,
    title: "Remedial works",
    alt: "Specialist Services",
    description:
      "We improve your existing structures to your satisfactions. Call us at 0404 289 437 for quotes.",
  },
  {
    image: pic_6,
    title: "Decks",
    alt: "Deck Construction",
    description:
      "We design and build custom decks. Call us at 0404 289 437 for quotes.",
  },
  {
    image: pic_7,
    title: "Roofing",
    alt: "roofing contractor repair services",
    description:
      "We repair and build your roofs. Call us at 0404 289 437 for quotes.",
  },
  {
    image: pic_8,
    title: "New Builds",
    alt: "New building construction New Homes design development",
    description:
      "We build brand new house and structures for your needs starting from design to development. Please call us for detail quotes.",
  },
  {
    image: pic_9,
    title: "Alterations",
    alt: "Office Furniture",
    description:
      "We can alter and modernize your living to your lifestyle. Call us at 0404 289 437 for quotes.",
  },
];

export const Service = () => {
  return (
    <div className="sp" id="ourservices">
      <h2 key={"Services"} className="title mt-10">
        Our Services
      </h2>

      <div className="text-white  grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-3 mt-20">
        {serviceContent.map((item, i) => (
          <div className="" key={item.alt}>
            <Scale>
              <div className="relative">
                <img
                  className="w-full rounded-md"
                  src={item.image}
                  alt={item.alt}
                />
                <div className="absolute inset-0 flex items-center flex-col justify-center bg-black opacity-40 top-0 bottom-0 left-0 right-0"></div>

                <div className="absolute inset-0 flex items-center flex-col justify-center">
                  <h2 className="text-xl font-bold text-center mx-auto ">
                    {item?.title}
                  </h2>
                  <div className="">
                    <p className="text-center px-4">{item?.description}</p>
                  </div>
                </div>
              </div>
            </Scale>
          </div>
        ))}
      </div>
    </div>
  );
};
