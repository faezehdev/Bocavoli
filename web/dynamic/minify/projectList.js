$(".Projectlist-Sec").imagesLoaded({},(function(){$(document).ready((function(){setTimeout((()=>{gsap.registerPlugin(ScrollTrigger);const e=document.querySelector(".Projectlist-Sec"),r=new LocomotiveScroll({el:e,direction:"horizontal",smooth:!0,lerp:.05});r.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(e,{scrollTop(e){return arguments.length?r.scrollTo(e,0,0):r.scroll.instance.scroll.y},getBoundingClientRect:()=>({left:0,top:0,width:window.innerWidth,height:window.innerHeight}),pinType:e.style.transform?"transform":"fixed"});document.querySelectorAll(".Pin-Wrapp > *");let t=document.querySelector(".Pin-Wrapp").offsetWidth,o=t-window.innerWidth;scrollTween=gsap.to(".Pin-Wrapp",{scrollTrigger:{scroller:e,scrub:!0,trigger:"#PinSection",pin:!0,start:"top top",end:t},x:-o,ease:"none"}),ScrollTrigger.addEventListener("refresh",(()=>r.update())),ScrollTrigger.refresh(),r.update(),window.addEventListener("load",(function(){ScrollTrigger.addEventListener("refresh",(()=>r.update())),ScrollTrigger.refresh(),r.update()})),window.addEventListener("resize",(()=>{ScrollTrigger.addEventListener("refresh",(()=>r.update())),ScrollTrigger.refresh(),r.update()})),document.querySelectorAll(".textBox").forEach((e=>{gsap.to(e,{scrollTrigger:{trigger:e,containerAnimation:scrollTween,start:"top bottom"},onStart:()=>{e.classList.add("appear")}})}));let l=document.querySelectorAll(".IMG");document.querySelectorAll(".project").forEach((e=>{gsap.to(e.querySelector(".IMG-proj"),{scrollTrigger:{trigger:e,containerAnimation:scrollTween,start:"top bottom"},onStart:()=>{e.querySelector(".IMG-proj").classList.add("appear")}})})),l.forEach((e=>{gsap.to(e,{scrollTrigger:{trigger:e,containerAnimation:scrollTween,start:"top bottom"},onStart:()=>{e.classList.add("appear")}})}))}),1e3)}))}));