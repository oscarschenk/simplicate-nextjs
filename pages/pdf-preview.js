import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Spacer, Progress } from "@nextui-org/react";
import PDFPreviewList from "../components/PdfPreviewList";

const PdfPreview = () => {
  const [indeterminated, setIndeterminated] = useState(false);
  setTimeout(() => {
    setIndeterminated(true);
  }, 2000);
  return (
    <div>
      <Head>
        <title>Simplicate PDF Generator</title>
        <meta name="description" content="Created by Keijzer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center h-screen w-screen">
        <div className="bg-gray-200 w-5/6 max-w-screen-xl text-left  px-8 rounded-xl shadow-2xl h-5/6 text-white flex items-center justify-center flex-col overflow-y-auto">
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
              <div className="flex flex-col w-full bg-gray-100 hover:-translate-y-1  duration-300 p-8 rounded-lg shadow-2xl mt-12">
                <div className="flex flex-row justify-between w-full">
                  <h1 className="text-gray-800 text-center text-4xl pb-8">
                    Project Voortgang
                  </h1>

                  <a href="/test.pdf" download>
                    <Button
                      size={"lg"}
                      className="transition ease-in-out delay-20 text-white bg-green-600 hover:-translate-y-1 hover:scale-105 hover:bg-sky-500 duration-300 cursor-pointer shadow-2xl"
                    >
                      Genereer PDF nu
                    </Button>
                  </a>
                </div>

                <div className="flex-col justify-center items-center py-8 bg-gray-600 rounded-lg flex w-full text-gray-50">
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between w-full">
                      <div className="p-4  flex justify-center w-1/3 flex-col rounded-l-lg bg-gray-600  items-center">
                        <p className="text-4xl">Budget</p>
                        <p>1.300,00 uren</p>
                        <p>€ 130.000,00</p>
                      </div>
                      <div className="p-4  flex justify-center w-1/3 flex-col bg-gray-600  items-center">
                        <p className="text-4xl">Besteed</p>
                        <p>250,00 uren</p>
                        <p>€ 25.000,00</p>
                      </div>
                      <div className="p-4  flex justify-center w-1/3 flex-col rounded-r-lg bg-gray-600  items-center">
                        <p className="text-4xl">Restant</p>
                        <p>1050,00 uren</p>
                        <p>€ 105.000,00</p>
                      </div>
                    </div>
                    <div className="px-36 pb-8">
                      {indeterminated ? (
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
                          <Progress color="success" value={30} />
                        </motion.div>
                      ) : (
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
                          <Progress color="success" indeterminated value={30} />
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:grid md:gap-6 md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-6 grid-rows-5 my-8">
                <PDFPreviewList />
              </div>

              <Spacer />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PdfPreview;
