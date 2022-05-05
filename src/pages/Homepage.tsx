// import { useEffect, useState } from "react";
import { useEffect, useRef, useState } from "react";
import { Button, styled, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { useMediaQuery } from "@mui/material";
import TokenCard from "components/TokenCard";
import { investors } from "config/investors";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


import ethLogo from "assets/eth.png";
import btcLogo from "assets/btc.svg";
import mobileImg from "assets/mobile.png";
import ticket1Img from "assets/ticket1.png";
import ticket2Img from "assets/ticket2.png";
import token1Img from "assets/token1.png";
import token2Img from "assets/token2.png";
import token3Img from "assets/token3.png";
import token4Img from "assets/token4.png";
import token5Img from "assets/token5.png";
import token6Img from "assets/token6.png";
import token7Img from "assets/token7.png";
import scrollDownImg from "assets/scrolldown.png";
import { IInvestor } from "interfaces/IInvestor";

import V1States from "../components/V1States";
import Trading from "../components/Trading";
import Blog from "../components/Blog";
import RewardsCycle from "../components/RewardsCycle";
import Palm from "../components/Palm";
import Roadmap from "../components/Roadmap";
import Social from "../components/Social";
import FAQs from "../components/FAQs";

import "./Homepage.css";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  color: #ffffff;
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

gsap.registerPlugin(ScrollTrigger);

const Homepage = function () {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  // const [cryptoPrices, setCryptoPrices] = useState({
  //   BTC: { USD: 38538.72 },
  //   ETH: { USD: 2562.33 },
  // });

  // useEffect(() => {
  //   fetch(
  //     "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setCryptoPrices(json);
  //     });
  // }, []);

  /*
  Using GSAP animation ->
  */
  let responsiveTriggerGap = 50; // 100px by default
  let trackerGap = 200;
  if(isSmallScreen) {
    responsiveTriggerGap = responsiveTriggerGap/2;
  }

  function updateTicketState() {
    setTicketClass('ticket-animation--active');
  }

  /**
   * Gets computed translate values
   * param {HTMLElement} element
   * returns {Object}
  */
  function getTranslateValues(element) {
    const style = window.getComputedStyle(element)
    const matrix = style['transform'] || style.webkitTransform;

    // No transform property. Simply return 0 values.
    if (matrix === 'none' || typeof matrix === 'undefined') {
      return {
        x: 0,
        y: 0,
        z: 0
      }
    }

    // Can either be 2d or 3d transform
    const matrixType = matrix.includes('3d') ? '3d' : '2d'
    const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

    // 2d matrices have 6 values
    // Last 2 values are X and Y.
    // 2d matrices does not have Z value.
    if (matrixType === '2d') {
      return {
        x: matrixValues[4],
        y: matrixValues[5],
        z: 0
      }
    }

    // 3d matrices have 16 values
    // The 13th, 14th, and 15th values are X, Y, and Z
    if (matrixType === '3d') {
      return {
        x: matrixValues[12],
        y: matrixValues[13],
        z: matrixValues[14]
      }
    }
  }

  /**
   * Clamp value between min and max
  */
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);


  const [ticketClass, setTicketClass] = useState('');

  const [isAnimationExecuted, setIsAnimationExecuted] = useState(false);

  const elemToAnimate = useRef(null);
  const V1BlockToAnimate = useRef(null);


  // const trackerElementRef = useRef(null);

  const DELTA_Y = 70;
  const TWEEN_DURATION = 1;

  // Hack to prevent multiple re-renders in useEffect
  // since for some reasons it's bounding animation twice..
  // I'm not a React developer so I can't really tell why useEffect fires twice, but 
  // I used this hack
  // let isAnimationCreated = false;

  useEffect(() => {
    const el = elemToAnimate.current;

    // console.log('useEffect fired');

    const q1 = gsap.utils.selector(el);

    if(isAnimationExecuted === false) {

      q1(".js-animated").forEach(animatedElement => {
        gsap.set(animatedElement, {
          autoAlpha: 0
        });
        gsap.fromTo(animatedElement, 
          {
            autoAlpha: 0,
            y: DELTA_Y
          }, 
          {
            autoAlpha: 1,
            y: 0,
            duration: TWEEN_DURATION,
            ease: 'Power1.easeOut',
            scrollTrigger: {
              trigger: animatedElement,
            //   markers: true,
            //   scrub: true,
              start: `top bottom-=${responsiveTriggerGap}`
            },
            onComplete: () => {
              if(animatedElement.classList.contains('js-ticket-trigger')) {
                updateTicketState();
              }
              // js-ticket-trigger
              // updateTicketState();
              // console.log('DONE');
            },
        });
      });
  
  
      q1(".js-animation-block-1").forEach(animatedElement => {
        gsap.set(animatedElement, {
          autoAlpha: 0
        });
        gsap.fromTo(animatedElement, 
          {
            autoAlpha: 0,
            y: DELTA_Y
          }, 
          {
            autoAlpha: 1,
            y: 0,
            duration: TWEEN_DURATION,
            ease: 'Power1.easeOut',
            scrollTrigger: {
                trigger: animatedElement,
                // markers: true,
                scrub: true,
                start: `top bottom-=${responsiveTriggerGap}`
            }
        });
      });

      // Find all trackers
      if(el !== null) {
        const trackersArr = el.querySelectorAll('.js-tracker');
        if(trackersArr) {

          // Get translate of the element
          let roadmapColumnsGap = 20;
          const root = document.querySelector(':root');
          // if(root !== null) {
          //   const rootStyles = getComputedStyle(root);
          // }

          trackersArr.forEach(tracker => {
            // Get current tracker transform
            const currentTransformParam = getTranslateValues(tracker);
            if(currentTransformParam) {
              roadmapColumnsGap = Number(currentTransformParam.y);
            }
            // console.log(roadmapColumnsGap);
            const trackerParent = tracker.closest('.roadmap-column');
            let trackerParentSize = 0;
            let trackerElSize = parseInt(tracker.offsetHeight);
            if(trackerParent) {
              trackerParentSize = parseInt(trackerParent.offsetHeight ) + 1;
            }

            
            let varName = '--first-roadmap-scaleY';
            let currentProgress = 0;
            if(tracker.classList.contains('js-tracker-1')) {
              varName = '--first-roadmap-scaleY';
            }

            if(tracker.classList.contains('js-tracker-2')) {
              varName = '--second-roadmap-scaleY';
            }

            gsap.to(tracker, {
              // y: 100
              // translateY: `${trackerParentSize}px`,
              scrollTrigger: {
                trigger: trackerParent,
                pin: tracker,
                // markers: true,
                start: `top top+=${trackerGap}px`,
                end: `+=${trackerParentSize - roadmapColumnsGap - trackerElSize/2}`,
                onUpdate: trigger => {
                  if(trigger.progress * 100 < 10) {
                    document.documentElement.style.setProperty(varName, `${(trigger.progress * 100)}%`);
                  } else {
                    document.documentElement.style.setProperty(varName, `${clamp((trigger.progress * 100 + 2), 0, 100)}%`);
                  }
                }
                // onUpdate: function() {
                //   console.log(this.progress()) // Goes from 0 to 1
                // },              
                // end: 'bottom',
                // endTrigger: trackerParent
              }
            });
          });
        }
      }

      setIsAnimationExecuted(true);
    }

  });

  useEffect(() => {
    const V1StatesElementAnimated = V1BlockToAnimate.current;
    const q2 = gsap.utils.selector(V1StatesElementAnimated);

    q2(".js-animation-block-1").forEach(animatedElement => {
      gsap.set(animatedElement, {
        autoAlpha: 0
      });
      gsap.fromTo(animatedElement, 
        {
          autoAlpha: 0,
          y: DELTA_Y
        }, 
        {
          autoAlpha: 1,
          y: 0,
          duration: TWEEN_DURATION,
          ease: 'Power1.easeOut',
          scrollTrigger: {
            trigger: animatedElement,
            // markers: true,
            scrub: true,
            start: `top bottom-=${responsiveTriggerGap}`
          }
      });
    });

  });

  // useEffect(() => {
  //   const trackerElement = trackerElementRef.current;
  // });

  
  /*
  Using GSAP animation <-
  */


  return (
    <Box
      sx={{
        pt: isSmallScreen ? 0 : "24px",
        display: "flex",
        flexDirection: "column",
      }}
      ref={elemToAnimate}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "url('assets/gridBackground.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginBottom: "35px",
          height: isSmallScreen ? "calc(100vh - 285px)" : "auto",
        }}
      >
        <Box
          sx={{
            maxWidth: isSmallScreen
              ? "inherit"
              : isMediumScreen
              ? "525px"
              : "623px",
            textAlign: isSmallScreen ? "center" : "left",
          }}
          
        >
          <GradientText 
            className="js-animated"
            sx={{ pt: "15px", pb: "10px" }}
          >
            TESTNET NOW LIVE
          </GradientText>
          <Typography
            className="js-animated"
            sx={{
              fontSize: isSmallScreen
                ? "30px"
                : isMediumScreen
                ? "40px"
                : "55px",
              lineHeight: isSmallScreen ? "40px" : "70px",
              letterSpacing: "3px",
              fontFamily: "MazzardH-ExtraBold",
              fontWeight: "700",
              textTransform: "uppercase",
              pb: "5px",
            }}
          >
            Perpetuals Decentralized
          </Typography>
          <Typography
            className="js-animated"
            sx={{
              fontSize: isSmallScreen ? "13px" : "16px",
              lineHeight: "24px",
              color: "#787878",
              pb: isSmallScreen ? "30px" : "40px",
              width: isSmallScreen ? "100%" : "60%",
            }}
          >
            Trade perpetuals decentralized with <b>up to 10x leverage</b> and{" "}
            <b>earn tokens while trading</b> trough Tradingcycles.
          </Typography>
          <StyledButton
            className="js-animated"
            href="https://testnet.palmswap.org"
            variant="contained"
            sx={{
              marginBottom: "20px",
              padding: "12px 24px",
              fontSize: isSmallScreen ? "13px" : "16px",
            }}
          >
            Visit Testnet
          </StyledButton>
          <Button
            className="js-animated"
            href="https://docs.palmswap.org"
            variant="outlined"
            color="inherit"
            sx={{
              marginBottom: "20px",
              marginLeft: isSmallScreen ? "10px" : "20px",
              padding: "11px 21px",
              borderRadius: "24px",
              fontSize: isSmallScreen ? "13px" : "16px",
            }}
          >
            Documentation
          </Button>
          {!isSmallScreen && (
            <Box
              className="js-animated"
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                marginTop: "100px",
              }}
              onClick={() => (window.location.href = "#v1state")}
            >
              <Box
                component="img"
                src={scrollDownImg}
                alt="scroll down"
                width="24px"
                marginRight="10px"
              />
              <Box>
                <Typography sx={{ fontSize: "13px", color: "#ffffff" }}>
                  Scroll down
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                  to discover more
                </Typography>
              </Box>
            </Box>
          )}
        </Box>

        {!(isSmallScreen || isMediumScreen) && (
          <Box sx={{ position: "relative", paddingRight: "135px" }}>
            <Box component="img" src={mobileImg} alt="mobile" width="260px" className="js-animated js-ticket-trigger" />
            <Box
              component="img"
              src={ticket1Img}
              className={"ticket-animation ticket-animation--1" + " " + ticketClass}
              alt="mobile"
              width="251px"
              sx={{ position: "absolute", top: "25px", left: "112px" }}
            />
            <Box
              component="img"
              src={ticket2Img}
              className={"ticket-animation ticket-animation--2" + " " + ticketClass}
              alt="mobile"
              width="251px"
              sx={{ position: "absolute", top: "115px", left: "127px" }}
            />
          </Box>
        )}
      </Box>

      {isSmallScreen && (
        <Box sx={{ marginTop: "0px", textAlign: "center" }}>
          <Box
            component="img"
            src={scrollDownImg}
            alt="scroll down"
            width="24px"
            marginRight="10px"
            onClick={() => (window.location.href = "#v1state")}
          />
          <Typography sx={{ fontSize: "13px", color: "#ffffff" }}>
            Scroll down
          </Typography>
          <Typography sx={{ fontSize: "13px", color: "#787878" }}>
            to discover more
          </Typography>
        </Box>
      )}

      <V1States ref={V1BlockToAnimate} />

      <Box
        sx={{
          width: "100%",
          pt: isSmallScreen ? "50px" : isMediumScreen ? "80px" : "150px",
        }}
      >
        {/* Market part */}
        <Box sx={{ textAlign: "center" }}>
          <GradientText sx={{ pb: isSmallScreen ? "4px" : "24px" }} className="js-animation-block-1">
            Markets
          </GradientText>
          <Typography
            className="js-animation-block-1"
            sx={{
              fontSize: isSmallScreen
                ? "30px"
                : isMediumScreen
                ? "35px"
                : "46px",
              lineHeight: "40px",
              fontFamily: "MazzardH-ExtraBold",
              fontWeight: "700",
              textTransform: "uppercase",
              pb: isSmallScreen ? "4px" : "24px",
            }}
          >
            Trade Perpetuals With Us
          </Typography>
          <Typography
            className="js-animation-block-1"
            sx={{
              fontSize: isSmallScreen ? "13px" : "16px",
              lineHeight: "22px",
              color: "#787878",
              pb: "32px",
            }}
          >
            More perpetual markets will be added gradually.
          </Typography>
        </Box>

        {/* ETH/BTC data */}
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Box
            display="flex"
            // gap="20px"
            style={isSmallScreen ? { overflowX: "scroll" } : {}}
          >
            <TokenCard
              
              
              name="Ethereum"
              symbol="ETH"
              logo={ethLogo}
              price={2562.33}
              graph="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg"
              className="js-animation-block-1"
              // className={this.props.className}
            />
            <TokenCard
              // className="js-animation-block-1"
              name="Bitcoin"
              symbol="BTC"
              logo={btcLogo}
              price={38538.72}
              graph="https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg"
              className="js-animation-block-1"
            />
          </Box>
          <Box
            className="js-animation-block-1"
            sx={{
              p: "20px 30px",
              border: "2px solid #111015",
              borderRadius: "16px",
              textAlign: "center",
              flexGrow: 1,
              width: "30%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <Typography
              sx={{
                fontSize: isSmallScreen
                  ? "24px"
                  : isMediumScreen
                  ? "35px"
                  : "46px",
                lineHeight: "40px",
                fontFamily: "MazzardH-ExtraBold",
                fontWeight: "700",
                textTransform: "uppercase",
                pb: "24px",
              }}
            >
              Stay Tuned
            </Typography>
            <Typography
              sx={{
                width: "70%",
                fontSize: isSmallScreen ? "13px" : "16px",
                lineHeight: "22px",
                color: "#ffffff",
                pb: "20px",
              }}
            >
              Through governance, PALM holders will be able to vote which
              trading pairs should be listed next.
            </Typography>
            <Box display="flex">
              <Box
                component="img"
                src={token1Img}
                width={isSmallScreen ? "30px" : "40px"}
                height={isSmallScreen ? "30px" : "40px"}
                alt="token image"
                marginRight="10px"
              />
              <Box
                component="img"
                src={token2Img}
                width={isSmallScreen ? "30px" : "40px"}
                height={isSmallScreen ? "30px" : "40px"}
                alt="token image"
                marginRight="10px"
              />
              <Box
                component="img"
                src={token3Img}
                width={isSmallScreen ? "30px" : "40px"}
                height={isSmallScreen ? "30px" : "40px"}
                alt="token image"
                marginRight="10px"
              />
              <Box
                component="img"
                src={token4Img}
                width={isSmallScreen ? "30px" : "40px"}
                height={isSmallScreen ? "30px" : "40px"}
                alt="token image"
                marginRight="10px"
              />
              <Box
                component="img"
                src={token5Img}
                width={isSmallScreen ? "30px" : "40px"}
                height={isSmallScreen ? "30px" : "40px"}
                alt="token image"
                marginRight="10px"
              />
              <Box
                component="img"
                src={token6Img}
                width={isSmallScreen ? "30px" : "40px"}
                height={isSmallScreen ? "30px" : "40px"}
                alt="token image"
                marginRight="10px"
              />
              <Box
                component="img"
                src={token7Img}
                width={isSmallScreen ? "30px" : "40px"}
                height={isSmallScreen ? "30px" : "40px"}
                alt="token image"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Trading className="js-animation-block-1" />

      <Roadmap className="js-animation-block-1" />
      {/* <Roadmap className="js-animation-block-1" ref={trackerElementRef} /> */}

      <Palm className="js-animation-block-1" />

      <RewardsCycle className="js-animation-block-1" />

      <Blog className="js-animation-block-1" />

      {/* investors */}
      <Box
        sx={{
          textAlign: "center",
          width: "100%",
          px: isSmallScreen ? "0px" : "100px",
          pt: isSmallScreen ? "70px" : isMediumScreen ? "80px" : "100px",
          pb: isSmallScreen ? "0px" : isMediumScreen ? "80px" : "100px",
        }}
      >
        <GradientText className="js-animation-block-1" sx={{ pb: isSmallScreen ? "4px" : "24px" }}>
          BACKED BY
        </GradientText>
        <Typography
          className="js-animation-block-1"
          sx={{
            fontSize: isSmallScreen ? "24px" : isMediumScreen ? "35px" : "46px",
            lineHeight: "40px",
            fontFamily: "MazzardH-ExtraBold",
            fontWeight: "700",
            textTransform: "uppercase",
            pb: isSmallScreen ? "0" : "24px",
          }}
        >
          Significant investors
        </Typography>
        <Box
          sx={{
            mt: isSmallScreen ? "30px" : isMediumScreen ? "40px" : "48px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {investors.map((investor: IInvestor, idx: number) => (
            <Box className="js-animation-block-1" key={idx} p={isSmallScreen ? "10px" : "20px"} flex="0 0 16%">
              <Box
                component="img"
                src={investor.logo}
                width="120px"
                height="120px"
                sx={{ objectFit: "scale-down" }}
                alt={investor.name}
              />
            </Box>
          ))}
        </Box>
      </Box>

      <Social className="js-animation-block-1" />

      <FAQs className="js-animation-block-1" />
    </Box>
  );
};
export default Homepage;
