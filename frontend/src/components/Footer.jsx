import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="fle flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <h1 className="text-3xl font-semibold">Futball</h1>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            eaque reprehenderit vero illum placeat explicabo modi, alias sint
            esse sit commodi ad expedita fugiat maiores officia ipsa, minima
            repellendus blanditiis.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-9109606098</li>
            <li>huzaifaasif842@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ futball-All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
