import React, { useState } from "react";
import Login from "./Login";
import Resiger from "./Resiger";
import Line37 from "../../assets/images/line37.png";
import bg from "../../assets/images/bg.webp";

export default function HomeLogin() {
  const [currentTab, setCurrentTab] = useState("Register");

  const renderTabContent = () => {
    switch (currentTab) {
      case "Resiger":
        return <Resiger />;
      case "Login":
        return <Login />;
      default:
        return <Resiger />;
    }
  };
  return (
    <div>
      <div className="">
        <div className="h-screen"style={{backgroundImage: `url(${bg})`,backgroundPosition: "center", backgroundSize: "cover",}}>
          <div className="bg-white/70 lg:rounded lg:w-1/2 lg:fixed lg:top-1/2 lg:right-1/3 lg:transform lg:translate-x-1/2 max-lg:h-full lg:-translate-y-1/2">
            <div className="mx-6">
              <div className="py-3 text-3xl font-bold flex justify-center">
                <p className="text-blue-900">BÁO CÁO</p>
              </div>
              <div className="flex py-2">
                <button className={`w-full font-bold hover:text-blue-900 hover:text-lg ${currentTab === "Register" ? "underline text-blue-900" : ""}`}onClick={() => setCurrentTab("Register")}>Đăng Ký</button>
                {/* <div className="p-1">/</div> */}
                <button className={`w-full font-bold hover:text-blue-900 hover:text-lg ${currentTab === "Login" ? "underline text-blue-900" : ""}`}onClick={() => setCurrentTab("Login")}>Đăng Nhập</button>
              </div>
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>

      <img src={Line37} alt="" className="w-full h-3 fixed bottom-0" />
    </div>
  );
}