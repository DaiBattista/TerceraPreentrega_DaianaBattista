/*Trailers*/
var oficial_btn = document.getElementById("oficial_btn");
var teaser_btn = document.getElementById("teaser_btn");
var final_btn = document.getElementById("final_btn");
var oficial = document.getElementById("oficial");
var teaser = document.getElementById("teaser");
var final = document.getElementById("final");
oficial_btn.addEventListener('click', () => {
    oficial.style.display = 'block';
    teaser.style.display = 'none';
    final.style.display = 'none';
})
teaser_btn.addEventListener('click', () => {
    oficial.style.display = 'none';
    teaser.style.display = 'block';
    final.style.display = 'none';
})
final_btn.addEventListener('click', () => {
    oficial.style.display = 'none';
    teaser.style.display = 'none';
    final.style.display = 'block';
})