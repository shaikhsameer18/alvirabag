import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>
        <strong>&copy; 2023 Alvira bag</strong>{" "}
      </p>
      <Link className="companylink" href={`https://geekytechh.netlify.app`}>
        <a target="_blank">
          Created By <strong>Geeky Techh</strong>
        </a>
      </Link>
    </div>
  );
};

export default Footer;
