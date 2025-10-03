import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import NavBar from "./components/Header/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./util/Scroll to Top/ScrollToTop";
import Footer from "./components/Footer/Footer";
import authService from '../src/appwrite/auth'
import { logIn, logOut } from '../src/features/authSlice'
import TopDiscountBar from "./components/Top Discount Bar/TopDiscountBar";

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }))
        } else {
          dispatch(logOut())
        }
      })
      .catch(error => console.log('Error ::', error.message))
      .finally(() => setLoading(false))
  }, [])


  return (
    <>
      {!loading ? (
        <div className="cursor-default">
          <ScrollToTop />
          <TopDiscountBar/>
          <NavBar />
          <Outlet />
          <Footer />
        </div>

      ) : null}
    </>
  )
}

export default App;
