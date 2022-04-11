const req = require("express/lib/request");
const res = require("express/lib/response");
let UsersName = "";
module.exports = {
  compliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  fortune: (req, res) => {
    const fortunes = [
      "'If you do a thing, and you do it right, and you dont mess it up. It works, it just works.'-JonTron",
      "Error 404, Fortune Not found- Just kidding you're gonna do wonderful today",
      "Life is like a box of Chocolates you never know what you're gonna get",

      "A faithful friend is a strong defense",
      "Accept something that you cannot change, and you will feel better.",
      "Any day above ground is a good day.",
      "Adventure can be real happiness.",
    ];
    const justSilly = [
      "'If you do a thing, and you do it right, and you dont mess it up. It works, it just works.'-JonTron",
      "Error 404, Fortune Not found- Just kidding you're gonna do wonderful today",
      "Life is like a box of Chocolates you never know what you're gonna get",
    ];
    let ranInd = 0;
    let ranFortune = 0;
    console.log(req.body.checked);
    if (req.body.checked) {
      ranInd = Math.floor(Math.random() * justSilly.length);
      ranFortune = justSilly[ranInd];
    } else {
      ranInd = Math.floor(Math.random() * fortunes.length);
      ranFortune = fortunes[ranInd];
    }
    res.status(200).send(ranFortune);
  },
  nameCompliment: (req, res) => {
    const { name } = req.body;
    if (name) {
      res
        .status(200)
        .send(
          `${name} you're so amazing, you know ${name} you can do this. when I first set keys with you I realized something, no matter what you put your mind to, you can do. have an amazing day ${name}.`
        );
    } else {
      res.status(400).send("Enter Name");
    }
  },
  nameSave: (req, res) => {
    const { name } = req.body;
    UsersName = name;
    res.status(200).send(UsersName);
  },
  updateName: (req, res) => {
    const { name } = req.body;
    UsersName = name;

    const type = req.params.type;
    if (type === "big") {
      user = { Username: UsersName, Type: type };
      res.status(200).send(user);
    } else if (type === "small") {
      user = { Username: UsersName, Type: type };
      res.status(200).send(user);
    } else {
      res.status(400).send("Enter Type");
    }
  },
  deleteName: (req, res) => {
    UsersName = "";
    res.status(200).send(UsersName);
  },
};
