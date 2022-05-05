import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import logo from "assets/logoWithoutText.svg";

const StyledButton = styled(Button)`
  border: none;
  padding: 12px 36px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
`;

interface Props {
  className: string
}

const Trading = function ({ className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      className={className}
      textAlign="center"
      sx={{
        padding: isSmallScreen ? "30px" : "50px",
        backgroundImage: "url('assets/tradingBackground.png')",
        backgroundPosition: "top",
        backgroundSize: "cover",
        marginTop: isSmallScreen ? 0 : "50px",
        marginBottom: isSmallScreen ? "20px" : "0px",
        borderRadius: "30px",
      }}
    >
      <Box
        component="img"
        src={logo}
        height={70}
        alt="logo"
        marginBottom="30px"
      />
      <Typography
        sx={{
          fontSize: isSmallScreen ? "28px" : "46px",
          lineHeight: isSmallScreen ? "36px" : "60px",
          fontFamily: "MazzardH-ExtraBold",
          fontWeight: "700",
          textTransform: "uppercase",
          pb: "24px",
        }}
      >
        Start trading perpetuals on <br />
        Palmswap today.
      </Typography>
      <StyledButton
        variant="contained"
        color="secondary"
        href="https://testnet.palmswap.org"
      >
        Trade Now
      </StyledButton>
    </Box>
  );
};

export default Trading;
