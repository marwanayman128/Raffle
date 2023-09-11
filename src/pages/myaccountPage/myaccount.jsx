/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea } from '@mui/material';
const fetchRandomData = () => {
  return axios.get('https://randomuser.me/api');
}

const getFullName = (user) => {
  const { name: { first, last } } = user;
  return `${first} ${last}`;
}
export default function myaccount() {
  const [userInfos, setUserInfos] = useState([]);

  const addUser = () => {
    fetchRandomData()
      .then((response) => {
        const newUser = response.data.results[0];
        setUserInfos([...userInfos, newUser]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    // Fetch an initial user when the component mounts
    addUser();
  }, []);

  return (
    <>
      
      <Box sx={{ pt:10, alignItems: "center", display: "flex", flexDirection: "column" }}>
      <Button onClick={addUser} variant="contained" size="medium">Add User</Button>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, p: 10 }}>
        {
          userInfos.map((userInfo, id) => (


            <Card key={id} sx={{ maxWidth: 245 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="160"
                  image={userInfo.picture.large}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {getFullName(userInfo)}

                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>
          ))}
      </Box>
    </>
  )
}
