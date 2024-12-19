// import localFont from "next/font/local";
// import "./globals.css";
// import ClientWrapper from "../app/component/ClientWrapper";
// // Ensure the import path is correct

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata = {
 
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//       <ClientWrapper>{children}</ClientWrapper>
//        {/* {children} */}
//       </body>
//     </html>
//   );
// }

import localFont from "next/font/local";
import "./globals.css";
import ClientWrapper from "../app/component/ClientWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "My App",
  description: "A Next.js application with role-based authentication.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <ClientWrapper>{children}</ClientWrapper> */}
        {children}
      </body>
    </html>
  );
}
