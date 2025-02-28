import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import SectionFooter from "../Components/SectionFooter";
import TopLine from "../Components/TopLine";


export default function MainLayout() {
    return (
        <>
            <TopLine />
            <Header />
            <Outlet />
            <SectionFooter />
        </>

    )
}
