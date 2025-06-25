// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router";
// import { router } from "./routes/router.jsx";
// import AuthProvider from "./provider/AuthProvider.jsx";
// import { HelmetProvider } from "react-helmet-async";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


// createRoot(document.getElementById("root")).render(
 
//     <HelmetProvider>
//       <AuthProvider>
//         <RouterProvider router={router}>
//         <ToastContainer />
//         </RouterProvider>
//       </AuthProvider>
//     </HelmetProvider>
 
// );

// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router";
// import { router } from "./routes/router.jsx";
// import AuthProvider from "./provider/AuthProvider.jsx";
// import { HelmetProvider } from "react-helmet-async";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// createRoot(document.getElementById("root")).render(
//   <HelmetProvider>
//     <AuthProvider>
//       <>
//         <RouterProvider router={router} />
//         <ToastContainer position="top-center" autoClose={3000} />
//       </>
//     </AuthProvider>
//   </HelmetProvider>
// );

import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <AuthProvider>
      <>
        <RouterProvider router={router} />
        <ToastContainer position="top-center" autoClose={3000} />
      </>
    </AuthProvider>
  </HelmetProvider>
);


