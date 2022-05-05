// import { useEffect,useRef } from "react";
import React, { useRef } from "react";
import { styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import tradingAppImg from "assets/tradingApp.png";
// import { gsap } from 'gsap';
// import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const V1States = function ( props, ref ) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const StyledCard = styled(Box)`
    flex: 1;
    width: 33%;
    padding: 16px;
    border: ${isSmallScreen ? 0 : "1px solid #1b171f"};
    border-top: 0;
    border-bottom: 0;
    border-left: 0;
    &:last-child {
      border-right: 0;
    }
  `;

  /*
  Using GSAP animation ->
  */
  // let responsiveTriggerGap = 100; // 100px by default
  // if(isSmallScreen) {
  //   responsiveTriggerGap = 50
  // }

  // const elemToAnimate = useRef(null);
  // useEffect(() => {
  //   const el = elemToAnimate.current;

  //   const q = gsap.utils.selector(el);
    
  //   // gsap.fromTo(el(".js-animated"), {
  //   gsap.fromTo(q(".js-animated"), {
  //     opacity: 0,
  //     y: 50
  //   }, {
  //     opacity: 1,
  //     y: 0,
  //     duration: 2,
  //     // stagger: 0.1, // 0.1 seconds between when each ".box" element starts animating
  //     ease: 'Power2.easeOut',
  //     scrollTrigger: {
  //       trigger: ".trigger",
  //       markers: true,
  //       start: `top bottom-=${responsiveTriggerGap}`
  //     }
  //   });
  // });
  /*
  Using GSAP animation <-
  */

  return (
    <Box
      textAlign="center"
      sx={{
        width: "100%",
        marginTop: isSmallScreen ? "100px" : isMediumScreen ? "50px" : "100px",
        marginBottom: isSmallScreen ? "40px" : "0",
      }}
      id="v1state"
      ref={ref}
    >
      <GradientText sx={{ pb: isSmallScreen ? "4px" : "24px" }} className="js-animation-block-1">
        PalmSwap
      </GradientText>
      <Typography 
        className="js-animation-block-1"
        sx={{
          fontSize: isSmallScreen ? "30px" : isMediumScreen ? "35px" : "40px",
          lineHeight: "40px",
          fontFamily: "MazzardH-ExtraBold",
          fontWeight: "700",
          textTransform: "uppercase",
          pb: isSmallScreen ? "4px" : "24px",
        }}
      >
        All Big Things Start Small
      </Typography>
      <Typography
        className="js-animation-block-1"
        sx={{
          fontSize: isSmallScreen ? "13px" : "16px",
          lineHeight: "22px",
          color: "#787878",
          pb: "20px",
        }}
      >
        Trusted & built on feedback by thousands of traders.
      </Typography>
      <Box
        className="js-animation-block-1"
        style={{
          display: "flex",
          maxWidth: "800px",
          margin: isSmallScreen ? "0 auto 15px" : "16px auto 40px",
        }}
      >
        <StyledCard>
          <Typography
            sx={{
              fontSize: isSmallScreen ? "20px" : "36px",
              fontFamily: "MazzardH-ExtraBold",
              fontWeight: "700",
            }}
          >
            $0
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "11px" : "16px", color: "#787878" }}
          >
            All Time Volume
          </Typography>
        </StyledCard>
        <StyledCard>
          <Typography
            sx={{
              fontSize: isSmallScreen ? "20px" : "36px",
              fontFamily: "MazzardH-ExtraBold",
              fontWeight: "700",
            }}
          >
            $0
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "11px" : "16px", color: "#787878" }}
          >
            Today's Volume
          </Typography>
        </StyledCard>
        <StyledCard>
          <Typography
            sx={{
              fontSize: isSmallScreen ? "20px" : "36px",
              fontFamily: "MazzardH-ExtraBold",
              fontWeight: "700",
            }}
          >
            1
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "11px" : "16px", color: "#787878" }}
          >
            {isSmallScreen ? (
              <>
                Trading
                <br />
                Cycle
              </>
            ) : (
              "Trading Cycle"
            )}
          </Typography>
        </StyledCard>
      </Box>

      <Box
        className="js-animation-block-1"
        component="img"
        src={tradingAppImg}
        alt="trading app"
        width={isSmallScreen ? "100%" : "90%"}
        sx={{ margin: "0 auto" }}
      />
    </Box>
  );
};

// export default V1States;
export default React.forwardRef(V1States);
