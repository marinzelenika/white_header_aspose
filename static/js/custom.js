document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll('[data-cd-toggle="modal"]');e&&function(){for(var t=function(t){e[t].addEventListener("click",(function(){document.querySelector(e[t].dataset.cdTarget).classList.add("active")}))},c=0;c<e.length;c++)t(c);for(var n=document.querySelectorAll(".cd-modal-backdrop")||[],d=function(e){n[e].addEventListener("click",(function(){n[e].parentNode.classList.remove("active")}))},i=0;i<n.length;i++)d(i);for(var l=document.querySelectorAll(".cd-modal-close")||[],r=function(e){l[e].addEventListener("click",(function(){l[e].parentNode.parentNode.classList.remove("active")}))},o=0;o<l.length;o++)r(o)}();var t=document.querySelector('[data-cd-content="productsDropdown"]');if(t){t.innerHTML=document.getElementById("productsDropdown").innerHTML;for(var c=0;c<t.children.length;c++)t.children[c].classList.remove("cd-dropdown-onhover"),t.children[c].classList.add("cd-collapse__item","cd-dropdown-onclick"),t.children[c].children[0].href="#",t.children[c].children[1].classList.add("cd-collapse__item__desc")}for(var n=document.querySelectorAll(".cd-collapse__item"),d=function(e){n[e].addEventListener("click",(function(){if(n[e].children[1].classList.contains("active"))return n[e].children[1].style.maxHeight=0,void setTimeout((function(){n[e].children[1].classList.remove("active"),n[e].classList.remove("active")}),200);n[e].children[1].classList.add("active"),n[e].classList.add("active"),n[e].children[1].style.maxHeight=n[e].children[1].scrollHeight+"px"}))},i=0;i<n.length;++i)d(i);for(var l=document.querySelectorAll(".tabs"),r=function(e){for(var t=function(t){l[e].children[t].addEventListener("click",(function(){for(var c=document.getElementById(l[e].children[t].dataset.content).parentElement.children,n=0;n<l[e].children.length;n++)l[e].children[n].classList.remove("active"),c[n].classList.remove("active");l[e].children[t].classList.add("active"),document.getElementById(l[e].children[t].dataset.content).classList.add("active")}))},c=0;c<l[e].children.length;c++)t(c)},o=0;o<l.length;o++)r(o)}));