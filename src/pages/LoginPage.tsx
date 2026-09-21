import { Box, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";
import SocialLoginButtons from "../components/SocialLoginButtons";
import IllustrationPanel from "../components/IllustrationPanel";

type LoginPageProps = {
  onGoogleLogin?: (token: string) => void;
};

function LoginPage({ onGoogleLogin }: LoginPageProps) {
  return (
    <Box className="login-page">
      <Box className="login-left">
        <Box className="login-content">
          <Typography className="welcome-title">
            Welcome back!
          </Typography>

          <Typography className="welcome-description">
            Simplify your workflow and boost your productivity
            with Tuga's App. Get started for free.
          </Typography>

          <LoginForm />

          <SocialLoginButtons
            onGoogleLogin={onGoogleLogin}
          />
        </Box>
      </Box>

      <IllustrationPanel />
    </Box>
  );
}

export default LoginPage;