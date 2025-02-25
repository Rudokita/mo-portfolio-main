import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Header.module.css"; // Import CSS for navbar styling

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#2c3e50", padding: "0.5rem 0" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            component={Link}
            to="/"
            className={styles.navTitle} // Apply styling
          >
            PORTFOLIO Michalina Obrycka
          </Typography>
          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: "1rem" }}>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/drawings"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              Drawings
            </Button>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/CV eng/dk"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              CV eng/dk
            </Button>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/UX/UI projects"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              UX/UI Projects
            </Button>
            <Button
              className={styles.navLink}
              color="inherit"
              component={Link}
              to="/contact"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": {
                  textDecoration: "underline",
                  textDecorationColor: "white",
                },
              }}
            >
              Contact
            </Button>
          </Box>
          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* Mobile Navigation Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <List>
          {["Home", "drawings", "CV eng/dk", "UX/UI projects", "Contact"].map(
            (text, index) => (
              <ListItem
                button
                key={index}
                component={Link}
                to={`/${text.toLowerCase()}`}
                onClick={handleDrawerToggle}
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.1)", // ✅ Highlight effect
                    textDecoration: "underline", // ✅ Underline text
                  },
                  fontFamily: "'Poppins', sans-serif", // ✅ Custom font
                  fontSize: "1.2rem", // ✅ Bigger font size
                  fontWeight: 500, // ✅ Medium weight
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
