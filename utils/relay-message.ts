import { PlasmoMessaging, sendToBackground } from "@plasmohq/messaging"

export const relayMessage: PlasmoMessaging.RelayFx = (
  req,
  // @ts-expect-error
  onMessage = sendToBackground
) => {
  const relayHandler = async (event: MessageEvent) => {
    if (!event.data.relayed) {
      const relayPayload = {
        name: req.name,
        relayId: req.relayId,
        body: event.data.body
      }

      const backgroundResponse = await onMessage?.(relayPayload)

      window.postMessage({
        name: req.name,
        id: event.data.id,
        relayId: req.relayId,
        body: backgroundResponse,
        relayed: true
      })
    }
  }

  window.addEventListener("message", relayHandler)
  return () => window.removeEventListener("message", relayHandler)
}
