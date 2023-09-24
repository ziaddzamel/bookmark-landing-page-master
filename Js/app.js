const mobile = document.querySelector(".mobile-ham");
const closs = document.querySelector(".close");
const rightmobile = document.querySelector(".right-mobile");

function handleResize() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 768) {
    mobile.style.display = "block";
  } else {
    mobile.style.display = "none";
  }
}

mobile.addEventListener("click", () => {
  rightmobile.style.display = "block";
});

closs.addEventListener("click", () => {
  rightmobile.style.display = "none";
});
handleResize();
window.addEventListener("resize", handleResize);

// Features data












const Features = {
  Feat1: {
    h3: "Bookmark in one click",
    p: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    src: "images/illustration-features-tab-1.svg"
  },
  Feat2: {
    h3: "Intelligent search",
    p: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    src: "images/illustration-features-tab-2.svg"
  },
  Feat3: {
    h3: "Share your bookmarks",
    p: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    src: "images/illustration-features-tab-3.svg"
  }
};

// Function to show content for a given feat
function showContent(feat, applyStylesByDefault) {
  const img = document.querySelector(".Feat-img");
  const h3 = document.querySelector(".Feat-h");
  const p = document.querySelector(".Feat-p");

  img.src = Features[feat].src;
  h3.innerHTML = Features[feat].h3;
  p.innerHTML = Features[feat].p;

  // Apply styles by default for feat-1 based on screen width
  if (applyStylesByDefault) {
    const screenWidth = window.innerWidth;
    const shape = document.querySelector(".shape-2");

    if (feat === "Feat1" && screenWidth <= 768) {
      img.style.width = "60vw";
      shape.style.marginTop = "-5vw";
      img.style.marginLeft = "0";
      img.style.marginTop = "-10vw";
    }
  }
}

// Show content for feat1 by default and apply styles by default for feat-1
showContent("Feat1", true);

const feats = document.querySelectorAll('.Feats');
feats.forEach(feat => {
  feat.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor element

    // Remove 'active' class from all feats
    feats.forEach(feat => {
      feat.classList.remove('active');
    });

    // Add 'active' class to the clicked feat
    feat.classList.add('active');

    // Show content based on the clicked feat
    if (feat.classList.contains("Feat-1")) {
      showContent("Feat1");
      const screenWidth = window.innerWidth;
      const img = document.querySelector(".Feat-img");
      const shape =document.querySelector(".shape-2")
      if (screenWidth <= 768) {
        img.style.width = "60vw";
        shape.style.marginTop = "-5vw";
        img.style.marginLeft = "0";
        img.style.marginTop = "-10vw"

      } else {
        img.style.width = "35vw";
        img.style.marginLeft = "none";
      }
    }

    if (feat.classList.contains("Feat-2")) {
      showContent("Feat2");
      const screenWidth = window.innerWidth;
      const img = document.querySelector(".Feat-img");
      const shape =document.querySelector(".shape-2")
      if (screenWidth <= 768) {
        img.style.width = "60vw";
        img.style.marginLeft = "10vw";
        shape.style.marginTop = "2vw";
        img.style.marginTop = "-10vw"
      } else {
        img.style.width = "32vw";
        img.style.marginLeft = "45px";
      }
    }

    if (feat.classList.contains("Feat-3")) {
      showContent("Feat3");
    
      // Calculate screenWidth here
      const screenWidth = window.innerWidth;
      const img = document.querySelector(".Feat-img");
      const shape =document.querySelector(".shape-2")
      if (screenWidth <= 768) {
        img.style.width = "60vw";
        img.style.marginLeft = "5vw";
        img.style.marginTop = "-10vw"
        shape.style.marginTop = "2vw";
      } else {
        img.style.width = "30vw";
        img.style.marginLeft = "45px";
      }
    }
    
  });
});



const quAnElements = document.querySelectorAll(".qu-an");

quAnElements.forEach(quAnElement => {
  quAnElement.addEventListener("click", () => {
    const answerElement = quAnElement.querySelector(".answer");
    const arrow = quAnElement.querySelector(".arrow")
    if (answerElement) {
      if (answerElement.style.display === "none" || answerElement.style.display === "") {
        answerElement.style.display = "block";
        arrow.classList.add("reflect")
        arrow.querySelector('path').setAttribute('stroke', 'hsl(0, 94%, 66%)');

      } else {
        answerElement.style.display = "none";
        arrow.classList.remove("reflect")
        arrow.querySelector('path').setAttribute('stroke', '#5267DF');
      }
    }
  });
});

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
}

const emailInput = document.getElementById('emailInput');
const val = document.querySelector('.val'); // Define val here for access in setTimeout

emailInput.addEventListener('blur', () => {
  const email = emailInput.value.trim();

  if (email === '') {
    val.style.display = 'block';
    emailInput.style.border = '2px solid var(--softred-color)';
    emailInput.value = '';
  } else if (!validateEmail(email)) {
    val.style.display = 'block';
    emailInput.style.border = '2px solid var(--softred-color)';
    emailInput.value = '';
  } else {
    val.style.display = 'none'; // Reset display style to none
    emailInput.style.border = ''; // Reset border style to default
    emailInput.value = '';
  }

  setTimeout(() => {
    val.style.display = 'none';
    emailInput.style.border = '';
  }, 5000);
});
