import {
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  styled,
  SvgIcon,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { ReactComponent as medium } from "assets/medium.svg";
import { ReactComponent as discord } from "assets/discord.svg";
import { ReactComponent as telegram } from "assets/telegram.svg";
import { ReactComponent as twitter } from "assets/twitter.svg";
import socialBackground from "assets/socialBackground.png";
import { Box, useTheme } from "@mui/system";
import { useState } from "react";

const StyledButton = styled(Button)`
  border: none;
  padding: 8px 24px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  border-radius: 24px;
`;

const StyledIconButton = styled(IconButton)`
  color: #ffffff;
  &:hover {
    opacity: 1;
  }
`;

interface Props {
  className: string
}

const Social = function ({ className }: Props) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: isSmallScreen ? "40px 30px" : "40px 50px",
        background: "#141416",
        borderRadius: "30px",
        overflow: "hidden",
        flexDirection: isSmallScreen ? "column" : "row",
        zIndex: 1,
        marginTop: isSmallScreen ? "90px" : "0",
      }}
    >
      <Box sx={{ width: isSmallScreen ? "100%" : "440px" }}>
        <Typography
          className={className}
          sx={{
            fontSize: isSmallScreen ? "26px" : "46px",
            lineHeight: isSmallScreen ? "36px" : "55px",
            fontFamily: "MazzardH-ExtraBold",
            fontWeight: "700",
            textTransform: "uppercase",
            pb: "24px",
          }}
        >
          JOIN US ON
          <br />
          SOCIAL NETWORKS
        </Typography>
        <Typography
          className={className}
          sx={{
            fontSize: isSmallScreen ? "13px" : "16px",
            lineHeight: "24px",
            marginBottom: "36px",
          }}
        >
          Be part of the community by joining our social networks and learn more
          about the future of the project, development and ideas.
        </Typography>
        <Box
          className={className}
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: "flex-start",
          }}
        >
          <StyledButton
            variant="contained"
            color="secondary"
            href="#"
            sx={{
              padding: "14px 36px",
              fontWeight: 500,
            }}
          >
            Join Socials
          </StyledButton>
          <Box
            display="flex"
            flexWrap="wrap"
            sx={{ margin: isSmallScreen ? "20px 0" : "0 20px" }}
          >
            <StyledIconButton
              onClick={() =>
                (window.location.href = "https://medium.com/@Palmswap")
              }
            >
              <SvgIcon
                component={medium}
                inheritViewBox
                sx={{
                  width: "32px",
                  height: "32px",
                  "&:hover": {
                    fill: "#6f57d1",
                  },
                }}
              />
            </StyledIconButton>
            <StyledIconButton
              onClick={() =>
                (window.location.href = "https://twitter.com/Palmswaporg")
              }
            >
              <SvgIcon
                component={twitter}
                inheritViewBox
                sx={{
                  width: "32px",
                  height: "32px",
                  "&:hover": {
                    fill: "#6f57d1",
                  },
                }}
              />
            </StyledIconButton>
            <StyledIconButton onClick={handleClick}>
              <SvgIcon
                component={telegram}
                inheritViewBox
                sx={{
                  width: "32px",
                  height: "32px",
                  "&:hover": {
                    fill: "#6f57d1",
                  },
                }}
              />
            </StyledIconButton>
            <StyledIconButton
              onClick={() =>
                (window.location.href = "https://discord.com/invite/B2EyhkQSZR")
              }
            >
              <SvgIcon
                component={discord}
                inheritViewBox
                sx={{
                  width: "32px",
                  height: "32px",
                  "&:hover": {
                    fill: "#6f57d1",
                  },
                }}
              />
            </StyledIconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: "calc(50% - 5px)",
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "center", vertical: "top" }}
            anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
          >
            <MenuItem>
              <Link
                href="https://t.me/PalmswapAnn"
                underline="none"
                fontSize="15px"
                color="#727272"
              >
                Announcements
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                href="https://t.me/Palmswapchat"
                underline="none"
                fontSize="15px"
                color="#727272"
              >
                Chat
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Box>
      <Box className={className} sx={{ height: isSmallScreen ? "135px" : "293px" }}>
        <Box
          component="img"
          src={socialBackground}
          alt="social background"
          sx={{ width: isSmallScreen ? "100%" : "450px" }}
        />
      </Box>
    </Box>
  );
};

export default Social;
