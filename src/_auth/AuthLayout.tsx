import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";
import "./AuthLayout.css";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <div className="flex flex-wrap h-screen w-full">
          <div className="h-screen w-1/2 flex items-center justify-center">
            <Outlet />
          </div>
          <div className="h-screen w-1/2 flex items-center justify-center">
            <div className="w-1/2 h-3/4 rounded-lg border-4 glowing imageBox">
              <img
                src="/assets/images/tenor.gif"
                alt="hi_gif"
                className="w-full h-full p-2 rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
        // <>
        //   <section className="h-screen w-1/2 flex flex-1 justify-center items-center flex-col py-10">
        //     <Outlet />
        //   </section>
        //   <div className="h-screen w-1/2 flex-1 flex items-center justify-center flex-col py-10">
        //     <div className="w-1/3 rounded-lg absolute imageBox glowing">
        //       <img
        //         src="/assets/images/tenor.gif"
        //         alt="logo"
        //         className="w-full h-full p-1 rounded-lg object-cover"
        //       />
        //     </div>
        //   </div>
        // </>
      )}
    </>
  );
}
