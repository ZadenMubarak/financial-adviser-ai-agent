import { Box, Button, Paper, Typography } from "@mui/material";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

export default function Placeholder({ title }: { title: string }) {
  return <Box sx={{ p: { xs: 3, md: 5 }, maxWidth: 900 }}><Paper sx={{ p: { xs: 4, md: 7 }, border: "1px solid #E2E8F0", borderRadius: 3, textAlign: "center", boxShadow: "none" }}><Construction size={34} color="#2563EB" /><Typography variant="h4" sx={{ mt: 2, fontWeight: 800, color: "#07111F" }}>{title}</Typography><Typography sx={{ mt: 1, color: "#64748B" }}>This workspace is ready to be shaped around your team’s workflow.</Typography><Button component={Link} to="/dashboard" startIcon={<ArrowLeft size={16} />} sx={{ mt: 3, textTransform: "none" }}>Back to dashboard</Button></Paper></Box>;
}
