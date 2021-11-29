const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};



console.log('project wired!')

const nav = document.querySelectorAll("nav a");
const linksTexts = Object.values(siteContent.nav)
nav.forEach((link, idx)=> {
  link.textContent = linksTexts[idx];
  link.style.fontStyle = "italic";
})

const headerImage = document.querySelector('header .logo')
headerImage.src = siteContent['images']['logo-img']

const ctaTitle = document.querySelector('.cta h1')
ctaTitle.textContent = siteContent.cta.h1

const ctaButton = document.querySelector(".cta button ")
ctaButton.textContent = siteContent.cta.button

const ctaImg = document.querySelector('.cta img')
ctaImg.src = siteContent["images"]["cta-img"]

const featuresTitles = document.querySelector(".top-content .text-content:nth-of-type(1) h4")
featuresTitles.textContent = siteContent["main-content"]["features-h4"]

const featuresContent = document.querySelector(".top-content .text-content:nth-of-type(1) p")
featuresContent.textContent = siteContent["main-content"]["features-content"]

const aboutTitle = document.querySelector(".top-content .text-content:nth-of-type(2) h4")
aboutTitle.textContent = siteContent["main-content"]["about-h4"]

const aboutContent = document.querySelector(".top-content .text-content:nth-of-type(2) p")
aboutContent.textContent = siteContent["main-content"]["about-content"]

const servicesTitle = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4")
servicesTitle.textContent = siteContent["main-content"]["services-h4"]

const servicesContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p")
servicesContent.textContent = siteContent["main-content"]["services-content"]

const midImage = document.querySelector(".middle-img")
midImage.src = siteContent.images['accent-img']

const productTitle = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")
productTitle.textContent = siteContent["main-content"]["product-h4"]
 
const productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p")
productContent.textContent = siteContent["main-content"]["product-content"]

const visionTitle = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4")
visionTitle.textContent = siteContent["main-content"]["vision-h4"]

const visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p")
visionContent.textContent = siteContent["main-content"]["vision-content"]
