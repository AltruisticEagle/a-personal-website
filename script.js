function displayFile(filename) {
    fetch(filename)
        .then(response => response.text())
        .then(text => {
            const lines = text.split("\n");
            const output = document.getElementById("output");
        
        output.innerHTML = "";

        for (const line of lines) {
            const p = document.createElement("p");
            p.textContent = line;
            output.appendChild(p);
        }
    })
}