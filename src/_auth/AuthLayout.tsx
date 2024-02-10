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
        <>
          <section className="h-screen w-1/2 flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <div className="h-screen w-1/2 object-cover flex items-center justify-center">
            <div className="w-1/3 h-4/5 rounded-lg absolute imageBox glowing">
              <img
                src="/assets/images/tenor.gif"
                alt="logo"
                className="w-full h-full p-1 rounded-lg object-cover"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}
