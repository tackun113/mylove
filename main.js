const days_el = document.querySelector("#days");
const hours_el = document.querySelector("#hours");
const minutes_el = document.querySelector("#minutes");
const seconds_el = document.querySelector("#seconds");

const pre_el = document.querySelector(".pre");
const now_el = document.querySelector(".now");
const next_el = document.querySelector(".next");

const cover = document.querySelector(".cover");

const countDownDate = new Date("May 11, 2027 00:00:00").getTime();

for (let i = 0; i < 60; i++) {
  const el = document.createElement("span");
  el.id = "el" + i;
  el.classList.add("el_box");

  el.textContent = i;
  cover.appendChild(el);
}

const height = document.querySelector("#el0").offsetHeight;
const moveTo = (index) => {
  console.log(height, index);
  console.log(height * index);
  cover.style.transform = `translateY(${-height * index}px)`;
};

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //   document.getElementById("demo").innerHTML =
  //     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  days_el.innerHTML = days;
  hours_el.innerHTML = hours;
  minutes_el.innerHTML = minutes;
  //   seconds_el.innerHTML = seconds;

  //   pre_el.innerHTML = seconds - 1;
  //   now_el.innerHTML = seconds;
  //   next_el.innerHTML = seconds + 1;

  moveTo(seconds);
}, 1000);
