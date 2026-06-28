import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <><script async src="https://www.googletagmanager.com/gtag/js?id=G-WC67D6XEE7"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'G-WC67D6XEE7');
      </script>
      <Component {...pageProps} />
    </>
  );
}

