import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { ITokenFeature } from "interfaces/ITokenFeature";

const TokenFeatureCard = function ({ icon, title, desc }: ITokenFeature) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isSmallScreen ? "row" : "column",
        gap: isSmallScreen ? "10px" : "15px",
        alignItems: "center",
        width: isSmallScreen
          ? "100%"
          : isMediumScreen
          ? "calc(33.33% - 13.33px)"
          : "calc(33.33% - 32px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: isSmallScreen ? "157px" : isMediumScreen ? "180px" : "262px",
          height: isSmallScreen ? "72px" : isMediumScreen ? "92px" : "119px",
        }}
        component="img"
        src={icon}
      />
      <Box textAlign={isSmallScreen ? "left" : "center"}>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "16px" : isMediumScreen ? "20px" : "24px",
            lineHeight: "32px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "13px" : isMediumScreen ? "14px" : "16px",
            lineHeight: "24px",
            mt: isSmallScreen ? "5px" : isMediumScreen ? "10px" : "15px",
            opacity: "0.8",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default TokenFeatureCard;
