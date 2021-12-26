console.log("hello world!");

const myName = "Alina Aleks";
const h1 = document.querySelector('.heading-primary');

console.log(myName);
console.log(h1);

// h1.addEventListener("click", function() {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// El in name stands for 'element'

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
})

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
  const ent = entries[0];
  console.log(ent);

  // if false
  if (!ent.isIntersecting) {    
    document.body.classList.add("sticky");
    headerEl.classList.remove("nav-open");
  }

  // if true
  if (ent.isIntersecting) {    
    document.body.classList.remove("sticky");
    headerEl.classList.remove("nav-open");
  }
}, 
{
  // it means observe it in a viewport (null mens the viewport)
  root: null,
  // we'll have an event as soon as 0% of element is visible. if it is 1 - then when completely inside the viewport
  threshold: 0,
  rootMargin: "-80px",
})
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Smooth scrolling animation
// it will select anchor-elements which have href property
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Scroll to sections
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      // console.log(sectionEl);
      sectionEl.scrollIntoView({behavior: "smooth"});
    }

    // Close mobile navigation when nav-link selected
    if (link.classList.contains("main-nav-link"))
    headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
