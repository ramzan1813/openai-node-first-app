function onSubmit(e) {
  e.preventDefault();

  document.querySelector(".msg").textContent = "";
  document.querySelector("#image").src = "";

  const prompt = document.querySelector("#prompt").value;
  // const size = document.querySelector("#size").value;

  if (prompt === "") {
    alert("Please add some text");
    return;
  }

  generateImageRequest(prompt);
}

async function generateImageRequest(prompt) {
  try {
    showSpinner();

    const response = await fetch("/openai/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      removeSpinner();
      throw new Error("That text could not be generated");
    }

    const data = await response.text();
    // console.log(data);

    const imageUrl = data;

    document.querySelector("#image").textContent = '"' + imageUrl + '"';

    removeSpinner();
  } catch (error) {
    document.querySelector(".msg").textContent = error;
  }
}

function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function removeSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

document.querySelector("#image-form").addEventListener("submit", onSubmit);
