import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Badge, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IPropSearchBar } from "../types/Type";
import { betaService } from "../services/beta.service";
import { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import Modal from './Modal'

const Navbar = ({ setAllProducts }: IPropSearchBar) => {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const getAllProductsWithQuery = async () => {
    try {
      const data = await betaService.searchProductsByName(query);
      setAllProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyUp = (e: any) => {
    if (e.key === "Enter") {
      getAllProductsWithQuery();
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ background: "white" }}>
            <Box
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                p: 1,
                gap: 2,
                m: 1,
                bgcolor: "background.paper",
                borderRadius: 1,
                width: "100%",
              }}
            >
              <Box textAlign="center">
                <img src="/logo.png" alt="" width={130} />
              </Box>
              <Box sx={{ display: "flex" }}>
                <TextField
                  size="small"
                  variant="outlined"
                  placeholder="Searching for..."
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyUp={(e) => handleKeyUp(e)}
                  fullWidth
                  required
                  InputProps={{
                    sx: {
                      borderStartStartRadius: 100,
                      borderBottomLeftRadius: 100,
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    onClick={getAllProductsWithQuery}
                    sx={{
                      borderRadius: "0px",
                      height: "40px",
                      mx: "auto",
                      background: "#C24B5A",
                      borderTopRightRadius: 100,
                      borderBottomRightRadius: 100,
                      width: 100,
                    }}
                  >
                    Search
                  </Button>
                </Box>
              </Box>
              <Box textAlign="center">
                <Badge
                  badgeContent={4}
                  color="error"
                  onClick={() => setOpen(true)}
                >
                  <MailIcon color="warning" />
                </Badge>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {open && <Modal open={open} setOpen={setOpen} />}
         
    </>
  );
};

export default Navbar;
