const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const ul = document.getElementsByClassName("gallery")[0];

for (let i = 0; i < images.length; i++) {
  const li = document.createElement("li");
  li.classList.add("image");
  li.insertAdjacentHTML(
    "afterbegin",
    `<img src=${images[i].url} alt="${images[i].alt}" class="imagesGallery"></img>`
  );
  console.log(images[i].alt);
  ul.appendChild(li);
}
