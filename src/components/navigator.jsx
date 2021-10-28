import * as React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import { Drawer } from "@mui/material";
import { List } from "@mui/material";
import { Box } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemButton } from "@mui/material";
import { ListItemIcon } from "@mui/material";
import { ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import CarRental from "@mui/icons-material/CarRental";
import SettingsIcon from "@mui/icons-material/Settings";

const categories = [
  {
    id: "Build",
    children: [
      {
        id: "Users",
        icon: <PeopleIcon />,
        active: false,
        link: "/users",
      },
      {
        id: "Listings",
        icon: <DnsRoundedIcon />,
        link: "/listings",
        active: false,
      },
      { id: "Cars", icon: <CarRental />, link: "/cars", active: false },
      {
        id: "Settings",
        icon: <SettingsIcon />,
        link: "/settings",
        active: false,
      },
    ],
  },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const { ...other } = props;

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem
          sx={{ ...item, ...itemCategory, fontSize: 22, color: "#fff" }}
        >
          Admin Portal
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: "#101F33" }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: "#fff" }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active, link }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton
                  component={Link}
                  to={link}
                  selected={active}
                  sx={item}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
