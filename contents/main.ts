import type { PlasmoCSConfig } from "plasmo"

import { sendToBackgroundViaRelay } from "@plasmohq/messaging"

import { sendViaRelay } from "~utils/send-via-relay"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  world: "MAIN"
}

sendToBackgroundViaRelay({
  name: "echo",
  body: { message: "test 1" }
}).then((res) => console.log("plasmo", res.message))

sendToBackgroundViaRelay({
  name: "echo",
  body: { message: "test 2" }
}).then((res) => console.log("plasmo", res.message))

// implementation with a fix

sendViaRelay({
  name: "echo",
  body: { message: "test 1" }
}).then((res) => console.log("fixed", res.message))

sendViaRelay({
  name: "echo",
  body: { message: "test 2" }
}).then((res) => console.log("fixed", res.message))
