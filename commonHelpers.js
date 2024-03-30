import{a as L,S as _,i as d}from"./assets/vendor-2cfd16ce.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();async function u(t,r){const o="43131221-437eb08730a4aa4be76ca14ef",i="https://pixabay.com/api/",e={key:o,q:t,image_type:"photo",orientation:"horizontal",page:r,per_page:15,safesearch:!0};return(await L.get(i,{params:e})).data}function E(t){const{largeImageURL:r,webformatURL:o,tags:i,likes:e,views:s,comments:l,downloads:y}=t;return`<li class="gallery-item">
	<a class="gallery-link" href="${r}">
		<img    
            loading="lazy"
            src="${o}"
            alt="${i}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gallery-descript">
        <li class="gallery-descript__item"><span class="gallery-descript__span">likes</span> ${e}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Views</span> ${s}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Coments</span> ${l}</li>
        <li class="gallery-descript__item"><span class="gallery-descript__span">Dowloads</span> ${y}</li>
     </ul>
	</a>
</li>`}function m(t){return t.map(E).join("")}const a={formEl:document.querySelector(".form"),listEL:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader"),loadMoreBtn:document.querySelector("[data-action=load-more]")},b=new _(".gallery a",{captionsData:"alt",captionDelay:250});let n=1,p=0,c;const w=15;a.formEl.addEventListener("submit",v);a.loadMoreBtn.addEventListener("click",M);async function v(t){t.preventDefault(),a.listEL.innerHTML="",n=1,c=t.target.elements.value.value.trim(),c||d.error({title:"Error",message:"The search field is empty. Please try again!"});try{f();const r=await u(c,n);p=Math.ceil(r.totalHits/w),r.hits.length||d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});const o=m(r.hits);a.listEL.insertAdjacentHTML("beforeend",o),b.refresh()}catch(r){console.log(r)}g(),h(),a.formEl.reset()}async function M(){n+=1,f();try{const t=await u(c,n),r=m(t.hits);a.listEL.insertAdjacentHTML("beforeend",r)}catch(t){console.log(t)}P(),g(),h()}function f(){a.loaderEl.classList.remove("is-hidden")}function g(){a.loaderEl.classList.add("is-hidden")}function S(){a.loadMoreBtn.classList.remove("is-hidden")}function B(){a.loadMoreBtn.classList.add("is-hidden")}function h(){n>=p?(B(),d.info({message:"We're sorry, but you've reached the end of search results."})):S()}function P(){const t=a.listEL.firstChild.getBoundingClientRect().height;scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
