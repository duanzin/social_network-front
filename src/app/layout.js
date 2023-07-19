import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalContextProvider } from "./Context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Social Network",
  },
  description: "this is a social network site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </body>
    </html>
  );
}
