import React from "react";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate()

  return (
    <div className="relative w-screen h-screen bg-darkBlue flex items-center justify-center flex-col">
      <div className="flex justify-center">
        <img className="absolute top-[100px]" src={Logo}></img>
      </div>
      <div className="bg-semiDarkBlue w-[25%] rounded-[20px] py-10 px-6 flex flex-col gap-5">
        <h1 className="text-pureWhite font-light text-[32px]">Login</h1>
        <input type="email" className="bg-transparent font-light text-pureWhite p-1 border-b border-greyishBlue placeholder:text-[15px] placeholder:font-light" placeholder="Email address"/>
        <input type="password" className="bg-transparent font-light text-pureWhite p-1 border-b border-greyishBlue placeholder:text-[15px] placeholder:font-light" placeholder="Password"/>
        <div className="bg-red rounded-[6px] flex justify-center items-center">
            <button onClick={() => {
              navigate("/home")
            }} className="text-[15px] p-2 font-light text-pureWhite">Login to your account</button>
        </div>
        <div className="flex items-center justify-center gap-2">
            <h1 className="text-[15px] font-light text-pureWhite">Don't have an account?</h1>
            <h1 className="text-[15px] font-light text-red">Sign Up</h1>
        </div>
      </div>
    </div>
  );
};
