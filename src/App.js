// import login from './pages/LoginPage';
import {ToastContainer} from 'react-toastify';
import Router from "./routes/Router";

export default function App(){
  
  return <>
  <Router/>
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
  
}
