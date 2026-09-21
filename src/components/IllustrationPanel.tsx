import { Box, Typography } from "@mui/material";
import illustration from "../assets/illustration.svg";

function IllustrationPanel() {
  return (
    <Box className="illustration-panel">

      <Box className="illustration-content">
        <img
          src={illustration}
          alt="Work management illustration"
          className="illustration-image"
        />

        <Box className="slide-dots">
          <span></span>
          <span></span>
          <span className="active"></span>
        </Box>

        <Typography className="illustration-text">
          Make your work easier and organized
          <br />
          with <strong>Tuga's App</strong>
        </Typography>
      </Box>

    </Box>
  );
}

export default IllustrationPanel;