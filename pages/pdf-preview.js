import Head from "next/head";
import { motion } from "framer-motion";
import { Button, Spacer, Switch } from "@nextui-org/react";
import PDFPreviewList from "../components/PdfPreviewList";
import Link from "next/link";
import { data } from "../public/data";

export default function pdfPreview(toggled) {
  return (
    <div>
      <Head>
        <title>Simplicate PDF Generator</title>
        <meta name="description" content="Created by Keijzer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center h-screen w-screen">
        <div className="bg-gradient-to-br from-gray-100 to-white w-5/6 max-w-screen-xl py-20 px-8 rounded-xl shadow-2xl h-5/6 text-white flex items-center justify-center flex-col overflow-y-auto">
          <h1 className="text-gray-600 text-3xl">PDF Data Preview</h1>
          <div className="w-full h-full">
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
              <div className="grid gap-6 grid-cols-2 grid-rows-3 my-8">
                <PDFPreviewList />
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
              <Spacer />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
