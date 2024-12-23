
window.onload = function() {
    var splineElement = document.querySelectorAll('spline-viewer');
    
    for (let pas = 0; pas < splineElement.length; pas++) {
      var shadowRoot = splineElement[pas].shadowRoot;
      shadowRoot.querySelector('#logo').remove();
    }
  }


function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// JavaScript code to handle image and video slider navigation
document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");
    const slides = document.querySelectorAll(".slider img, .slider video");
    let slideIndex = 0;

    // Function to show the current slide
    const showSlide = () => {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    };

    // Event listener for previous button
    prevBtn.addEventListener("click", () => {
        slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
        showSlide();
    });

    // Event listener for next button
    nextBtn.addEventListener("click", () => {
        slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
        showSlide();
    });

    // Show initial slide
    showSlide();
});

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".contentimage-aibraille .prevBtn");
    const nextBtn = document.querySelector(".contentimage-aibraille .nextBtn");
    const slider = document.querySelector(".contentimage-aibraille .slider-2");
    
    let currentSlide = 0;

    prevBtn.addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    });

    nextBtn.addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % slider.children.length;
        updateSlider();
    });

    function updateSlider() {
        for (let i = 0; i < slider.children.length; i++) {
            slider.children[i].style.display = "none";
        }
        slider.children[currentSlide].style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".contentimage-excavator .prevBtn");
    const nextBtn = document.querySelector(".contentimage-excavator .nextBtn");
    const slider = document.querySelector(".contentimage-excavator .slider-1");
    
    let currentSlide = 0;

    prevBtn.addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    });

    nextBtn.addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % slider.children.length;
        updateSlider();
    });

    function updateSlider() {
        for (let i = 0; i < slider.children.length; i++) {
            slider.children[i].style.display = "none";
        }
        slider.children[currentSlide].style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const prevBtn = document.querySelector(".contentimage-certs .prevBtn");
    const nextBtn = document.querySelector(".contentimage-certs .nextBtn");
    const slider = document.querySelector(".contentimage-certs .slider-0");
    
    let currentSlide = 0;

    prevBtn.addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slider.children.length) % slider.children.length;
        updateSlider();
    });

    nextBtn.addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % slider.children.length;
        updateSlider();
    });

    function updateSlider() {
        for (let i = 0; i < slider.children.length; i++) {
            slider.children[i].style.display = "none";
        }
        slider.children[currentSlide].style.display = "block";
    }
});


