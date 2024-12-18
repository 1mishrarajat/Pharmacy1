// import { useEffect } from "react";
// import { useRouter } from "next/navigation"; // Use the Next.js router

// export function useAuth(redirectTo = "/Login") {
//   const router = useRouter();

//   useEffect(() => {
//     const role = localStorage.getItem("role"); // Retrieve role from localStorage

//     if (role === "admin") {
//       router.push("/Admin"); // Redirect to Admin page if role is admin
//     } else if (role === "user") {
//       router.push("/Login"); // Redirect to User page if role is user
//     } else {
//       router.push(redirectTo); // Redirect to Login or specified fallback if no valid role
//     }
//   }, [router, redirectTo]); // Ensure hook runs when router or redirectTo changes

// }
