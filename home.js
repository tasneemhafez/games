
//============globel

const links = document.querySelectorAll(".menu a");
let gamesData = [];
const loading = document.querySelector(".loading");
const mode = document.getElementById("mode");
getGames("mmorpg");


// Events ===============>

for (let i = 0; i < links.length; i++) {
   links[i].addEventListener("click", function (e) {
      document.querySelector(".menu .active").classList.remove("active");
      links[i].classList.add("active");

      const category = e.target.innerText; // shoter mmobe pvp

      console.log(category); //log data

      getGames(category); //connect api
   });
}



// /======function

async function getGames(categoryName) {
   loading.classList.remove("d-none"); //show loading

   const options = {
      method: "GET",
      headers: {
         "X-RapidAPI-Key": "3f027bdbbcmshd0995d0f26a4604p12a749jsnffc4e7798ff9",
         "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
   };

   const apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options);
   const data = await apiResponse.json();
   console.log(data); // log data api
   gamesData = data;
   displayData();
   loading.classList.add("d-none"); // hide loading
}

function displayData() {

   let gamesBox = ``;
   for (let i = 0; i < gamesData.length; i++) {
      let videoPath = gamesData[i].thumbnail.replace("thumbnail.jpg", "videoplayback.webm"); 

      gamesBox += `
      <div class="col">
      <div onmouseleave="stopVideo(event)" onmouseenter="startVideo(event)"onclick="showDetails(${gamesData[i].id})" class="card h-100 bg-transparent" role="button" >
         <div class="card-body">

            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${gamesData[i].thumbnail}" />

             <video muted="true"  preload="none" loop   class="w-100 d-none h-100 position-absolute top-0 start-0 z-3">
              <source src="${videoPath}">
              </video>

            </figure>

            <figcaption>

               <div class="hstack justify-content-between">
                  <h3 class="h6 small"> ${gamesData[i].title} </h3>
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text small text-center opacity-50">
                  ${gamesData[i].short_description}
               </p>

            </figcaption>
         </div>

         <footer class="card-footer small hstack justify-content-between">

            <span class="badge badge-color">${gamesData[i].genre}</span>
            <span class="badge badge-color">${gamesData[i].platform}</span>

         </footer>
      </div>
   </div>
      `;
   }

   document.getElementById("gameData").innerHTML = gamesBox;
}

function startVideo(event) {
   const videoEl = event.target.querySelector("video"); // card ---> video
   videoEl.classList.remove("d-none");
   videoEl.muted = true;
   videoEl.play();
}

function stopVideo(event) {
   const videoEl = event.target.querySelector("video");
   videoEl.classList.add("d-none");
   videoEl.muted = true;
   videoEl.pause();
}

function showDetails(id) {
    location.href = `./details.html?id=${id}`;
 }
 






document.querySelector('.logout-btn').addEventListener('click',function(){
    location.href ="./index.html";
});














// const links = document.querySelectorAll(".menu a");
// let gamesData = [];

// getGames("mmorpg");

// //=====/========event======/
// for (let i = 0; i < links.length; i++){
//     links[i].addEventListener("click", function (e) {
//         document.querySelector(".menu .active").classList.remove("active"); //==== color remove
//         links[i].classList.add("active");


//         const category = e.target.innerHTML
//   console.log(category);
//   getGames(category) ;
 
//     });
// }


// //==================================function==========//



// async function getGames(categoryName) { //==========bkalem api 
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '3f027bdbbcmshd0995d0f26a4604p12a749jsnffc4e7798ff9',
//             'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
//         }
//     };
    
    
//         const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryName}`, options);
//         const data = await response.json();
//         console.log(data);
//         gamesData = data;
//         displayData()
//     }



   
//    function displayData(){
//        let gamesBox =``;
//        for (let i = 0; i < gamesData.length; i++) {
//         let videoPath = gamesData[i].thumbnail.replace("thumbnail.jpg", "videoplayback.webm");
//         gamesBox += `
//         <div class="col">
//         <div onmouseleave="stopVideo(event)" onmouseenter="startVideo(event)" class="card h-100 bg-transparent" role="button" >
//            <div class="card-body">
  
//               <figure class="position-relative">
//                  <img class="card-img-top object-fit-cover h-100" src="${gamesData[i].thumbnail}" />
  
//                <video muted="true"  preload="none" loop   class="w-100 d-none h-100 position-absolute top-0 start-0 z-3">
//                 <source src="${videoPath}">
//                 </video>
  
//               </figure>
  
//               <figcaption>
  
//                  <div class="hstack justify-content-between">
//                     <h3 class="h6 small"> ${gamesData[i].title} </h3>
//                     <span class="badge text-bg-primary p-2">Free</span>
//                  </div>
  
//                  <p class="card-text small text-center opacity-50">
//                     ${gamesData[i].short_description}
//                  </p>
  
//               </figcaption>
//            </div>
  
//            <footer class="card-footer small hstack justify-content-between">
  
//               <span class="badge badge-color">${gamesData[i].genre}</span>
//               <span class="badge badge-color">${gamesData[i].platform}</span>
  
//            </footer>
//         </div>
//      </div>
//         `;
//      }
  
//      document.getElementById("gameData").innerHTML = gamesBox;
//   }
  



//    function startVideo(event) {
//     const videoEl = event.target.querySelector("video"); // card ---> video
//     videoEl.classList.remove("d-none");
//     videoEl.muted = true;
//     videoEl.play();
//  }
 
//  function stopVideo(event) {
//     const videoEl = event.target.querySelector("video");
//     videoEl.classList.add("d-none");
//     videoEl.muted = true;
//     videoEl.pause();
//  }