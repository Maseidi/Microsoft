var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let openMenu1El = document.querySelector(".openMenu1")
let openMenu2El = document.querySelector(".openMenu2")
let openMenu3El = document.querySelector(".openMenu3")
let openMenu4El = document.querySelector(".openMenu4")
let openMenu5El = document.querySelector(".openMenu5")
let openMenu6El = document.querySelector(".openMenu6")
let openMenuBool = 0

let largeMenuEl = document.querySelector(".largeMenu")
let smallMenuEl = document.querySelector(".smallMenu")
largeMenuEl.style.display = "none"
smallMenuEl.style.display = "none"

let swiperEl = document.querySelector(".swiper")
swiperEl.style.zIndex = "0"

openMenu1El.addEventListener("click", changeMenuBool) 
openMenu2El.addEventListener("click", changeMenuBool) 
openMenu3El.addEventListener("click", changeMenuBool) 
openMenu4El.addEventListener("click", changeMenuBool) 
openMenu4El.addEventListener("click", changeMenuBool) 
openMenu4El.addEventListener("click", changeMenuBool) 
openMenu5El.addEventListener("click", changeMenuBool) 
openMenu6El.addEventListener("click", changeMenuBool) 

function changeMenuBool() {
  if ( openMenuBool === 0 ) {
    swiperEl.style.zIndex = "-1"
    openMenuBool++
    openMenu5El.classList.add("fa-x")
    openMenu6El.classList.add("fa-x")
    openMenu5El.classList.remove("fa-bars")
    openMenu6El.classList.remove("fa-bars")
  } else {
    swiperEl.style.zIndex = "0"
    openMenuBool = 0
    openMenu5El.classList.add("fa-bars")
    openMenu6El.classList.add("fa-bars")
    openMenu5El.classList.remove("fa-x")
    openMenu6El.classList.remove("fa-x")
  }
}

let sub1El = document.querySelector(".sub1")
let sub2El = document.querySelector(".sub2")
let sub3El = document.querySelector(".sub3")
let sub4El = document.querySelector(".sub4")
let sub5El = document.querySelector(".sub5")
let sub6El = document.querySelector(".sub6")

let openSub1El = document.querySelector(".openSub1")
let openSub2El = document.querySelector(".openSub2")
let openSub3El = document.querySelector(".openSub3")
let openSub4El = document.querySelector(".openSub4")
let openSub5El = document.querySelector(".openSub5")
let openSub6El = document.querySelector(".openSub6")

let chev1El = document.querySelector(".chev1")
let chev2El = document.querySelector(".chev2")
let chev3El = document.querySelector(".chev3")
let chev4El = document.querySelector(".chev4")
let chev5El = document.querySelector(".chev5")
let chev6El = document.querySelector(".chev6")

sub1El.style.display = "none"
var sub1Bool = 0
sub2El.style.display = "none"
var sub2Bool = 0
sub3El.style.display = "none"
var sub3Bool = 0
sub4El.style.display = "none"
var sub4Bool = 0
sub5El.style.display = "none"
var sub5Bool = 0
sub6El.style.display = "none"
var sub6Bool = 0

openSub1El.addEventListener("click" , openSubMenu1)
openSub2El.addEventListener("click" , openSubMenu2)
openSub3El.addEventListener("click" , openSubMenu3)
openSub4El.addEventListener("click" , openSubMenu4)
openSub5El.addEventListener("click" , openSubMenu5)
openSub6El.addEventListener("click" , openSubMenu6)

function openSubMenu1() {
  if ( sub1Bool === 0 ) {
    sub1Bool++
    chev1El.classList.add("fa-chevron-up")
    chev1El.classList.remove("fa-chevron-down")
  } else {
    sub1Bool = 0
    chev1El.classList.add("fa-chevron-down")
    chev1El.classList.remove("fa-chevron-up")
  }
}

function openSubMenu2() {
  if ( sub2Bool === 0 ) {
    sub2Bool++
    chev2El.classList.add("fa-chevron-up")
    chev2El.classList.remove("fa-chevron-down")
  } else {
    sub2Bool = 0
    chev2El.classList.add("fa-chevron-down")
    chev2El.classList.remove("fa-chevron-up")
  }
}

function openSubMenu3() {
  if ( sub3Bool === 0 ) {
    sub3Bool++
    chev3El.classList.add("fa-chevron-up")
    chev3El.classList.remove("fa-chevron-down")
  } else {
    sub3Bool = 0
    chev3El.classList.add("fa-chevron-down")
    chev3El.classList.remove("fa-chevron-up")
  }
}

function openSubMenu4() {
  if ( sub4Bool === 0 ) {
    sub4Bool++
    chev4El.classList.add("fa-chevron-up")
    chev4El.classList.remove("fa-chevron-down")
  } else {
    sub4Bool = 0
    chev4El.classList.add("fa-chevron-down")
    chev4El.classList.remove("fa-chevron-up")
  }
}

function openSubMenu5() {
  if ( sub5Bool === 0 ) {
    sub5Bool++
    chev5El.classList.add("fa-chevron-up")
    chev5El.classList.remove("fa-chevron-down")
  } else {
    sub5Bool = 0
    chev5El.classList.add("fa-chevron-down")
    chev5El.classList.remove("fa-chevron-up")
  }
}

function openSubMenu6() {
  if ( sub6Bool === 0 ) {
    sub6Bool++
    chev6El.classList.add("fa-chevron-up")
    chev6El.classList.remove("fa-chevron-down")
  } else {
    sub6Bool = 0
    chev6El.classList.add("fa-chevron-down")
    chev6El.classList.remove("fa-chevron-up")
  }
}

window.setInterval(function() {
  if ( openMenuBool == 0 ) {
    openMenu1El.style.border = "2px solid white"
    openMenu1El.style.backgroundColor = "white"
    openMenu2El.style.border = "2px solid white"
    openMenu2El.style.backgroundColor = "white"
    openMenu3El.style.border = "2px solid white"
    openMenu3El.style.backgroundColor = "white"
    openMenu4El.style.border = "2px solid white"
    openMenu4El.style.backgroundColor = "white"
    largeMenuEl.style.display = "none"
    smallMenuEl.style.display = "none"
  } else {
    openMenu1El.style.border = "2px dotted black"
    openMenu1El.style.backgroundColor = "#f2f2f2"
    openMenu2El.style.border = "2px dotted black"
    openMenu2El.style.backgroundColor = "#f2f2f2"
    openMenu3El.style.border = "2px dotted black"
    openMenu3El.style.backgroundColor = "#f2f2f2"
    openMenu4El.style.border = "2px dotted black"
    openMenu4El.style.backgroundColor = "#f2f2f2"
    largeMenuEl.style.display = "block"
    smallMenuEl.style.display = "block"
  }
  if ( sub1Bool === 0 ) {
    sub1El.style.display = "none"
  } else {
    sub1El.style.display = "block"
  }
  if ( sub2Bool === 0 ) {
    sub2El.style.display = "none"
  } else {
    sub2El.style.display = "block"
  }
  if ( sub3Bool === 0 ) {
    sub3El.style.display = "none"
  } else {
    sub3El.style.display = "block"
  }
  if ( sub4Bool === 0 ) {
    sub4El.style.display = "none"
  } else {
    sub4El.style.display = "block"
  }
  if ( sub5Bool === 0 ) {
    sub5El.style.display = "none"
  } else {
    sub5El.style.display = "block"
  } 
  if ( sub6Bool === 0 ) {
    sub6El.style.display = "none"
  } else {
    sub6El.style.display = "block"
  }
  if ( openSearchBool === 0 ) {
    largeSearchEl.style.display = "none"
    smallSearchEl.style.display = "none"
  } else {
    largeSearchEl.style.display = "block"
    smallSearchEl.style.display = "block"
  }
}, 17)

let openSearch1El = document.querySelector(".openSearch1")
let openSearch2El = document.querySelector(".openSearch2")
let openSearch3El = document.querySelector(".openSearch3")
let openSearch4El = document.querySelector(".openSearch4")
let openSearch5El = document.querySelector(".openSearch5")
let openSearch6El = document.querySelector(".openSearch6")

let closeSearchEl = document.querySelector(".closeSearch")
let closeSearch2El = document.querySelector(".closeSearch2")

let largeSearchEl = document.querySelector(".largeSearch")
let smallSearchEl = document.querySelector(".smallSearch")
largeSearchEl.style.display = "none"
smallSearchEl.style.display = "none"

var openSearchBool = 0

openSearch1El.addEventListener("click", openSearch)
openSearch2El.addEventListener("click", openSearch)
openSearch3El.addEventListener("click", openSearch)
openSearch4El.addEventListener("click", openSearch)
openSearch5El.addEventListener("click", openSearch)
openSearch6El.addEventListener("click", openSearch)

function openSearch() {
  openSearchBool = 1
}

closeSearchEl.addEventListener("click", closeSearch)
closeSearch2El.addEventListener("click", closeSearch)

function closeSearch() {
  openSearchBool = 0
}