import * as React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { IOnChainStat } from "interfaces/IOnChainStat";

const OnChainStatCard = function ({ name, data, period }: IOnChainStat) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        p: "20px",
        background:
          "radial-gradient(69.08% 69.08% at 100% 0%, rgba(184, 186, 198, 0.1) 0%, rgba(213, 214, 219, 0) 100%), #1F2023",
        border: "1px solid #292A2F",
        borderRadius: "4px",
        width: isSmallScreen
          ? "100%"
          : isMediumScreen
          ? "calc(33.33% - 13.33px)"
          : "calc(33.33% - 32px)",
      }}
    >
      <Typography
        sx={{
          color: "#787878",
          mb: "8px",
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "32px",
          lineHeight: "44px",
          mb: "8px",
        }}
      >
        {data}
      </Typography>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "10px" : "12px",
          lineHeight: "16px",
          color: "#787878",
        }}
      >
        {period}
      </Typography>
    </Box>
  );
};

export default OnChainStatCard;
