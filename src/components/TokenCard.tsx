import { Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface Props {
  name: string;
  symbol: string;
  logo: string;
  price: number;
  graph: string;
  className: string
}

const TokenCard = function ({ name, symbol, logo, price, graph, className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isSmallScreen ? (
        <Box
          className={className}
          sx={{
            width: "305px",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              p: "20px 16px",
              background: "#141416",
              border: "1px solid #111015",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box display="flex" flex={1} flexDirection="column">
              <Box display="flex">
                <Box
                  sx={{
                    width: isMediumScreen ? "35px" : "40px",
                    height: isMediumScreen ? "35px" : "40px",
                    marginRight: "10px",
                  }}
                  component="img"
                  src={logo}
                />
                <Box>
                  <Typography
                    sx={{ fontSize: isMediumScreen ? "14px" : "16px" }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: isSmallScreen ? "10px" : "12px",
                      lineHeight: "16px",
                      fontWeight: "300",
                      color: "#777777",
                    }}
                  >
                    {symbol}
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: isMediumScreen ? "27px" : "32px",
                    margin: "20px 0",
                  }}
                >
                  ${(+price.toPrecision(6)).toLocaleString()}
                </Typography>
                <Box
                  sx={{
                    filter: "hue-rotate(85deg) saturate(80%) brightness(0.85)",
                    background: "url('assets/stack.png')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    width: "108px",
                    marginLeft: "17px",
                  }}
                  component="img"
                  src={graph}
                />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#158D4D",
                  }}
                >
                  (+13.04%)
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#777777",
                  }}
                >
                  24H Change
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#777777",
                  }}
                >
                  $2,510,641.41
                </Typography>
                <Typography
                  sx={{
                    fontSize: "11px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#777777",
                  }}
                >
                  24H Volume
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          className={className}
          sx={{
            width: "250px",
            marginRight: "20px",
            marginBottom: "20px",
          }}
        >
          <Box
            sx={{
              p: "20px 16px",
              background: "#141416",
              border: "1px solid #111015",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box display="flex" flex={1} flexDirection="column">
              <Box display="flex">
                <Box
                  sx={{
                    width: isMediumScreen ? "35px" : "40px",
                    marginRight: "10px",
                  }}
                  component="img"
                  src={logo}
                />
                <Box>
                  <Typography
                    sx={{ fontSize: isMediumScreen ? "14px" : "16px" }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      lineHeight: "16px",
                      fontWeight: "300",
                      color: "#777777",
                    }}
                  >
                    {symbol}
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: 700,
                  lineHeight: isMediumScreen ? "27px" : "32px",
                  margin: "20px 0",
                }}
              >
                ${price.toLocaleString()}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#158D4D",
                  }}
                >
                  (+13.04%)
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#777777",
                  }}
                >
                  24H Change
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#777777",
                  }}
                >
                  $2,510,641.41
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    fontWeight: "300",
                    color: "#777777",
                  }}
                >
                  24H Volume
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: "100%",
                filter: "hue-rotate(85deg) saturate(80%) brightness(0.85)",
                background: "url('assets/stack.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                paddingTop: "20px",
              }}
              component="img"
              src={graph}
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default TokenCard;
