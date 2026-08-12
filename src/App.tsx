// import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/index";
import NotFound from "./pages/NotFound";
import { Toaster } from "sonner";
import Leads from "./pages/Leads";
import WhatsAppButton from "./components/WhatsAppButton";
import TraumaRelief from "./pages/trauma-relief";
import NeurologicalRecovery from "./pages/neurological-recovery";

// const queryClient = new QueryClient();

// first video: https://youtube.com/shorts/J4xyVpVpvFU?feature=share
// second video: https://youtube.com/shorts/U2MZoxDx6Jk?feature=share

const App = () => (
  // <QueryClientProvider client={queryClient}>
  <TooltipProvider>
    <Toaster />
    {/* <Sonner /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/trauma-relief" element={<TraumaRelief />} />
        <Route path="/neurological-recovery" element={<NeurologicalRecovery />} />
        <Route path="/" element={<Index />} />
        <Route path="/leads" element={<Leads />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />

    </BrowserRouter>
  </TooltipProvider>
  // </QueryClientProvider>
);

export default App;
