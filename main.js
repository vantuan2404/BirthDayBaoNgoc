let listBalloon = [];

for (var i = 1; i <= 5; i++) {
  const imgBalloon = document.createElement("img");
  imgBalloon.setAttribute("src", `./img/balloon-${i}.png`);
  imgBalloon.setAttribute("class", `balloon-icon`);
  listBalloon.push(imgBalloon);
}

listBalloon.forEach((e) => {
  const main = document.querySelector("main");
  main.appendChild(e);
});

let balloons = document.querySelectorAll(".balloon-icon");

function renderBalloon(attributes) {
  for (var i = 1; i <= 5; i++) {
    const randomIndex = Math.random() * 20;
    const randomIndex2 = Math.random() * 85;

    const main = document.querySelector("main");
    const img = document.createElement("img");

    img.setAttribute("src", `./img/balloon-${i}.png`);
    img.setAttribute("class", `balloon-icon`);
    img.setAttribute("style", `--i:${i * 3}s; left:${randomIndex2}%`);

    attributes.style.left = `${randomIndex}%`;
    attributes.setAttribute("style", `--i:${i * 3}s`);

    main.appendChild(img);
  }
}

const buttonGift = document.querySelector(".giftbox-icon");
buttonGift.addEventListener("click", () => {
  document.querySelector(".popup").classList.add("popupActive");
  document.querySelector("audio").play();
  renderBalloon(balloons[0]);
  renderBalloon(balloons[1]);
  renderBalloon(balloons[2]);
  renderBalloon(balloons[3]);
  renderBalloon(balloons[4]);
});
document.querySelector(".popup button").addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("popupActive");
});
