function myImageFunction(productSmallImg) {
    var productFullImg = document.getElementById("img-Box");
    productFullImg.src = productSmallImg.src;
}


const testimonialsAPI = [
    {
      text: "Beautiful work of art with full staticfaction till end",
      author: "Aript Arora"
    },
    {
      text: "Owner nature and work both are Delightful",
      author: "Neha Kapoor"
    },
    {
      text: "Wounderfull gift's of life memories are provided by them",
      author: "Rajat Mehra"
    }
  ];
  
  // Function to create and display testimonials
  function displayTestimonials(testimonials) {
    const testimonialContainer = document.getElementById("testimonial-container");
  
    testimonials.forEach(testimonial => {
      const testimonialDiv = document.createElement("div");
      testimonialDiv.classList.add("testimonial");
      
      const testimonialTextDiv = document.createElement("div");
      testimonialTextDiv.classList.add("testimonial-text");
      testimonialTextDiv.textContent = testimonial.text;
      
      const testimonialAuthorDiv = document.createElement("div");
      testimonialAuthorDiv.classList.add("testimonial-author");
      testimonialAuthorDiv.textContent = "- " + testimonial.author;
      
      testimonialDiv.appendChild(testimonialTextDiv);
      testimonialDiv.appendChild(testimonialAuthorDiv);
      
      testimonialContainer.appendChild(testimonialDiv);
    });
  }
  
  // Fetch testimonials from the API and display them
  function fetchAndDisplayTestimonials() {
    // Simulating API fetch with a delay
    setTimeout(() => {
      displayTestimonials(testimonialsAPI);
    }, 1000);s
  }
  
  // Call the function to fetch and display testimonials when the page loads
  fetchAndDisplayTestimonials();