import { Typography } from "@mui/material";
export default function SubHeaderComponent({ subheader }) {
  return (
    <Typography variant="h6" fontWeight="bold">
      {subheader}
    </Typography>
  );
}
