const huggingface = async (req, res) => {
  try {
    // const { data } = req.body;
    data = "The answer to the universe is [MASK]";
    const response = await fetch(
      "https://api-inference.huggingface.co/models/bert-base-uncased",
      {
        headers: {
          Authorization: "Bearer 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",
        },
        method: "POST",
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    res.send(result);
  } catch (error) {
    if (error.response) {
      console.log(error.response.message);
    }
  }
};

module.exports = { huggingface };
