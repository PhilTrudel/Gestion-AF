import{S as i,A as a}from"./vendor.5ffd6899.js";const d=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}};d();i.use([a]);let u=document.querySelector(".menu__toggle a"),o=document.querySelector(".hamburger");u.addEventListener("click",()=>{o.style.display="block",o.classList.toggle("open"),o.classList.contains("open")||(o.style.display="none")});let r=document.querySelector(".Nav");document.querySelector(".logo img");window.onscroll=()=>{document.body.scrollTop>=100|document.documentElement.scrollTop>=100?(r.classList.add("colored"),r.classList.remove("transparent")):(r.classList.add("transparent"),r.classList.remove("colored"))};new i(".mySwiper",{slidesPerView:1,spaceBetween:10,autoplay:{delay:1e4,disableOnInteraction:!0},loop:!0,breakpoints:{640:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:2,spaceBetween:40},1024:{slidesPerView:3,spaceBetween:50}}});var m=document.getElementById("myModal"),p=document.getElementById("myInput");m.addEventListener("shown.bs.modal",function(){p.focus()});