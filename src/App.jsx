import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, Info, Globe, MapPin, Utensils } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar"; // Use the navbar layout
import Index from "./pages/Index.jsx";
import Introduction from "./pages/Introduction.jsx";
import Culture from "./pages/Culture.jsx";
import TouristAttractions from "./pages/TouristAttractions.jsx";
import Cuisine from "./pages/Cuisine.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
  },
  {
    title: "Introduction",
    to: "/introduction",
    icon: <Info className="h-4 w-4" />,
  },
  {
    title: "Culture",
    to: "/culture",
    icon: <Globe className="h-4 w-4" />,
  },
  {
    title: "Tourist Attractions",
    to: "/tourist-attractions",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    title: "Cuisine",
    to: "/cuisine",
    icon: <Utensils className="h-4 w-4" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="introduction" element={<Introduction />} />
              <Route path="culture" element={<Culture />} />
              <Route path="tourist-attractions" element={<TouristAttractions />} />
              <Route path="cuisine" element={<Cuisine />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;