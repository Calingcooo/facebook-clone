import React from "react";
import FormHeader from "./styled-components/FormHeader";
import Button from "./styled-components/Button";
import InputText from "./styled-components/InputText";
import { RiCloseLine } from "react-icons/ri";

const SignUp = ({ setSignUpModal }) => {
  const handleSignUp = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen fixed w-full left-0 top-0 flex justify-center items-center backdrop-blur-sm">
      <form className="w-[20%] h-[55%] form-container-shadow rounded-lg bg-white relative">
        <div className="flex flex-col">
          <FormHeader
            title={"sign up"}
            titleStyle={"capitalize text-3xl font-bold"}
            subtitle={"It's quick and easy."}
            subtitleStyle={"text-md text-gray-500 mt-1"}
            style={"border-b-2 p-3 w-full tracking-wide mb-2"}
          />
          <RiCloseLine
            size={30}
            className="absolute right-0 text-gray-500"
            onClick={() => setSignUpModal(false)}
          />
          <div className="flex flex-col p-2 h-full gap-2">
            <div className="flex gap-2">
              <InputText
                placeholder={"First Name"}
                inputStyle={
                  "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none focus:outline-none w-full"
                }
              />
              <InputText
                placeholder={"Last Name"}
                inputStyle={
                  "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none w-full"
                }
              />
            </div>
            <div>
              <InputText
                placeholder={"Mobile number or email"}
                inputStyle={
                  "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none w-full"
                }
              />
            </div>
            <div>
              <InputText
                placeholder={"Password"}
                inputStyle={
                  "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none w-full"
                }
              />
            </div>
            <div className="flex flex-col">
              <h1>Birthday</h1>
              <div className="flex">
                <InputText
                  placeholder={"Password"}
                  inputStyle={
                    "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none"
                  }
                />
                <InputText
                  placeholder={"Password"}
                  inputStyle={
                    "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none"
                  }
                />
                <InputText
                  placeholder={"Password"}
                  inputStyle={
                    "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none"
                  }
                />
              </div>
            </div>
            <div className="flex flex-col">
              <h1>Gender</h1>
              <div className="flex">
                <InputText
                  placeholder={"Password"}
                  inputStyle={
                    "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none"
                  }
                />
                <InputText
                  placeholder={"Password"}
                  inputStyle={
                    "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none"
                  }
                />
                <InputText
                  placeholder={"Password"}
                  inputStyle={
                    "border-solid border-2 border-gray-300 bg-gray-100 rounded-md p-2 focus:outline-none"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Button
            buttonName={"Sign up"}
            buttonStyle={
              "bg-green-600 hover:bg-green-500 px-8 py-1 rounded-lg text-white font-bold tracking-wide"
            }
            onClickHandleF={(e) => handleSignUp(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
