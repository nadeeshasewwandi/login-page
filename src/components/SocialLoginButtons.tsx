import { Box, Divider, IconButton, Typography } from "@mui/material";
import {
  Google,
  Apple,
  Facebook,
} from "@mui/icons-material";
import { signInWithGoogle } from "../firebase/auth";

type SocialLoginButtonsProps = {
  onGoogleLogin?: (token: string) => void;
};

function SocialLoginButtons({
  onGoogleLogin,
}: SocialLoginButtonsProps) {
  const handleGoogleLogin = async () => {
    const token = await signInWithGoogle();

    if (token && onGoogleLogin) {
      onGoogleLogin(token);
    }
  };

  return (
    <Box className="social-login">
      <Box className="social-divider">
        <Divider />
        <Typography>or continue with</Typography>
        <Divider />
      </Box>

      <Box className="social-buttons">
        <IconButton
          className="social-button"
          onClick={handleGoogleLogin}
        >
          <Google />
        </IconButton>

        <IconButton className="social-button">
          <Apple />
        </IconButton>

        <IconButton className="social-button">
          <Facebook />
        </IconButton>
      </Box>

      <Typography className="register-text">
        Not a member? <span>Register now</span>
      </Typography>
    </Box>
  );
}

export default SocialLoginButtons;