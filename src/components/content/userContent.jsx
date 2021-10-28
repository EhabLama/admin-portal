import React, { useState } from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
// import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddUserModalContainer from "../../modals/addUser/addUserModalContainer";
import Amplify, { Auth, API } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { DataGrid } from "@mui/x-data-grid";
import { StylesProvider } from "@material-ui/core/styles";
import {
  IndeterminateCheckBox,
  IndeterminateCheckBoxSharp,
} from "@mui/icons-material";

Amplify.configure(awsconfig);

let nextToken;

const columns = [
  { field: "username", headerName: "Username", width: 200 },

  // { field: "id", headerName: "ID", width: 70 },

  // { field: "lastName", headerName: "Last name", width: 130 },
  // {
  //   field: "age",
  //   headerName: "Age",
  //   type: "number",
  //   width: 90,
  // },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue(params.id, "firstName") || ""} ${
  //       params.getValue(params.id, "lastName") || ""
  //     }`,
  // },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function Content() {
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };

  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  // const fetchUserList = () => {
  //   // setLoading(true);
  //   fetchUserAPI(10).then((result) => {
  //     setUserList(result);
  //   });
  // };
  async function fetchUserAPI(limit) {
    let apiName = "AdminQueries";
    let path = "/listUsers";
    let myInit = {
      queryStringParameters: {
        limit: limit,
        token: nextToken,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `${(await Auth.currentSession())
          .getAccessToken()
          .getJwtToken()}`,
      },
    };
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    nextToken = NextToken;

    return rest;
  }

  async function fetchUserList() {
    setLoading(true);
    await fetchUserAPI(10)
      .then((result) => setUserList(result))
      .then(() => setLoading(false));
  }

  React.useEffect(() => {
    fetchUserList();
  }, []);

  fetchUserAPI(10).then((result) => {
    setUserList(result);
  });
  // console.log(userList);
  return (
    <>
      {loading ? (
        <div>...Data Loading.....</div>
      ) : (
        <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
          <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <Toolbar>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <SearchIcon color="inherit" sx={{ display: "block" }} />
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    placeholder="Search by email address, phone number, or user UID"
                    InputProps={{
                      disableUnderline: true,
                      sx: { fontSize: "default" },
                    }}
                    variant="standard"
                  />
                </Grid>
                <Grid item>
                  <AddUserModalContainer
                    triggerText="Add user"
                    onSubmit={onSubmit}
                  />
                  <Tooltip title="Reload">
                    <IconButton>
                      <RefreshIcon color="inherit" sx={{ display: "block" }} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
            {userList.Users && (
              <div style={{ height: 400, width: "100%" }}>
                <StylesProvider injectFirst>
                  <DataGrid
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    rows={userList.Users.map((users, index) => ({
                      id: index,
                      username: users.Username,
                    }))}
                  />
                </StylesProvider>
              </div>
            )}
          </AppBar>
        </Paper>
      )}
    </>
  );
}
