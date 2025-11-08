import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerGallery = [
    { image: "/Assest/gal1.jpg" },
    { image: "/Assest/gal2.jpg" },
    { image: "/Assest/gal3.jpg" },
    { image: "/Assest/gal4.jpg" },
    { image: "/Assest/gal1.jpg" },
    { image: "/Assest/gal2.jpg" },
    { image: "/Assest/gal3.jpg" },
    { image: "/Assest/gal4.jpg" },
    { image: "/Assest/gal1.jpg" },
    { image: "/Assest/gal2.jpg" },
    { image: "/Assest/gal3.jpg" },
    { image: "/Assest/gal4.jpg" },
  ];

  const swiperSettings = {
    modules: [Autoplay, Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    loop: false,
    centeredSlides: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 4,
        spaceBetween: 6,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    pagination: false,
    navigation: false,
  };

  const footerBovagRef = useRef(null);
  const mobileBovagRef = useRef(null);
  const footerBovagReplaceRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  useEffect(() => {
    const el = footerBovagRef.current;
    if (!el) return;

    if (windowWidth < 992) {
      mobileBovagRef.current?.after(el);
    } else {
      footerBovagReplaceRef.current?.after(el);
    }
  }, [windowWidth]);

  return (
    <div>
      <footer className="footer-area">
        <div className="container">
          <div className="gallery-area">
            <div className="gallery-area-wrap">
              <Swiper {...swiperSettings}>
                {footerGallery.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="each-gallery">
                      <img src={item.image} alt={`Gallery ${index + 1}`}className="w-100"/>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
            </div>
          </div>
          <div className="footer-main">
            <div className="footer-top">
              <div className="row">
                <div className="col-lg-4">
                  <div className="footer-logo">
                    <Link to="/"><img src="/Assest/logo.svg" alt="img" /></Link>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="footer-info">
                    <div className="each-footer-info">
                      <h6>Contact</h6>
                      <p><Link to="/">06 0000 0000</Link></p>
                      <p><Link to="/">info@example.nl</Link></p>
                    </div>
                    <div className="each-footer-info">
                      <h6>Adres</h6>
                      <p><Link to="/">Examplestraat 55<br /> 0000 AA Example</Link></p>
                    </div>
                    <div className="each-footer-info">
                      <h6>Openingstijden</h6>
                      <table>
                        <tr>
                          <td>Ma t/m Vr:</td>
                          <td>08:00 - 18:00</td>
                        </tr>
                        <tr>
                          <td>Zaterdag:</td>
                          <td>09:00 - 16:00</td>
                        </tr>
                        <tr>
                          <td>Zondag:</td>
                          <td>Gesloten</td>
                        </tr>
                      </table>
                    </div>
                    <div className="each-footer-info d-lg-none d-block">
                      <div className="mobile-bovag" ref={mobileBovagRef}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-btm">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="footer-bovag" ref={footerBovagRef}>
                    <img src="/Assest/footer-bovag.svg" alt="img" />
                  </div>
                  <div className="footer-bovag-replace" ref={footerBovagReplaceRef}></div>
                </div>
                <div className="col-lg-8">
                  <div className="footer-social">
                    <ul>
                      <li>
                        <Link to="/"><img src="/Assest/social1.svg" alt="img" /></Link>
                      </li>
                      <li>
                        <Link to="/"><img src="/Assest/social2.svg" alt="img" /></Link>
                      </li>
                      <li>
                        <Link to="/"><img src="/Assest/social3.svg" alt="img" /></Link>
                      </li>
                      <li>
                        <Link to="/"><img src="/Assest/social4.svg" alt="img" /></Link>
                      </li>
                      <li>
                        <Link to="/"><img src="/Assest/social5.svg" alt="img" /></Link>
                      </li>
                      <li>
                        <Link to="/"><img src="/Assest/social6.svg" alt="img" /></Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      	<iframe src="https://content.morgeninternet.nl/footer/zorgeloos-footer-new.php" frameborder="0" class="iframe-footer"></iframe>
    </div>
  );
};

export default Footer;
