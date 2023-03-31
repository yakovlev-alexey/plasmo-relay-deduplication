import { nanoid } from "nanoid"

import type { PlasmoMessaging } from "@plasmohq/messaging"

export const sendViaRelay: PlasmoMessaging.SendFx = (req) =>
  new Promise((resolve, _reject) => {
    // @ts-expect-error
    req.id = nanoid()

    window.addEventListener("message", (event) => {
      // @ts-expect-error
      if (event.data.relayed && event.data.id === req.id) {
        resolve(event.data.body)
      }
    })

    window.postMessage(req)
  })
