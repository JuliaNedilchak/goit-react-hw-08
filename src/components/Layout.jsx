import Loader from "../components/Loader/Loader";
import { Suspense } from "react";
import AppBar from "./AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <main> {children} </main>
      </Suspense>
    </>
  );
};

export default Layout;
