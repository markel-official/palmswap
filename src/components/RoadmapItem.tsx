import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IRoadmapItem } from "interfaces/IRoadmapItem";

const RoadmapItem = function ({ icon, iconBg, title, desc }: IRoadmapItem) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "6px",
          backgroundColor: iconBg,
          minWidth: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex" }} component="img" src={icon} />
      </Box>
      <Box>
        <Typography>{title}</Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "#787878",
            mt: "8px",
          }}
        >
          {desc}
        </Typography>
      </Box>
    </Box>
  );
};

export default RoadmapItem;
