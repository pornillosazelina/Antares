document.addEventListener("DOMContentLoaded", function() {
            const cartLink = document.getElementById("cartLink");

            cartLink.addEventListener("click", function(event) {
                event.preventDefault();
                alert("Your cart is empty.");
            });
        });