import { ToastContainer } from "react-toastify";
// import Spinner from "./components/Spinner";
// import useLoading from "./hooks/useLoading";
// import MobileLayout from "./layouts/MobileLayout";
import ProfilePage from "./pages/profilePage";

import Router from "./routes/Router";

export default function App() {
  // const { loading } = useLoading();

  return (
    <>
      {/* {loading && <Spinner />} */}
      <Router />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
