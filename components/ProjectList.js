import { motion } from "framer-motion";
import React from "react";

import Link from "next/link";

export default function ProjectList() {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      transition={{ duration: 1.8 }}
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <div className="grid gap-4 grid-cols-1 grid-rows-4 mt-8">
        <Link href="/single-project-page">
          <a>
            <div className="py-4 px-8 rounded-lg transition ease-in-out delay-20 bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:bg-violet-400 duration-300 cursor-pointer shadow-2xl">
              <h1 className="text-xl">Project 1</h1>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet. Est voluptas omnis non eaque enim ut
                itaque minus eum galisum officia et aliquid dignissimos. Et
                similique tenetur eos voluptatem explicabo aut dolores velit et
                repudiandae saepe.
              </p>
            </div>
          </a>
        </Link>
        <Link href="/single-project-page">
          <a>
            <div className="py-4 px-8 rounded-lg transition ease-in-out delay-20 bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:bg-violet-400 duration-300 cursor-pointer shadow-2xl">
              <h1 className="text-xl">Project 2</h1>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet. Est voluptas omnis non eaque enim ut
                itaque minus eum galisum officia et aliquid dignissimos. Et
                similique tenetur eos voluptatem explicabo aut dolores velit et
                repudiandae saepe.
              </p>
            </div>
          </a>
        </Link>
        <Link href="/single-project-page">
          <a>
            <div className="py-4 px-8 rounded-lg transition ease-in-out delay-20 bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:bg-violet-400 duration-300 cursor-pointer shadow-2xl">
              <h1 className="text-xl">Project 3</h1>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet. Est voluptas omnis non eaque enim ut
                itaque minus eum galisum officia et aliquid dignissimos. Et
                similique tenetur eos voluptatem explicabo aut dolores velit et
                repudiandae saepe.
              </p>
            </div>
          </a>
        </Link>
        <Link href="/single-project-page">
          <a>
            <div className="py-4 px-8 rounded-lg transition ease-in-out delay-20 bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:bg-violet-400 duration-300 cursor-pointer shadow-2xl">
              <h1 className="text-xl">Project 4</h1>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet. Est voluptas omnis non eaque enim ut
                itaque minus eum galisum officia et aliquid dignissimos. Et
                similique tenetur eos voluptatem explicabo aut dolores velit et
                repudiandae saepe.
              </p>
            </div>
          </a>
        </Link>
        <Link href="/single-project-page">
          <a>
            <div className="py-4 px-8 rounded-lg transition ease-in-out delay-20 bg-sky-500 hover:-translate-y-1 hover:scale-105 hover:bg-violet-400 duration-300 cursor-pointer shadow-2xl">
              <h1 className="text-xl">Project 5</h1>
              <p className="text-xs mt-2">
                Lorem ipsum dolor sit amet. Est voluptas omnis non eaque enim ut
                itaque minus eum galisum officia et aliquid dignissimos. Et
                similique tenetur eos voluptatem explicabo aut dolores velit et
                repudiandae saepe.
              </p>
            </div>
          </a>
        </Link>
      </div>
    </motion.div>
  );
}
