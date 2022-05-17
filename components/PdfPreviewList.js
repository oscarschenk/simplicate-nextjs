import React, { useState } from "react";
import { data } from "../public/data.js";
import NumberFormat from "react-number-format";
import { Progress, Switch } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function PDFPreviewList(toggled) {
  const [indeterminated, setIndeterminated] = useState(false);
  setTimeout(() => {
    setIndeterminated(true);
  }, 2000);
  const serviceItems = data.map((item) => {
    return (
      <div
        key={item.dienst}
        className="bg-gray-100 p-8 rounded-lg w-full hover:scale-105  duration-300 shadow-2xl"
      >
        <div className="mb-4 flex flex-row justify-between">
          <h1 className="text-2xl text-gray-900">{item.dienst}</h1>
          <Switch checked={true} color="success" />
        </div>
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <div>
              <p className="text-gray-800">{item.uren.naam}</p>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col justify-around gap-2">
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
                    <Progress
                      color="success"
                      value={
                        (item.uren.besteed.uren / item.uren.budget.uren) * 100
                      }
                    />
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
                    <Progress
                      color="success"
                      indeterminated
                      value={
                        (item.uren.besteed.uren / item.uren.budget.uren) * 100
                      }
                    />
                  </motion.div>
                )}
                <div className="flex flex-row">
                  <div className="grid gap-4 grid-cols-3 grid-rows bg-gray-600 text-gray-50 p-4 rounded-lg">
                    <div>{item.uren.budget.naam}</div>
                    <div>{item.uren.budget.uren}</div>
                    <div>
                      <NumberFormat
                        value={item.uren.budget.prijs}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                      />
                    </div>
                    <div>{item.uren.besteed.naam}</div>
                    <div>{item.uren.besteed.uren}</div>
                    <div>
                      <NumberFormat
                        value={item.uren.besteed.prijs}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                      />
                    </div>
                    <div>{item.uren.restant.naam}</div>
                    <div>{item.uren.restant.uren}</div>
                    <div>
                      <NumberFormat
                        value={item.uren.restant.prijs}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-gray-800">{item.gefactureerd.naam}</p>
            </div>
            <div className="flex flex-row">
              <div className="flex flex-col justify-around gap-2">
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
                    <Progress
                      color="warning"
                      value={
                        (item.gefactureerd.concept /
                          item.gefactureerd.verwacht) *
                        100
                      }
                    />
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
                    <Progress
                      color="warning"
                      indeterminated
                      value={
                        (item.gefactureerd.concept /
                          item.gefactureerd.verwacht) *
                        100
                      }
                    />
                  </motion.div>
                )}
                <div className="flex flex-row">
                  <div className="grid gap-4 grid-cols-2 grid-rows-4 bg-gray-600 text-gray-50 p-4 rounded-lg">
                    <div>
                      <p>Verwacht:</p>
                    </div>
                    <div>
                      <NumberFormat
                        value={item.gefactureerd.verwacht}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                      />
                    </div>
                    <div>
                      <p>Gefactureerd:</p>
                    </div>
                    <div>
                      <NumberFormat
                        value={item.gefactureerd.gefactureerd}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                      />
                    </div>
                    <div>
                      <p>Concept:</p>
                    </div>
                    <div>
                      <NumberFormat
                        value={item.gefactureerd.concept}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                      />
                    </div>
                    <div>
                      <p>Gereed:</p>
                    </div>
                    <div>
                      <NumberFormat
                        value={item.gefactureerd.gereed}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"€"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return serviceItems;
}
