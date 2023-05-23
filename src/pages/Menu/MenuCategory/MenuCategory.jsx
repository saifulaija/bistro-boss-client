import React from "react";
import PopularItem from "../../Shared/PopularItem/PopularItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, itemImage }) => {
  return (
    <div>
      {title && <Cover img={itemImage} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-4 mb-16 mt-16">
        {items.map((item) => (
          <PopularItem key={item._id} item={item}></PopularItem>
        ))}
      </div>
     <div className="flex items-center justify-center">
     <Link to={`/order/${title}`}>
      <button className="button-primary bg-fuchsia-400">Order Now</button>
      </Link>
     </div>
    </div>
  );
};

export default MenuCategory;
