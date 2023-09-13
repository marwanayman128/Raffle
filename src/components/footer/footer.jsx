import { Box, Container, Divider, Grid, Stack, Typography, useTheme } from "@mui/material";
import './footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScrollFadeIn from "../scroll/scrollAnimation/scrollAnimation";
import MyLink from "../MyLink";
import { styled } from '@mui/system';

const ResponsiveImage = styled('img')(({ theme }) => ({
   // Default width for extra small screens
   width: '40px', // Width for small screens and up
  [theme.breakpoints.up('xs')]: {
    width: '150px', // Width for small screens and up
  },
  [theme.breakpoints.up('sm')]: {
    width: '180px', // Width for small screens and up
  },
  [theme.breakpoints.up('md')]: {
    width: '50%', // Width for medium screens and up
  }
}));
const Footer = () => {

  const theme = useTheme();
  return (
    <>

      <ScrollFadeIn>
        <Container>
        <Stack direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          height={{ xs: "auto", sm: "11rem" }}
          m="auto"
          position={"relative"}
          sx={{ pb: 5 }}>

          <Box sx={{ width: "auto" }}>
            <Typography
              sx={{
                fontSize: "20px",
                '@media (max-width: 900px)': {
                  fontSize: "18px",
                },
              }}
            >
              Find amazing deals on the go.
            </Typography>
            <Typography
              sx={{
                fontSize: "24px",
                color: "#E00000",
                '@media (max-width: 900px)': {
                  fontSize: "20px",
                },
              }}
            >
              Download the app now!
            </Typography>
          </Box>
          <Stack pl={{ xs: 0, sm: 0, md: 10 , lg: 10, xl: 20}} >
          <ResponsiveImage   src={"images/banner-19.png"} alt="" />
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
        </Container>
      </ScrollFadeIn>
      <Box
        sx={{
          // @ts-ignore
          bgcolor: theme.palette.footerColor.main,
          py: 1.3,

        }}
      >
        <Container>

          <Grid container sx={{ color: "#FFFFFF",py: 5, display: "flex", justifyContent: "space-between" }} rowSpacing={{ xs: 5, sm: 5, md: 15 }} columnSpacing={{ xs: 10, sm: 20, md: 22 }}  >
            <Grid item xs={6} sm={6} md={3} columnSpacing={{ xs: 1, sm: 2, md: 9 }}>
              <Stack direction="column" gap={2}>
                <Typography variant="h6" >
                  Company
                </Typography>

                <MyLink href="#">About</MyLink>
                <MyLink href="#">Features</MyLink>
                <MyLink href="#">Works</MyLink>
                <MyLink href="#">Career</MyLink>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={6} md={3} columnSpacing={{ xs: 1, sm: 2, md: 9 }}>
              <Stack direction="column" gap={2}>
                <Typography variant="h6" >
                  Support
                </Typography>

                <MyLink href="#">Help Center</MyLink>
                <MyLink href="#">Contact Us Details</MyLink>
                <MyLink href="#">Call Us</MyLink>
              </Stack>
            </Grid>

            <Grid item xs={6} sm={6} md={3} columnSpacing={{ xs: 1, sm: 2, md: 9 }}>
              <Stack direction="column" gap={1}>
                <Typography variant="h6" >
                  Follow Us
                </Typography>

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
              <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>

              </Box>
              <Stack gap={1} direction="column" divider={<Divider orientation="horizontal" flexItem />}>
                <Typography variant="h6" gutterBottom>
                  Languages
                </Typography>
                <MyLink href="#">English</MyLink>
                <MyLink href="#">عربي</MyLink>
              </Stack>
            </Grid>


            <Grid item xs={6} sm={6} md={3}>
              <Stack direction="column" gap={1}>

                <Typography variant="h6" gutterBottom>
                  Languages
                </Typography>
                <MyLink href="#">English</MyLink>
                <MyLink href="#">عربي</MyLink>
              </Stack>

            </Grid>
          </Grid>


          <Divider sx={{ borderColor: '#FFFFFF', margin: "auto" }} />


          <Stack direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'column-reverse', lg: 'row' }} alignItems={{ xs: "center", sm: "center" }} justifyContent={"space-between"} margin={"auto"} spacing={4} >
            <Stack direction={{ xs: 'row',  sm: 'row' }} gap={1} divider={<Divider orientation="vertical" flexItem />}  >
              <Typography
                sx={{ fontSize: 14,  color: "#FFFFFF" }}
              >
                ©Designed by Marwan 2023.
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#FFFFFF" }}>
                <a href=""> Privacy Policy</a>
              </Typography>
              <Typography sx={{ fontSize: 14, textDecoration: "none", color: "#FFFFFF" }}>

                <a href=""> Terms of Service</a>
              </Typography>
            </Stack>
            <Stack>

              <ul className="payment-icons">
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_5dc07d02-6eb3-4c29-8ebc-dd60262cf0d5.jpg?v=1660252631" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_2_5e0dccc9-96d4-49f4-a04e-b683022688f6.jpg?v=1660252631" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_5_88e91142-4dcc-43a9-b2dc-1ab36eeda2ef.png?v=1642810207" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_6_f75370c6-e395-418a-8dff-6fdd36733734.png?v=1642810587" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_1_ca3292bf-0601-41bc-a0a2-2f83b53f5233.png?v=1643153824" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_1_ad2b7a9c-5355-4bd3-8f74-15574bfaf4f3.png?v=1642812719" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_2_1454dabf-6f46-41f2-954f-d348839d157b.png?v=1642813386" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_2_c8c379f2-997c-46e0-8958-6be9c51eb87e.png?v=1642810614" width="45" height="27.5" />
                </li>
                <li className="payment-icons-item">
                  <img className="img-round-borders" src="https://cdn.shopify.com/s/files/1/0100/8431/9313/files/Untitled_design_5_fb08b5ff-b31b-4e50-b821-0abe4e5ff816.png?v=1684837437" width="45" height="27.5" />
                </li>

              </ul>
            </Stack>
          </Stack>
        </Container>

      </Box>
    </>
  );
};

export default Footer;
