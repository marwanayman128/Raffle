import { Box, Container } from "@mui/material";
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
import { useTheme, useMediaQuery } from '@mui/material';

export default function Catagory() {

  const theme = useTheme();
  let perPage = 4;
  let gap = 1;
  const isXXSmallScreen = useMediaQuery(theme.breakpoints.down(694));
  const isXSmallScreen = useMediaQuery(theme.breakpoints.down(844));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down(980));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(1150));
  // Determine the number of slides per page based on breakpoints
  if (isMediumScreen) {
    perPage = 3; // Adjust for medium-sized screens
    gap = -100
  }
  if (isSmallScreen) {
    perPage = 2; // Adjust for small screens
    gap = -300
  }
  if (isXSmallScreen) {
    gap = -100
  }
  if (isXXSmallScreen) {
    perPage = 2;
    gap = 100 // Adjust for small screens
  }

  return (
    <>
      {Object.keys(categoriesData).map((categoryKey) => {
        const products = categoriesData[categoryKey];

        // Check if the category has at least 4 products to display the Splide section
        if (products.length >= 4) {
          return (
            <Container key={categoryKey}>

             
                <Box

                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    pt: 5,
                  }}
                >
                  <Box sx={{ display: "flex", justifyContent: "space-between",my:1 }}>
                    <Typography variant="h4">{categoryKey}</Typography>
                    <ViewButton />
                  </Box>
                  <Splide
                    options={{
                      gap: gap ,
                      drag: "free",
                      arrows: true,
                      pagination: false,
                      perPage: perPage,
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
            </Container>
          );
        }

        return null; // Skip rendering for categories with less than 4 products
      })}
    </>
  );
}
