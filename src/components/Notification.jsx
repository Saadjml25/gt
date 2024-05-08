import { useTheme } from "react";
import {
  Box,
  InputBase,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CompanyLogo from "../assets/aui_logo.png"; // Import your company logo
import { tokens } from "../theme";

const NotificationWindow = ({ notifications }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      position="absolute"
      top="50px"
      right="10px"
      backgroundColor=""
      boxShadow={3}
      borderRadius="5px"
      p={2}
      zIndex={1000}
      width="300px"
      maxHeight="400px"
      overflow="auto"
    >
      {/* Company Logo */}
      <Box display="flex" justifyContent="center" alignItems="center" mb={2}>
        <img src={CompanyLogo} alt="Company Logo" width="50px" height="50px" />
      </Box>

      {/* Search Bar */}
      <Box display="flex" alignItems="center" mb={2}>
        <InputBase
          placeholder="Search notifications"
          fullWidth
          variant="outlined"
          startAdornment={
            <IconButton>
              <SearchIcon />
            </IconButton>
          }
        />
      </Box>

      {/* List of Notifications or Message */}
      {notifications.length ? (
        <List>
          {notifications.map((notification, index) => (
            <ListItem key={index} button>
              <ListItemText
                primary={notification.title}
                secondary={notification.description}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Box textAlign="center" color="#666">
          Nothing for now
        </Box>
      )}
    </Box>
  );
};

export default NotificationWindow;
