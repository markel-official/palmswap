import { MenuItem, Box, styled, Link, Typography } from "@mui/material";

const StyledLink = styled(Link)({
  display: "inline-block",
  width: "100%",
  color: "#fff",
  textDecoration: "none",
});

const NavLink = styled(StyledLink)({
  cursor: "pointer",
  padding: "6px 10px",
  fontSize: "16px",
  lineHeight: "24px",
});

const ListNavItem = (props: any) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box ml="32px">
        {props.nav.children ? (
          <NavLink
            href="#"
            sx={{
              paddingBottom: "10px",
              "&:hover": {
                "& + div": {
                  display: "block",
                },
              },
            }}
          >
            {props.nav.title}
          </NavLink>
        ) : (
          <NavLink href={props.nav.route}>{props.nav.title}</NavLink>
        )}

        {!!props.nav.children && (
          <Box
            sx={{
              position: "absolute",
              top: "40px",
              left: "0px",
              background: "#141416",
              borderRadius: "4px",
              display: "none",
              zIndex: 1,
              "&:hover": {
                display: "block",
              },
            }}
          >
            {props.nav.children.map((nav: any, i: any) => (
              <MenuItem
                key={i}
                style={{ minWidth: 166 }}
                sx={{
                  "&:hover": {
                    opacity: 0.6,
                  },
                }}
              >
                <NavLink href={nav.route}>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {nav.icon && (
                      <Box
                        component="img"
                        src={nav.icon}
                        alt="icon"
                        sx={{ marginRight: "10px" }}
                      />
                    )}
                    {nav.title}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      lineHeight: "22px",
                      color: "#787878",
                    }}
                  >
                    {nav.description}
                  </Typography>
                </NavLink>
              </MenuItem>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ListNavItem;
