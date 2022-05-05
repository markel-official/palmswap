import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface IProp {
  title: string;
  subtitle: string;
  className: string;
}

const Card = function (props: IProp) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      className={props.className}
      textAlign="center"
      flex={1}
      sx={{
        marginRight: isSmallScreen ? "20px" : "30px",
        marginBottom: "30px",
        "&:last-child": {
          marginRight: "0",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: isSmallScreen ? "300px" : "316px",
          height: isSmallScreen ? "175px" : "200px",
          borderRadius: "20px",
          border: "1px solid #111111",
          background: "url('assets/blog.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          marginBottom: "16px",
          transitionDuration: "0.2s",
          userSelect: "none",
          cursor: "pointer",
          ":hover": {
            paddingBottom: "24px",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: isSmallScreen ? "13px" : "16px",
            lineHeight: "24px",
            marginBottom: "12px",
          }}
        >
          {props.subtitle}
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? "30px" : "42px",
            lineHeight: "40px",
            fontFamily: "MazzardH-ExtraBold",
            fontWeight: "700",
            textTransform: "uppercase",
            color: "#F9D5FB",
          }}
        >
          {props.title}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "16px" : isMediumScreen ? "18px" : "20px",
          lineHeight: "40px",
          letterSpacing: "-0.5px",
          fontWeight: "600",
          pb: "8px",
        }}
      >
        {props.title}
      </Typography>
      <Typography
        sx={{
          fontSize: isSmallScreen ? "13px" : "16px",
          lineHeight: "24px",
          color: "#919095",
        }}
      >
        {props.subtitle}
      </Typography>
    </Box>
  );
};

export default Card;
