document.addEventListener('DOMContentLoaded', function() {

    //load different profile pic depending on devices' screen size
    if (window.innerWidth < 992) document.querySelector('#profile-img').src = 'assets/img/profile-03.jpg';
    if (window.innerWidth >= 992) document.querySelector('#profile-img').src = 'assets/img/profile-02.jpg';
  
  
  //add smooth scrolling to get in touch button 
  document.getElementById('get-in-touch').addEventListener('click', function(e) {
                  // Prevent scrolling if the 
                  // hash value is blank 
                  e.preventDefault(); 
            
                  // Get the destination to scroll to 
                  // using the hash property 
                  let destination =  
                      document.querySelector(this.hash); 
            
                  // Scroll to the destination using 
                  // scrollIntoView method 
                  destination.scrollIntoView({ 
                      behavior: 'smooth' 
                  }); 
  
  
  });
  
  //copy email to clipboard
  
  document.getElementById('email-text').addEventListener('click', copyToClipboard);
  document.getElementById('copy-to-clipboard').addEventListener('click', copyToClipboard);
  
  function copyToClipboard(e) {
  e.preventDefault();
  navigator.clipboard.writeText(document.getElementById('email-text').textContent).then(function() {
      // Promise resolved successfully.
      console.log("Copied to clipboard successfully!");
      let confirmationMessage = document.getElementById('email-copied-confirm');
      confirmationMessage.style.display = 'block';
      setTimeout(function(){confirmationMessage.style.display = 'none';}, 3000);
    }, function() {
      // Promise rejected.
      console.error("Unable to write to clipboard. :-(");
    });
  
  
  };
  
  });