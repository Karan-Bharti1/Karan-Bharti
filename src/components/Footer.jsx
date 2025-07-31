import { FaGithub, FaLinkedin, FaAddressBook, FaRegCopy } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("karan.bharti0129@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="bg-gray-900 text-white mt-5">
      <hr className="border-gray-700" />
      <div className="container mx-auto py-5 text-center">
        <p className="text-lg font-semibold mb-2">Contact Me</p>

        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/Karan-Bharti1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 text-white"
          >
            <FaGithub size={30} className="hover:text-gray-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/bharti1999/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 text-white"
          >
            <FaLinkedin size={30} className="hover:text-blue-400" />
          </a>
          <a
            href="https://docs.google.com/document/d/1qrhPBpvMv_VDlZ0MuQwEKnPy_42JXj9A/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="p-2 text-white"
          >
            <FaAddressBook size={30} className="hover:text-green-400" />
          </a>
        </div>

        {/* COPY EMAIL BUTTON */}
        <div className="mb-4 flex justify-center items-center gap-2">
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 text-sm border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
          >
            <FaRegCopy /> {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>

        <p className="text-sm text-gray-400">
          © 2025 Karan Bharti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
