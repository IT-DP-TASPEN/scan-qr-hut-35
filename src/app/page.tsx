"use client";

import { useState } from "react";
import { useZxing } from "react-zxing";
import Image from "next/image";

interface Data {
  name: string;
  table: string;
}

export default function Home() {
  const [data, setData] = useState<Data>({} as Data);

  const { ref } = useZxing({
    onDecodeResult(result) {
      try {
        setData(JSON.parse(result.getText()) as Data);
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <>
      <main className="flex flex-col items-center min-w-screen h-screen relative overflow-hidden z-[5]">
        <video
          src="/bg-1.mp4"
          className="absolute -z-10 w-auto min-h-auto max-w-none object-cover"
          autoPlay={true}
          loop={true}
        ></video>
        <Image
          src="/abstract2.png"
          alt="Abstract"
          width={400}
          height={400}
          className="absolute rotate-180 -top-44 -right-32"
        />
        <Image
          src="/abstract2.png"
          alt="Abstract"
          width={400}
          height={400}
          className="absolute -bottom-44 -left-32"
        />
        <div className="flex justify-center items-center px-12 py-4 bg-white rounded-b-3xl">
          <Image src="/dptaspen.png" alt="Logo" width={150} height={100} />
        </div>
        <div className="flex flex-col items-center justify-center mt-8 text-center uppercase">
          <span className="text-7xl font-extrabold text-white">
            Selamat Datang
          </span>
          <span className="text-5xl font-extrabold text-[#DFA02F]">
            Di HUT BANK DP TASPEN ke-35
          </span>
        </div>
        <div className="flex h-full w-full items-center justify-center mt-4">
          <div className="w-3/4 h-60 bg-[url('/abstract.png')] bg-repeat bg-contain uppercase flex items-center justify-center text-white font-extrabold text-7xl text-center">
            {data.name}
          </div>
          <div className="w-1/4 h-60 bg-[#F6C700] bg-[url('/abstract.png')] bg-repeat bg-contain flex flex-col items-center justify-center">
            <span className="text-white font-extrabold uppercase text-center text-3xl">
              {data.table && "Nomor Meja"}
            </span>
            <span className="text-black font-extrabold uppercase text-center text-8xl">
              {data.table}
            </span>
          </div>
        </div>
        <div className="self-end w-1/4 h-60 mt-4 relative">
          <video className="w-full h-full z-10" ref={ref} />
          <Image
            src="/abstract2.png"
            alt="Abstract"
            width={400}
            height={400}
            className="absolute -bottom-44 right-32 -z-10"
          />
        </div>
      </main>
    </>
  );
}
