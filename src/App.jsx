import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="font-mazzard h-screen w-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
