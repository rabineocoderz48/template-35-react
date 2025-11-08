import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import ProductCard from "../Components/ProductCard";
import ServiceCard from "../Components/ServiceCard";
import MarqueeList from "../Components/MarqueeList";
import CountUp from "react-countup";

const Home = () => {
  const homeBanner = [
    { id: 1, image: "/Assest/banner.jpg", title: "Banner 1" },
    { id: 2, image: "/Assest/banner2.jpg", title: "Banner 2" },
  ];

  const loopSetting = true; 
  const swiperSettings = {
    spaceBetween: 20,
    centeredSlides: true,
    slidesPerView: 1,
    effect: 'fade',
    loop: loopSetting,
    grabCursor: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: false,
    navigation: false,
    modules: [Autoplay, Pagination, Navigation, EffectFade],
  };

  const counters = [
    { 
      value: 10000,
      suffix: "+", 
      label: "PK op voorraad" 
    },
    { 
      value: 10, 
      suffix: "+", 
      label: "Merken" },
    { 
      value: 2002, 
      suffix: "", 
      label: "Ervaring sinds" 
    },
  ];

  const aboutImgRef = useRef(null);
  const aboutTextInfoRef = useRef(null);
  const aboutImgReplaceRef = useRef(null);
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
    const el = aboutImgRef.current;
    if (!el) return;
    if (windowWidth < 992) {
      aboutTextInfoRef.current?.after(el);
    } else {
      aboutImgReplaceRef.current?.after(el);
    }
  }, [windowWidth]);

  return (
    <main>
      <section className="home-banner-sec">
        <div className="home-banner-video d-none">
          <video width="100%" height="100%" loop autoPlay muted>
            <source src="/Assest/banner-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="home-banner-slider">
          <Swiper {...swiperSettings}>
            {homeBanner.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="home-each-banner">
                  <img src={item.image} alt={item.title} className="w-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="home-banner-content">
          <div className="container">
            <div className="home-banner-heading">
              <h1><strong>&lt;Bedrijfsnaam&gt;</strong> waar kwaliteit en<br/> service elkaar ontmoeten</h1>
              <Link to='' className="common-btn"><strong>Bekijk het aanbod</strong></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-product-sec">
        <div className="container">
          <div className="home-product-heading">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="home-product-text">
                  <h2>Nieuw <strong>binnen</strong></h2>
                  <p>Ontdek onze nieuwste auto's op &lt;Bedrijfsnaam&gt; Kwaliteit en rijplezier gegarandeerd.</p>
                </div>
              </div>
              <div className="col-lg-4 text-end">
                <div className="home-product-btn d-lg-block d-none">
                  <Link to='/' className="common-btn"><strong>Bekijk het aanbod</strong></Link>
                </div>
                <div class="product-btn-replace"></div>
              </div>
            </div>
          </div>
          <ProductCard/>
        </div>
      </section>

      <section className="service-sec">
        <div className="container">
          <div className="service-heading">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="service-heading-left">
                  <h2>Bekijk onze <strong>uitgebreide</strong> <br/>dienstverlening</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-heading-right">
                  <p>Naast autoverkoop bieden wij ook een gevarieerd pakket aan diensten aan om de aan- of verkoop van uw auto zo makkelijk mogelijk te maken. Bekijk ons totale aanbod aan diensten en neem gerust contact op bij vragen.</p>
                  <Link to='' className="common-btn"><strong>Bekijk alle diensten</strong></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='service-wrap'>
            <div className='row flex-row-reverse'>
              <div className="col-lg-8">
                <ServiceCard/>
              </div>
              <div className="col-lg-4">
                <div className='service-left'>
                  <div className='service-other'>
                    <div className='service-other-img'>
                      <img src="/Assest/other-service.jpg" alt="img" className="w-100" />
                    </div>
                    <div className='service-other-text'>
                      <div className='service-other-text-wrap'>
                        <h4>Werkplaats</h4>
                        <p>Uw auto in goede handen! Met goed en tijdig onderhoud voorkomt u reparaties.</p>
                        <Link to='' className='common-btn'><strong>Bekijk alle werkplaats</strong></Link>
                      </div>
                    </div>
                  </div>
                  <div className='service-reach'>
                    <div className='service-reach-wrap'>
                      <h4><strong>Vragen?</strong></h4>
                      <p>Neem gerust contact met ons op voor meer informatie.</p>
                      <Link to='/' className='common-btn'><strong>Direct contact</strong></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="side-line">
            <div className="side-stick"></div>
            <div className="side-box"></div>
          </div>
        </div>
      </section>

      <MarqueeList/>

      <section className="about-sec">
        <div className="container">
          <div className="row about-main-row">
            <div className="col-lg-6">
              <div ref={aboutImgRef} className="about-img">
                <img src="/Assest/about-img.jpg" alt="img" className="w-100" />
              </div>
              <div ref={aboutImgReplaceRef} className="about-img-replace"></div>
            </div>
            <div className="col-lg-6">
              <div className="about-text">
                <div ref={aboutTextInfoRef} className="about-text-info">
                  <h2>Wij geloven in <br/>kwaliteit die <strong>u raakt.</strong></h2>
                  <p>Bij &lt;Bedrijfsnaam&gt; draait alles om u. We hebben een ruim aanbod aan occasions klaarstaan in onze showroom, maar nog belangrijker vinden we het om u persoonlijk van dienst te zijn. Daarom adviseren we u vriendelijk om vooraf contact met ons op te nemen, zodat we u alle aandacht kunnen geven die u verdient. Neem gerust alvast een kijkje </p>
                  <Link to='/' className="common-btn"><strong>Meer over ons</strong></Link>
                </div>
                <div className="counter">
                  <div className="row">
                    {counters.map((item, index) => (
                      <div className="col-4" key={index}>
                        <div className="each-counter">
                          <span></span>
                          <hr />
                          <h2>
                            <CountUp start={0}
                            end={item.value}
                            duration={3}
                            separator={item.value >= 10000 ? "." : ""} />
                            {item.suffix}
                          </h2>
                          <p>{item.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="review-sec">
        <div className="container">
          <img src="/Assest/review.png" alt="img" className="w-100" />
        </div>
      </section>
    </main>
  );
};

export default Home;
