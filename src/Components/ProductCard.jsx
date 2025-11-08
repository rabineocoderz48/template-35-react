/* eslint-disable no-unused-vars */
import React, {useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const ProductCard = () => {
  // const [productCardData, setProdustData] = useState([]);
  // useEffect(() => { 
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3001/productCardData");
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       console.log("data", data);
  //       setProdustData(data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   }; 
  //   fetchProducts();
  // },[]); 
  
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const swiperSettings = {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 1000,
    loop: true,
    centeredSlides: true,
    onSwiper: (swiper) => {
      swiperRef.current = swiper;
    },
    breakpoints: {
      320: { 
        slidesPerView: 1, 
        spaceBetween: 16 
      },
      768: { 
        slidesPerView: 1,
        spaceBetween: 16 
      },
      992: { 
        slidesPerView: 1.1, 
        spaceBetween: 16 
      },
      1200: { 
        slidesPerView: 1.1, 
        spaceBetween: 20 
      },
      1400: { 
        slidesPerView: 1.5, 
        spaceBetween: 20 },
    },
  };
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

const productCardData = [{
   id: 1,
   name: "BMW X5",
   description: "E-Hybrid | Sport Design | Bose | Sportuitlaat",
   images: ["/Assest/product1.jpg", "/Assest/product2.jpg", "/Assest/product3.jpg"],
   specs: {
      kilometerstand: "639.180 km",
      bouwjaar: "2018",
      brandstof: "Hybride (Benzine)",
      transmissie: "Handgeschakeld",
      vermogen: "313 PK",
      carrosserie: "SUV",
   },
   price: "€ 259.900,-",
   monthly: "v.a € 3.558,02 p/m",
}, 
{
   id: 2,
   name: "BMW X5",
   description: "E-Hybrid | Sport Design | Bose | Sportuitlaat",
   images: ["/Assest/product1.jpg", "/Assest/product2.jpg", "/Assest/product3.jpg"],
   specs: {
      kilometerstand: "639.180 km",
      bouwjaar: "2018",
      brandstof: "Hybride (Benzine)",
      transmissie: "Handgeschakeld",
      vermogen: "313 PK",
      carrosserie: "SUV",
   },
   price: "€ 259.900,-",
   monthly: "v.a € 3.558,02 p/m",
}, 
{
   id: 3,
   name: "BMW X5",
   description: "E-Hybrid | Sport Design | Bose | Sportuitlaat",
   images: ["/Assest/product1.jpg", "/Assest/product2.jpg", "/Assest/product3.jpg"],
   specs: {
      kilometerstand: "639.180 km",
      bouwjaar: "2018",
      brandstof: "Hybride (Benzine)",
      transmissie: "Handgeschakeld",
      vermogen: "313 PK",
      carrosserie: "SUV",
   },
   price: "€ 259.900,-",
   monthly: "v.a € 3.558,02 p/m",
}, 
{
   id: 4,
   name: "BMW X5",
   description: "E-Hybrid | Sport Design | Bose | Sportuitlaat",
   images: ["/Assest/product1.jpg", "/Assest/product2.jpg", "/Assest/product3.jpg"],
   specs: {
      kilometerstand: "639.180 km",
      bouwjaar: "2018",
      brandstof: "Hybride (Benzine)",
      transmissie: "Handgeschakeld",
      vermogen: "313 PK",
      carrosserie: "SUV",
   },
   price: "€ 259.900,-",
   monthly: "v.a € 3.558,02 p/m",
}, 
{
   id: 5,
   name: "BMW X5",
   description: "E-Hybrid | Sport Design | Bose | Sportuitlaat",
   images: ["/Assest/product1.jpg", "/Assest/product2.jpg", "/Assest/product3.jpg"],
   specs: {
      kilometerstand: "639.180 km",
      bouwjaar: "2018",
      brandstof: "Hybride (Benzine)",
      transmissie: "Handgeschakeld",
      vermogen: "313 PK",
      carrosserie: "SUV",
   },
   price: "€ 259.900,-",
   monthly: "v.a € 3.558,02 p/m",
}];

const productRefs = useRef([]);
useEffect(() => {
  if (productRefs.current.length === 0) return;

  productRefs.current.forEach((productEl) => {
    if (!productEl) return;

    const images = productEl.querySelectorAll('.each-product-img-wrap img');
    const progressBar = productEl.querySelector('.each-product-progress span');
    let index = 0;
    let timer;
    const duration = 3000;
    images.forEach((img) => (img.style.display = 'none'));
    if (images.length > 0) {
      images[index].style.display = 'block';
      images[index].classList.add('active');
    }

    if (images.length <= 1) {
      const progress = productEl.querySelector('.each-product-progress');
      if (progress) progress.style.display = 'none';
      return;
    }
    const showImage = () => {
      images.forEach((img) => {
        img.style.display = 'none';
        img.classList.remove('active');
      });
      images[index].style.display = 'block';
      images[index].classList.add('active');

      progressBar.style.width = '0';
      progressBar.animate([{ width: '0%' }, { width: '100%' }], { duration, fill: 'forwards' });

      timer = setTimeout(() => {
        index = (index + 1) % images.length;
        showImage();
      }, duration);
    };
    const handleMouseEnter = () => {
      productEl.querySelector('.each-product-progress').style.display = 'block';
      showImage();
    };
    const handleMouseLeave = () => {
      clearTimeout(timer);
      progressBar.style.width = '0';
      productEl.querySelector('.each-product-progress').style.display = 'none';
    };
    const productImgContainer = productEl.querySelector('.each-product-img');
    productImgContainer.addEventListener('mouseenter', handleMouseEnter);
    productImgContainer.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      productImgContainer.removeEventListener('mouseenter', handleMouseEnter);
      productImgContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  });
}, [productCardData]); 

  return (
      <div className="home-product-slider">
        <Swiper {...swiperSettings}>
          {productCardData.map((product, index) => (
            <SwiperSlide key={product.id}>
              <Link to='/'>
                <div className="each-product" ref={(el) => (productRefs.current[index] = el)}>
                  <div className="row flex-row-reverse">
                    <div className="col-lg-6">
                      <div className="each-product-img">
                        <div className="each-product-img-wrap">
                          {product.images.map((img, index) => (
                            <img key={index} src={img} alt={product.name} className="w-100" />
                          ))}
                          <div className="each-product-progress"><span></span></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="each-product-text">
                        <div className="each-product-info">
                          <div className="each-product-model">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                          </div>
                          <div className="each-product-spec">
                            <table>
                              <tbody>
                                <tr>
                                  <td><h6>Kilometerstand</h6><h5>{product.specs.kilometerstand}</h5></td>
                                  <td><h6>Bouwjaar</h6><h5>{product.specs.bouwjaar}</h5></td>
                                  <td><h6>Brandstof</h6><h5>{product.specs.brandstof}</h5></td>
                                  <td><h6>Transmissie</h6><h5>{product.specs.transmissie}</h5></td>
                                  <td><h6>Vermogen</h6><h5>{product.specs.vermogen}</h5></td>
                                  <td><h6>Carrosserie</h6><h5>{product.specs.carrosserie}</h5></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="each-product-price">
                          <h4>{product.price} <strong>{product.monthly}</strong></h4>
                          <div className='product-arrow'>
                            <img src="/Assest/product-arrow.svg" alt="img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
          <div className='product-control-mob'>
              <div className='product-control'>
                  <div ref={prevRef} className="swiper-button-prev common-arrow">
                    <img src="/Assest/prev.svg" alt="img" />
                  </div>
                  <div ref={nextRef} className="swiper-button-next common-arrow">
                    <img src="/Assest/next.svg" alt="img" />
                  </div>
              </div>
              <div className="home-product-btn d-lg-none d-block">
                  <Link to='/' className="common-btn"><strong>Bekijk het aanbod</strong></Link>
              </div>
          </div>
      </div>
  );
};

export default ProductCard;
