import Loader from "@/components/Shared/Loader/Loader";
import { useLoginUserMutation } from "@/redux/features/auth/userAuth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [loginUser, resInfo] = useLoginUserMutation();


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (resInfo?.status === "fulfilled") {
        const { accessToken, refreshToken, userDetails } = resInfo.data;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userDetails));
        router.push('/');
      } else if (resInfo.status === "rejected") {
      }
    }
  }, [resInfo, router]);


  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = {
      email,
      password
    }

    const res = await loginUser(data);
    if (resInfo.isSuccess) {
      toast.success("Your Account Login Successfully..!");
    }
    if (res.error) {
      toast.error(res.error.data.message);
    }
  };

  return (
    <div className="flex  flex-wrap justify-center items-center w-full h-screen bg-white bg-opacity-20 dark:bg-boxdark px-2 lg:px-0">
      <div className="w-full border-stroke dark:border-strokedark md:w-1/2 lg:w-[35%] flex justify-center items-center">
        <div className="w-full p-5 md:px-10 my-5 md:my-10 lg:my-20 sm:p-12.5 glass dark:glass rounded-xl xl:p-17.5">
          <h2 className="my-8 md:text-2xl font-bold text-black dark:text-white sm:text-title-xl2 text-center">
            Sign In Gadget Galaxy
          </h2>
          <form onSubmit={handleLogin} action="">
            <div className="mb-4">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Email / Username
              </label>
              <div className="relative">
                <input
                  defaultValue='hazrataliein@gmail.com'
                  name="email"
                  required
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primaryBlue focus-visible:shadow-none dark:border-form-primaryBlue dark:bg-form-input dark:focus:border-primaryBlue placeholder:text-white dark:placeholder-white dark:text-white"
                />

                <span className="absolute right-4 top-4">
                  <svg
                    className="fill-current"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.5">
                      <path
                        d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                        fill=""
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-6">
              <label className="mb-2.5 block font-medium text-black dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  defaultValue='123456'
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="6 Characters"
                  className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primaryBlue focus-visible:shadow-none dark:border-form-primaryBlue dark:bg-form-input dark:focus:border-primaryBlue placeholder:text-white dark:placeholder-white dark:text-white"
                />
                <span className="absolute right-4 top-5">
                  {showPassword ? (
                    <FiEye
                      className="text-xl cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <FiEyeOff
                      className="text-xl cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </span>
              </div>
            </div>
            <div className="flex w-full justify-center items-center mb-5">
              {resInfo?.isLoading ? (
                <button className="w-full py-2 rounded-lg bg-primaryBlue text-white font-medium text-base hover:bg-primaryBlue focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primaryBlue">
                  <Loader />
                </button>
              ) : (
                <button
                  type="submit"
                  className="button lg:px-10 lg:py-2 px-8  xl:text-xl lg:text-lg text-base flex items-center justify-center"
                >
                  Sign In
                </button>
              )}
            </div>
          </form>
          <div className="flex gap-2 items-center justify-end">
            <h3>Do not have an account?</h3>
            <button className="font-bold" onClick={() => router.push('/sign-up')}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
