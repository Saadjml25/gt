


import React, { useState, useContext } from "react";
import { Box, IconButton, useTheme, Menu, MenuItem } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import NotificationWindow from "../../components/Notification";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  // State variables
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Navigation
  const navigate = useNavigate(); // Initialize useNavigate

  // Functions
  const toggleNotifications = () => {
    setNotificationsOpen((prevState) =>prevState);
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log("Logging out...");
    handleClose(); // Close the dropdown after logout
  };

  const handleEditProfile = () => {
    // Navigate to the edit profile page
    navigate('/form/'); // Adjust the path according to your routing setup
    handleClose(); // Close the dropdown after action
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark"? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>

        <IconButton onClick={toggleNotifications}>
          <NotificationsOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton onClick={handleProfileClick}>
          <PersonOutlinedIcon />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
          <MenuItem onClick={handleEditProfile}>Edit Profile</MenuItem>
        </Menu>

        {isNotificationsOpen && <NotificationWindow notifications={[]} />}
      </Box>
    </Box>
  );
};

export default Topbar;