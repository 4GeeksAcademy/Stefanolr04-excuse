/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = [
    "My cat",
    "My grandma",
    "His turtle",
    "My bird",
    "The teacher",
    "A dragon"
  ];
  let action = ["ate", "peed", "crushed", "broke", "destroyed", "jumped"];
  let what = [
    "my homework",
    "the keys",
    "the car",
    "a rocket",
    "a bomb",
    "the fire",
    "the clouds"
  ];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
    "while he was figthting",
    "while he was getting a haircut",
    "when he was programming"
  ];
  let position1 = Math.floor(Math.random() * who.length);
  let position2 = Math.floor(Math.random() * action.length);
  let position3 = Math.floor(Math.random() * what.length);
  let position4 = Math.floor(Math.random() * when.length);

  let resultado =
    who[position1] +
    " " +
    action[position2] +
    " " +
    what[position3] +
    " " +
    when[position4];

  document.querySelector("#the-excuse").innerHTML = resultado;
  console.log(resultado);
};
