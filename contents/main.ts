import { sendToBackgroundViaRelay } from "@plasmohq/messaging"
import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    world: "MAIN"
}

sendToBackgroundViaRelay({
    name: 'echo', body: { message: "test 1" }
}).then((res) => console.log(res.message))

sendToBackgroundViaRelay({
    name: 'echo', body: { message: "test 2" }
}).then((res) => console.log(res.message))