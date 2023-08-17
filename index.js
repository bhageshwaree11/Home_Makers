var slideIndex = 0;

showSlide();

var timer = setInterval(showSlide, 4000);

var slideContainer = document.getElementById('slideshow-container');
var slideControl = document.getElementById('slide-control');

slideContainer.onmouseover = function() {
    clearInterval(timer);
}

slideControl.onmouseover = function() {
    clearInterval(timer);
}

slideContainer.onmouseleave = function() {
    timer = setInterval(showSlide, 4000);
}

slideControl.onmouseleave = function() {
     timer = setInterval(showSlide, 4000);
}

function showSlide() {
    var i;
    var slides = document.getElementsByClassName('slide-item');
    var dots = document.getElementsByClassName('dot');
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}




function chooseSlide(n) {
    slideIndex = n;
    showSlide();
    clearInterval(timer);
}

function showMenu() {
    var topNav = document.getElementById('topnav');
    if (topNav.className === "navbar") {
        topNav.className += " show";
    } else {
        topNav.className = "navbar";
    }
}
// login button
const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});


const reviews =[
  {
    id: 1,
    name: "Janah Spector",
    img: "images/image15.jpg",
    text: "I am a homemaker living alone in an urban city and working full-time in an MNC. I have a preference for homecooked food and managing everything by myself. However, my fanciful notion of handling all tasks independently resulted in turning my life and home into a chaotic drama. This chaos began to affect my performance at the office, serving as a warning sign that I needed to find a better way to balance my home and work responsibilities. Homemakers serve as a constant reminder of the day-to-day tasks that I tend to overlook. It's the small things that can lead to significant changes. Thanks to their guidance, I've become much more organized and balanced in managing both my home and work life. Even on weekends when I am often traveling or away, my home no longer descends into disorder. This achievement is due to the implementation of the practical tricks recommended by homemakers."
  },
  {
    id: 2,
    name: "Susan Cyrus",
    img: "images/image16.jpg",
text: "I am the homemaker for a family of six members. Within my household, I care for my 3-year-old daughter and my elderly in-laws, while my husband works at an IT firm. Both my daughter and in-laws require constant attention as they are unable to manage on their own physically. Despite equipping myself with numerous household instruments to simplify my life, I often find myself falling short in meeting my responsibilities. In my quest for solutions, I've gone so far as to pray for divine help. During this search, I discovered a concept for homemakers. Through implementing minor adjustments in my daily tasks, I have not only become more adept at managing all my responsibilities but also found moments of spare time. This newfound time has allowed me to pursue hobbies and enjoy moments solely for myself"
  },
  {
    id: 3,
    name: "Veronica Cooper",
    img: "images/image17.jpg",
text:"I am a homemaker responsible for caring for a family of three, including my 10-month-old son. Both my husband and I are employed at an IT firm. While managing our needs and outsourcing household necessities for my husband and myself is manageable, the demands of our son's care added a significant layer of complexity. Despite having received maternity assistance, juggling the responsibilities of home, office, and child care became overwhelming. At a crossroads, my husband suggested that I leave my job, but I was unwilling to choose between my career and my child. I wanted to find a way to balance both aspects of my life. Homemakers came to my rescue during this challenging time. By organizing and documenting my baby's requirements and crafting a schedule with the guidance of homemakers, I sought out job opportunities that aligned with my specific needs. While the journey was not without its challenges, with the backing of homemakers, my family, and the understanding of my workplace, I am content knowing that I haven't missed out on any of the things that hold the utmost importance to me."  
},
  {
    id: 4,
    name: "Susan Cyrus",
    img: "images/image18.jpg",
text:"I am a homemaker responsible for a family of four members. My husband is the owner of a home appliances business. My elder son is in 6th grade, and my younger son is in 4th grade. Managing my children's schedules has been manageable due to their fixed routines. However, my husband's schedule is quite dynamic. Some days he may have a light workload, while on other days, I might not see him at all. In such scenarios, it becomes challenging to fulfill my duties and provide for his needs. Then, I came across this website and decided to give it a try. Gradually, I was able to identify certain opportunities in our day-to-day life. Despite the unpredictability of my husband's schedule, I found ways to fulfill my responsibilities and make both his life and mine easier."  
},
];
const img = document.getElementById("personImage");
const author = document.getElementById("author");
const info = document.getElementById("info");

const storyPrevBtn = document.querySelector(".storiesPrevBtn");
const storyNextBtn = document.querySelector(".storiesNextBtn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
function showPerson() {
  let item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  info.textContent = item.text;
}
 storyNextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});


storyPrevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

