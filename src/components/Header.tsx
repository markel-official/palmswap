import styled from "@emotion/styled";
import { Drawer, List, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import logo from "assets/logo.svg";
import logoWithoutText from "assets/logoWithoutText.svg";
import CustomMenuItem from "./CustomMenuItem";
import { NAVS } from "config/navs";
import { Menu as MenuIcon, Close } from "@mui/icons-material";
import { useState } from "react";
import ListItemButton from "./ListItemButton";

const TradeBtn = styled(Button)`
  border: none;
  padding: 12px 32px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
  width: 160px;
  text-alignment: center;
  white-space: nowrap;
`;

const StyledDrawer = styled(Drawer)`
  .MuiPaper-root {
    background: #030303;
  }
`;

const Header = function () {
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down(1120));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        py: isSmallScreen ? "25px" : "35px",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "256px",
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(133, 104, 220, 0.38) 0%, rgba(171, 171, 171, 0) 100%)",
          overflow: "hidden",
          position: "absolute",
          top: "-210px",
          zIndex: -1,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            width: isSmallScreen ? "154px" : isMediumScreen ? "161px" : "208px",
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => navigate("/")}
          component="img"
          src={logo}
        />
        {!(isSmallScreen || isMediumScreen) && (
          <>
            <Box display="flex" justifyContent="space-between">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {NAVS.map((nav: any, i: any) => (
                  <CustomMenuItem key={i} nav={nav} />
                ))}
              </Box>
            </Box>
            <TradeBtn variant="contained" href="https://testnet.palmswap.org">
              Trade Now
            </TradeBtn>
          </>
        )}

        {(isSmallScreen || isMediumScreen) && (
          <>
            <Button
              id="basic-button"
              aria-controls="basic-menu"
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl) ? "true" : undefined}
              onClick={Boolean(anchorEl) ? handleClose : handleClick}
              sx={{ zIndex: 1400 }}
            >
              {Boolean(anchorEl) ? (
                <Close
                  style={{
                    pointerEvents: "none",
                    color: "white",
                    fontSize: "22px",
                  }}
                />
              ) : (
                <MenuIcon
                  style={{
                    pointerEvents: "none",
                    color: "white",
                    fontSize: "22px",
                  }}
                />
              )}
            </Button>

            <StyledDrawer
              anchor="right"
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Box
                component="img"
                src={logoWithoutText}
                width="24px"
                margin="24px 24px 0"
                alt="logoWithoutText"
              />
              <List
                sx={{
                  width: "100vw",
                  maxHeight: "calc(100vh - 210px)",
                  overflowY: "scroll",
                }}
              >
                {NAVS.map((nav, i) => (
                  <ListItemButton
                    key={i}
                    nav={nav}
                    sx={{ justifyContent: "center" }}
                  >
                    {nav.title}
                  </ListItemButton>
                ))}
              </List>

              <TradeBtn
                variant="contained"
                href="https://testnet.palmswap.org"
                sx={{
                  marginLeft: "5%",
                  width: "90% !important",
                  position: "absolute",
                  bottom: "30px",
                }}
              >
                Trade Now
              </TradeBtn>
            </StyledDrawer>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Header;
