"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClientWrapper({ children }) {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const userRole = localStorage.getItem("userRole");

    // If the user is not logged in, and is not on the Login page, redirect them to /Login
    if (!isLoggedIn) {
      if (router.asPath !== "/Login") {
        router.push("/Login");
      }
    } else {
      // If the user is logged in, handle role-based redirects
      if (userRole === "admin") {
        // Redirect admin users to /Admin if they are not already on an admin page
        if (!router.asPath.startsWith("/Admin")) {
          router.push("/Admin");
        }
      } else if (userRole === "user") {
        // Prevent regular users from accessing admin routes
        if (router.asPath.startsWith("/Admin")) {
          router.push("/"); // Redirect regular users to the homepage
        }
      }
    }
  }, [router]); // Re-run effect when the router changes

  // Render children only if no redirect occurs
  return <>{children}</>;
}

