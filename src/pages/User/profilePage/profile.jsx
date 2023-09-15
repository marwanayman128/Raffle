/* eslint-disable react-hooks/rules-of-hooks */
import './profile.css';
import { Box } from "@mui/material";
import ThumbnailSlider from '../../home/MostSale'

export default function profile() {


  return (
    <Box sx={{ pb: 9, pt: 5 , height: "100vh" }}>
    <ThumbnailSlider />

    </Box>
  );
}