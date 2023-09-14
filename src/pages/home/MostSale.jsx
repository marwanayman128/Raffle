import  { useEffect, useRef } from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Container, Stack, Typography, useMediaQuery } from '@mui/material';
import './MostSale.css';
import mostSale from './data/mostsale.json';
import ScrollFadeIn from '../../components/scroll/scrollAnimation/scrollAnimationMany';
import ZoomIn from '../../components/scroll/scrollAnimation/ZoomIn';



function MostSale() {
    const mainSliderRef = useRef(null);
    const thumbnailSliderRef = useRef(null);
    // @ts-ignore
    const isScreen770OrUp = useMediaQuery((theme) => theme.breakpoints.up(770));

    useEffect(() => {
        if (mainSliderRef.current && thumbnailSliderRef.current) {
            mainSliderRef.current.splide.sync(thumbnailSliderRef.current.splide);
            thumbnailSliderRef.current.splide.sync(mainSliderRef.current.splide);
        }
    }, []);


    return (

        <Container className='MostSale' sx={{ pt: 5, position: "relative" }}>
            <Splide
                className='MostSaleParentSlider1'
                ref={mainSliderRef}
                options={{ heightRatio: 0.55, pagination: true, arrows: false, cover: true, gap: 22,
                breakpoints: {600:{heightRatio: 0.57}} }}>
                {mostSale.map((item) => (
                    <SplideSlide key={item.id} >

                        <ZoomIn zoomDuration={5}>
                            <Box width={"100%"} component="img" alt="The house from the offer." src={item.itemImg} />
                        </ZoomIn>
                        <Box sx={{ zIndex: 1, color: "#fff", position: "absolute", bottom: "5%", left: "6%" }}  >
                            <ScrollFadeIn transitionDuration={0.5}>
                                <Typography variant='h3'>{item.itemTitle}</Typography>
                            </ScrollFadeIn>
                            <ScrollFadeIn transitionDuration={1}>
                                <Typography sx={{ color: "#fff", fontSize: "15px", width: "50%" }}>{item.description}</Typography>
                            </ScrollFadeIn>
                        </Box>
                        <Box component="div" sx={{ background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)", position: "absolute", bottom: "0", width: "100%", height: "25%" }} />

                    </SplideSlide>
                ))}
            </Splide>

            <Box sx={{ position: "absolute", top: '2.5rem' }} left={isScreen770OrUp ? "1.5rem" : "30%"}>
                <Splide
                    className='MostSaleParentSlider'
                    ref={thumbnailSliderRef}
                    options={{
                        direction: 'ttb',
                        height: "22.4rem",
                        perPage: 4,
                        isNavigation: true,
                        pagination: false,
                        arrows: false,
                        dragMinThreshold: { mouse: 4, touch: 10 },
                        breakpoints: {
                            950: { height: "17rem", perPage: 3 },
                            770: { direction: 'ltr', height: "5.6rem", width: "43%" , arrows: true , focus: "center",},
                            600: { destroy: true}
                        },
                    }}>
                    {mostSale.map((item) => (
                        <SplideSlide key={item.id}>
                            <Stack gap={2} direction={"row"} padding={"10px"}>
                                <Box component="img" sx={{ width: 80, height: 70, objectFit: "cover", objectPosition: "50% 50%" }} alt="The house from the offer." src={item.itemImg} />
                                <Stack display={isScreen770OrUp ? "flex" : "none"} justifyContent={"center"}>
                                    <Typography sx={{ color: "#fff" }}>
                                        {item.itemName}
                                    </Typography>
                                    <Typography sx={{ color: "#fff" }}>
                                        {item.itemTitle}
                                    </Typography>
                                </Stack>
                            </Stack>
                        </SplideSlide>
                    ))}
                </Splide>
            </Box>
        </Container>
    );
}

export default MostSale;
