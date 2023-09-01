import { ExpandMore, Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Search = styled("div")(({ theme }) => ({
  flexGrow: 0.4,
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    border: "1px solid #333",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "266px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "330px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const options = ["All Categories", "Vehicles", "Accommodation", "Electronics & Appliances", "Mobiles & Tablets", "Vacation"];
const Header2 = () => {


  const [isRotated, setIsRotated] = useState(false);

  
  const [anchorE2, setAnchorE2] = React.useState(null);
  const openn = Boolean(anchorE2);
  const handleClick = (event) => {
    setAnchorE2(event.currentTarget);
    setIsRotated(prevState => !prevState);

  };
  const handleClosee = () => {
    setAnchorE2(null);
    setIsRotated(false);

  };
  



  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Stack alignItems={"center"}>
        <EmojiEventsOutlinedIcon />
        <Typography variant="body2">Raffle</Typography>
      </Stack>

      <Search
        sx={{
          display: "flex",
          borderRadius: "22px",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <div>
          <List
            component="nav"
            aria-label="Device settings"
            sx={{
              // @ts-ignore
              bgcolor: theme.palette.myColor.main,
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              p: "0",
            }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                // className="border"
                sx={{
                  width: 93,
                  textAlign: "center",
                  "&:hover": { cursor: "pointer" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px" }} />
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
                sx={{ fontSize: "13px" }}
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </div>
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={2} color="primary">
            <NotificationsIcon />
          </StyledBadge>
        </IconButton>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ConfirmationNumberIcon />
          </StyledBadge>
        </IconButton>

        
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
           
            <Tooltip title="Account settings">
              <IconButton
                disableRipple
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 , display: 'flex', alignItems: 'center',justifyContent: 'center' }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                <Typography sx={{ ml: 1 }}>User</Typography>

                <KeyboardArrowDownIcon style={{
        transition: 'transform 0.3s',
        transform: isRotated ? 'rotate(180deg)' : 'rotate(0)',
      }} />

              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorE2}
            id="account-menu"
            open={openn}
            onClose={handleClosee}
            onClick={handleClosee}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClosee}>
              <Avatar /> Profile
            </MenuItem>
            <MenuItem onClick={handleClosee}>
              <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleClosee}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Add another account
            </MenuItem>
            <MenuItem onClick={handleClosee}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleClosee}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
      </Stack>
    </Container>
  );
};

export default Header2;
