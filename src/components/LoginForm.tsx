import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  validateEmail,
  validatePassword,
} from "../utils/validation";

type LoginFormProps = {
  onLogin?: (username: string, password: string) => void;
};

function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const usernameValidation = validateEmail(username);
    const passwordValidation = validatePassword(password);

    setUsernameError(usernameValidation);
    setPasswordError(passwordValidation);

    if (!usernameValidation && !passwordValidation) {
      if (onLogin) {
        onLogin(username, password);
      }
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="login-form"
    >
      <TextField
        fullWidth
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
        variant="outlined"
        className="login-input"
        error={!!usernameError}
        helperText={usernameError}
      />

      <TextField
        fullWidth
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        className="login-input"
        error={!!passwordError}
        helperText={passwordError}
        slotProps={{
            input: {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? (
                  <VisibilityOff />
                ) : (
                  <Visibility />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }
        }}
      />

      <Box className="forgot-wrapper">
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="login-button"
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;