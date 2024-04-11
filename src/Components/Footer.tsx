import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border rounded-lg bg-gray-300">
      <div className="grid grid-cols-auto-fit grid-cols-1fr md:grid-cols-4 gap-8 px-6 py-8 p-5 ml-24">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Compnay</h3>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Brand Center</a>
          <a href="#">Blog</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Help Center</h3>
          <a href="#">Discord Server</a>
          <a href="#">Twitter</a>
          <a href="#">Facebook</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Licensing</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold mb-2">Download</h3>
          <a href="#">iOS</a>
          <a href="#">Android</a>
          <a href="#">Windows</a>
          <a href="#">MacOS</a>
        </div>
      </div>
      <div className="flex justify-between text-2xl border rounded-t-lg p-3 items-center bg-gray-400">
        <div>
          <a href="#">© VidConnect™ 2022</a>
        </div>
        <div className="flex gap-10 cursor-pointer">
            <FaFacebook/>
            <FaInstagram/>
            <FaXTwitter/>
            <IoLogoGithub/>
            <FaDribbble/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
