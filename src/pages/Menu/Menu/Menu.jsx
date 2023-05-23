import React from "react";
import { Helmet } from "react-helmet-async";
import banner from "../../../assets/menu/banner3.jpg";
import desertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import Cover from "../../Shared/Cover/Cover";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import { useMenu } from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      <Cover img={banner} title="our menu"></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered Menu Item */}
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert menu item */}
       <MenuCategory
       
       title='dessert'
       items={dessert}
       itemImage={desertImg}
       
       ></MenuCategory>
       <MenuCategory
       
       title='pizza'
       items={pizza}
       itemImage={pizzaImg}
       
       ></MenuCategory>
       <MenuCategory
       
       title='salad'
       items={salad}
       itemImage={saladImg}
       
       ></MenuCategory>
       <MenuCategory
       
       title='soup'
       items={soup}
       itemImage={soupImg}
       
       ></MenuCategory>
       
    </div>
  );
};

export default Menu;
