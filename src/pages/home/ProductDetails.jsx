/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";


const ProductDetails = ({ clickedProduct }) => {
  
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2.5,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box sx={{ display: "flex" }}>
          <img
            width={360}
            src={
              clickedProduct.productImg
            }
            alt=""
          />
        </Box>

        <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="h5">
            {clickedProduct.productTitle}
          </Typography>
          <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
            ${clickedProduct.productPrice}
          </Typography>
          <Typography variant="body1">
            {clickedProduct.description}
          </Typography>

          <Stack
            sx={{ justifyContent: { xs: "center", sm: "left" } }}
            direction={"row"}
            gap={1}
            my={2}
          >

          </Stack>

          <Button
            sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
            variant="contained"
          >
            <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
            Buy now
          </Button>
        </Box>
      </Box>
    );
  }



export default ProductDetails;
