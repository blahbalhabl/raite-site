import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// import Header from "./components/Header";
import Registration from "./pages/Registration";
import Appointment from "./pages/Appointment";

const App = () => {
  return (
    <div className="font-mazzard h-full w-full">
      <Router>
        {/* <Header /> */}
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
