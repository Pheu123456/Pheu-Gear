let availablekeyword = [
'blue switch',
'red switch',
'black switch',
'custom keycap',
'main board',
];
const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availablekeyword.filter((keyword)=>{
        return    keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
    if (!result.length)
    {
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onlick=selectInput(this)>" + list + "</li>";

    });
    resultsBox.innerHTML = "<ul>"+ content.join('')+ "</ul>" ;
}
function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
  loader.style.display = "none";
})