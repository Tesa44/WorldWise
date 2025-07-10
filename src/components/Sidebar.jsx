import styles from "./Sidebar.module.css";
import Footer from "./Footer";
import Logo from "./Logo";
import AppNav from "./AppNav";
import { Outlet } from "react-router-dom";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo></Logo>
      <AppNav></AppNav>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
}

export default Sidebar;
