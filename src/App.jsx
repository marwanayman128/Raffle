import Header2 from "./components/header/Header2";
import Header1 from "./components/header/Header1";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./pages/home/main";
import Footer from "./components/footer/footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { Routes, Route } from "react-router-dom";
// @ts-ignore
import Welcome from "./pages/home/welcome";
import Catagory from "./pages/home/CatagorySlider";
import Profile from "./pages/profilePage/profile";
import Myaccount from "./pages/myaccountPage/myaccount";

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
            <Main />
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

        </Routes>
        <Footer />

        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
