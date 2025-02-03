const form = document.querySelector('form'); // Select the form
            
                form.addEventListener('submit', function(event) {
                    event.preventDefault(); // Prevent default form submission (page reload)
            
                    alert("WHOOAH!!");
                    alert("Your order has been placed!!");
                    alert("Thank You for ordering!!");
                    alert("Buon Appetito!!");
            
                     
                });

                document.addEventListener("DOMContentLoaded", function () {
                    const form = document.querySelector("form"); // Select the form element
                
                    form.addEventListener("submit", function (event) {
                        event.preventDefault(); // Prevent default form submission
                        alert("Order Confirmed!"); // Show confirmation message
                        form.reset(); // Reset the form fields
                    });
                });