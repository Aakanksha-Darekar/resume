document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Smooth scroll feature for projects section
        document.querySelector(".scroll-arrow a").addEventListener("click", (event) => {
            event.preventDefault();
            document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
        });

        // LinkedIn Button - Opens LinkedIn in a new tab
        document.getElementById("linkedin-link").addEventListener("click", (event) => {
            event.preventDefault();
            window.open("https://www.linkedin.com/in/aakanksha-darekar-41b2702ba/", "_blank");
        });

        // Fetch GitHub Projects Dynamically
        const username = "sentiment_analysis_reddit"; // Update with your actual GitHub username
        const response = await fetch(`https://github.com/Aakanksha-Darekar/sentiment_analysis_reddit.git`);

        if (!response.ok) {
            throw new Error(`GitHub API Error! Status: ${response.status}`);
        }

        const repos = await response.json();
        console.log("Fetched repositories:", repos); // Debugging log

        const container = document.getElementById("projects-container");
        container.innerHTML = ""; // Clear previous content before adding new

        repos.forEach(repo => {
            const projectEl = document.createElement("div");
            projectEl.classList.add("project-item"); // Add styling class
            projectEl.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <a href="${repo.html_url}" target="_blank">View Project</a>
            `;
            container.appendChild(projectEl);
        });

    } catch (error) {
        console.error("Error fetching GitHub repos:", error);
    }
});