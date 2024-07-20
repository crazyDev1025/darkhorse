import "../app/globals.css";
import { SnackbarProvider } from "notistack";
import Header from "./header";
import Footer from "./footer";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loading indicator
  }

  return (
    <SnackbarProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SnackbarProvider>
  );
}
