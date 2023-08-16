import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./container/PageContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </PageContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
