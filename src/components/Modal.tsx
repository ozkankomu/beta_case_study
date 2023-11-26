import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { IProductionCardType, IPropsModal } from "../types/Type";
import { useSelector } from "react-redux";
import { cartSelector } from "../store/cart";
import { useMemo } from "react";

const Modal = ({ open, setOpen }: IPropsModal) => {
  // Cart details are kept in the redux store under the name cartSlice.
  const { cartSlice } = useSelector(cartSelector);

  
// I defined the variable basket, which shows the quantity and prices of the products, with the useMemo hook so that it does not render continuously when the amount does not change.
  const cartQuantity = useMemo(() => {
    return cartSlice?.filter((item) => item.quantity > 0);
  }, [cartSlice]);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Basket Information"}
        </DialogTitle>
        <DialogContent>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 550 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#EFEFEF" }}>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">Quantity</TableCell>
                  <TableCell align="left">Total Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartQuantity?.length > 0 ? (
                  cartSlice?.map((product: IProductionCardType) => (
                    <TableRow
                      key={product?.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {product?.quantity === 0 ? (
                        ""
                      ) : (
                        <>
                          <TableCell align="left">{product?.name}</TableCell>
                          <TableCell align="left">${product?.price}</TableCell>
                          <TableCell align="left">
                            {product?.quantity}
                          </TableCell>
                          <TableCell align="left">
                            ${product?.price * product.quantity}
                          </TableCell>
                        </>
                      )}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell color="text.secondary">
                      (Cart is empty.)
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
