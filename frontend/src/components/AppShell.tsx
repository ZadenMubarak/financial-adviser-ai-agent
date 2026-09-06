import { PropsWithChildren, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box, Button, Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Activity, BarChart3, BriefcaseBusiness, ChevronDown, CircleHelp, FileText, LayoutDashboard, Menu, MessageSquareText, Settings, ShieldCheck, Sparkles, UserRound, WalletCards, X } from "lucide-react";
import { BrandMark } from "./BrandMark";

const groups = [
  { label: "Overview", items: [{ label: "Dashboard", path: "/dashboard", icon: LayoutDashboard }, { label: "AI Executive", path: "/chat", icon: MessageSquareText }] },
  { label: "Intelligence", items: [{ label: "Financial Insights", path: "/intelligence/insights", icon: Sparkles }, { label: "Forecasts", path: "/intelligence/forecasts", icon: BarChart3 }, { label: "Scenarios", path: "/intelligence/scenarios", icon: Activity }] },
  { label: "Finance", items: [{ label: "Cash Flow", path: "/finance/cash-flow", icon: WalletCards }, { label: "Transactions", path: "/finance/transactions", icon: FileText }, { label: "Expenses", path: "/finance/expenses", icon: WalletCards }, { label: "Invoices", path: "/finance/invoices", icon: FileText }] },
  { label: "Capital", items: [{ label: "Investments", path: "/capital/investments", icon: BriefcaseBusiness }, { label: "Funding", path: "/capital/funding", icon: WalletCards }, { label: "Opportunities", path: "/capital/opportunities", icon: Sparkles }] },
  { label: "Risk", items: [{ label: "Risk Monitor", path: "/risk/monitor", icon: ShieldCheck }, { label: "Anomalies", path: "/risk/anomalies", icon: Activity }, { label: "Compliance", path: "/risk/compliance", icon: ShieldCheck }] },
  { label: "Reporting", items: [{ label: "Reports", path: "/reporting", icon: FileText }] },
];

export function AppShell({ children }: PropsWithChildren) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const sidebar = <Box sx={{ width: 256, height: "100%", backgroundColor: "#07111F", color: "#fff", display: "flex", flexDirection: "column", p: 2 }}>
    <Box sx={{ px: 1, py: 1.5, mb: 2, display: "flex", justifyContent: "space-between" }}><BrandMark dark /><IconButton onClick={() => setOpen(false)} sx={{ display: { md: "none" }, color: "#fff" }}><X size={18} /></IconButton></Box>
    <List disablePadding sx={{ overflowY: "auto", flex: 1 }}>{groups.map((group) => <Box key={group.label} sx={{ mb: 2.3 }}><Typography sx={{ color: "#64748B", fontSize: 10, fontWeight: 800, letterSpacing: ".13em", px: 1.5, mb: .7, textTransform: "uppercase" }}>{group.label}</Typography>{group.items.map(({ label, path, icon: Icon }) => <ListItemButton key={path} component={Link} to={path} onClick={() => setOpen(false)} selected={location.pathname === path} sx={{ borderRadius: 1.5, minHeight: 38, mb: .25, color: "#A5B4C7", "&.Mui-selected": { backgroundColor: "#172333", color: "#fff" }, "&.Mui-selected .MuiListItemIcon-root": { color: "#60A5FA" }, "&:hover": { backgroundColor: "#102033", color: "#fff" } }}><ListItemIcon sx={{ minWidth: 32, color: "inherit" }}><Icon size={16} /></ListItemIcon><ListItemText primary={<Typography sx={{ fontSize: 13, fontWeight: location.pathname === path ? 700 : 500 }}>{label}</Typography>} /></ListItemButton>)}</Box>)}</List>
    <Box sx={{ borderTop: "1px solid #1D2D40", pt: 1.3 }}>{[{ label: "Settings", path: "/settings", icon: Settings }, { label: "Help center", path: "/help", icon: CircleHelp }, { label: "Profile", path: "/profile", icon: UserRound }].map(({ label, path, icon: Icon }) => <ListItemButton key={path} component={Link} to={path} sx={{ borderRadius: 1.5, color: "#A5B4C7", minHeight: 36 }}><ListItemIcon sx={{ minWidth: 32, color: "inherit" }}><Icon size={16} /></ListItemIcon><ListItemText primary={<Typography sx={{ fontSize: 13 }}>{label}</Typography>} /></ListItemButton>)}</Box>
  </Box>;
  return <Box sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#F8FAFC" }}><Box component="aside" sx={{ display: { xs: "none", md: "block" }, width: 256, flexShrink: 0 }}>{sidebar}</Box><Drawer open={open} onClose={() => setOpen(false)} sx={{ "& .MuiDrawer-paper": { width: 256, backgroundColor: "#07111F" } }}>{sidebar}</Drawer><Box component="main" sx={{ flex: 1, minWidth: 0 }}><Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center", justifyContent: "space-between", p: 2, backgroundColor: "#fff", borderBottom: "1px solid #E2E8F0" }}><IconButton onClick={() => setOpen(true)}><Menu size={20} /></IconButton><BrandMark /><Box sx={{ width: 40 }} /></Box>{children}</Box></Box>;
}
