import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-forest-gradient text-white py-4 bottom-0 w-full z-50">
      <div className="container mx-auto flex justify-center space-x-8">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="hover:text-earth-accent transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="hover:text-earth-accent transition-colors duration-300" />
        </a>
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer">
          <MdEmail size={30} className="hover:text-earth-accent transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/your-username/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} className="hover:text-earth-accent transition-colors duration-300" />
        </a>
        <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} className="hover:text-earth-accent transition-colors duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
