let shareContainer = document.getElementById('share-container');
let arrow = document.getElementById('arrow');

document.getElementById("unshare-btn").addEventListener("click", function() {
    shareContainer.classList.toggle("hidden");
    arrow.classList.toggle("hidden");
})

document.getElementById("share-btn").addEventListener("click", function() {
    shareContainer.classList.toggle("hidden");
    arrow.classList.toggle("hidden");
})
