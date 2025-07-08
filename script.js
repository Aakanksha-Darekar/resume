document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Smooth scroll to #projects
        document.querySelector(".scroll-arrow a").addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
        });

        // LinkedIn button
        document.getElementById("linkedin-link").addEventListener("click", (event) => {
            event.preventDefault();
            window.open("https://www.linkedin.com/in/aakanksha-darekar-41b2702ba/", "_blank");
        });

        // Optional: GitHub dynamic repo fetch (you can remove this if unnecessary)
        // Keeping as-is since you already added it, but it doesn't actually work with GitHub `.git` URL
        // You would use GitHub API if needed.

        // Scroll buttons for horizontally scrolling project containers
        const addScrollFunctionality = (containerId) => {
            const container = document.getElementById(containerId);
            const leftBtn = container.parentElement.querySelector(".scroll-btn.left");
            const rightBtn = container.parentElement.querySelector(".scroll-btn.right");

            leftBtn.addEventListener("click", () => {
                container.scrollBy({ left: -300, behavior: "smooth" });
            });

            rightBtn.addEventListener("click", () => {
                container.scrollBy({ left: 300, behavior: "smooth" });
            });
        };

        // Add scrolling to each section
        addScrollFunctionality("projects-container-ml");
        addScrollFunctionality("projects-container-data");
        addScrollFunctionality("bi-projects-container");
        
    } catch (error) {
        console.error("Error:", error);
    }
});
