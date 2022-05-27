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

const galleryEl = images.map((image) => {
  const liEl = document.createElement("li");
  const imgEl = document.createElement("img");

  liEl.classList = "list__item";
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = "400";
  imgEl.height = "300";

  
  liEl.append(imgEl);
  return liEl;
});
//  !!!!!! Не совсем понимаю где нужно было применить метод insertAdjacentHTML()
const ulEl = document.querySelector(".gallery");
ulEl.append(...galleryEl);
