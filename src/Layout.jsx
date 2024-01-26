import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex flex-col h-screen">
      {!isLoginPage && <Header />}
      <main className="flex-grow bg-gray-100">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
