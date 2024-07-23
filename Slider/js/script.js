let aparts = [
{
  imgUrl: "../img/rostov-admiral.png",
  city: "Rostov-on-Don" ,
  apartName: "Admiral",
  area: "81 m2",
  repTime: "3.5 months",
  repCost: "Upon request" 
}, 
{
  imgUrl: "../img/sochi-thieves.png",
  city: "Sochi",
  apartName: "Thieves",
  area: "105 m2",
  repTime: "4 months",
  repCost: "Upon request"
}, 
{
  imgUrl: "../img/rostov-patriotic.png",
  city: "Rostov-on-Don",
  apartName: "Patriotic",
  area: "93 m2",
  repTime: "3 months",
  repCost: "Upon request"
}];

    const sliderImages = document.querySelector(".slider__images");
    const cityLocation = document.querySelector(".city__item");
    const apartArea = document.querySelector(".area__item");
    const repairTime = document.querySelector(".reptime__item");
    const repairCost = document.querySelector(".repcost__item");
    const sliderArrows = document.querySelector(".switcher");
    const sliderDots = document.querySelector(".slider__dots");
    const sliderBtn = document.querySelector(".locations");

    initImages();
    initArrows();
    initBtn();
    initDots();
    initCities();

    function initImages() {
        aparts.forEach((image, index) => {
          let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${aparts[index].imgUrl});" data-index="${index}"></div>`;
          sliderImages.innerHTML += imageDiv;
        });
      }
    function initArrows() {
        sliderArrows.querySelectorAll(".slider__arrows").forEach(arrow => {
          arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")) {
              nextNumber = curNumber === 0? aparts.length - 1 : curNumber - 1;
            } else {
              nextNumber = curNumber === aparts.length - 1? 0 : curNumber + 1;
            }
            moveSlider(nextNumber);
          });
        });
      }
      
      function initBtn() {
        aparts.forEach((image, index) => {
          let button = `<div class="btn n${index} ${index === 0? "active" : ""}" data-index="${index}">${aparts[index].city + " " + aparts[index].apartName}</div>`;
          sliderBtn.innerHTML += button;
        });
        sliderBtn.querySelectorAll(".btn").forEach(button => {
          button.addEventListener ("click", function() {
            moveSlider(this.dataset.index);   
          });   
        });
      }

      function initDots() {
        aparts.forEach((image, index) => {
          let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
          sliderDots.innerHTML += dot;
        });
        sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
          dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
          })
        })
      }
      
      function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
         sliderImages.querySelector(".n" + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
         sliderDots.querySelector(".n" + num).classList.add("active");
        sliderBtn.querySelector(".active").classList.remove("active");
         sliderBtn.querySelector(".n" + num).classList.add("active");
          changeCity(num);
      }
      
      function initCities() {
        let cityDiv = `<div class="city__title">${aparts[0].city}</div>`;
        let apartDiv = `<div class="apart__title">${aparts[0].apartName}</div>`;
        let areaDiv = `<div class="area__title">${aparts[0].area}</div>`;
        let repTimeDiv = `<div class="reptime__title">${aparts[0].repTime}</div>`;
        let repCostDiv = `<div class="repcost__title">${aparts[0].repCost}</div>`;
        cityLocation.innerHTML += cityDiv;
        cityLocation.innerHTML += apartDiv;
        apartArea.innerHTML += areaDiv;
        repairTime.innerHTML += repTimeDiv;
        repairCost.innerHTML += repCostDiv;
      }
      
      function changeCity(num) {
        let cityTitle = cityLocation.querySelector(".city__title");
          cityTitle.innerText = aparts[num].city;
        let apartTitle = cityLocation.querySelector(".apart__title");
          apartTitle.innerText = aparts[num].apartName;
        let areaTitle = apartArea.querySelector(".area__title");
          areaTitle.innerText = aparts[num].area;
        let repTimeTitle = repairTime.querySelector(".reptime__title");
          repTimeTitle.innerText = aparts[num].repTime;
        let repCostTitle = repairCost.querySelector(".repcost__title");
          repCostTitle.innerText = aparts[num].repCost;
      }
      
