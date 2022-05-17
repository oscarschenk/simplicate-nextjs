import Head from "next/head";
import { motion } from "framer-motion";
import { Button, Spacer } from "@nextui-org/react";
import ServicesList from "../components/ServicesList";
import Link from "next/link";

export default function singleProject() {
  return (
    <div>
      <Head>
        <title>Simplicate PDF Generator</title>
        <meta name="description" content="Created by Keijzer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center h-screen w-screen">
        <div className="bg-gradient-to-br from-gray-100 to-white w-1/2 p-20 rounded-xl shadow-2xl text-white flex items-center justify-center flex-col">
          <h1 className="text-gray-600 text-3xl">Selecteer Diensten</h1>
          <div className="w-1/2">
            <motion.div
              initial="pageInitial"
              animate="pageAnimate"
              transition={{ duration: 1.8, delay: 0.2 }}
              variants={{
                pageInitial: {
                  opacity: 0,
                },
                pageAnimate: {
                  opacity: 1,
                },
              }}
            >
              <div className="grid gap-6 grid-cols-1 grid-rows-6 mt-8 -mb-12">
                <ServicesList />
              </div>
              <Button className="transition ease-in-out delay-20 bg-violet-400 hover:-translate-y-1 hover:scale-105 hover:bg-sky-500 duration-300 cursor-pointer shadow-2xl">
                Selecteer alle diensten
              </Button>
              <Spacer />
              <Link href="/pdf-preview">
                <a>
                  <Button className="transition ease-in-out delay-20 bg-violet-400 hover:-translate-y-1 hover:scale-105 hover:bg-sky-500 duration-300 cursor-pointer shadow-2xl">
                    Door gaan
                  </Button>
                </a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
