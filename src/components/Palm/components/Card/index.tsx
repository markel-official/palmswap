import { styled, Typography, useMediaQuery } from "@mui/material";
import { Box, useTheme } from "@mui/system";

interface IProp {
  icon: string;
  title: string;
  desc: string;
  color: string;
}

const StyledCard = styled(Box)`
  flex: 1;
  text-align: center;
  padding: 70px 70px 40px;
  position: relative;
  :hover {
    .card-image {
      transform: scale(1.1);
      transition: 0.5s;
    }
  },
`;

const Card = function (props: IProp) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      {isSmallScreen ? (
        <Box
          sx={{
            display: "flex",
            flex: "none",
            positiion: "relative",
            width: "305px",
            marginBottom: "30px",
            // gap: "10px",
          }}
        >
          <Box sx={{ marginRight: "10px" }}>
            <Box
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: "20px",
                overflow: "hidden",
                marginTop: "40px",
              }}
            >
              <Box
                sx={{
                  padding: "25px",
                  width: "40px",
                  background: props.color,
                  filter: "blur(30px)",
                  margin: "-30px auto 0",
                }}
              ></Box>
            </Box>

            <Box
              className="card-image"
              sx={{
                width: "65px",
                height: "65px",
                padding: "15px",
                border: `1px solid ${props.color}`,
                borderRadius: "15px",
                background: `${props.color}26`,
                margin: "-130px auto 20px",
                boxShadow: `0px 0px 15px 3px ${props.color}4c`,
              }}
            >
              <Box
                component="img"
                src={props.icon}
                alt="governance"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: isSmallScreen
                  ? "16px"
                  : isMediumScreen
                  ? "18px"
                  : "20px",
                lineHeight: "40px",
                letterSpacing: "-0.5px",
                fontWeight: "600",
                pb: "8px",
                textAlign: "left",
              }}
            >
              {props.title}
            </Typography>
            <Typography
              sx={{
                fontSize: isSmallScreen ? "13px" : "16px",
                color: "#787878",
                textAlign: "left",
              }}
            >
              {props.desc}
            </Typography>
          </Box>
        </Box>
      ) : (
        <StyledCard
          sx={{
            "&:hover": {
              ".gradient-Box": {
                filter: "blur(70px)",
              },
            },
            marginRight: "30px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              padding: "80px",
              overflow: "hidden",
            }}
          >
            <Box
              className="gradient-Box"
              sx={{
                margin: "-250px auto 0",
                padding: "80px",
                width: "40px",
                background: props.color,
                filter: "blur(55px)",
              }}
            ></Box>
          </Box>
          <Box
            className="card-image"
            sx={{
              width: "84px",
              height: "84px",
              padding: "15px",
              border: `1px solid ${props.color}`,
              borderRadius: "30px",
              background: `${props.color}26`,
              margin: "-114px auto 20px",
              boxShadow: `0px 0px 15px 3px ${props.color}4c`,
            }}
          >
            <Box
              component="img"
              src={props.icon}
              alt="governance"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
          <Typography
            sx={{
              fontSize: isSmallScreen
                ? "16px"
                : isMediumScreen
                ? "18px"
                : "20px",
              lineHeight: "40px",
              letterSpacing: "-0.5px",
              fontWeight: "600",
              pb: "8px",
            }}
          >
            {props.title}
          </Typography>
          <Typography
            sx={{ fontSize: isSmallScreen ? "13px" : "14px", color: "#787878" }}
          >
            {props.desc}
          </Typography>
        </StyledCard>
      )}
    </>
  );
};

export default Card;
