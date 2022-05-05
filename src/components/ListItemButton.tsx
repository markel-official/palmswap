import React, { useState } from "react";
import {
  ListItem,
  Collapse,
  List,
  Link,
  styled,
  Typography,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const StyledLink = styled(Link)({
  display: "flex",
  justifyContent: "center",
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

const ListItemButton = (props: any) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      {props.nav.children ? (
        <ListItem onClick={handleClick}>
          <NavLink sx={{ fontWeight: 700 }}>
            {props.nav.title}
            {open ? <ExpandLess /> : <ExpandMore />}
          </NavLink>
        </ListItem>
      ) : (
        <ListItem>
          <NavLink sx={{ fontWeight: 700 }} href={props.nav.route}>
            {props.nav.title}
          </NavLink>
        </ListItem>
      )}
      {props.nav.children && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {props.nav.children.map((nav: any, i: any) => (
              <ListItem sx={{ py: 0 }} key={i}>
                <NavLink
                  href={nav.route}
                  sx={{ flexDirection: "column", alignItems: "center" }}
                >
                  <Typography sx={{ fontSize: "13px", color: "#DBDBDB" }}>
                    {nav.title}
                  </Typography>
                  <Typography sx={{ fontSize: "11px", color: "#727272" }}>
                    {nav.description}
                  </Typography>
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default ListItemButton;
