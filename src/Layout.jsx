import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex flex-col w-screen h-full bg-gray-100">
      {isLoginPage && <Header />}
      <main className="flex flex-grow">
        <Outlet />
      </main>
      <footer className="bg-white w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
