window.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".banner__btn"),t=document.querySelector(".form"),n=document.querySelector(".main");e.addEventListener("click",()=>{t.classList.remove("inv"),n.classList.add("inv"),$(".fade").slick("unslick")}),document.querySelector(".form__back-btn").addEventListener("click",()=>{t.classList.add("inv"),n.classList.remove("inv"),s()});const s=()=>{$(".fade").slick({dots:!0,infinite:!0,speed:500,fade:!0,autoplay:!0,autoplaySpeed:3500,arrows:!1,pauseOnHover:!1,pauseOnFocus:!1,cssEase:"linear"})};s();const l=e=>{let t=0,n="+7 (___) ___ ____".replace(/\D/g,""),s=o.value.replace(/\D/g,"");n.length>=s.length&&(s=n),o.value="+7 (___) ___ ____".replace(/./g,function(e){return/[_\d]/.test(e)&&t<s.length?s.charAt(t++):t>=s.length?"":e}),"blur"==e.type?2==o.value.length&&(o.value=""):((e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){const n=t.createTextRange();n.collapse(!0),n.moveEnd("character",e),n.moveStart("character",e),n.select()}})(o.value.length,o)},o=document.querySelector("#user-tel");o.addEventListener("input",l,!1),o.addEventListener("focus",l,!1),o.addEventListener("blur",l,!1),document.querySelectorAll(".form__input").forEach(e=>{e.addEventListener("focus",()=>{e.parentElement.classList.add("not-empty")})}),document.querySelectorAll("body .form__input").forEach(e=>{e.addEventListener("focusout",()=>{0===e.value.length&&e.parentElement.classList.remove("not-empty")})});const r=document.querySelector(".spoiler");r.addEventListener("click",()=>{r.nextElementSibling.classList.toggle("spoiler__content-show"),r.parentElement.classList.toggle("not-empty")}),document.addEventListener("mousedown",e=>{null===e.target.closest(".form__city")&&(r.parentElement.classList.remove("not-empty"),r.nextElementSibling.classList.remove("spoiler__content-show"))}),document.querySelectorAll(".spoiler__link").forEach(e=>{e.addEventListener("click",()=>{r.innerHTML=e.innerHTML,r.parentElement.classList.remove("not-empty"),r.nextElementSibling.classList.remove("spoiler__content-show")})})});