const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const { OPEN_AI_KEY } = require("../../config/serverConfig");
const router = express.Router();
const configuration = new Configuration({
  apiKey: OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);
router.route("/").get((req, res) => {
  res.send("Hello from Dalle Api");
});

router.route("/").post((req, res) => {
  try {
    const { prompt } = req.body;
    const openAiResponse = openai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024*1024",
      response_format: "b64_json",
    });

    const image = openAiResponse.data.data[0].b64_json;
    return res.status(201).json({
      image,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error?.response.data.error.message);
  }
});
module.exports = router;
