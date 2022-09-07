import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-50 font-sans">
      <div className="max-w-[800px] mx-auto min-h-screen bg-white">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
