import {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate();
      const {user,logIn} = UserAuth();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
        await logIn(email,password)
        navigate('/')
        toast.success('Logged In!', {
            position: toast.POSITION.TOP_RIGHT
        });
    } catch (error) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }

  }
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d282a426-b01a-424c-9b83-2c2445e4b61a/f7eb3bc2-2867-4c7e-94f8-e62ec11175cd/IN-en-20230626-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign In</h1>
              <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign In
                </button>
              </form>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" />
                  Remember me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-4">
                <span className="text-gray-600 ">
                  New to Netflix?
                </span>
                <Link to="/signup" className="ml-2">
                  {" "}
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
