// fade-in animation
        document.addEventListener("DOMContentLoaded", function() {
            const fadeElements = document.querySelectorAll(".fade-in");
            fadeElements.forEach(el => el.classList.add("visible"));
        });
    
// navbar
var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("close-nav")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// FAQ
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const symbol = button.querySelector('span:last-child');
        
        answer.classList.toggle('hidden');
        symbol.textContent = answer.classList.contains('hidden') ? '+' : '-';
    });
});
// see more
function toggleFeatures(button) {
    let card = button.closest("div");
    let features = card.querySelector(".more-features");

    if (features.classList.contains("hidden")) {
        features.classList.remove("hidden");
        button.innerText = "See Less";
    } else {
        features.classList.add("hidden");
        button.innerText = "See More";
    }
}