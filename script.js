
const text = document.querySelector(".text");
const btn = document.querySelector(".btn")
const boxData = [
  {
    title: "Programming Hero",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Web Development",
    desc: "HTML CSS JavaScript দিয়ে ওয়েব বানানো শেখো।"
  },
  {
    title: "React Learning",
    desc: "React দিয়ে modern UI তৈরি করা যায়।"
  },
  {
    title: "Backend Node.js",
    desc: "Node.js দিয়ে server side কাজ করা হয়।"
  },
  {
    title: "Backend Python",
    desc: "Python in flask দিয়ে server side কাজ করা হয় "
  }
];

let index = 0;


for (let i = 0; i < boxData.length; i++) {
  updateText(i)
}

function updateText() {
  if (index >= boxData.length) {
    return;
  }

  const box = document.createElement("div");
  box.className = "text_box";

  box.innerHTML = `
  <h1> ${boxData[index].title} </h1>
  <p> ${boxData[index].desc} </p>
  `
  text.appendChild(box);
  index++
}


