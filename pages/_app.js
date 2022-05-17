import "../styles/globals.css";
import { motion } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="bg-gradient-to-br from-violet-400 to-sky-500 h-screen w-screen flex items-center justify-center">
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        transition={{ duration: 1.2 }}
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </motion.div>
    </div>
  );
}

export default MyApp;
