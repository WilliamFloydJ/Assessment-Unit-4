document.getElementById("complimentButton").onclick = function () {
  axios.get("http://localhost:4000/api/compliment/").then(function (response) {
    const data = response.data;
    alert(data);
  });
};

document.getElementById("fortuneButton").onclick = function () {
  axios
    .post("http://localhost:4000/api/fortune/", {
      checked: document.getElementById("SillyButton").checked,
    })
    .then(function (response) {
      alert(response.data);
    });
};

document.getElementById("submit").onclick = () => {
  axios
    .post("http://localhost:4000/api/nameCompliment", {
      name: document.getElementById("Name").value,
    })
    .then((res) => {
      alert(res.data);
    });
};
document.getElementById("Poster Name").onclick = () => {
  axios
    .post("http://localhost:4000/api/Name", {
      name: document.getElementById("Name").value,
    })
    .then((res) => {
      document.getElementById(
        "NameTitle"
      ).textContent = `${res.data} Is So Amazing`;
    });
};
document.getElementById("Update Name").onclick = () => {
  if (document.getElementById("Big?").checked) {
    axios
      .put("http://localhost:4000/api/Name/big", {
        name: document.getElementById("Name").value,
      })
      .then((res) => {
        document.getElementById(
          "NameTitle"
        ).textContent = `${res.data.Username} Is So Amazing`;
        console.log(res.data);
        document.getElementById("NameTitle").style.fontSize = "56px";
      });
  } else {
    axios
      .put("http://localhost:4000/api/Name/small", {
        name: document.getElementById("Name").value,
      })
      .then((res) => {
        document.getElementById(
          "NameTitle"
        ).textContent = `${res.data.Username} Is So Amazing`;

        document.getElementById("NameTitle").style.fontSize = "28px";
      });
  }
};
document.getElementById("quotes").onclick = () => {
  axios.get("https://type.fit/api/quotes").then((res) => {
    let ranIndex = Math.floor(Math.random() * res.data.length);
    let ranQuote = res.data[ranIndex];
    console.log(ranQuote);
    const quote = document.createElement("p");
    quote.textContent = `${ranQuote.text} - Author - ${ranQuote.author}`;
    document.querySelector("body").appendChild(quote);
  });
};
document.getElementById("Delete Name").onclick = () => {
  axios.delete("http://localhost:4000/api/Name").then((res) => {
    document.getElementById("NameTitle").textContent = res.data;
  });
};
