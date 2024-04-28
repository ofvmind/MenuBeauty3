import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const ProductList = ({ products, reff, ...props }) => {

  if (!products.length) {
    return (
      <div className="notFound">
        <p>Такого товару не знайдуно</p>
        <Link className="back" to="/menu">Повернутись</Link>
      </div>
    );
  }

  return (
    <div {...props} ref={reff} className="productList">
      {products.map( item => 
      <ProductItem key={item.id} product={item}/>
    )}
    </div>
  );
};

export default ProductList;