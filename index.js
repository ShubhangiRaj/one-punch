// preview image
function previewImage(input) {
    let imagePreview = document.getElementById('previewImage');
    let img = document.createElement('img');
    let inputImage = document.getElementById('inputImage');
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            img.src = e.target.result;
            imagePreview.appendChild(img)
        };
        reader.readAsDataURL(input.files[0]);
    }
    inputImage.style.display = 'none';
}

// punch
function activatePunch(){
    let punchAudio = document.getElementById('punchAudio');
    punchAudio.play()
}
// slap
function activateSlap(){
    let slapAudio = document.getElementById('slapAudio');
    slapAudio.play()
}