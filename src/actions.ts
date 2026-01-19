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

export async function storeAbsen(name: string) {
  await fetch("http://localhost:8080/api/employees/mark_present", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "Dptaspen@25!",
    },
    body: JSON.stringify({
      name,
    }),
  });
}
