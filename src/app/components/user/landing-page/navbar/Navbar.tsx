"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import Image from "next/image";

const NavlinksButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: "black",
  fontWeight:600,
  cursor:"pointer",
}));
const NavIconButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  color: "white",
  outline: "none",
  margin:"0px 10px",
  border: "1px solid #932889",
  "&:hover": {
    border: "1px solid #932889",
  },
  borderRadius:"25px",
  padding:"5px 15px"
//   border-radius: 25px;
//     padding: 0px 15px;
}));
const NavlinksBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  backgroundColor: "white",
  padding: "10px 45px",
  border: "1px solid white",
  borderRadius: "30px",
  position: 'absolute',
  right: '27%',
  zIndex: '-1'
}));
const NaviconbuttonBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
  backgroundColor: "black",
  padding: "12px 35px",
  border: "1px solid black",
  borderRadius: "30px",
  
}));

const ButtonIconImage = styled(Image)(({ theme }) => ({
    marginLeft:"5px"
  }));
const AppBarMain = styled(AppBar)(({ theme }) => ({
    marginLeft:"5px"
  }));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ["Home", "Services", "Career", "Blog", "About Us"];
const navButtonIcon = [
  { text: "contact us", icon: "/contact-us.png" },
  { text: "let's talk", icon: "/Lets talk.png" },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#932889", position:"absolute", top:"30px", padding:"10px 0px" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {/* MUI */}
          </Typography>
          <NavlinksBox>
            {navItems.map((item) => (
              <NavlinksButton key={item}>{item}</NavlinksButton>
            ))}
          </NavlinksBox>
          <NaviconbuttonBox>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{display:"flex"}}>
                <Image
                  src="/lang-icon.png"
                  alt="language-icon"
                  height={30}
                  width={35}
                />
              </Box>
              <Box>
                {navButtonIcon.map((item, index) => (
                  <NavIconButton key={index} variant="outlined" size="small">
                    {item.text}
                      <ButtonIconImage
                        src={item.icon}
                        height={20}
                        width={20}
                        alt={item.text}
                      />
                  </NavIconButton>
                ))}
              </Box>
            </Box>
          </NaviconbuttonBox>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
