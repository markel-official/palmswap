import { Typography, useMediaQuery, styled } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { tokenFeatures } from "config/tokenFeatures";
import { ITokenFeature } from "interfaces/ITokenFeature";
import Card from "./components/Card";

const GradientText = styled(Typography)`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 8px;
  font-weight: 600;
  background: linear-gradient(to right, #9d7be9 0%, #6f57d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  display: inline-block;
`;

interface Props {
  className: string
}

const Palm = function ({ className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      sx={{
        pt: isSmallScreen ? "60px" : isMediumScreen ? "80px" : "150px",
        pb: isSmallScreen ? "0px" : isMediumScreen ? "80px" : "150px",
        textAlign: "center",
      }}
    >
      <GradientText className={className} sx={{ pb: isSmallScreen ? "4px" : "24px" }}>
        $PALM
      </GradientText>
      <Typography
        className={className}
        sx={{
          fontSize: isSmallScreen ? "30px" : isMediumScreen ? "35px" : "40px",
          lineHeight: isSmallScreen ? "40px" : "50px",
          fontFamily: "MazzardH-ExtraBold",
          fontWeight: "700",
          textTransform: "uppercase",
          width: isSmallScreen ? "100%" : "50%",
          margin: "0 auto",
          pb: isSmallScreen ? "4px" : "24px",
        }}
      >
        3 Thing you need to know ABOUT PALM TOKEN
      </Typography>
      <Box
        className={className}
        sx={{
          pt: isSmallScreen ? "20px" : "50px",
          display: "flex",
          flexWrap: "wrap",
          // gap: "30px",
          justifyContent: "center",
          m: isSmallScreen ? "0" : "0px",
        }}
      >
        {tokenFeatures.map((feature: ITokenFeature, idx: number) => (
          <Card key={idx} {...feature} />
        ))}
      </Box>
    </Box>
  );
};

export default Palm;
