import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// import { useEffect, useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

import "@splidejs/splide/dist/css/splide.min.css";
import ViewButton from "../buttons/ViewButton/ViewButton";
import './Catagory.css'



// Default theme

export default function Catagory() {


  const categories = {
    Cars: [
      {
        id: 1,
        productImg: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhcnN8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
        productTitle: "Product 1",
        productPrice: 20,
        productRating: 4.5,
        description: "Description for Product 1",
        time: 333333,
      },
      {
        id: 2,
        productImg: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
        productTitle: "Product 2",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 5,
      },
      {
        id: 3,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 3",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 9000,
      },
      {
        id: 4,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 4",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 13000,
      }],
    Motorcycles: [
      {
        id: 10,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 3",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 9000,
      },
      {
        id: 11,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 4",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 13000,
      },
      {
        id: 12,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 5",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 23000,
      },
      {
        id: 13,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 6",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 33000,
      },
      {
        id: 14,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 7",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 43000,
      },
      {
        id: 15,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 8",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 53000,
      },
      {
        id: 16,
        productImg: "https://via.placeholder.com/300x200",
        productTitle: "Product 9",
        productPrice: 30,
        productRating: 3.8,
        description: "Description for Product 2",
        time: 63000,
      }
    ]
  };

  // const [perPage, setPerPage] = useState(window.innerWidth < 600 ? 2 : 5);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setPerPage(window.innerWidth < 600 ? 3 : 1);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

  // const theme = useTheme();
  // [theme.breakpoints.down('md')]: {backgroundColor: theme.palette.secondary.main,}

  
  return (
    <>
      {Object.keys(categories).map(categoryKey => (

        <Box key={categoryKey} sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", m: "auto", pt: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "60%", }}>
            <h2>{categoryKey}</h2>
            <ViewButton />
          </Box>
          <Splide


            options={{
              // type: "loop",
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
          // extensions={{ AutoScroll }}
          >
            {categories[categoryKey].map(product => (

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




      ))}
    </>
  );
}
