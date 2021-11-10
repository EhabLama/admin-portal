import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Content(props) {
  return (
    <Paper sx={{ maxWidth: 936, margin: "auto", overflow: "hidden" }}>
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
      ></AppBar>
      <Typography
        sx={{ my: 5, mx: 2 }}
        color="text.primary"
        align="center"
        style={{ whitespace: "pre-wrap" }}
        variant="h5"
      >
        Welcome {props.username}!, this is an admin portal.
        <Typography color="text.secondary">
          Enter the Users tab to manage users.
        </Typography>
        <Typography color="text.secondary">
          Enter the Cars tab to view cars owned by business users.
        </Typography>
        <Typography color="text.secondary">
          Enter the Listings tab to view car listings by business users.
        </Typography>
      </Typography>
    </Paper>
  );
}
