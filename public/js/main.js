// alert('hjh')  

window.addEventListener("scroll", function () {
  let nav = document.querySelector('nav')
  nav.classList.toggle("sticky", window.scrollY > 400)
})

const d=document.getElementById('d')
const date=new Date();
const day=date.getDate()
const month= date.getMonth()
const year=date.getFullYear()
 d.innerHTML=day+"/"+month+"/"+year

// if (window.location.search) {
// let articalesPerpage;
// let totalPage;
//   let query = window.location.search.split("?")[1].split("&")[0].split("=")[1]
//   let page= parseInt(window.location.search.split('?')[1].split("&")[1].split("=")[1])

//   console.log(query, page)
//     let fetchNews = async (query, pageNo) => {
//     let news = await fetch(`/api?q=${query}&${page}&apiKey=63712aa102484cb79aac60a7c0309c9a`)
//     let r= await news.json()
//     console.log(r)
//     totalPage=Math.ceil(r.totalResults/articalesPerpage)
//     pre.href=`/?q=${query}&pageno=${page-1}`
//     next.href=`/?q=${query}&pageno=${page+1}`
//     let str='';
//     for(let item of r.atticles){
//       str=`  <div class="col">
//       <img src="${item.urlToImage}"
//           class="card-img-top rounded-top-1" alt="...">
//       <div class="card shadow-sm border-0">
//           <!-- <p class="text-center">wasim</p> -->
//           <div class="card-body">
//               <p class="card-text">${item.description}</p>
//               <div class="d-flex justify-content-between align-items-center">
//                   <div class="btn-group">
//                       <button type="button" class="btn btn-sm btn-outline-info">Show</button>
//                       <!-- <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button> -->
//                   </div>
//                   <small class="text-body-secondary">9 mins</small>
//               </div>
//           </div>
//       </div>
//   </div>`
//     }
//     contant.innerHTML=str
//   }
//   fetchNews('sports',page)
// }