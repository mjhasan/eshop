import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
  const { title, price, image, category, id } = props.product;
  return (
    <div className="four wide column">
      <Link to={`/product/${id}`}>
        <div className="ui card">
          <div className="image">
            <img src={image} alt={title} />
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="price"><b>$ {price}</b></div>
            <div className="meta">{category}</div>
          </div>
        </div>
      </Link>
    </div>

  );
};

export default ProductCard;