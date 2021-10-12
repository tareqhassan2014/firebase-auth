import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useFirebase from "../Hooks/useFirebase";
import LogoutIcon from '@mui/icons-material/Logout';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const Login = () => {
  const { signInUsingGoogle, user, logOut } = useFirebase();
  return (
    <Box my={20} textAlign="center">
      <Typography variant="h1" mb={5}>Login page!</Typography>
      {user?.email ? (
        <Button variant="outlined" size="large" onClick={logOut} endIcon={<LogoutIcon />}>
        Log Out
      </Button>
      ) : (
        <Button variant="outlined" size="large" onClick={signInUsingGoogle} endIcon={<VerifiedUserIcon />}>
          Google Login
        </Button>
      )}
      <Typography>{user.displayName}</Typography>
    </Box>
  );
};

export default Login;
