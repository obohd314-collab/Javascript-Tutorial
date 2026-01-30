
// // Mapping
const ui = document.querySelector(".container");
console.log(ui);

const person = [
  {
    name: "David",
    Image: "./david.jpg.png",
    complextion: "Fair",
    age: 19,
  },
  {
    name: "Favour",
    Image: "./oboh.jpg.png",
    complextion: "Dark",
    age: 18,
  },
  {
    name: "Joy",
    Image: "sen.png",
    complextion: "Dark",
    age: 15,
  },
  {
    name: "David",
    Image: "./david.jpg.png",
    complextion: "Fair",
    age: 19,
  },
  {
    name: "Favour",
    Image: "./oboh.jpg.png",
    complextion: "Dark",
    age: 18,
  },
  {
    name: "Joy",
    Image: "sen.png",
    complextion: "Dark",
    age: 15,
  },
];

const mapEl = function (person) {
  person.map((user) => {
    const html = `
    <div class = "user">
    <img src=${user.Image} alt=${user.name} />
    <h1>Name: ${user.name}</h1>
    <p>${user.complextion}</p>
    <small>${user.age}</small>
    </div>
    `;
    ui.insertAdjacentHTML("afterbegin", html);
  });
};

mapEl(person);



const button = document.querySelector("input");
const text = document.querySelector("input")
button.addEventListener("click",function (event) {
  // console.log(event.target);
  // const currentTheme = document.documentElement.setAttribute("dark-theme");
  if(event.target.checked) {
    document.documentElement.setAttribute("dark-theme", "dark")
    text.textContent = "light";
  }
 else{document.documentElement.setAttribute("dark-theme", "light");
 text.textContent = "Dark";
}
});




