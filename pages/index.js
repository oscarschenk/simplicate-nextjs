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
        <div className="bg-gradient-to-br from-gray-100 opacity-90 to-white w-1/3 p-8 rounded-xl shadow-2xl text-white flex items-center justify-center flex-col">
          <div className="-mt-8">
            <Image src={"/logos.png"} width={300} height={140} />
          </div>

          <div className="px-2 py-4 flex justify-center">
            <div className="flex flex-col">
              <p className="text-black text-sm mb-2">
                Welkom bij deze demo van de Simplicate PDF Generator App! Deze
                demo is bedoelt om een soort idee te geven van hoe de werkelijke
                app zou kunnen werken. De app is op dit moment alleen gemaakt
                voor een laptop scherm of groter, op volledige grote.
              </p>
              <p className="text-black text-sm  mb-2">
                Natuurlijk hoeft het eindresultaat er absoluut niet zo uit te
                zien / deze functionaliteit te hebben. De structuur is gebaseerd
                op de screenshot die normaal mee wordt gestuurd met een
                tussentijdse factuur om te laten zien hoe we er voor staan qua
                gewerkte uren / budget.
              </p>
              <p className="text-black text-sm">
                Log hieronder in om verder te gaan. Alle inlog gegevens zijn
                geldig.
              </p>
            </div>
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
