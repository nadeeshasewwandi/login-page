import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import TokenPage from "./pages/TokenPage";

function App() {
  const [accessToken, setAccessToken] = useState("");

  const handleGoogleLogin = (token: string) => {
    setAccessToken(token);
  };

  const handleBack = () => {
    setAccessToken("");
  };

  return accessToken ? (
    <TokenPage
      token={accessToken}
      onBack={handleBack}
    />
  ) : (
    <LoginPage
      onGoogleLogin={handleGoogleLogin}
    />
  );
}

export default App;