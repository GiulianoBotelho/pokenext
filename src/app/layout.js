import { Inter } from "next/font/google";
import "../../public/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });
import Main from "./components/main.js";
export const metadata = {
  title: "POKENEXT",
  description: "My Pokedex",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><Main>{children}</Main></body>
    </html>
  );
}
