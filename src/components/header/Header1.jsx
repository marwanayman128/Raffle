import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTranslation } from 'react-i18next';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
const options = ["ar", "en"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);

  const { i18n } = useTranslation();

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    const selectedLanguage = options[index];
    i18n.changeLanguage(selectedLanguage);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        bgcolor: "#1976D2",
        py: "4px",
        
      }}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"} >
          <Stack sx={{ mr: 20 }} display={{ xs: "none", sm: "none", md: "flex" }} direction={"row"} alignItems={"center"} >
            <Typography
              sx={{
                mr: 2,
                p: "4px 10px",
                bgcolor: "#D23F57",
                borderRadius: "12px",
                fontSize: "12px",
                fontWeight: "bold",
                color: "#fff",
              }}
              variant="body2"
            >
              Demo
            </Typography>

            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 300,
                color: "#fff",
              }}
              variant="body2"
            >
              Free Express Shipping
            </Typography>
          </Stack>

          <Typography sx={{ display: "flex", alignItems: "center", gap: 1, color: "#fff" }}>
            <SmartphoneIcon sx={{ fontSize: 20, color: "#fff", ml: 3 }} />
            <Typography sx={{ fontSize: 14 }}>Call Us(+02)</Typography>
            <Typography sx={{ fontSize: 14 }}>01122990209</Typography>
          </Typography>

          <Box flexGrow={1} />

          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
                <Typography style={{ fontSize: "14px", color: "#fff" }}>
                  Light
                </Typography>
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "16px" }} />
                <Typography style={{ fontSize: "14px", color: "#fff" }}>
                  Dark
                </Typography>
              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0, ml: 2 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex].toUpperCase()}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>

          <Menu
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                sx={{ fontSize: "11px", p: "3px 10px", minHeight: "10px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={() => handleMenuItemClick(event, index)}
              >
                {option.toUpperCase()}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              cursor: "pointer",
              ml: 2,
            }}
            onClick={() => {
              window.open("https://twitter.com", "_blank");
            }}
          />
          <FacebookIcon
            sx={{
              fontSize: "16px",
              mx: 1,
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              window.open("https://www.facebook.com", "_blank");
            }}
          />
          <InstagramIcon
            sx={{
              fontSize: "16px",
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={() => {
              window.open("https://www.instagram.com", "_blank");
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
