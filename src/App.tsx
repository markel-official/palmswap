import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage";
import FAQ from "pages/FAQ";
import { useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

/* 
Animation ToDo:
1) Content appears on scroll
2) Notification appears in 1 and 2 second accordingly
3) Moving if V1 and V2
*/

const App = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Container
      maxWidth="lg"
      sx={{
        px: isSmallScreen
          ? "20px!important"
          : isMediumScreen
          ? "50px!important"
          : "24px",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
