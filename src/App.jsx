import NavBar from "./components/Header/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./util/Scroll to Top/ScrollToTop";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="cursor-default">
        <ScrollToTop />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
