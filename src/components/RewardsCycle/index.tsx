import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import blackLogo from "assets/blacklogo.svg";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
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

const GradientHeader = styled(Typography)`
  line-height: 50px;
  letter-spacing: -0.5px;
  font-weight: 600;
  padding-bottom: 24px;
  font-weight: 600;
  background: linear-gradient(135deg, #9d7be9 0%, #6f57d1 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

interface Props {
  className: string
}

const RewardsCycle = function ({ className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      textAlign="center"
      width="100%"
      pt={isSmallScreen ? "50px" : "0"}
      paddingBottom={isSmallScreen ? "20px" : isMediumScreen ? "80px" : "150px"}
    >
      <GradientText className={className} sx={{ pb: isSmallScreen ? "4px" : "24px" }}>
        MARKETS
      </GradientText>
      <Typography
        className={className}
        sx={{
          fontSize: isSmallScreen ? "30px" : isMediumScreen ? "35px" : "40px",
          lineHeight: isSmallScreen ? "40px" : "50px",
          fontFamily: "MazzardH-ExtraBold",
          fontWeight: "700",
          textTransform: "uppercase",
          pb: isSmallScreen ? "4px" : "24px",
        }}
      >
        Trading Rewards and Tradingcycles
      </Typography>
      <Box
        display="flex"
        // gap="32px"
        width="100%"
        margin="30px 0 0"
        flexDirection={isSmallScreen ? "column" : "row"}
      >
        <Box
          className={className}
          flex={1}
          sx={{
            padding: isSmallScreen
              ? "24px"
              : isMediumScreen
              ? "40px 20px"
              : "60px 40px",
            border: "3px solid #111111",
            borderRadius: "24px",
            textAlign: "left",
            marginRight: isSmallScreen ? "0" : "32px",
            marginBottom: isSmallScreen ? "32px" : "0",
          }}
        >
          <GradientHeader
            sx={{
              fontSize: isSmallScreen ? "30px" : "40px",
              lineHeight: isSmallScreen ? "40px" : "50px",
            }}
          >
            Retroactive <br />
            Rewards
          </GradientHeader>
          <Box
            sx={{
              display: "flex",
              alignItems: isSmallScreen ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              flexDirection: isSmallScreen ? "column" : "row",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", width: isSmallScreen ? "100%" : "60%" }}
            >
              Secure tokens before TGE through Retroactive Trading Rewards
              within the first 30 days after launch.
            </Typography>
            <StyledButton
              variant="contained"
              color="secondary"
              href="https://docs.palmswap.org/protocol/retroactive-trading"
              sx={{ padding: "12px 36px", marginTop: "20px" }}
            >
              Learn Now
            </StyledButton>
          </Box>
        </Box>
        <Box
          className={className}
          flex={1}
          sx={{
            padding: isSmallScreen
              ? "24px"
              : isMediumScreen
              ? "40px 20px"
              : "60px 40px",
            border: "3px solid #111111",
            borderRadius: "24px",
            textAlign: "left",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={blackLogo}
            alt="logo"
            sx={{
              width: "240px",
              opacity: 0.07,
              position: "absolute",
              top: "30px",
              right: "10px",
            }}
          />
          <Typography
            sx={{
              fontSize: isSmallScreen ? "30px" : "40px",
              lineHeight: isSmallScreen ? "40px" : "50px",
              fontWeight: "700",
              paddingBottom: "24px",
            }}
          >
            Trading <br />
            cycles
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: isSmallScreen ? "flex-start" : "flex-end",
              justifyContent: "space-between",
              flexDirection: isSmallScreen ? "column" : "row",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", width: isSmallScreen ? "100%" : "60%" }}
            >
              Every week a new Tradingcycle starts that rewards traders on the
              DEX with PALM tokens.
            </Typography>
            <StyledButton
              variant="contained"
              color="secondary"
              href="https://docs.palmswap.org/protocol/trading-cycle"
              sx={{ padding: "12px 36px", marginTop: "20px" }}
            >
              Learn Now
            </StyledButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RewardsCycle;
