import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import "@splidejs/splide/dist/css/splide.min.css";
import ViewButton from "../../components/buttons/ViewButton/ViewButton";
import './css/CatagorySlider.css';
import categoriesData from './data/categories.json';

export default function Catagory() {


  return (
    <>
      {Object.keys(categoriesData).map((categoryKey) => {
        const products = categoriesData[categoryKey];

        // Check if the category has at least 4 products to display the Splide section
        if (products.length >= 4) {
          return (
            <Box
              key={categoryKey}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                m: "auto",
                pt: 5,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "60%" }}>
                <h2>{categoryKey}</h2>
                <ViewButton />
              </Box>
              <Splide
                options={{
                  width: "60%",
                  height: "100%",
                  gap: "1rem",
                  drag: "free",
                  arrows: true,
                  pagination: false,
                  perPage: 4,
                  classes: {
                    arrow: 'splide__arrow your-class-arrow',
                    arrows: 'splide__arrows your-class-arrows',
                  },
                }}
              >
                {products.map((product) => (
                  <SplideSlide key={product.id}>
                    <Card
                      component={motion.section}
                      layout
                      initial={{ transform: "scale(0)" }}
                      animate={{ transform: "scale(1)" }}
                      transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                      key={product.id}
                      sx={{
                        minWidth: 270,
                        maxWidth: 233,
                        ":hover .MuiCardMedia-root ": {
                          rotate: "1deg",
                          scale: "1.1",
                          transition: "0.35s",
                        },
                      }}
                    >
                      <CardMedia
                        sx={{ height: 177 }}
                        image={product.productImg}
                        title={product.productTitle}
                      />
                      <CardContent>
                        <Stack
                          direction={"row"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Typography gutterBottom variant="h6" component="div">
                            {product.productTitle}
                          </Typography>
                          <Typography variant="subtitle1" component="p">
                            ${product.productPrice}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </SplideSlide>
                ))}
              </Splide>
            </Box>
          );
        }
        
        return null; // Skip rendering for categories with less than 4 products
      })}
    </>
  );
}
