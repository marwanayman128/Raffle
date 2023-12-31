import Header2 from "./components/header/Header2";
import Header1 from "./components/header/Header1";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./pages/home/hero/Hero";
import Main from "./pages/home/main";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/scrollToTop/ScrollToTop";
import { Routes, Route } from "react-router-dom";
// @ts-ignore
import Welcome from "./pages/home/welcome";
import Catagory from "./pages/home/CatagorySlider";
import Profile from "./pages/User/profilePage/profile";
import Myaccount from "./pages/User/myaccountPage/myaccount";
import PaymentWays from "./pages/home/PaymentWays/PaymentWays";
import ThumbnailSlider from "./pages/home/MostSale";
import Register from "./pages/User/Register/Register";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />
        <Header2 />
        <Header3 />
        <Routes>


          <Route path="/" element={<Box
            bgcolor={
              // @ts-ignore
              theme.palette.bg.main
            }
          >
            <Welcome />
            <Hero />
            <Catagory />
            <ThumbnailSlider />
            <Main />
            <PaymentWays />
          </Box>}>
          </Route>

          <Route path="/profile" element={<Box
            bgcolor={
              // @ts-ignore
              theme.palette.bg.main
            }
          >
            <Profile />
          </Box>}>
          </Route>

          <Route path="/myaccount" element={<Box
            bgcolor={
              // @ts-ignore
              theme.palette.bg.main
            }
          >
            <Myaccount />
          </Box>}>
          </Route>
          <Route path="/register" element={<Box
            bgcolor={
              // @ts-ignore
              theme.palette.bg.main
            }
          >
            <Register />
          </Box>}>
          </Route>

        </Routes>
        <Footer />

        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
