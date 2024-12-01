burger=document.querySelector(".burger");
navbar=document.querySelector(".navbar");
burger.addEventListener("click",()=>{
    navbar.classList.toggle("active");
});
document.getElementById("hireMeButton").addEventListener("click", function () {
const contactSection = document.getElementById("contact");
contactSection.scrollIntoView({ behavior: "smooth" });
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const messageOutput = document.getElementById("messageOutput");

    
    if (name === "" || email === "" || message === "") {
        messageOutput.style.display = "none"; 
        alert("Please fill in all fields!"); 
        return;
    }

    
    messageOutput.style.display = "block"; 
    messageOutput.textContent = "Sent successfully, Thanks."; 

    
    const recipient = "salmaancabdi80@gmail.com"; 
    console.log(`Sending message to: ${recipient}`);
    
  
    document.getElementById("contactForm").reset();
});
const form = document.getElementById('contactForm');
const messageOutput = document.getElementById('messageOutput');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const response = await fetch('/send-email', {
        method: 'POST',
        body: formData,
    });

    if (response.ok) {
        messageOutput.style.display = 'block';
        form.reset();
    } else {
        alert('Failed to send the message. Please try again.');
    }
});
