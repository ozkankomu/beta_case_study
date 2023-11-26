import Navbar from "../components/Navbar";
import CardList from "../components/CardList";
import { betaService } from "../services/beta.service";
import { IProducts } from "../types/Type";
import { useEffect, useState } from "react";

const HomeView = () => {
  const [allProducts, setAllProducts] = useState<IProducts[]>([]);

  // In order to make state management easier while filtering the products in the navbar and displaying them on the cards, I created my states in the parent component and passed props to the necessary components. Redux could also be used here if desired.

  const getAllProducts = async () => {
    const data = await betaService.getAllProducts();
    setAllProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Navbar setAllProducts={setAllProducts} />
      <CardList allProducts={allProducts} />
    </>
  );
};

export default HomeView;
