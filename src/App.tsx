import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

import Index from "./Index";

import Test from "./components/Projects/Projects"

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;