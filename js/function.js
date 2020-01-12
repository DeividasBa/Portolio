////////////Loading/////////////
window.addEventListener("load", function() {
  const preload = document.querySelector(".preload");
  preload.classList.add("finished");
});
///////////Loading End//////////

/////////////Header/////////////

///////////////////////////////////////////////////////////////////////////////////

function headerScrollActivation() {
  const navHeight = document.querySelector(".containerHeader").offsetHeight; // find navigation bar height
  const height = window.scrollY + navHeight; // find section position height in the browser

  let links = []; //create links array
  const DOMlinks = document.querySelectorAll(".navigation-links > .underline");

  //find all links with href
  for (let i = 0; i < DOMlinks.length; i++) {
    const link = DOMlinks[i];
    const href = link.href;
    const split = href.split("#");

    if (split.length > 1) {
      links.push("#" + split[1]);
    }
  }

  // let us have Y value of the window,document in the browser and put it in arrayList//
  let sectionHeight = [];
  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    if (link === "#") {
      sectionHeight.push(0);
    } else {
      const section = document.querySelector(link);
      sectionHeight.push(section.offsetTop); 
    }   
  }
  // set dominantSection height like a element
  let dominantSection = 0;
  for (let i = 0; i < sectionHeight.length; i++) {
    const sectionH = sectionHeight[i];

    if (sectionH <= height) {
      dominantSection = i;
    } else {
      break;
    }
  }
  // remove active class from the element
  document.querySelector(`.containerHeader nav > a.active`).classList.remove("active"); 
   // add active class to the element
  document.querySelector(`.containerHeader nav > a[href="${links[dominantSection]}"]`).classList.add("active");

  return;
}
 //function activation//
window.addEventListener("scroll", headerScrollActivation);

//navigation bar scroll down background color animation///
function checkIfScrolled() {
  let containerHeader = document.querySelector(".containerHeader");
  if (window.scrollY > 100) {
    containerHeader.classList.add("navBackColor");
  } else {
    containerHeader.classList.remove("navBackColor");
  }
}

window.addEventListener("scroll", checkIfScrolled); //function activation//

/////////////Header End/////////

/////////////Hero/////////////

function animation() {
  let i = 0;

  function typingEffect() {
    let letters = heroAnimationWords[i].split("");
    function loopTyping() {
      if (letters.length > 0) {
        document.querySelector(".heroParagraph").innerHTML += letters.shift();
      } else {
        deletingEffect();
        return false;
      }
      setTimeout(loopTyping, 200);
    }
    loopTyping();
  }

  function deletingEffect() {
    let word = heroAnimationWords[i].split("");
    function loopDeleting() {
      if (word.length > 0) {
        word.pop();
        document.querySelector(".heroParagraph").innerHTML = word.join("");
      } else {
        if (heroAnimationWords.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typingEffect();
        return false;
      }
      setTimeout(loopDeleting, 150);
    }
    loopDeleting();
  }

  typingEffect(); //start all function again
}

animation();
/////////////Hero End/////////////

/////////////Contacts/////////////

var mybutton = document.getElementById("top");

// When scrolls down from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
