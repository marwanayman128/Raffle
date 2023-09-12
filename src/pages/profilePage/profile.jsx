/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import { Link, Element } from 'react-scroll';
import './profile.css';
import { Box } from "@mui/material";
export default function profile() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box sx={{ pb: 9, pt: 5 , height: "100vh" }}>
      <Link to="section-to-animate" smooth={true} duration={500}>
        Scroll to Section
      </Link>
      <Box sx={{ height: "100vh" }}>

      </Box>
      <Element name="section-to-animate" className={`fade-in ${visible ? 'fade-in-visible' : ''}`}>
        asdasd
      </Element>
    </Box>
  );
}