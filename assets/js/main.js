let models = [
  {
    name: "Bmw 416d",
    image: "/assets/img/bmw.jpg",
    link: "https://www.youtube.com/watch?v=wDYMDE9drTE",
  },
  {
    name: "Mazda CX-3",
    image: "/assets/img/mazda.jpg",
    link: "https://www.youtube.com/watch?v=xDtupctkHeQ",
  },
  {
    name: "Volvo 560",
    image: "/assets/img/volvo.jpg",
    link: "https://www.youtube.com/watch?v=Q4x3zvg_obs",
  },
  {
    name: "Skoda Superb",
    image: "/assets/img/skoda.jpg",
    link: "https://www.youtube.com/watch?v=qGZV52bfFOo",
  },
  {
    name: "Honda Civic",
    image: "/assets/img/honda.jpg",
    link: "https://www.youtube.com/watch?v=kE9L6nP7JDg",
  },
];

let index = 0;
let slaytCount = models.length;
let interval;

let settings={
    duration: "1000",
    random: true
    }

init(settings);

document.querySelector(".fa-circle-arrow-left").addEventListener("click",function(){
    index--;
    showSlide(index);
    console.log(index);
})

document.querySelector(".fa-circle-arrow-right").addEventListener("click",function(){
    index++;
    showSlide(index);
    console.log(index);
})

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
})
document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave", function(){
        init(settings);
    })
})






function init(){
    let prev;
    interval = setInterval( function() {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * slaytCount)
            } while (index===prev);
            prev=index;
        }
        else{
            if (slaytCount == index + 1) {
                index = -1;
            }
        }
        showSlide(index)
    }, settings.duration);
}




function showSlide(i){

    index = i;
    
    if (i < 0) {
        index = slaytCount-1;
    }
    if(i >= slaytCount){
        index = 0;
    }

    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src", models[index].image);
    document.querySelector(".card-link").setAttribute("href", models[index].link);
}