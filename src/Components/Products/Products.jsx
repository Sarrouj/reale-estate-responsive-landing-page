import "./Products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { useSwiper } from "swiper/react";
import { GrFormNext } from 'react-icons/gr';
import { GrFormPrevious } from 'react-icons/gr'

// eslint-disable-next-line react/prop-types
const SwiperButton = () => {
  const swiper = useSwiper();
  const style ={
    fontSize: 18, color:'white', fontWeight:'800',
  }
  return (
    <div className="btn">
      <button className="btnPrev" onClick={() => swiper.slidePrev()}>
      <GrFormPrevious  style={style} />
      </button>
      <button className="btnNext" onClick={() => swiper.slideNext()}>
        <GrFormNext style={style} />
      </button>
    </div>
  );
};
const Products = () => {
  return (
    <div className="p-wrapper">
      <div className="container">
        <div className="p-title">
          <p className="secondaryText">Best Choices</p>
          <p className="primaryText">Popular Residencies</p>
        </div>
        <div className="products">
          <Swiper slidesPerView={4}>
            <SwiperButton />
            {data.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="product-container flexCenter">
                  <div className="image-container">
                    <img src={card.image} alt="" />
                  </div>
                  <div className="text-container">
                    <div className="price flexCenter">
                      <span className="secondaryText">$</span>
                      <span className="number">{card.price}</span>
                    </div>
                    <p className="product-title primaryText">{card.name}</p>
                    <p className="description">{card.detail}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Products;
