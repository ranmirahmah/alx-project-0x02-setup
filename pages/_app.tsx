// pages/_app.tsx
import "@/styles/globals.css"; // keep your global css import
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
