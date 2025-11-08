import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const Header = () => {
const [isSticky, setIsSticky] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

const megaMenuInfoRef = useRef(null);
const megaMenuNavRef = useRef(null);
const megaMenuImgRef = useRef(null);
const megaMenuCloseRef = useRef(null);
const megaMenuInfoReplaceRef = useRef(null);
const megaMenuImgReplaceRef = useRef(null);

useEffect(() => {
  const handleScroll = () => setIsSticky(window.scrollY > 0);
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth < 992);
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

useEffect(() => {
  document.body.classList.toggle("overflow-hidden", isMenuOpen);
}, [isMenuOpen]);

useEffect(() => {
  const handleReorder = () => {
    if (!megaMenuInfoRef.current || !megaMenuNavRef.current || !megaMenuImgRef.current || !megaMenuCloseRef.current) return;
    if (window.innerWidth < 992) {
      megaMenuNavRef.current.after(megaMenuInfoRef.current);
      megaMenuCloseRef.current.after(megaMenuImgRef.current);
    } else {
      megaMenuInfoReplaceRef.current.after(megaMenuInfoRef.current);
      megaMenuImgReplaceRef.current.after(megaMenuImgRef.current);
    }
  };
window.addEventListener("load", handleReorder);
window.addEventListener("resize", handleReorder);
handleReorder();
return () => {
  window.removeEventListener("load", handleReorder);
  window.removeEventListener("resize", handleReorder);
};
}, []);

return (
<header className={`header-area ${isSticky ? "header-active" : ""}`}>
  <div className="header-main">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-4 col-6">
          <div className="header-logo">
            <Link to="/"> <img src="/Assest/logo.svg" alt="logo" /></Link>
          </div>
        </div>
        <div className="col-lg-4 d-lg-block d-none">
          <div className="header-nav">
            <ul>
              <li><Link to='/'>Aanbod</Link></li>
              <li><Link to='/'>Diensten</Link></li>
              <li><Link to='/'>Werkplaats</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-6">
          <div className="header-right">
            <div className="header-contact d-lg-block d-none">
              <Link to="/"><img src="/Assest/calender.svg" alt="" />Maak een afspraak</Link>
            </div>
            <div className="hamburger" onClick={() => setIsMenuOpen(true)}>
              Menu
              <strong>
                <span></span>
                <span></span>
                <span></span>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="header-reach">
    <div className="container">
      <ul>
        <li><img src="/Assest/h-call.svg" alt="" /><Link to="tel:06 0000 0000">06 0000 0000</Link></li>
        <li><img src="/Assest/h-mail.svg" alt="" /><Link to="mailto:info@example.nl">info@example.nl</Link></li>
        <li><img src="/Assest/h-pin.svg" alt="" /><Link to="/">Examplestraat 55 0000 AA Example</Link></li>
      </ul>
    </div>
  </div>
  <div className={`mega-menu ${isMenuOpen ? "mega-menu-active" : ""}`}>
    <div className="container">
      <div className="mega-menu-close" ref={megaMenuCloseRef} onClick={() => setIsMenuOpen(false)}>
        <span></span>
        <span></span>
      </div>
      <div className="row g-0">
        <div className="col-lg-8">
          <div className="mega-menu-left">
            <div className="mega-menu-img" ref={megaMenuImgRef}>
              <img src="/Assest/menu-img.jpg" alt="img" className="w-100" />
            </div>
            <div className="mega-menu-img-replace" ref={megaMenuImgReplaceRef}></div>
            <div className="mega-menu-logo">
              <Link to="/"><img src="/Assest/logo.svg" alt="" /></Link>
            </div>
            <div className="mega-menu-info" ref={megaMenuInfoRef}>
              <div className="each-mega-menu-info">
                <h6>Contact</h6>
                <p><Link to="/">06 0000 0000</Link></p>
              </div>
              <div className="each-mega-menu-info">
                <h6>Adres</h6>
                <p><Link to="/">Examplestraat 55<br />0000 AA Example</Link></p>
              </div>
              <div className="each-mega-menu-info">
                <Link to="/" className="common-btn"><strong>Afspraak maken</strong></Link>
              </div>
            </div>
            <div className="mega-menu-info-replace" ref={megaMenuInfoReplaceRef}></div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mega-menu-nav" ref={megaMenuNavRef}>
            <div className="mega-menu-nav-wrap">
              <ul>
                {[
                  { label: "Home", path: "/" },
                  { label: "Aanbod", path: "/aanbod" },
                  { label: "Diensten", path: "/diensten" },
                  { label: "Werkplaats", path: "/werkplaats" },
                  { label: "Over ons", path: "/over-ons" },
                  { label: "Contact", path: "/contact" },
                  { label: "Vacatures", path: "/vacatures" },
                ].map((item, index) => (
                  <li
                    key={index}
                    style={{ animationDelay: `${0.2 * (1 + index)}s` }}
                    className={isMenuOpen ? "active" : ""}>
                    <Link to={item.path}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
);
};

export default Header;