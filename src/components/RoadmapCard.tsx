import * as React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import RoadmapItem from "./RoadmapItem";
import { IRoadmap } from "interfaces/IRoadmap";
import { IRoadmapItem } from "interfaces/IRoadmapItem";

const RoadmapCard = function ({ name, borderRadius, items }: IRoadmap) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        borderRadius: isSmallScreen ? "8px" : borderRadius,
        p: "24px",
        background:
          "radial-gradient(100% 227.92% at 0% 50%, rgba(184, 186, 198, 0.1) 0%, rgba(213, 214, 219, 0) 100%)",
        backgroundBlendMode: "hard-light",
        border: "1px solid #292A2F",
        width: isSmallScreen ? "100%" : "calc(50% - 4px)",
      }}
    >
      <Typography
        sx={{
          background: "#292A2E",
          borderRadius: "100px",
          fontSize: "16px",
          lineHeight: "20px",
          py: "5px",
          textAlign: "center",
          mb: "35px",
        }}
      >
        {name}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "35px" }}>
        {items.map((item: IRoadmapItem, idx: number) => (
          <RoadmapItem key={idx} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default RoadmapCard;
