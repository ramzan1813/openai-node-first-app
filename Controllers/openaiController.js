const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: "Say this is a test",
//   max_tokens: 7,
//   temperature: 0,
// });

const textcompletion = async (req, res) => {
  const { prompt } = req.body;
  try {
    console.log("fatching.....");
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 2048,
      temperature: 0.7,
    });
    console.log("fatched");
    // const text = responsechoices[0].text;
    res.send(response.data.choices[0].text);
    // res.render("completions", { completion: response.data.choices[0].text });
    // console.log(response.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = { textcompletion };
