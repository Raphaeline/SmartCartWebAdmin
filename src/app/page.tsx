"use client";
import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
      <div className="flex m-[55px]">
        <div className="m-[10px]">
          <img src="/Logo1.svg" alt="My Image" />
        </div>
        <div className="m-[10px] flex flex-col ">
          <p className="text-[#0D6D8C] text-[20px] font-jakarta font-semibold tracking-[5.6px]">TuBi</p>
          <p className="text-[#0D6D8C] text-[30px] font-jakarta font-semibold whitespace-nowrap overflow-hidden">Manajer Toko</p>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-poppins text-[#55A3BD] text-[18px] font-medium">Username</p>
        <input id="username" type="text" className="font-poppins text-[#0D6D8C] w-[349px] h-[45px] bg-#E4F2F6 font-[500] border-2 border-[#E4F2F6] rounded-xl px-[5px]" />
        <p className="font-poppins text-[#55A3BD] text-[18px] font-medium">Password</p>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="font-poppins text-[#0D6D8C] w-[349px] h-[45px] bg-#E4F2F6 font-[500] border-2 border-[#E4F2F6] rounded-xl px-[5px]"
          />
          <img src={showPassword ? "/loginPage/eyeClose.svg" : "/loginPage/eyeOpen.svg"} alt="Toggle Password Visibility" className="absolute right-4 top-3 cursor-pointer w-[21px]" onClick={togglePasswordVisibility} />
        </div>
        <button className="w-[197px] h-[48px] bg-[#25B6D0] m-4 place-self-center rounded-md font-poppins text-[16px]">Sign in</button>
      </div>
    </main>
  );
};
export default Home;
