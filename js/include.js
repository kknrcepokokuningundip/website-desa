// Memuat header
fetch("header.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Header tidak ditemukan.");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("header").innerHTML = data;
    })
    .catch(error => console.error(error));

// Memuat footer
fetch("footer.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Footer tidak ditemukan.");
        }
        return response.text();
    })
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    })
    .catch(error => console.error(error));