"use client";

import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import Image from "next/image";
import { storeAbsen } from "@/actions";

export default function Home() {
  const [data, setData] = useState("");

  const { ref } = useZxing({
    onDecodeResult(result) {
      try {
        setData(result.getText());
        setTimeout(() => {
          setData("");
        }, 10000);
      } catch (e) {
        console.log(e);
      }
    },
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    storeAbsen(data);
  }, [data]);

  return (
    <>
      <main className="scan-shell flex flex-col items-center min-w-screen h-screen relative overflow-hidden z-[5]">
        <video
          src="/bg-1.mp4"
          className="scan-bg absolute inset-0 -z-10"
          autoPlay={true}
          loop={true}
        ></video>
        <Image
          src="/abstract2.png"
          alt="Abstract"
          width={400}
          height={400}
          className="scan-abstract absolute rotate-180 -top-44 -right-32"
        />
        <Image
          src="/abstract2.png"
          alt="Abstract"
          width={400}
          height={400}
          className="scan-abstract absolute -bottom-44 -left-32"
        />
        <div className="scan-logo-bar flex justify-center items-center px-12 py-4 rounded-b-3xl">
          <Image src="/dptaspen.png" alt="Logo" width={150} height={100} />
        </div>
        <div className="flex flex-col items-center justify-center mt-10 text-center uppercase">
          <span className="font-display scan-title text-6xl md:text-7xl font-semibold text-white">
            Selamat Datang
          </span>
          <span className="scan-subtitle text-3xl md:text-5xl font-semibold">
            Di HUT BANK DP TASPEN ke-36
          </span>
        </div>
        <div className="flex h-full w-full items-center justify-center mt-4">
          <div className="scan-name-card w-full h-60 uppercase flex items-center justify-center text-white font-extrabold text-6xl md:text-7xl text-center whitespace-pre-wrap px-6">
            <span className="scan-card-content">{data}</span>
          </div>
        </div>
        <div className="scan-camera self-end w-1/4 h-60 mt-4 relative">
          <video
            className="w-full h-full object-cover rounded-[24px]"
            ref={ref}
          />
          <Image
            src="/abstract2.png"
            alt="Abstract"
            width={400}
            height={400}
            className="scan-abstract absolute -bottom-44 right-32 -z-10"
          />
        </div>
      </main>
    </>
  );
}
