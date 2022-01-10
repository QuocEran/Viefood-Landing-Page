// top nav
const navItems = document.getElementsByClassName("menu-item");

window.onload = () => {
  let currItem = document.querySelectorAll(".menu-item");
  currItem.forEach((item, index) => {
    item.classList.add("start");
  });
};
Array.from(navItems).forEach((item, index) => {
  item.onclick = (e) => {
    let currentItem = document.querySelector(".menu-item.active");
    currentItem.classList.remove("active");
    item.classList.add("active");
  };
});

// mb top nav
let bottomNavItems = document.querySelectorAll(".mb-nav-item");

let bottomMove = document.querySelector(".mb-move-item");

bottomNavItems.forEach((item, index) => {
  item.onclick = (e) => {
    console.log("object");
    let crrItem = document.querySelector(".mb-nav-item.active");
    crrItem.classList.remove("active");
    item.classList.add("active");
    bottomMove.style.left = index * 25 + "%";
  };
});

window.onload = () => {
  let currItem = document.querySelectorAll(".mb-nav-item");
  currItem.forEach((item, index) => {
    item.classList.add("start");
  });
};

// back to top
let backToTopBtn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.classList.add("active");
  } else {
    backToTopBtn.classList.remove("active");
  }
});

// window.onscroll = () => {
//   if (document.documentElement.scrollTop > 200) {
//     backToTopBtn.style.display = "flex";
//     backToTopBtn.style.bottom = "70px";
//   } else {
//     backToTopBtn.style.display = "none";
//   }
// };
// on scroll animation
let scroll =
  window.requestAnimationFrame ||
  function (callback) {
    window.setTimeout(callback, 1000 / 60);
  };

let elToShow = document.querySelectorAll(".play-on-scroll");
isElInViewPort = (el) => {
  let rect = el.getBoundingClientRect();

  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.bottom >=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight))
  );
};
loop = () => {
  elToShow.forEach((item, index) => {
    if (isElInViewPort(item)) {
      item.classList.add("start");
    }
    // else {
    //   item.classList.remove("start");
    // }
  });
  scroll(loop);
};

loop();

// food category

let foodMenuList = document.querySelector(".food-item-wrap");

let foodCategory = document.querySelector(".food-category");

let categories = foodCategory.querySelectorAll("button");

categories.forEach((item) => {
  item.onclick = (e) => {
    let currCat = foodCategory.querySelector("button.active");
    currCat.classList.remove("active");
    e.target.classList.add("active");
    foodMenuList.classList =
      "food-item-wrap " + e.target.getAttribute("data-food-type");
  };
});
