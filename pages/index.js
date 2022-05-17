import Head from "next/head";
import Image from "next/image";
import { Input, Spacer, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/projects");
  };

  return (
    <div>
      <Head>
        <title>Simplicate PDF Generator</title>
        <meta name="description" content="Created by Keijzer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center">
        <div className="bg-gradient-to-br from-gray-100 opacity-90 to-white w-1/3 p-20 rounded-xl shadow-2xl text-white flex items-center justify-center flex-col">
          <div className="-mt-8">
            <Image src={"/logos.png"} width={300} height={140} />
          </div>

          <div className="px-2 py-4 flex justify-center">
            <p className="text-black text-sm">
              Lorem ipsum dolor sit amet. Et nemo rerum qui quaerat itaque eos
              quam officia sit aliquid ullam eum amet dicta qui aliquam animi At
              culpa autem. Et porro officiis eos illo odio ea optio consequuntur
              aut culpa nihil et minus corporis in internos voluptatem et
              voluptates dolor. Eos repellat modi vel repellendus ducimus id
              optio officia qui molestiae ratione est quaerat numquam rem quidem
              velit. Est exercitationem nemo ab aliquid aut culpa cumque ut
              beatae dolorum ea repudiandae aliquid.
            </p>
          </div>
          <div className="w-full mt-4">
            <Input
              fullWidth="true"
              color="primary"
              placeholder="Gebruikersnaam"
            />
            <Spacer y={0.8} />
            <Input.Password
              color="primary"
              fullWidth="true"
              placeholder="Wachtwoord"
            />
            <Spacer y={0.8} />
            <Button
              className="transition ease-in-out delay-20 bg-violet-400 hover:-translate-y-1 hover:scale-103 hover:bg-sky-500 duration-300 cursor-pointer shadow-2xl"
              onClick={handleClick}
              auto="true"
              animated="true"
              fullWidth="true"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
