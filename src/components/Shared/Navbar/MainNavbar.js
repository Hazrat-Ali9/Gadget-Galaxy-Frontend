
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { BsPerson } from 'react-icons/bs';
import { CiShoppingCart } from 'react-icons/ci';
function MainNavbar() {
  const router = useRouter();
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const user = localStorage.getItem("user");
      const jsonObject = JSON.parse(user);
      setUser(jsonObject)
    }
  }, [router]);
  const logOut = () => {
    toast.success("Your Account Logout Successfully..!");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    router.push('/')
  }
  const addToCartFun = () => {
    router.push('/add-to-cart')
  }
  console.log(user);
  return (
    <div className="fixed left-0 right-0 top-0 py-2  mx-5 dark:glass bg-deepSnow dark:bg-black dark:border-gray drop-shadow-none dark:drop-shadow-none z-99">
      <header className=" inset-x-0 z-30 bg-white text-gray-900 glassmorphism px-6 md:block hidden">
        <div className="flex items-center w-full max-w-screen-xl py-2 xl:space-x-16 lg:space-x-12  space-x-7  mx-auto">
          <div className="flex items-center font-extrabold">
            <button onClick={() => router.push('/')}>
              <img draggable={false} src="https://i.ibb.co/bNr1gnF/07c33adb-c674-4f85-9253-71d7eabd1c6a-removebg-preview.png" alt="07c33adb-c674-4f85-9253-71d7eabd1c6a-removebg-preview" border="0" width='150' />
            </button>
          </div>
          <div className="flex-grow">
          </div>

          <div className="flex gap-5">
           
            {user?.role === 'ADMIN' && <button onClick={()=> router.push('/add-product')} className="flex items-center gap-2 bg-gray-200 p-3 rounded hover:bg-blue-400 hover:text-white">
              Add Product
            </button>}
           {user?.role === 'ADMIN' && <button onClick={()=> router.push('/products/view-all-products')} className="flex items-center gap-2 bg-gray-200 p-3 rounded hover:bg-blue-400 hover:text-white">
              Manage Product
            </button>}
           {user?.role === 'ADMIN' && <button onClick={()=> router.push('/auth/view-all-user')} className="flex items-center gap-2 bg-gray-200 p-3 rounded hover:bg-blue-400 hover:text-white">
              View All User
            </button>}
            <button onClick={addToCartFun} className="flex items-center gap-2 bg-gray-200 p-3 rounded hover:bg-blue-400 hover:text-white">
             <CiShoppingCart className="text-2xl" /> Cart
            </button>
            <div className="flex items-center gap-4">
              <div>
                <BsPerson className="text-2xl" />
              </div>
              <div>
                <div className="">
                  <h2>Account</h2>
                </div>
                {!user ? <div className="flex text-[11px] gap-1">
                  <button onClick={() => router.push('/sign-up')}>Register</button>
                  <h2>or</h2>
                  <button onClick={() => router.push('/sign-in')}>Login</button>
                </div> : <div className="flex text-[11px] gap-1">
                  <button onClick={() => router.push('/auth/profile')}>Profile</button>
                  <h2>or</h2>
                  <button onClick={logOut}>Logout</button>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default MainNavbar;
