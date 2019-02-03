const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

//Images:

let logo = document.getElementById("logo-img");
logo.src=siteContent["nav"]["img-src"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src=siteContent["cta"]["img-src"];

let midImg = document.getElementById("middle-img");
midImg.src=siteContent["main-content"]["middle-img-src"];

//Nav:

const mainNav = document.querySelector("nav");

const navAnchors = document.querySelectorAll("a");

navAnchors.forEach((index, i) => navAnchors[i].textContent = siteContent["nav"][`${Object.keys(siteContent["nav"])[i]}`]);

const firstAnchor = document.createElement("a");
firstAnchor.href = "#";
firstAnchor.textContent = "Get Started";
firstAnchor.style.color = "green";

const lastAnchor = document.createElement("a");
lastAnchor.href = "#";
lastAnchor.textContent = "Blog";
lastAnchor.style.color = "green";

mainNav.prepend(firstAnchor);
mainNav.appendChild(lastAnchor);

navAnchors.forEach(navAnchor => navAnchor.style.color = "green");

//CTA:

const ctaHeader = document.querySelector("h1");
ctaHeader.innerHTML = siteContent["cta"]["h1"].split(' ').join(`<br>`);

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

//Main Content:

const contentHeaders = document.querySelectorAll("h4");

const mainH4Keys = Object.keys(siteContent["main-content"]).filter((key) => key.includes("h4"));

contentHeaders.forEach((index, i) => contentHeaders[i].textContent = siteContent["main-content"][`${mainH4Keys[i]}`]);


const contentParas = document.querySelectorAll("p");

const mainParaKeys = Object.keys(siteContent["main-content"]).filter((key) => key.includes("content"));

contentParas.forEach((index, i) => contentParas[i].textContent = siteContent["main-content"][`${mainParaKeys[i]}`]);

//Bottom Section:

contentHeaders[5].textContent = siteContent["contact"]["contact-h4"];

contentParas[5].innerHTML = siteContent["contact"]["address"].split('Street ').join(`Street <br>`);
contentParas[6].textContent = siteContent["contact"]["phone"];
contentParas[7].textContent = siteContent["contact"]["email"];

contentParas[8].textContent = siteContent["footer"]["copyright"];

//Stretch:

ctaHeader.style.color = "blue";

contentHeaders.forEach(item => item.style.color = "green");
contentHeaders.forEach(item => item.style.textDecoration = "underline");

const contact = document.querySelector(".contact");
contact.style.textAlign = "center";
contact.style.fontSize = "1.6em";
contact.style.color = "blue";

ctaButton.style.border = "2px dashed green";