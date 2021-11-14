import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  Tooltip,
  IconButton,
  Box,
  CircularProgress,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SearchIcon from "@mui/icons-material/Search";
import awsconfig from "../../aws-exports";
import { Amplify, API } from "aws-amplify";
import { listUsers, listCars, listListings } from "../../graphql/queries";

Amplify.configure(awsconfig);

export default function Content() {
  const [users, setUsers] = useState();
  const [cars, setCars] = useState();
  const [listings, setListings] = useState();
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    const userList = await API.graphql({ query: listUsers });
    setUsers(userList);
  }

  async function fetchCars() {
    const carsList = await API.graphql({ query: listCars });
    setCars(carsList);
  }

  async function fetchListings() {
    const listingsList = await API.graphql({ query: listListings });
    setListings(listingsList);
  }

  async function fetchAPI() {
    setLoading(true);
    await fetchUsers().then(() =>
      fetchCars().then(() => fetchListings().then(() => setLoading(false)))
    );
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
                    Add listing
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
              {listings.data.listListings.items.map((listing, index) => {
                return (
                  <Grid item>
                    <Card
                      sx={{
                        minWidth: 360,
                        maxWidth: 360,
                        marginTop: 3,
                        marginLeft: 8.5,
                      }}
                    >
                      {cars.data.listCars.items.flatMap((car, index) => {
                        return car.userID === listing.userID ? (
                          <CardMedia
                            component="img"
                            height="200"
                            image={car.car_image}
                            alt="green iguana"
                          />
                        ) : (
                          []
                        );
                      })}
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          Listing details:
                        </Typography>
                        {users.data.listUsers.items.flatMap((user, index) => {
                          return user.id === listing.userID ? (
                            <Typography variant="body2" color="text.secondary">
                              Listed by: {user.username}
                            </Typography>
                          ) : (
                            []
                          );
                        })}
                        <Typography variant="body2" color="text.secondary">
                          Price per day: {listing.day_price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Location:
                          <Link
                            href={listing.geolocation}
                            underline="hover"
                            target="_blank"
                            rel="noopener"
                          >
                            {" "}
                            {listing.geolocation}
                          </Link>
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                        >
                          Featured:{" "}
                          {listing.is_featured === false ? "False" : "True"}
                        </Typography>

                        <Typography gutterBottom variant="h6" component="div">
                          Availability:
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Avaliabile from: {listing.start_at}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="text.secondary"
                        >
                          Avaliabile till: {listing.end_at}
                        </Typography>

                        {cars.data.listCars.items.flatMap((car, index) => {
                          return listing.userID === car.userID ? (
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                            >
                              Car info:
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Brand: {car.brand}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Model: {car.model}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Year: {car.year}
                              </Typography>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Color: {car.color}
                              </Typography>
                            </Typography>
                          ) : (
                            []
                          );
                        })}
                      </CardContent>
                      <CardActions>
                        <Button size="small">Disable listing</Button>
                        <Button size="small">Go to car</Button>
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
