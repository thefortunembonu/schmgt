import "/styles/globals.css";
import Navbar from "/components/Navbar";
import Footer from "/components/Footer";
import ReduxProvider from "../redux/reduxProvider";

export const metadata = {
  title: "Knoxx University",
  description: "Knoxx School Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  return (
    <html lang="en" className="scroll-smooth">
      <ReduxProvider>
        <body className="">
          <Navbar />
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
