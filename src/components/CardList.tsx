import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { IPropProductCardLİst } from "../types/Type";

const CardList = ({allProducts}:IPropProductCardLİst ) => {

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
      >
        {allProducts?.map((product) => (
          <Grid item xs={2} sm={4} md={4} mt={5} key={product.id} >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardList;
