// const [isRedirecting, setIsRedirecting] = useState(false);

// useEffect(() => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn");
//   const userRole = localStorage.getItem("userRole");

//   if (!isLoggedIn) {
//     if (router.asPath !== "/Login") {
//       setIsRedirecting(true);
//       router.push("/Login");
//     }
//   } else {
//     if (userRole === "admin" && !router.asPath.startsWith("/Admin")) {
//       setIsRedirecting(true);
//       router.push("/Admin");
//     } else if (userRole === "user" && router.asPath.startsWith("/Admin")) {
//       setIsRedirecting(true);
//       router.push("/");
//     }
//   }
// }, [router]);

// if (isRedirecting) {
//   return <div>Loading...</div>; // Replace with a proper loading spinner
// }

// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function ClientWrapper({ children }) {
//   const router = useRouter();
//   const [isRedirecting, setIsRedirecting] = useState(false);

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     if (!isLoggedIn) {
//       // Redirect to Login if the user is not logged in
//       if (router.asPath !== "/Login") {
//         setIsRedirecting(true); // Prevent rendering children during redirect
//         // router.push("/Login");
//       }
//     } else {
//       // If logged in, allow role-based redirection
//       const userRole = localStorage.getItem("userRole");

//       if (userRole === "admin" && !router.asPath.startsWith("/Admin")) {
//         setIsRedirecting(true);
//         router.push("/Admin");
//       } else if (userRole === "user" && router.asPath.startsWith("/Admin")) {
//         setIsRedirecting(true);
//         // router.push("/");
//       }
//     }
//   }, [router]);

//   // Render loading spinner during redirection
//   if (isRedirecting) {
//     // return <div>Loading...</div>;
//   }

//   // Render children if no redirect is needed
//   return 
// }
// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function ClientWrapper({ children }) {
//   const router = useRouter();
//   const [isVerified, setIsVerified] = useState(false); // Track whether the user's login status is verified
//   const [isLoading, setIsLoading] = useState(true); // Track loading state to avoid rendering children prematurely

//   useEffect(() => {
//     const isLoggedIn = localStorage.getItem("isLoggedIn");

//     if (!isLoggedIn) {
//       // Redirect to "/login" if the user is not logged in and is on the root path "/"
//       if (router.asPath === "/") {
//         router.push("/Login");
//       }
//     } else {
//       // If logged in, allow access to the current route
//       setIsVerified(true);

//       // Redirect to "/" after successful login from "/login"
//       if (router.asPath === "/") {
//         router.push("/Login");
//       }
//     }

//     setIsLoading(false); // Stop the loading state once the checks are complete
//   }, [router]);

//   // Show a loading indicator while processing login status
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Render children only if login is verified or user is on the login page
//   if (!isVerified && router.asPath !== "/Login") {
//     return null; // Prevent rendering children for unauthorized access
//   }

//   return <>{children}</>;
// }




