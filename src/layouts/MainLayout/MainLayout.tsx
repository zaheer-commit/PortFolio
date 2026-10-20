import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './MainLayout.scss';


const MainLayout = () => {
    return(
        <div className="layout">
            <Navbar/>
            <main className="layout_main"> <Outlet/> </main>
            <Footer/>
        </div>
    );  
};
export default MainLayout;