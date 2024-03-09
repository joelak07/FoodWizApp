function openModal(imageUrl) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageUrl;
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}

if (!/Mobi|Android/i.test(navigator.userAgent)) {
    alert("This page should be opened on a mobile device.");
}