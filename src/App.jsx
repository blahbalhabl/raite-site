import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import Appointment from "./pages/Appointment";
import ScrollToTop from "./hooks/ScrollToTop";

const App = () => {
  return (
    <div className="font-mazzard h-full w-full">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
