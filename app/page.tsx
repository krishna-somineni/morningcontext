import Image from "next/image";
import StatusBar from "./pages/StatusBar";
import Navbar from "./pages/Navbar/Navbar";
import Header from "./pages/header/Header";
import NewsBody from "./pages/newsBody/NewsBody";
import Footer from "./pages/Footer";

export default function Home() {
  return (
    <>
    <div className="h-screen overflow-y-auto overflow-x-hidden">
    <StatusBar/>
    <Navbar/>
    <Header/>
    <NewsBody/>
    <Footer/>
    </div>
    </>
  );
}
