"use server";

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
