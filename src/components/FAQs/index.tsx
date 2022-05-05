import { Button, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

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

const FAQs = function ({ className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      textAlign="center"
      sx={{
        padding: isSmallScreen ? "280px 30px 30px" : "170px 20px 70px",
        background: "linear-gradient(90deg,#9D7BE9 0%,#6F57D1 100%)",
        marginTop: isSmallScreen ? "-230px" : "-100px",
        width: "100vw",
        marginLeft: "calc((100% - 100vw) / 2)",
      }}
    >
      <Typography
        className={className}
        sx={{
          fontSize: isSmallScreen ? "28px" : "46px",
          lineHeight: isSmallScreen ? "40px" : "60px",
          fontFamily: "MazzardH-ExtraBold",
          fontWeight: "700",
          textTransform: "uppercase",
          width: isSmallScreen ? "100%" : "60%",
          margin: "0 auto",
          pb: "24px",
        }}
      >
        HAVE A LOOK ON OUR FREQUENTLY ASKED QUESTIONS
      </Typography>
      <StyledButton className={className} variant="contained" color="secondary" href="/faq">
        FAQs
      </StyledButton>
    </Box>
  );
};

export default FAQs;
