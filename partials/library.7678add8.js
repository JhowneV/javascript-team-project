const e="https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&api_key=b5e824a3d922f68ba211fcf6dbdcb6f5",t=document.getElementById("main"),n=document.getElementById("search-form"),o=document.getElementById("search-input"),s=(document.getElementById("gallery"),document.getElementById("prev")),i=document.getElementById("next"),d=document.getElementById("current");var a=1,c=2,l=3,r="",m=100;function h(e){r=e,fetch(e).then((e=>e.json())).then((e=>{console.log(e.results),0!==e.results.length?(!function(e){t.innerHTML="",e.forEach((e=>{const{title:n,poster_path:o,release_date:s}=e,i=document.createElement("div");i.classList.add("movie"),i.innerHTML=`\n            <img src="${o?"https://image.tmdb.org/t/p/w500"+o:"http:/>/via.placeholder.com/1080x1500"}"\n                alt="${n}"/>\n            \n            <div class="movie-info">\n                <h3>${n}</h3>\n                <div class="movie-details">\n                    <span id="release_date" class="${s}">${s}</span>\n                </div>\n            </div>        \n        `,t.appendChild(i)}))}(e.results),a=e.page,c=a+1,l=a-1,m=e.total_pages,d.innerText=a,a<=1?(s.classList.add("disabled"),i.classList.remove("disabled")):a>=m?(s.classList.remove("disabled"),i.classList.add("disabled")):(s.classList.remove("disabled"),i.classList.remove("disabled"))):t.innerHTML='<h1 class="no-results">No Results Found</h1>'}))}function p(e){let t=r.split("?"),n=t[1].split("&"),o=n[n.length-1].split("=");if("page"!=o[0]){h(r+"&page="+e)}else{o[1]=e.toString();let s=o.join("=");n[n.length-1]=s;let i=n.join("&");h(t[0]+"?"+i)}}h(e),n.addEventListener("submit",(t=>{t.preventDefault();const n=o.value;h(n?"https://api.themoviedb.org/3/search/movie?api_key=b5e824a3d922f68ba211fcf6dbdcb6f5&query="+n:e)})),s.addEventListener("click",(()=>{l>0&&p(l)})),i.addEventListener("click",(()=>{c<=m&&p(c)}));const u=document.getElementById("watched-btn"),v=document.getElementById("queue-btn");u.addEventListener("click",(function(){function e(){(JSON.parse(localStorage.getItem("watchedMovies"))||[]).forEach((e=>{fetch(`https://api.themoviedb.org/3/movie/${watched-movies}?api_key=YOUR_ACTUAL_API_KEY`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{!function(e){const t=document.getElementById("main"),n=document.createElement("div");n.innerHTML=`\n        <h3>${e.title}</h3>\n        <p>${e.overview}</p>\n        <img src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="${e.title}">\n    `,t.appendChild(n)}(e)})).catch((e=>{console.error("Error fetching movie:",e)}))}))}console.log("Watched button clicked"),window.onload=function(){e()}})),v.addEventListener("click",(function(){console.log("Queue button clicked")}));
//# sourceMappingURL=library.7678add8.js.map