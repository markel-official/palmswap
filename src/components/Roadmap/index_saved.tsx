import { Grid, styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

import onChainIcon from "assets/onChain.svg";
import thunderIcon from "assets/thunder.svg";
import gLiquidityIcon from "assets/gLiquidity.svg";
import vAMMIcon from "assets/vAMM.png";
import dLiquidityIcon from "assets/deep-liquidity.png";
import leverageIcon from "assets/leverage.svg";

interface Props {
  className: string
}

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

const StyledGrid = styled(Grid)`
  position: relative;
  ::before {
    content: "";
    padding: 5px;
    border-radius: 5px;
    background: #8568db;
    position: absolute;
    right: -27px;
    top: 51px;
  }
`;

const StyledContainer = styled(Grid)`
  position: relative;
  border-right: 3px solid #6d80ca26;
  text-align: right;
  padding-right: 20px;
  ::before {
    content: "";
    padding: 5px;
    border-radius: 5px;
    background: #8568db;
    position: absolute;
    right: -7px;
    bottom: 10px;
  }
`;

const Roadmap = function ({ className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      textAlign="center"
      sx={{
        width: "100%",
        marginTop: isSmallScreen ? "70px" : isMediumScreen ? "80px" : "150px",
        marginBottom: isSmallScreen ? "20px" : "0px",
        position: "relative",
      }}
    >
      <GradientText className={className} sx={{ pb: isSmallScreen ? "4px" : "24px" }}>
        Advantages
      </GradientText>
      <Typography
        className={className}
        sx={{
          fontSize: isSmallScreen ? "30px" : isMediumScreen ? "35px" : "40px",
          lineHeight: "40px",
          fontFamily: "MazzardH-ExtraBold",
          fontWeight: "700",
          textTransform: "uppercase",
          pb: isSmallScreen ? "4px" : "24px",
        }}
      >
        Why Palmswap Protocol?
      </Typography>
      <Typography
        className={className}
        sx={{
          fontSize: isSmallScreen ? "13px" : "16px",
          lineHeight: "22px",
          color: "#787878",
          pb: "20px",
        }}
      >
        In order to meet the needs of all traders we rely on Multi-protocol.
      </Typography>
      {isSmallScreen ? (
        <>
          <Box
            sx={{
              textAlign: "left",
              marginLeft: "20px",
              borderLeft: "4px solid #333338",
            }}
          >
            {/* Tracker */}
            <Box
              className="tracker"
              sx={{
                display: "flex",
                marginTop: "10px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  width={15}
                  height={15}
                  margin="22px 10px"
                  sx={{ background: "#8568DB", borderRadius: "8px" }}
                />
              </Box>
              {/* Tracker text */}
              <Box
                maxWidth="400px"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: "#8568DB",
                    fontSize: "30px",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  V1
                </Typography>
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  Q2 2022
                </Typography>
              </Box>
            </Box>

            {/* First item */}
            <Box
              className={className}
              sx={{
                display: "flex",
                marginTop: "20px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  height: "35px",
                  background: "#1E2130",
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  component="img"
                  src={onChainIcon}
                  width={19}
                  height={19}
                  margin="8px"
                />
              </Box>
              <Box maxWidth="400px" sx={{ marginBottom: "16px" }}>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                    marginBottom: "12px",
                  }}
                >
                  Fully on-chain
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                  Trade long and short with up to 10x leverage, no sign-up, no
                  middleman, no waiting.
                </Typography>
              </Box>
            </Box>

            {/* Second item */}
            <Box
              className={className}
              sx={{
                display: "flex",
                marginTop: "20px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  height: "35px",
                  background: "#1E2130",
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  component="img"
                  src={thunderIcon}
                  width={19}
                  height={19}
                  margin="8px"
                />
              </Box>
              <Box maxWidth="400px" sx={{ marginBottom: "16px" }}>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                    marginBottom: "12px",
                  }}
                >
                  Use different Order Types
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                Needed order types as limit orders, take profit and stop loss on-chain available now.
                </Typography>
              </Box>
            </Box>
            
            {/* Third item */}
            <Box
              className={className}
              sx={{
                display: "flex",
                marginTop: "20px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  height: "35px",
                  background: "#1E2130",
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  component="img"
                  src={gLiquidityIcon}
                  width={19}
                  height={19}
                  margin="8px"
                />
              </Box>
              <Box maxWidth="400px" sx={{ marginBottom: "16px" }}>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                    marginBottom: "8px",
                  }}
                >
                  Guaranteed liquidity
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                  Trade instantly with guaranteed liquidity using vAMM
                  technology at any time.
                </Typography>
              </Box>
            </Box>
            

            {/* ------------------ */}

            {/* Tracer */}
            <Box
              sx={{
                display: "flex",
                marginTop: "10px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  width={15}
                  height={15}
                  margin="22px 10px"
                  sx={{ background: "#8568DB", borderRadius: "8px" }}
                />
              </Box>
              <Box
                maxWidth="400px"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: "#8568DB",
                    fontSize: "30px",
                    fontWeight: "600",
                    marginRight: "20px",
                  }}
                >
                  V2
                </Typography>
                <Typography component="span" sx={{ fontSize: "16px" }}>
                  Q3 2022
                </Typography>
              </Box>
            </Box>


            {/* Fourth item */}
            <Box
              className={className}
              sx={{
                display: "flex",
                marginTop: "20px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  height: "35px",
                  background:
                    "linear-gradient(to right, #9d7be9 0%, #6f57d1 100%)",
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  component="img"
                  src={vAMMIcon}
                  width={19}
                  height={19}
                  margin="8px"
                />
              </Box>
              <Box maxWidth="400px" sx={{ marginBottom: "16px" }}>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                    marginBottom: "12px",
                  }}
                >
                  Dynamic vAMM
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                  The upgrade to Dynamic vAMM is being implemented to ensure
                  optimal slippage and liquidity for traders.
                </Typography>
              </Box>
            </Box>

            {/* Fifth item */}
            <Box
              className={className}
              sx={{
                display: "flex",
                marginTop: "20px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  height: "35px",
                  background:
                    "linear-gradient(to right, #9d7be9 0%, #6f57d1 100%)",
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  component="img"
                  src={dLiquidityIcon}
                  width={19}
                  height={19}
                  margin="8px"
                />
              </Box>
              <Box maxWidth="400px" sx={{ marginBottom: "16px" }}>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                    marginBottom: "8px",
                  }}
                >
                  Deep Liquidity
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                  Dynamic K allows us to ensure that prices are always traded in
                  the part of the curve with the highest liquidity.
                </Typography>
              </Box>
            </Box>

            {/* Sixth item */}
            <Box
              className={className}
              sx={{
                display: "flex",
                marginTop: "20px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  height: "35px",
                  background:
                    "linear-gradient(to right, #9d7be9 0%, #6f57d1 100%)",
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  component="img"
                  src={leverageIcon}
                  width={19}
                  height={19}
                  margin="8px"
                />
              </Box>
              <Box maxWidth="400px" sx={{ marginBottom: "16px" }}>
                <Typography
                  sx={{
                    fontSize: isMediumScreen ? "14px" : "16px",
                    marginBottom: "8px",
                  }}
                >
                  High Leverage
                </Typography>
                <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                  Users can trade perpetuals with up 50x leverage and profit of
                  our low fee policy.
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                marginTop: "10px",
                marginRight: "30px",
                marginLeft: "-20px",
              }}
            >
              <Box
                sx={{
                  borderRadius: "4px",
                  marginRight: "20px",
                }}
              >
                <Box
                  width={15}
                  height={15}
                  margin="6px 10px"
                  sx={{ background: "#8568DB", borderRadius: "8px" }}
                />
              </Box>

              <Box
                className={className}
                maxWidth="400px"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Typography
                  className={className}
                  component="span"
                  sx={{
                    fontSize: "18px",
                    fontFamily: "MazzardH-ExtraBold",
                    marginBottom: "0px",
                  }}
                >
                  TO BE CONTINUED
                </Typography>
              </Box>
            </Box>
          </Box>
          <Typography
            className={className}
            sx={{
              fontSize: "13px",
              color: "#787878",
              textAlign: "left",
              margin: "8px 30px 0 55px",
            }}
          >
            We are persistently working to bring the platform to a higher level.
          </Typography>
        </>
      ) : (
        <>
          <Grid container sx={{ marginTop: "30px" }}>
            <StyledContainer
              container
              item
              xs={6}
              direction="column"
              spacing="30px"
              paddingBottom="70px"
            >
              <StyledGrid item xs={6}>
                <Box
                  className="tracker-2"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    // gap: "20px",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#8568DB",
                      fontSize: "36px",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    V1
                  </Typography>
                  <Typography component="span" sx={{ fontSize: "16px" }}>
                    Q2 2022
                  </Typography>
                </Box>
              </StyledGrid>
              <StyledGrid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    // gap: "20px",
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: "#8568DB",
                      fontSize: "36px",
                      fontWeight: "600",
                      marginRight: "20px",
                    }}
                  >
                    V2
                  </Typography>
                  <Typography component="span" sx={{ fontSize: "16px" }}>
                    Q4 2022
                  </Typography>
                </Box>
              </StyledGrid>
            </StyledContainer>
            <Grid
              container
              item
              xs={6}
              spacing="30px"
              direction="column"
              sx={{
                textAlign: "left",
                paddingLeft: "20px",
                paddingBottom: "70px",
                flexWrap: "nowrap",
              }}
            >
              <Grid item xs={6}>
                <Box display="flex" flexDirection="column">
                  {/* First item */}
                  <Box
                    className={className}
                    sx={{
                      display: "flex",
                      marginTop: "8px",
                      marginRight: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "35px",
                        background: "#1E2130",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        src={onChainIcon}
                        width={15}
                        height={15}
                        margin="10px"
                      />
                    </Box>
                    <Box maxWidth="400px">
                      <Typography
                        sx={{
                          fontSize: isMediumScreen ? "14px" : "16px",
                          marginBottom: "8px",
                        }}
                      >
                        Fully on-chain
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                        Trade long and short with up to 10x leverage, no
                        sign-up, no middleman, no waiting.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Second item */}
                  <Box
                    className={className}
                    sx={{
                      display: "flex",
                      marginTop: "20px",
                      marginRight: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "35px",
                        background: "#1E2130",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        src={thunderIcon}
                        width={15}
                        height={15}
                        margin="10px"
                      />
                    </Box>
                    <Box maxWidth="400px">
                      <Typography
                        sx={{
                          fontSize: isMediumScreen ? "14px" : "16px",
                          marginBottom: "8px",
                        }}
                      >
                        Use different Order Types
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                        Needed order types as limit orders, take profit and stop
                        loss on-chain available now.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Third item */}
                  <Box className={className} sx={{ display: "flex", marginTop: "20px" }}>
                    <Box
                      sx={{
                        height: "35px",
                        background: "#1E2130",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        src={gLiquidityIcon}
                        width={15}
                        height={15}
                        margin="10px"
                      />
                    </Box>
                    <Box maxWidth="400px">
                      <Typography
                        sx={{
                          fontSize: isMediumScreen ? "14px" : "16px",
                          marginBottom: "8px",
                        }}
                      >
                        Guaranteed liquidity
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                        Trade instantly with guaranteed liquidity using vAMM
                        technology at any time.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box display="flex" flexDirection="column">
                  {/* Fourth item */}
                  <Box
                    className={className}
                    sx={{
                      display: "flex",
                      marginRight: "30px",
                      marginTop: "8px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "35px",
                        background:
                          "linear-gradient(to right, #9d7be9 0%, #6f57d1 100%)",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        src={vAMMIcon}
                        width={15}
                        height={15}
                        margin="10px"
                      />
                    </Box>
                    <Box maxWidth="400px">
                      <Typography
                        sx={{
                          fontSize: isMediumScreen ? "14px" : "16px",
                          marginBottom: "8px",
                        }}
                      >
                        Dynamic vAMM
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                        The upgrade to Dynamic vAMM is being implemented to
                        ensure optimal slippage and liquidity for traders.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Fifth item */}
                  <Box
                    className={className}
                    sx={{
                      display: "flex",
                      marginTop: "20px",
                      marginRight: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        height: "35px",
                        background:
                          "linear-gradient(to right, #9d7be9 0%, #6f57d1 100%)",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        src={dLiquidityIcon}
                        width={15}
                        height={15}
                        margin="10px"
                      />
                    </Box>
                    <Box maxWidth="400px">
                      <Typography
                        sx={{
                          fontSize: isMediumScreen ? "14px" : "16px",
                          marginBottom: "8px",
                        }}
                      >
                        Deep Liquidity
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                        Dynamic K allows us to ensure that prices are always
                        traded in the part of the curve with the highest
                        liquidity.
                      </Typography>
                    </Box>
                  </Box>

                  {/* Six item */}
                  <Box className={className} sx={{ display: "flex", marginTop: "20px" }}>
                    <Box
                      sx={{
                        height: "35px",
                        background:
                          "linear-gradient(to right, #9d7be9 0%, #6f57d1 100%)",
                        borderRadius: "4px",
                        marginRight: "10px",
                      }}
                    >
                      <Box
                        component="img"
                        src={leverageIcon}
                        width={15}
                        height={15}
                        margin="10px"
                      />
                    </Box>
                    <Box maxWidth="400px">
                      <Typography
                        sx={{
                          fontSize: isMediumScreen ? "14px" : "16px",
                          marginBottom: "8px",
                        }}
                      >
                        High Leverage
                      </Typography>
                      <Typography sx={{ fontSize: "13px", color: "#787878" }}>
                        Users can trade perpetuals with up 50x leverage and
                        profit of our low fee policy.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Typography
            className={className}
            sx={{
              fontSize: isSmallScreen ? "13px" : "16px",
              lineHeight: "22px",
              fontFamily: "MazzardH-ExtraBold",
              fontWeight: "700",
              textTransform: "uppercase",
              pt: "20px",
              pb: "24px",
            }}
          >
            To Be Continued
          </Typography>
          <Typography
            className={className}
            sx={{
              fontSize: isSmallScreen ? "12px" : "14px",
              lineHeight: "22px",
              color: "#787878",
            }}
          >
            We are persistently working to bring the <br />
            platform to a higher level.
          </Typography>
        </>
      )}
    </Box>
  );
};

export default Roadmap;
