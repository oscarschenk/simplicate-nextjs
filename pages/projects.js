import Head from "next/head";
import ProjectList from "../components/ProjectList";

export default function Projects() {
  return (
    <div>
      <Head>
        <title>Simplicate PDF Generator</title>
        <meta name="description" content="Created by Keijzer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center h-screen w-screen">
        <div className="bg-gradient-to-br from-gray-100 to-white w-1/2 p-20 rounded-xl shadow-2xl text-white flex items-center justify-center flex-col">
          <h1 className="text-gray-600 text-3xl">Selecteer een Project</h1>
          <ProjectList />
        </div>
      </div>
    </div>
  );
}
