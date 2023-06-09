import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./Context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Social Network",
  },
  description: "this is the login/signup page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </body>
    </html>
  );
}
