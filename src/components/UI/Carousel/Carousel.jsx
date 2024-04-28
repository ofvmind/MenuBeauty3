import Flickity from "react-flickity-component";
import "./flickity.css";
import cl from "./Carousel.module.scss";
import p1 from "../../../assets/images/interior/1.jpg";
import p2 from "../../../assets/images/interior/2.webp";
import p3 from "../../../assets/images/interior/3.jpg";
import ProductModal from "../Modals/ProductModal/ProductModal";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { pizza, cocktail } from "../../MenuComponents/products";

const hotProduct = pizza[1];
const hotProduct2 = cocktail[5];

const plates = [
  { id: 1, img: p3 },
  { id: 2, img: hotProduct.image, text: "Найулюбленіше", product: hotProduct },
  { id: 3, img: hotProduct2.image, text: "Найулюбленіше", product: hotProduct2 },
];

const flickityOptions = {
  initialIndex: 0,
  wrapAround: true,
  autoPlay: true,
  prevNextButtons: true,
};

const Carousel = () => {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);
  const [isProduct, setIsProduct] = useState({});
  const [pIdx, setPIdx] = useState(null);

  return (
    <div className={cl.slider}>
      <Flickity
        className="slider"
        elementType="div"
        disableImagesLoaded={false}
        options={flickityOptions}
        static
      >
        {plates.map((plate, idx) => {
          return (
            <div className={cl.plate} key={plate.img}>
            <>
              <div
                onClick={() => {
                  if (plate.product) {
                    setIsModalOpen(true);
                    setIsProduct({ ...plate.product });
                    console.log(isProduct);
                  }
                }}
                className={cl.plateImg}
                style={{
                  backgroundImage: `url(${plate.img})`,
                }}
              >
                {plate.product && (
                  <div className={cl.aboutProduct}>
                    <p className={cl.pTitle}>
                      {plate.product.title}
                    </p>
                    <span className={cl.price}>{plate.product.price} грн</span>
                  </div>
                )}
              </div>
            </>
          </div>
          )
        })}
      </Flickity>
      <ProductModal
        product={isProduct}
        visible={isModalOpen}
        setVisible={setIsModalOpen}
      />
    </div>
  );
};

export default Carousel;
