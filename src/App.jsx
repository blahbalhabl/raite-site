import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";
import Registration from "./pages/Registration";

const App = () => {
  return (
    <div className="font-mazzard h-max w-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
