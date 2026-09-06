import { Box, Typography } from "@mui/material";

export function BrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
      <Box sx={{ width: 30, height: 30, borderRadius: "9px", backgroundColor: dark ? "#2563EB" : "#07111F", display: "grid", placeItems: "center" }}>
        <Box sx={{ width: 13, height: 13, border: "2px solid #fff", borderRadius: "4px 8px 4px 8px", transform: "rotate(45deg)" }} />
      </Box>
      <Typography sx={{ fontWeight: 800, letterSpacing: "-0.04em", fontSize: 20, color: dark ? "#fff" : "#07111F" }}>axora</Typography>
    </Box>
  );
}
