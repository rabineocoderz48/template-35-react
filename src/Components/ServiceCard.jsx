import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ServiceCard = () => {
const serviceCard = [
    {
      id: 1,
      image: "/Assest/service1.jpg",
      title: "Financiering / lease",
      description:"Bent u geïnteresseerd in het leasen of financieren van uw voertuig? Als u een auto wilt kopen, maar liever maandelijks betaalt, dan biedt een autofinanciering wellicht een goede uitkomst.",
      number: "01",
    },
    {
      id: 2,
      image: "/Assest/service2.jpg",
      title: "Garantie",
      description:"Ontdek gemoedsrust op de weg met onze uitgebreide garantiedekking. Bij <Bedrijfsnaam> streven we ernaar uw rijervaring zo probleemloos mogelijk te maken. ",
      number: "02",
    },
    {
      id: 3,
      image: "/Assest/service3.jpg",
      title: "Inkoop / taxatie",
      description:"Overweegt u uw auto te verkopen? Mogelijk kunnen wij u van dienst zijn. Via onze website kunt u snel en gemakkelijk uw auto laten taxeren en verkopen.",
      number: "03",
    },
    {
      id: 4,
      image: "/Assest/service4.jpg",
      title: "Consignatie verkoop",
      description:"Denkt u eraan om uw auto te verkopen? Dan is consignatieverkoop bij <Bedrijfsnaam> in <Plaatsnaam> wellicht interessant voor u. Zelf uw auto verkopen kan namelijk ingewikkeld zijn en tijdrovend.",
      number: "04",
    },
    {
      id: 5,
      image: "/Assest/service5.jpg",
      title: "Importservice",
      description:"Een auto importeren kan erg interessant zijn, zowel zakelijk als particulier. Met onze importservice vinden we mooie en betaalbare occasions en nieuwe auto's in het buitenland.",
      number: "05",
    },
    {
      id: 6,
      image: "/Assest/service6.jpg",
      title: "Verzekering",
      description:"U wilt uw auto optimaal verzekeren, of u nu een zakelijke of particuliere rijder bent. U wilt geen stress en goede premies. Bij <Bedrijfsnaam> in <Plaatsnaam> werken we samen met bekende verzekeringsmaatschappijen die alles voor u regelen. ",
      number: "06",
    },
];

const swiperSettings = {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 15,
    speed: 1000,
    loop: false,
    navigation: {
      nextEl: ".service-slider .swiper-button-next",
      prevEl: ".service-slider .swiper-button-prev",
    },
    pagination: {
      el: ".service-slider .swiper-pagination",
      type: "fraction",
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 7,
        centeredSlides: true,
        loop: true,
      },
      992: {
        slidesPerView: 1,
        spaceBetween: 15,
        centeredSlides: false,
        loop: false,
      },
    },
};

return (
  <div className="service-slider">
    <Swiper {...swiperSettings}>
      {serviceCard.map((item) => (
        <SwiperSlide key={item.id}>
          <Link to="/">
            <div className="each-service">
              <div className="each-service-img">
                <img src={item.image} alt="img" />
              </div>
              <div className="each-service-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="common-btn">
                  <strong>Lees meer</strong>
                </div>
              </div>
              <div className="each-service-number">
                <h2>{item.number}</h2>
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
      <div className="swiper-button-next common-arrow">
          <img src="/Assest/next.svg" alt="img" />
      </div>
      <div className="swiper-button-prev common-arrow">
          <img src="/Assest/prev.svg" alt="img" />
      </div>
      <div className="swiper-pagination"></div>
  </div>
  );
};

export default ServiceCard;