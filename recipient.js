// Parse encoded card data from URL
const urlParams = new URLSearchParams(window.location.search);
const encoded = urlParams.get("card");

if (!encoded) {
    document.getElementById("recipientCard").innerHTML =
        "<p>This reflection card is unavailable or the link is incomplete.</p>";
} else {
    const json = JSON.parse(atob(encoded));

    document.getElementById("r_title").innerHTML = json.title;
    document.getElementById("r_intro").innerHTML = json.intro;
    document.getElementById("r_challenges").innerHTML = json.challenges;
    document.getElementById("r_appreciations").innerHTML = json.appreciations;
    document.getElementById("r_cta").innerHTML = json.cta || "";
}

// Download card as image  
function downloadRecipientCard() {
    html2canvas(document.querySelector("#recipientCard")).then(canvas => {
        const link = document.createElement("a");
        link.download = "reflection-card.png";
        link.href = canvas.toDataURL();
        link.click();
    });
}
