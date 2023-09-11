/* eslint-disable react/prop-types */
import { ExpandMore } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Link } from 'react-router-dom';


// eslint-disable-next-line react/prop-types
const Links = ({ title, subMenuItems }) => {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (subMenuItems.length > 0) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (subMenuItems.length > 0) {
      setHovered(false);
    }
  };

  return (
    <Box
      sx={{
        ":hover .show-when-hover": { display: subMenuItems.length > 0 ? "block" : "none" },
        ":hover": { cursor: "pointer" },
        position: "relative",
        display: "flex",
        alignItems: "center",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={"/"} className="link-no-underline" > 
        <Typography variant="body1">{title}</Typography>
      </Link>
      {subMenuItems.length > 0 && <ExpandMore sx={{ fontSize: "16px", ml: 1 }} />}
      <Box
        className="show-when-hover"
        sx={{
          position: "absolute",
          top: "100%",
          minWidth: "170px",
          left: "50%",
          transform: "translateX(-50%)",
          display: isHovered ? "block" : "none",
          zIndex: 2,
        }}
      >
        <Paper sx={{ mt: 2 }} className="">
          <nav aria-label="secondary mailbox folders">
            <List>
              {subMenuItems.map((item, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton
                    sx={{
                      display: "flex",
                      p: 0,
                      px: 1.5,
                    }}
                  >
                    <ListItemText
                      sx={{
                        "& .MuiTypography-root": {
                          fontSize: "15px",
                          fontWeight: 300,
                        },
                      }}
                      primary={item}
                    />
                    <Box flexGrow={1} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </nav>
        </Paper>
      </Box>
    </Box>
  );
};


export default Links;
