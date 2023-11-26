import { Box, Button, Grid } from "@mui/material";
import ProductCard from "./ProductCard";
import { IPropProductCardLİst } from "../types/Type";

const CardList = ({ allProducts }: IPropProductCardLİst) => {
  return (
    <>
      <Grid container spacing={{ xs: 2 }}>
        {allProducts?.map((product) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            mt={5}
            key={product.id}
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button color="error" sx={{ mt: "3rem" }} variant="contained">
          Load More ...
        </Button>
      </Box>
    </>
  );
};

export default CardList;
