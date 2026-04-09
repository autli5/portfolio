import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Index from "./Index";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;