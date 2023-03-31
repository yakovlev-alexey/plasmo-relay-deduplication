import type { PlasmoCSConfig } from "plasmo"

import { relayMessage } from "@plasmohq/messaging"

import { relayMessage as fixedRelayMessage } from "~utils/relay-message"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

relayMessage({ name: "echo" })

fixedRelayMessage({ name: "echo" })
