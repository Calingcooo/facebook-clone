import fb_logo from "../assets/fb_logo.png";
import Button from "../components/styled-components/Button";

const Login = () => {
  return (
    <div className="flex flex-row justify-evenly md:justify-center py-40">
      <div className="w-[100px] md:w-[580px] pr-8 pt-16">
        <img src={fb_logo} className="w-64 border-0" />
        <h1 className="text-2xl mt-2">
          Connect with friends and the world around you on Facebook.
        </h1>
      </div>
      <div className="flex flex-col items-center w-full max-w-[396px]">
        <div className="w-full form-container pt-3 pb-5 px-4 rounded-lg">
          <form className="flex flex-col w-full">
            <input
              type="text"
              className="border border-gray-200 text-lg rounded-[4px] px-3 py-2 focus:outline-none focus:border-blue-500 focus:shadow-sm  "
              placeholder="Email or phone number"
            />
            <input
              type="password"
              className="border border-gray-200 text-lg rounded-[4px] px-3 py-2 focus:outline-none focus:border-blue-500 focus:shadow-sm   mt-5"
              placeholder="Password"
            />
            <Button buttonName="Log In" buttonStyle="bg-blue-500 hover:bg-blue-400 py-2 text-white text-xl font-bold mt-5 rounded-md tracking-wide"/>
          </form>
          <div className="flex flex-col items-center w-full mt-5">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-400 hover:underline normal-case mb-5"
            >
              Forgot password?
            </a>
            <hr className="border-1 border-gray-200 w-full mb-5" />
            <Button
              buttonName="Create new account"
              buttonStyle="bg-green-500 hover:bg-green-600 font-bold text-md tracking-wide text-white px-8 py-3 rounded-md"
            />
          </div>
        </div>
        <p className="tracking-wide text-sm mt-5">
          <a href="#" className="font-bold hover:underline">
            Create a Page
          </a>{" "}
          for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
};

export default Login;
