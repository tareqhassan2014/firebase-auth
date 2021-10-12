import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import useFirebase from "../Hooks/useFirebase";


const Header = () => {
  const { user } = useFirebase();

  

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>
          <Button
            style={{ fontWeight: 700, fontSize: "20px" }}
            color="inherit"
            component={Link}
            to="/home"
          >
            Tareq Store
          </Button>
        </Typography>
        <div>
          <Button
            to="/home"
            color="inherit"
            component={NavLink}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to="/login"
          >
            Login
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            activeStyle={{
              fontWeight: "bold",
              color: "red",
            }}
            to="/register"
          >
            Registration
          </Button>
        </div>
        {
          user.email && <Avatar alt={user?.displayName} src={user?.photoURL}/>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Header;
