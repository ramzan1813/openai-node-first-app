const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const openai = require("openai");
// const api = require("./api");
// const res = require("express/lib/response");

dotenv.config();

openai.apiKey = process.env.OPENAI_API_KEY;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/openai", require("./routes/openaiRoutes"));
app.use("/huggingface", require("./routes/HuggingFaceRoutes"));

// app.get("/", (req, res) => {
//   res.render("index", { completion: "test pass" });
// });

// app.get("/fat", (req, res) => {
//   res.send(
//     api
//       .query({ inputs: "The answer to the universe is [MASK]." })
//       .then((response) => {
//         JSON.stringify(response);
//       })
//   );
// });

// app.get("/respon", (req, res) => {
//   const prompt = req.query.prompt;

//   openai.completions.create(
//     {
//       model: "text-davinci-002",
//       prompt: prompt,
//       max_tokens: 2048,
//       n: 1,
//       stop: ".",
//       temperature: 0.7,
//     },
//     (error, response) => {
//       if (error) {
//         console.log(error);
//         res.status(500).send("Internal Server Error");
//       } else {
//         res.send(response.choices[0].text);
//       }
//     }
//   );
// });

app.listen(3000, (req, res) => {
  // res.render("index");
  console.log("Server listening on port http://localhost:3000");
});
