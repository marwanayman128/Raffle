import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import './footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {

  const theme = useTheme();
  return (
    <>
      <Stack direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={10}
        width={"60%"}
        height={"11rem"}
        m="auto" 
        position={"relative"}
        sx={{  pb: 5 }}>
        <Box  >
          <Typography sx={{ fontSize: "24px" }}>
            Find amazing deals on the go.
          </Typography>
          <Typography sx={{ fontSize: "24px", color: "#E00000" }}>
            Download the app now!
          </Typography>

        </Box>
        <Stack  sx={{ pr: 17 }}>
          <img src="images/banner-19.png" alt="" width={"200px"} />
        </Stack>
        <Stack >
          <Box sx={{ py: 5 }}>
            <img src="https://assets.codepen.io/167732/App_Store_badge.svg" alt="" width={"150px"} />
          </Box>
          <Box>

            <img src="https://assets.codepen.io/167732/Google_Play_badge.svg" alt="" width={"150px"} />
          </Box>

        </Stack>
      </Stack>
      <Box
        sx={{
          // @ts-ignore
          bgcolor: theme.palette.footerColor.main,
          py: 1.3,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Support</h3>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Contact Us Details</a>
              </li>
              <li>
                <a href="#">Call Us</a>
              </li>

            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Get Social</h3>
            <ul>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Languages</h3>
            <ul>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">العربية</a>
              </li>

            </ul>
          </div>

        </div>

        <Divider sx={{ borderColor: '#FFFFFF', width: "60%", margin: "auto" }} />
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} width={"60%"} margin={"auto"} spacing={4} >
          <Typography
            sx={{ fontSize: 14, py: 4 , color: "#FFFFFF"}}
          >
            ©Designed by Marwan 2023. All Rights Reserved.
          </Typography>
          <div className="footer-column">
          <a  href=""> Privacy Policy</a>
          </div>
          <div className="footer-column">

          <a href=""> Terms of Service</a>
          </div>
        <Stack>
        <div className="social-icons">
    
    
    <a className="social-icon social-icon--twitter">
        <i className="fa fa-twitter"><TwitterIcon /></i>
        <div className="tooltip">Twitter</div>
    </a>
   
    <a className="social-icon social-icon--instagram">
        <i className="fa fa-instagram"><InstagramIcon /></i>
        <div className="tooltip">Instagram</div>
    </a>
    <a className="social-icon social-icon--linkedin">
        <i className="fa fa-linkedin"><LinkedInIcon /></i>
        <div className="tooltip">LinkedIn</div>
    </a>
    <a className="social-icon social-icon--facebook">
        <i className="fa fa-facebook"><FacebookIcon /></i>
        <div className="tooltip">Facebook</div>
    </a>
</div>
        </Stack>
        </Stack>


      </Box>
    </>
  );
};

export default Footer;
