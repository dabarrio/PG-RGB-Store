import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getAllProducts } from "../../redux/actions/index";
import Nav from "../NavBar/Nav";
import NavBar from "../NavBar/NavBar";
import Product from "../Product/Product";
import SideBar from "../SideBar/SideBar";
import Slider from "../Slider.jsx/Slider";
import Promo from "./PromLeft";

function Home() {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  const product = allProducts.slice(0,5)

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);


  return (
    <div className="bg-gradient-to-t from-primary-300 to-primary">
      <NavBar/>
      <Nav/>
      <Slider/>
      <div className="flex flex-col items-center gap-3">
      <Promo
      left={true}
      img={'https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/07/498933.jpg'}
      products={product}
      />
      <Promo
      left={false}
      img={'https://assets.iprofesional.com/cdn-cgi/image/w=880,f=webp/https://assets.iprofesional.com/assets/jpg/2020/07/498933.jpg'}
      products={product}
      />
      </div>
      <div>
        <a id="whatsapp" title="Whatsapp" href="https://wa.me/543434720830?text=" target="_blank">
          <img class='fixed bottom-2 right-2 w-20 m-5' src="https://storage.googleapis.com/m-infra.appspot.com/public/whatsapp/Whatsapp_logo.svg"/>
        </a>
      </div>
      {/* {allProducts.map((product) => {
        return (
          <Link to={`/products/${product.id}`}>
            <Product key={product.id} product={product} />
          </Link>
        );
      })} */}
    </div>
  );
}

export default Home;
