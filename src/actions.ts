"use server";

import fs from "fs";

export async function sendMessage(message: string, number: string) {
  await fetch("http://localhost:3111/send-message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      number,
    }),
  });
}

export async function storeAbsen(name: string, table: string) {
  if (!fs.existsSync("absen.json")) {
    fs.writeFileSync("absen.json", "{}");
  }
  const data = fs.readFileSync("absen.json", "utf-8");
  const absen = JSON.parse(data);
  const time = new Date().toLocaleString();
  absen[name] = { table, time };
  fs.writeFileSync("absen.json", JSON.stringify(absen, null, 2));
}
