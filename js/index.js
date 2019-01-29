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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


const headerNav = document.querySelector('a').style.color = 'green';

const navA = document.querySelectorAll('a');


console.log(headerNav);
navA[0].textContent = 'Services';
navA[0].style.color = 'green';

navA[1].style.color = 'green';

navA[2].style.color = 'green';

navA[3].style.color = 'green';

navA[4].style.color = 'green';

navA[5].style.color = 'green';

navA[1].textContent = 'Product';

navA[2].textContent = 'Vision';


navA[3].textContent = 'Features';


navA[4].textContent = 'About';


navA[5].textContent = 'Contact';



// nav.appendChild('<a href = "#"> Append </a>');

const ctaImg = document.querySelector('.cta');
const cta = document.querySelector('.cta-text');


cta.querySelector('h1').textContent = 'DOM is Awesome';
cta.querySelector('button').textContent = 'Get Started';


ctaImg.querySelector('img').src ='img/header-img.png';



const textContent = document.querySelectorAll('.text-content');
const features = document.querySelector('.top-content');
console.log(textContent);
console.log(features);


textContent[0].querySelector('h4').textContent = 'Features';

textContent[1].querySelector('h4').textContent = 'About';

textContent[2].querySelector('h4').textContent = 'Services';

textContent[3].querySelector('h4').textContent = 'Product';

textContent[4].querySelector('h4').textContent = 'Vision';


textContent[0].querySelector('p').textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';
textContent[1].querySelector('p').textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';
textContent[2].querySelector('p').textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';
textContent[3].querySelector('p').textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';
textContent[4].querySelector('p').textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis';


document.querySelector('.middle-img').src = 'img/mid-page-accent.jpg';


const contactH4 = document.querySelector('.contact').querySelector('h4');
const contact = document.querySelector('.contact').querySelectorAll('p');
console.log(contactH4);
contactH4.textContent = 'Contact';
contact[0].textContent = '123 Way 456 Street Somewhere, USA';
contact[1].textContent = '1 (888) 888-8888';
contact[2].textContent = 'sales@greatidea.io';
console.log(contact);


document.querySelector('footer').querySelector('p').textContent = 'Copyright Great Idea! 2018';