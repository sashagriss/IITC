import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function LinearProgressWithLabel(props) {
  const normalizedValue = (props.value / 500) * 100;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" value={normalizedValue} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.value}
        </Typography>
      </Box>
    </Box>
  );
}
export default LinearProgressWithLabel;
