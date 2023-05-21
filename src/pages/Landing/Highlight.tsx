import { ConvenientIcon, CustomerSupportIcon, ProductIcon } from "../../utils/images";

const features = [
  {
    title: "Wide Range of Products",
    description:
      "Explore a diverse selection of products at our mini-shop. We have everything you need, from trendy fashion accessories to unique home decor items and the latest gadgets. Find what you're looking for all in one place.",
    link: "Learn More",
    icon: ProductIcon,
  },
  {
    title: "Easy and Convenient",
    description:
      "Shopping with us is a breeze. Browse our virtual aisles and make your purchases with just a few clicks. Say goodbye to long lines and crowded stores. Enjoy the convenience of shopping from the comfort of your own home, anytime you want.",
    link: "Learn More",
    icon: ConvenientIcon,
  },
  {
    title: "Top-notch Customer Support",
    description:
      "We're here for you every step of the way. Our friendly customer support team is available to help with any questions or concerns you may have. We value your satisfaction and strive to provide exceptional service that exceeds your expectations.",
    link: "Learn More",
    icon: CustomerSupportIcon,
  },
];

export const Highlight = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:px-20 md:py-12 md:px-6 py-9 px-4 mty24">
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6 ">
        {features.map((feature, index) => (
          <div key={index} className="rounded-xl p-6 bg-gray-200/50">
            <img src={feature.icon} alt="product" className="w-16 h-16" />
            <p className=" text-xl text-main font-semibold leading-5 mt-6">{feature.title}</p>
            <p className=" font-normal text-base leading-6 text-gray-700 my-4">{feature.description}</p>
            <a className=" cursor-pointer text-base leading-4 font-medium text-main border-b-2 border-gray-800 hover:text-gray-600">{feature.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
};
