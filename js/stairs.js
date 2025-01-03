const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const hamburgerMenu = document.getElementById("hamburger-menu");
const skill = document.getElementById("skill");
const about = document.getElementById("about");
const project = document.getElementById("project");
const achievement = document.getElementById("achievement");
const contact = document.getElementById("contact");
const download = document.getElementById("download");
// Open the menu
menuToggle.addEventListener("click", () => {
    hamburgerMenu.classList.add("active");
});

// Close the menu
menuClose.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
});
// click on skill
skill.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
});
//click on about
about.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
});
//click on project
project.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
});
//click on achivement
achievement.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
});
//click on contact
contact.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
});
//click on download
download.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
});

const eduItems = document.querySelectorAll('.edu');
const detailsItems = document.querySelectorAll('.details');
const arrows = document.querySelectorAll('.arrow');
const nextButton = document.querySelector('.next-btn');

// Define the order explicitly
const order = [2, 1, 0]; // Indexes for {secondary, higher secondary, graduation}
let currentOrderIndex = 0; // Start with "Secondary"

function updateView(index) {
    // Reset all items
    eduItems.forEach((item, i) => {
        item.classList.remove('active');
        arrows[i].style.display = 'none';
        detailsItems[i].classList.remove('active');
    });

    // Activate the selected item
    eduItems[index].classList.add('active');
    arrows[index].style.display = 'block';
    detailsItems[index].classList.add('active');
}

// Set up click events on each sidebar item
eduItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentOrderIndex = order.indexOf(index); // Update the order index
        updateView(index);
    });
});

// Handle "Next" button click
nextButton.addEventListener('click', () => {
    currentOrderIndex = (currentOrderIndex + 1) % order.length; // Cycle through the order
    const nextIndex = order[currentOrderIndex];
    updateView(nextIndex);
});

// Initialize the default view
updateView(order[currentOrderIndex]);
window.onload = () => {
    const summuryElement = document.querySelector('.summury');
    summuryElement.classList.add('loaded');
};


    

document.addEventListener("DOMContentLoaded", () => {
    const nodes = document.querySelectorAll(".node");

    const observerOptions = {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    nodes.forEach(node => observer.observe(node));
});
