import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Close } from "@mui/icons-material";
import { Container, Typography, Stack, IconButton, Dialog, Button, Chip, Divider, Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types'; // Import PropTypes for props validation
import ProductDetails from "./ProductDetails";
import categoriesData from './data/categories.json';

// Sample data for products

const ProductCountdown = ({ product }) => {
    const [countdown, setCountdown] = useState(product.time);
    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prevCountdown => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(timer);
        }
    }, [countdown]);
    const formatCooldownTime = (totalSeconds) => {
        const days = Math.floor(totalSeconds / 86400); // 1 day = 86400 seconds
        const hours = Math.floor((totalSeconds % 86400) / 3600); // 1 hour = 3600 seconds
        const minutes = Math.floor(((totalSeconds % 86400) % 3600) / 60);
        const seconds = Math.floor(((totalSeconds % 86400) % 3600) % 60)
        return `${days}d ${hours}h ${minutes}m ${seconds}s`;
    };
    return (
        <Chip
            sx={{
                display: "flex",
                alignItems: "center",
                width: "60%",
                m: "auto",
                mt: 1,
            }}
            label={countdown > 0 ? `${formatCooldownTime(countdown)}` : 'The Winner is: user'}
            color={countdown > 0 ? "primary" : "success"}
        />
    );
};

// Props validation
ProductCountdown.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        productTitle: PropTypes.string.isRequired,
        time: PropTypes.number.isRequired,
    }).isRequired,
};

const Main = () => {

    const allProducts = Object.values(categoriesData).reduce(
        (accumulator, category) => [...accumulator, ...category],
        []
    );
    const [Loadmore, setLoadmore] = useState(3);


    const [open, setOpen] = useState(false);
    const [clickedProduct, setclickedProduct] = useState({});

    // Functions to handle opening and closing the dialog
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container sx={{ pb: 9, pt: 5 }}>

            <Divider><h1>All Items</h1></Divider>
            <Stack
                direction={"row"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
            >
                <AnimatePresence>
                    {allProducts.slice(0, Loadmore).map((item) => (
                        <Card
                            component={motion.section}
                            layout
                            initial={{ transform: "scale(0)" }}
                            animate={{ transform: "scale(1)" }}
                            transition={{ duration: 1.6, type: "spring", stiffness: 50 }}
                            key={item.id}
                            sx={{
                                minWidth: 300,
                                maxWidth: 333,
                                mt: 3,
                                ":hover .MuiCardMedia-root ": {
                                    rotate: "1deg",
                                    scale: "1.1",
                                    transition: "0.35s",
                                },
                            }}
                        >
                            <CardMedia
                                sx={{ height: 277 }}
                                image={item.productImg}
                                title={item.productTitle}
                            />

                            <CardContent>
                                <Stack
                                    direction={"row"}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                >
                                    <Typography gutterBottom variant="h6" component="div">
                                        {item.productTitle}
                                    </Typography>

                                    <Typography variant="subtitle1" component="p">
                                        ${item.productPrice}
                                    </Typography>
                                </Stack>

                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <div>
                                    <ProductCountdown key={item.id} product={item} />
                                </div>
                            </CardContent>

                            <CardActions sx={{ justifyContent: "space-between" }}>
                                <Button
                                    onClick={() => {
                                        handleClickOpen();
                                    }}
                                    sx={{ textTransform: "capitalize" }}
                                    size="large"
                                >
                                    <ConfirmationNumberIcon sx={{ mr: 1 }} fontSize="small" />
                                    Get a Chance
                                </Button>
                                <Button
                                    onClick={() => {
                                        setclickedProduct(item);
                                        handleClickOpen(); // Open the dialog when the button is clicked
                                    }}
                                    size="large"
                                >
                                    View Item
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </AnimatePresence>

            </Stack>
           
            {Loadmore <= allProducts.length &&  
            <Box sx={{width: "100%" , display: "flex", justifyContent: "center",p: 7}}>
                <Button size="large" onClick={() => setLoadmore(Loadmore + 3)}>Loadmore...</Button>
            </Box>}
           
            <Dialog
                sx={{ ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } } }}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <IconButton
                    sx={{
                        ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
                        position: "absolute",
                        top: 0,
                        right: 10,
                    }}
                    onClick={handleClose}
                >
                    <Close />
                </IconButton>
                {clickedProduct && <ProductDetails clickedProduct={clickedProduct} />}
            </Dialog>
        </Container>
    );
};

export default Main;
