import Layout from "@/components/Layout/Layout";
import { store, wrapper } from "@/redux/app/store";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
          <Toaster
            position="top-center"
            reverseOrder={true}
          />
        </Layout>
      </Provider>
    </SessionProvider>

  );
}
