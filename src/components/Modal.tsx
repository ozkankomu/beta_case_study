import { useEffect, useState } from "react";
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
import { betaService } from "../services/beta.service";
import { IProductionCardType } from "../types/Type";

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ open, setOpen }: IProps) => {
  const [chart, setChart] = useState<IProductionCardType[]>([]);

  const getChart = async () => {
    try {
      const data = await betaService.getCart();
      if (data !== "Cart is empty.") return setChart(data);
      
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getChart();
  }, []);

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
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {chart.length ? (
                  chart?.map((row: IProductionCardType) => (
                    <TableRow
                      key={row?.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      {row?.quantity === 0 ? (
                        ""
                      ) : (
                        <>
                          <TableCell component="th" scope="row">
                            {row?.name}
                          </TableCell>
                          <TableCell align="right">{row?.name}</TableCell>
                          <TableCell align="right">{row?.price}</TableCell>
                          <TableCell align="right">{row?.quantity}</TableCell>
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
