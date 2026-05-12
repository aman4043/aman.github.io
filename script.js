const hiddenElements = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));
const toggleButton = document.getElementById("theme-toggle");

toggleButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        toggleButton.textContent = "☀️";
    } else {
        toggleButton.textContent = "🌙";
    }

});
const textElement = document.getElementById("typing-text");

const roles = [
    "IT SUPPORT","FRONT END DEVELOPER","DIGITAL MARKETER"];
let roleIndex = 0;
let charIndex = 0;
let outputText = "";
function typeText() {
    const currentRole = roles[roleIndex];
    if (charIndex < currentRole.length) {
        outputText += currentRole.charAt(charIndex);
        textElement.textContent = outputText;
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        roleIndex++;
        charIndex = 0;
        if (roleIndex < roles.length) {
            outputText += " | ";
            textElement.textContent = outputText;
            setTimeout(typeText, 500);
        }
    }
}
typeText();
const glow=document.querySelector('.cursor-glow');
document.addEventListener('mousemove',(e)=>{
    glow.style.left=e.clientX+'px';
    glow.style.top=e.clientY+'px';
});