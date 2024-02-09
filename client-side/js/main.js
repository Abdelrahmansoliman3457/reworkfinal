// loader
$(window).on("load", function () {
  setTimeout(function () {
    $(".loader").fadeOut("slow", function () {
      $(".loader").remove();
    });
  }, 1000);
});
// toggle sidebar
let allLinks = document.querySelector(".links");
let toggleBtn = document.querySelector(".coll-icon");
let navLayer = document.querySelector(".nav-layer");

if (allLinks) {
  toggleBtn.addEventListener("click", function () {
    navLayer.classList.toggle("slideto");
    allLinks.classList.toggle("slideto");
    this.classList.toggle("active");
  });
  navLayer.addEventListener("click", function () {
    toggleBtn.classList.remove("active");
    allLinks.classList.remove("slideto");
    this.classList.remove("slideto");
  });
}

// add class to header onscroll
let header = document.querySelector(".header");
window.onscroll = function () {
  if (header) {
    if (window.pageYOffset > 50) {
      header.classList.add("shadow-header");
    } else {
      header.classList.remove("shadow-header");
    }
  }
};

// spinner in input number

let plusBtn = document.querySelectorAll(".add-sppiner");
let minusBtn = document.querySelectorAll(".minus-sppiner");

for (let i = 0; i < plusBtn.length; i++) {
  plusBtn[i].addEventListener("click", function () {
    this.closest(".main-input-cont").querySelector(".input-number").value++;
  });
}
for (let i = 0; i < minusBtn.length; i++) {
  minusBtn[i].addEventListener("click", function () {
    if (
      this.closest(".main-input-cont").querySelector(".input-number").value > 0
    ) {
      this.closest(".main-input-cont").querySelector(".input-number").value--;
    }
  });
}

//  toggle drop-down
let myBtndrop = document.querySelector(".profile-btn");
let drop = document.querySelector(".dropProfile");
// // toggle drop-down
let btnNoti = document.querySelector(".noti-btn");
let dropNoti = document.querySelector(".dropNotification");
if (drop) {
  myBtndrop.addEventListener("click", function (e) {
    drop.classList.toggle("show-drop");
    dropNoti.classList.remove("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    drop.classList.remove("show-drop");
  });
  drop.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

if (drop) {
  btnNoti.addEventListener("click", function (e) {
    dropNoti.classList.toggle("show-drop");
    drop.classList.remove("show-drop");
    e.stopPropagation();
  });
  document.body.addEventListener("click", function () {
    dropNoti.classList.remove("show-drop");
  });
  dropNoti.addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

// //  add active class to cuurent link
$(".links > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});
// //  add active class to cuurent link
$(".bg-light-gary ul > li > a").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});
