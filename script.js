document.querySelectorAll(".collapsible").forEach(function(header) {
    header.addEventListener("click", function() {
        // Toggle active class on the clicked header
        this.classList.toggle("active");

        // Get the associated content and toggle its visibility
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});