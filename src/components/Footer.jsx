import { FaGithub, FaLinkedin, FaAddressBook } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("karan.bharti0129@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className=" text-white mt-5">
      <hr className="border-secondary" />
      <div className="container py-5 text-center">
        <p className="h5 mb-3">Contact Me</p>

        <div className="d-flex justify-content-center gap-4 mb-4 position-relative">
          <a
            href="https://github.com/Karan-Bharti1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white"
          >
            <FaGithub size={30} className="hover-opacity" />
          </a>

          <a
            href="https://www.linkedin.com/in/bharti1999/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white"
          >
            <FaLinkedin size={30} className="hover-opacity" />
          </a>

          {/* Address Icon with tooltip */}
          <div className="position-relative d-inline-block">
            <span
              className="text-white"
              onClick={copyEmail}
              onMouseEnter={(e) =>
                e.currentTarget.nextElementSibling.classList.add("show")
              }
              onMouseLeave={(e) =>
                e.currentTarget.nextElementSibling.classList.remove("show")
              }
              style={{ cursor: "pointer" }}
            >
              <FaAddressBook size={30} className="hover-opacity" />
            </span>

            {/* Tooltip */}
            <div
              className="tooltip bs-tooltip-top position-absolute translate-middle-x text-dark bg-white border rounded px-2 py-1 small"
              style={{
                top: "-40px",
                left: "50%",
                zIndex: 9999,
                display: "block",
                whiteSpace: "nowrap",
              }}
            >
              {copied ? "Copied!" : "Click to copy email"}
            </div>
          </div>
        </div>

        <p className="small text-secondary mb-0">
          © 2025 Karan Bharti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
