import { Box, Button, Typography } from "@mui/material";

type TokenPageProps = {
  token: string;
  onBack: () => void;
};

function TokenPage({ token, onBack }: TokenPageProps) {
  return (
    <Box className="token-page">
      <Box className="token-card">
        <Typography className="token-title">
          Login Successful
        </Typography>

        <Typography className="token-description">
          You have successfully logged in.
        </Typography>

        <Typography className="token-label">
          Access Token
        </Typography>

        <Box className="token-box">
          <Typography>
            {token}
          </Typography>
        </Box>

        <Button
          variant="contained"
          className="token-button"
          onClick={onBack}
        >
          Back to Login
        </Button>
      </Box>
    </Box>
  );
}

export default TokenPage;