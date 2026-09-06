import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AppShell as Shell } from "./components/AppShell";
import CashFlow from "./pages/CashFlow";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Landing from "./pages/Landing";
import Placeholder from "./pages/Placeholder";
import RiskMonitor from "./pages/RiskMonitor";

const theme = createTheme({ palette: { primary: { main: "#2563EB" }, background: { default: "#F8FAFC" }, text: { primary: "#07111F", secondary: "#64748B" } }, typography: { fontFamily: "Inter, sans-serif" }, shape: { borderRadius: 10 }, components: { MuiButton: { styleOverrides: { root: { boxShadow: "none" } } }, MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } } } });
const placeholderPaths = ["/intelligence/forecasts", "/intelligence/scenarios", "/finance/transactions", "/finance/expenses", "/finance/invoices", "/capital/investments", "/capital/funding", "/capital/opportunities", "/risk/anomalies", "/risk/compliance", "/reporting", "/settings", "/help", "/profile", "/login", "/signup"];
function RoutedApp() { const location = useLocation(); const isPlatform = location.pathname !== "/"; return isPlatform ? <Shell><Routes><Route path="/dashboard" element={<Dashboard />} /><Route path="/chat" element={<Chat />} /><Route path="/intelligence/insights" element={<Insights />} /><Route path="/finance/cash-flow" element={<CashFlow />} /><Route path="/risk/monitor" element={<RiskMonitor />} />{placeholderPaths.map((path) => <Route key={path} path={path} element={<Placeholder title={path === "/login" ? "Welcome back" : path === "/signup" ? "Create your Axora account" : path.slice(1).split("/").pop()?.replace(/-/g, " ") || "Workspace"} />} />)}</Routes></Shell> : <Routes><Route path="/" element={<Landing />} /></Routes>; }
export default function App() { return <ThemeProvider theme={theme}><CssBaseline /><BrowserRouter><RoutedApp /></BrowserRouter></ThemeProvider>; }
