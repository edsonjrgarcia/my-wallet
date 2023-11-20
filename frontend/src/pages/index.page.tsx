import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import SideNav from "@/components/layout/sideNav";
import React from "react";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <SideNav></SideNav>
      <h1><span>Home</span></h1>
      <Footer></Footer>
    </div>
  )
}
