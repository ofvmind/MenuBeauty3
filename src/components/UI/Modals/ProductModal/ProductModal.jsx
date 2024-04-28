import { useState } from "react";
import cl from "./ProductModal.module.scss";

const ProductModal = ({ visible, setVisible, product }) => {
  const [isClosed, setIsClosed] = useState(false);

  const rootClasses = [cl.modal];
  const bodyClasses = [cl.modalBody];
  if (visible) rootClasses.push(cl.active);
  if (isClosed) {
    rootClasses.push(cl.hiddenModal);
    bodyClasses.push(cl.hiddenBody);
  }

  const setModal = () => {
    setIsClosed(true);
    setTimeout(() => {
      setVisible(false);
      setIsClosed(false);
    }, 290);
  };

  return (
    <div className={rootClasses.join(" ")} onClick={setModal}>
      <div className={bodyClasses.join(" ")} onClick={e => e.stopPropagation()}>
        <div onClick={setModal} className={cl.exit}>&#x2715;</div>
        <div style={{backgroundImage: `url(${product.image})`}} className={cl.image} />
        <div className={cl.description}>
          <p className={cl.title}>{product.title}</p>
          <p className={cl.quantity}>{product.quantity}</p>
          <p className={cl.price}>{product.price} грн</p>
          <p className={cl.info}>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
