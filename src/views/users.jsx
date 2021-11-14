import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { useMediaQuery } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import Content from "../components/content/userContent.jsx";
import Navigator from "../components/navigator.jsx";
import Header from "../components/header.jsx";
import { useContext } from "react";
import userContext from "../context/userContext";

const drawerWidth = 256;

export default function Paperbase() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const { userInfo } = useContext(userContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header
            onDrawerToggle={handleDrawerToggle}
            label1="Users"
            username={userInfo}
          />
          <Box
            component="main"
            sx={{ flex: 1, py: 6, px: 4, bgcolor: "#eaeff1" }}
          >
            <Content />
          </Box>
          <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}></Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
