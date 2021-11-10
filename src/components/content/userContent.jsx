import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Paper,
  Grid,
  TextField,
  Tooltip,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { StylesProvider } from "@material-ui/core/styles";
import CircularProgress from "@mui/material/CircularProgress";
import AddUserModalContainer from "../../modals/addUser/addUserModalContainer";
import Box from "@mui/material/Box";
import {
  fetchUserAPI,
  fetchAdminGroupUsers,
  fetchProductGroupUsers,
  fetchBusinessGroupUsers,
  deleteUserAPI,
  adminCreateUser,
  adminAddUserToGroup,
} from "../../adminQueries";

export default function Content() {
  const onModalSubmit = (event) => {
    event.preventDefault(event);
    let password = event.target.password.value;
    let username = event.target.username.value;
    let groupname = event.target.groupname.value;
    let userAttributes = [
      {
        Name: "email",
        Value: event.target.email.value,
      },
      {
        Name: "custom:tag",
        Value: event.target.tag.value,
      },
    ];
    adminCreateUser(username, password, userAttributes).then(() =>
      groupname
        ? adminAddUserToGroup(username, groupname).then(() =>
            setShouldRefresh(!shouldRefresh)
          )
        : setShouldRefresh(!shouldRefresh)
    );
  };

  const refreshList = (e) => {
    e.preventDefault();
    setShouldRefresh(!shouldRefresh);
  };

  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);
  const [adminGroupUsers, setAdminGroupUsers] = useState([]);
  const [productGroupUsers, setProductGroupUsers] = useState([]);
  const [businessGroupUsers, setBusinessGroupUsers] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  const deleteUser = (id) => () => {
    userList &&
      deleteUserAPI(userList.Users[id].Username).then(() =>
        setShouldRefresh(!shouldRefresh)
      );
  };

  const columns = React.useMemo(() => [
    {
      field: "username",
      headerName: "Username",
      width: 130,
    },

    { field: "email", headerName: "Email", width: 200 },

    { field: "createdat", headerName: "Created At", width: 150 },

    { field: "lastmodified", headerName: "Last Modified", width: 150 },

    { field: "role", headerName: "Role", width: 120 },

    { field: "tag", headerName: "Tag" },
    {
      field: "actions",
      type: "actions",
      width: 80,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={deleteUser(params.id)}
        />,
      ],
    },
  ]);

  async function fetchUserList() {
    await fetchUserAPI(10).then((result) => setUserList(result));
  }

  async function fetchGroupUsers() {
    setLoading(true);
    await fetchAdminGroupUsers("Admins").then((result) =>
      setAdminGroupUsers(result)
    );
    await fetchBusinessGroupUsers("Business_Users").then((result) =>
      setBusinessGroupUsers(result)
    );
    await fetchProductGroupUsers("Product_Users").then((result) =>
      setProductGroupUsers(result)
    );
    setLoading(false);
  }

  React.useEffect(() => {
    fetchUserList();
    fetchGroupUsers();
  }, [shouldRefresh]);

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
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
                    onSubmit={onModalSubmit}
                  />
                  <Tooltip title="Reload">
                    <IconButton onClick={refreshList}>
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
                    disableColumnMenu={true}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    rows={userList.Users.map((users, index) => ({
                      id: index,

                      username: users.Username,

                      email: users.Attributes.flatMap((attributes) =>
                        attributes.Name === "email" ? attributes.Value : []
                      ),

                      createdat: users.UserCreateDate,

                      lastmodified: users.UserLastModifiedDate,

                      role: adminGroupUsers.Users.flatMap((user, index) =>
                        user.Username === users.Username
                          ? "Admin User"
                          : productGroupUsers.Users.flatMap((user2) =>
                              user2.Username === users.Username && index < 1
                                ? "Product User"
                                : businessGroupUsers.Users.flatMap((user3) =>
                                    user3.Username === users.Username &&
                                    index < 1
                                      ? "Business User"
                                      : []
                                  )
                            )
                      ),
                      tag: users.Attributes.flatMap((attributes) =>
                        attributes.Name === "custom:tag" ? attributes.Value : []
                      ),
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
