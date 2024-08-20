import React from "react";
import Link from "next/link";

const FooterBanner = ({}) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <h1>Contact Us</h1>
          <br />
          <h1>Alvira - Shabnam Bags</h1>
          <br />
          <h3>
            <Link
              href={`https://goo.gl/maps/EGGFiXqgHVUGBRTHA`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <a className="addresslink" target="_blank">
                Shop No. 180 - 216 / 218, Ground Floor, Lohe Ki Chawl, (Mumbai
                Bag Market), 
                <br className="br"/>
                M. Azad Road, Opp. K.K. Art House,
                <br className="br" />
                Madanpura, Mumbai - 400 008.
              </a>
            </Link>
          </h3>
          <br />
          <h3>GSTIN: 27DPCPS7069B1ZO </h3>
          <br />
          <h3>Mr. Jamaluddin: <a href="tel:9320919157" target="_blank" rel="noreferrer" >9320919157</a></h3>
          <br />
          <h3>Mr. Saddam: <a href="tel:9594679390" target="_blank" rel="noreferrer" >9594679390</a> / <a href="tel:9594679390" target="_blank" rel="noreferrer" >7977175538</a></h3>
        </div>
        <div className="Shopimg right">
        
        <iframe className="mapshabnam"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.11327385942!2d72.82419997512152!3d18.970604182212387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf869f4760cb%3A0xf44891917fbeba90!2sShabnam%20bags!5e0!3m2!1sen!2sin!4v1690292805377!5m2!1sen!2sin" ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
