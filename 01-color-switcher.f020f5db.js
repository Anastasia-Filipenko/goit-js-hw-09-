!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),n=document.querySelector("body");e.addEventListener("click",(function(){o=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16)),e.disabled=!0,t.disabled=!1}),1e3)})),t.addEventListener("click",(function(){clearInterval(o),e.disabled=!1,t.disabled=!0}));var o=null;console.log(n)}();
//# sourceMappingURL=01-color-switcher.f020f5db.js.map
