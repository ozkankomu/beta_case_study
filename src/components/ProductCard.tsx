import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IPropProductCard } from "../types/Type";
import { useEffect, useState } from "react";
import { betaService } from "../services/beta.service";
import { useDispatch } from "react-redux";
import { SET_CART_DATA, cartSelector } from "../store/cart";
import { useSelector } from "react-redux";
import { useMemo } from "react";

const ProductCard = ({ product }: IPropProductCard) => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState(0);
  const { cartSlice } = useSelector(cartSelector);

  
// I pull the product quantities added to the cart on the product cards from Redux and show the card with id control. I protect it from continuous rendering with useMemo.
  const productQuantity = useMemo(() => {
    return cartSlice?.filter((item) => item.productId === product.id);
  }, [cartSlice]);

  
// I can get data when pulling images from the API provided for the task, but I received a CORS error locally for the images. In case of any problems in the live project, I matched the images with the ids and kept them in my local.
  const image =
    product.id === "1"
      ? "./offer.jpg"
      : product.id === "2"
      ? "./lemon.jpg"
      : "./strawberry.jpg";

      // I made requests to the API for increasing and decreasing transactions on product cards and kept the responses in the redux store.
  const handleIncrease = async () => {
    try {
      await betaService.addToCartById(Number(product.id));
      const data = await betaService.getCart();
      dispatch(SET_CART_DATA(data));
    } catch (error) {
      console.log(error);
    }
  };

  // I made requests to the API for increasing and decreasing transactions on product cards and kept the responses in the redux store.
  const handleSubtraction = async () => {
    try {
      await betaService.subtractFromCartById(Number(product.id));
      const data = await betaService.getCart();
      dispatch(SET_CART_DATA(data));
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    if (productQuantity?.length > 0) {
      setCounter(productQuantity[0]?.quantity);
    }
  }, [productQuantity]);

  return (
    <Card sx={{ maxWidth: 400, position: "relative" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={300}
        sx={{ backgroundColor: "#EFEFEF" }}
        image={image}
      />
      <Chip
        label={product.discount}
        sx={{
          position: "absolute",
          top: 15,
          left: 15,
          backgroundColor: "#C24B5A",
          "& .MuiChip-label": {
            color: "#fff",
          },
        }}
      />
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h6">{product?.name}</Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <Rating name="card-rating" value={product?.rating} readOnly />
            <Typography variant="h6" color="text.secondary">
              ({product?.rating})
            </Typography>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ marginTop: 1 }}
          >
            <Typography color="#C24B5A" sx={{ fontWeight: "bold" }}>
              ${product?.price}
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ textDecoration: "line-through", fontWeight: "bold" }}
            >
              ${product?.originalPrice}
            </Typography>
          </Stack>
          <Button
            onClick={() => handleIncrease()}
            color="error"
            disabled={counter > 0 ? true : false}
            sx={{ mt: "5px" }}
            variant="contained"
          >
            Add to Cart
          </Button>
        </Box>
        <Box>
          <Stack gap={1} alignItems="center">
            {counter <= 0 ? (
              <Box sx={{ height: "42px" }}></Box>
            ) : (
              <IconButton
                aria-label="remove"
                sx={{
                  border: "1px solid #C24B5A",
                  borderRadius: 1,
                }}
                onClick={() => handleSubtraction()}
              >
                <RemoveIcon sx={{ color: "#C24B5A" }} />
              </IconButton>
            )}

            <Typography sx={{ height: counter <= 0 ? "25px" : "" }}>
              {" "}
              {counter <= 0 ? "" : counter}
            </Typography>

            <IconButton
              aria-label="add"
              sx={{
                border: "1px solid #C24B5A",
                borderRadius: 1,
              }}
              onClick={() => handleIncrease()}
            >
              <AddIcon sx={{ color: "#C24B5A" }} />
            </IconButton>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
