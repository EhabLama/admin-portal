import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import awsconfig from "../../aws-exports";
import { Amplify, API } from "aws-amplify";
import { listUsers, listCars } from "../../graphql/queries";

Amplify.configure(awsconfig);

export default function Content() {
  const [users, setUsers] = useState();
  const [cars, setCars] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    const userList = await API.graphql({ query: listUsers });
    setUsers(userList);
  }

  async function fetchCars() {
    const carsList = await API.graphql({ query: listCars });
    setCars(carsList);
  }

  async function fetchAPI() {
    setLoading(true);
    await fetchUsers().then(() => fetchCars().then(() => setLoading(false)));
  }

  React.useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Paper
          sx={{
            maxWidth: 936,
            margin: "auto",
            overflow: "hidden",
          }}
        >
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            }}
          >
            <Toolbar>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <SearchIcon color="inherit" sx={{ display: "block" }} />
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    placeholder="Search by username, car brand or other attributes"
                    InputProps={{
                      disableUnderline: true,
                      sx: { fontSize: "default" },
                    }}
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <Button variant="contained" sx={{ mr: 1 }}>
                    Add car
                  </Button>
                  <Tooltip title="Reload">
                    <IconButton>
                      <RefreshIcon color="inherit" sx={{ display: "block" }} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
          {cars && (
            <Grid container>
              {cars.data.listCars.items.map((car, index) => {
                return (
                  <Grid item>
                    <Card
                      sx={{
                        minWidth: 330,
                        marginTop: 3,
                        marginLeft: 12,
                      }}
                    >
                      <CardContent>
                        {users.data.listUsers.items.flatMap((user, index) => {
                          return user.id === car.userID ? (
                            <Typography variant="h6" component="div">
                              Owned by: {user.username}
                            </Typography>
                          ) : (
                            []
                          );
                        })}
                      </CardContent>
                      <CardMedia
                        component="img"
                        height="200"
                        image={car.car_image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Car details:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Brand: {car.brand}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Model: {car.model}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Year: {car.year}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Color: {car.color}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Listed: {car.listed === false ? "False" : "True"}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Disable car</Button>
                        <Button size="small">Go to listing</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Paper>
      )}
    </>
  );
}
