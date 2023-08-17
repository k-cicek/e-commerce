import { Route, Routes, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./container/PageContainer";
import { useSelector } from "react-redux";
import Card from "./components/Card";

function App() {
  const { drawer } = useSelector((state) => state.drawer);
  return (
    <div className="App">
      <BrowserRouter>
        <PageContainer>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
          </Routes>
          {drawer && <Card />}
          <Footer />
        </PageContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
