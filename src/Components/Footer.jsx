import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import logo from '../assets/logo-transparent.png'
import Logo from "../Shared/Logo";
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-5 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Website Name and Copyright */}
        <div>
          <Logo/>
          <p>© {new Date().getFullYear()} Recipe Book. All rights reserved.</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl font-semibold mb-2">Contact Us</h3>
          <p>
            Email:{" "}
            <a className="link link-hover" href="mailto:info@recipebook.com">
              info@recipebook.com
            </a>
          </p>
          <p>Phone: +880 1234 567890</p>
          <p>Address: Dhaka, Bangladesh</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF className="text-xl hover:text-blue-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-xl hover:text-sky-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-xl hover:text-pink-500" />
            </a>
            <a href="mailto:info@recipebook.com">
              <FaEnvelope className="text-xl hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
