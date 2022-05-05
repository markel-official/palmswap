import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import Card from "./components/Card";

const StyledButton = styled(Button)`
  border: none;
  padding: 12px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
`;

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

const Blog = function ({ className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      textAlign="center"
      width="100%"
      marginTop={isSmallScreen ? "70px" : "0"}
      marginBottom={isSmallScreen ? "20px" : "0"}
    >
      <GradientText className={className} sx={{ pb: isSmallScreen ? "4px" : "24px" }}>
        PALMSWAP BLOG
      </GradientText>
      <Typography
        className={className}
        sx={{
          fontSize: isSmallScreen ? "28px" : "40px",
          lineHeight: isSmallScreen ? "40px" : "50px",
          fontFamily: "MazzardH-ExtraBold",
          fontWeight: "700",
          textTransform: "uppercase",
          pb: "24px",
        }}
      >
        All About Palmswap Ecosystem & Future
      </Typography>
      <Box
        display="flex"
        margin="10px 0"
        sx={isSmallScreen ? { overflowX: "scroll" } : {}}
      >
        <Card className={className} title="DVAMM" subtitle="Deep dive into DVAMM" />
        <Card className={className} title="Mainnet" subtitle="Mainnet release" />
        <Card className={className} title="Palm token" subtitle="Palm Tokenomics" />
      </Box>
      <StyledButton className={className} variant="contained" href="https://medium.com/@Palmswap">
        Browse Blog
      </StyledButton>
    </Box>
  );
};

export default Blog;
