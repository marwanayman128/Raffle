import React from 'react';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; // Import Splide CSS
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Box, Container, Stack, Typography } from '@mui/material';
import './MostSale.css';
import mostSale from './data/mostsale.json';
import ScrollFadeIn from '../../components/scroll/scrollAnimation/scrollAnimationMany';
import ZoomIn from '../../components/scroll/scrollAnimation/ZoomIn';
class YourComponent extends React.Component {
    constructor(props) {
        super(props);
        this.mainSliderRef = React.createRef();
        this.thumbnailSliderRef = React.createRef();
    }

    componentDidMount() {
        this.mainSliderRef.current.sync(this.thumbnailSliderRef.current.splide);
        this.thumbnailSliderRef.current.sync(this.mainSliderRef.current.splide);
    }




    render() {


        return (
            <Container className='MostSale' sx={{  pt: 5, position: "relative" }}>

                <Splide
                    className='MostSaleParentSlider1'
                    ref={this.mainSliderRef}
                    options={{ heightRatio: 0.55, pagination: false, arrows: false, cover: true, gap: 22, }}>
                    {mostSale.map((item) => (
                        <SplideSlide key={item.id} >

                            <ZoomIn zoomDuration={5}>
                                <Box width={"100%"} component="img" alt="The house from the offer." src={item.itemImg} />
                            </ZoomIn>
                            <Box sx={{ zIndex: 1,color: "#fff", position: "absolute", bottom: "5%", left: "6%" }}  >
                                <ScrollFadeIn transitionDuration={0.5}>
                                    <Typography variant='h3'>{item.itemTitle}</Typography>
                                </ScrollFadeIn>
                                <ScrollFadeIn transitionDuration={1}>
                                    <Typography sx={{ color: "#fff", fontSize: "15px", width: "60%" }}>{item.description}</Typography>
                                </ScrollFadeIn>
                            </Box>
                            <Box component="div" sx={{background: "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)",position: "absolute", bottom: "0", width: "100%", height: "25%"}} />

                        </SplideSlide>
                    ))}
                </Splide>

                <Box sx={{ position: "absolute", top: '9%', left: '4%' }}>
                    <Splide
                        className='MostSaleParentSlider'
                        ref={this.thumbnailSliderRef}
                        options={{ direction: 'ttb', height: "100%", rewind: true, isNavigation: true, pagination: false, cover: true, arrows: false, dragMinThreshold: { mouse: 4, touch: 10, }, breakpoints: { 640: { fixedWidth: 66, fixedHeight: 38 }, }, }}>
                        {mostSale.map((item) => (

                            <SplideSlide key={item.id}>
                                <Stack gap={2} direction={"row"} padding={"10px"}>
                                    <Box component="img" sx={{ width: 80, height: 70, objectFit: "cover", objectPosition: "50% 50%" }} alt="The house from the offer." src={item.itemImg} />
                                    <Stack justifyContent={"center"}>
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
}

export default YourComponent;
