import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
  console.log("echo handler", req.body)

  res.send({
    message: req.body.message
  })
}

export default handler
