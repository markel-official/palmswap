import { Link, Typography, useMediaQuery, Box, Tooltip } from "@mui/material";
import { useTheme } from "@mui/system";
import logo from "assets/logo.svg";
import { footerMenu } from "config/footerMenu";

const Footer = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        flexDirection={isSmallScreen ? "column" : "row"}
        sx={{
          p: isSmallScreen
            ? "40px 25px"
            : isMediumScreen
            ? "50px  30px"
            : "80px  0px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Box flex={2} sx={{ pr: isSmallScreen ? "0" : "100px" }}>
          <Box component="img" src={logo} height={35} alt="logo" />
          <Typography
            sx={{
              fontSize: isSmallScreen ? "13px" : "16px",
              lineHeight: isSmallScreen ? "20px" : "30px",
              fontWeight: "300",
              color: "#787878",
              mt: isSmallScreen ? "10px" : "20px",
              mb: "36px",
            }}
          >
            Copyright © 2022 Palmswap.org.
            <br />
            All rights reserved.
          </Typography>
        </Box>
        <Box
          flex={5}
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {Object.keys(footerMenu).map((submenu: string, idx: number) => (
            <Box
              key={idx}
              sx={{
                width: isSmallScreen
                  ? "50%"
                  : isMediumScreen
                  ? "107px"
                  : "200px",
                display: "flex",
                flexDirection: "column",
                mb: isSmallScreen ? "30px" : "0",
                whiteSpace: "nowrap",
              }}
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  lineHeight: "20px",
                  fontWeight: "600",
                  letterSpacing: "0.05em",
                  mb: isSmallScreen ? "8px" : "16px",
                }}
              >
                {submenu}
              </Typography>
              {footerMenu[submenu as keyof typeof footerMenu].map((item, idx) =>
                item[Object.keys(item)[0] as keyof typeof item] === "#" ? (
                  <Link
                    key={idx}
                    underline="none"
                    sx={{
                      cursor: "pointer",
                      marginBottom: "8px",
                    }}
                  >
                    <Tooltip title="Coming soon" arrow>
                      <Typography
                        key={idx}
                        component="span"
                        sx={{
                          fontSize: isSmallScreen ? "13px" : "16px",
                          fontWeight: "300",
                          color: "#787878",
                          ":hover": {
                            opacity: 1,
                            color: "#6f57d1",
                          },
                        }}
                      >
                        {Object.keys(item)[0]}
                      </Typography>
                    </Tooltip>
                  </Link>
                ) : (
                  <Link
                    key={idx}
                    href={item[Object.keys(item)[0] as keyof typeof item]}
                    underline="none"
                    sx={{
                      marginBottom: "8px",
                    }}
                  >
                    <Typography
                      key={idx}
                      sx={{
                        fontSize: isSmallScreen ? "13px" : "16px",
                        fontWeight: "300",
                        color: "#787878",
                        ":hover": {
                          opacity: 1,
                          color: "#6f57d1",
                        },
                      }}
                    >
                      {Object.keys(item)[0]}
                    </Typography>
                  </Link>
                )
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Footer;
