import Navbar from "../components/Navbar";
import CardList from "../components/CardList";
import { betaService } from "../services/beta.service";
import { IProducts } from "../types/Type";
import { useEffect, useState } from "react";

const HomeView = () => {
  const [allProducts, setAllProducts] = useState<IProducts[]>([]);

  const getAllProducts = async () => {
    const data = await betaService.getAllProducts();
    setAllProducts(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <Navbar setAllProducts={setAllProducts} />
      <CardList allProducts={allProducts} />
    </div>
  );
};

export default HomeView;
