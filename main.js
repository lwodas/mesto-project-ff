(()=>{"use strict";var e=document.querySelector("#card-template").content.querySelector(".places__item");function t(t,r,n,o){var c=e.cloneNode(!0),u=c.querySelector(".card__delete-button"),a=c.querySelector(".card__title"),i=c.querySelector(".card__image"),l=c.querySelector(".card__like-button");return a.textContent=t.name,i.src=t.link,i.alt=t.name,u.addEventListener("click",(function(){return r(c)})),l.addEventListener("click",(function(){n(l)})),i.addEventListener("click",(function(){return o(i.src,i.alt)})),c}function r(e){e.remove()}function n(e){e.classList.toggle("card__like-button_is-active")}function o(e){e.classList.contains("popup_is-opened")||(e.classList.add("popup_is-opened"),document.addEventListener("keydown",u),e.addEventListener("click",a))}function c(e){e&&(e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),e.removeEventListener("click",a))}function u(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&c(t)}}function a(e){e.target===e.currentTarget&&c(e.currentTarget)}var i=function(e,t,r){var n=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},l=function(e,t,r){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(r.inactiveButtonClass)):(t.disabled=!0,t.classList.add(r.inactiveButtonClass))},p=function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);r.forEach((function(r){i(e,r,t)})),l(r,n,t)},s={Url:"https://mesto.nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"fd6b19c2-a28e-4657-990a-229a88c051b3","Content-Type":"application/json"}};function d(e,t){return fetch(e,t).then(f)}var f=function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}document.querySelector("#card-template").content.querySelector(".places__item");var y=document.querySelector(".popup_type_edit"),m=document.querySelector(".places__list"),v=(document.querySelector(".popup"),document.querySelector(".popup_type_image")),S=v.querySelector(".popup__image"),h=v.querySelector(".popup__caption"),q=document.querySelectorAll(".popup__close"),b=document.querySelector(".profile__info"),g=b.querySelector(".profile__title"),C=b.querySelector(".profile__description"),E=document.querySelector(".profile__image"),L=b.querySelector(".profile__edit-button"),k=(document.querySelector(".popup_type_avatar"),document.querySelector('.popup__form[name="edit-avatar"]')),A=k.querySelector(".popup__input_type_avatar"),x=document.querySelector('.popup__form[name="edit-profile"]'),w=x.querySelector(".popup__input_type_name"),U=x.querySelector(".popup__input_type_description"),j=document.querySelector(".popup_type_edit"),O=document.querySelector(".popup_type_new-card"),T=document.querySelector(".profile__add-button"),B=document.querySelector('.popup__form[name="new-place"]'),P=B.querySelector(".popup__input_type_card-name"),I=B.querySelector(".popup__input_type_url");function N(e,o){o?m.prepend(t(e,r,n,J)):m.append(t(e,r,n,J))}q.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){t&&c(t)}))})),L.addEventListener("click",(function(){w.value=g.textContent,U.value=C.textContent,o(y)})),x.addEventListener("submit",(function(e){var t,r;e.preventDefault(),D(!0,j),(t=w.value,r=U.value,d("".concat(s.Url,"/users/me"),{method:"PATCH",headers:s.headers,body:JSON.stringify({name:t,about:r})})).then((function(e){g.textContent=e.name,C.textContent=e.about,c(j)})).catch((function(e){return console.log(e)})).finally((function(){D(!1,j)}))})),E.addEventListener("click",(function(){k.reset(),p(k,H),o(k)})),k.addEventListener("submit",(function(e){var t;e.preventDefault(),D(!0,k),(t=A.value,d("".concat(s.Url,"/users/me/avatar"),{method:"PATCH",headers:s.headers,body:JSON.stringify({avatar:t})})).then((function(e){E.style.backgroundImage="url(".concat(e.avatar,")"),k.reset(),c(editAvatarPopUp)})).catch((function(e){return console.log(e)})).finally((function(){D(!1,k)}))})),T.addEventListener("click",(function(){p(x,H),o(O)})),B.addEventListener("submit",(function(e){var o,u;e.preventDefault(),D(!0,B),(o=P.value,u=I.value,d("".concat(s.Url,"/cards"),{method:"POST",headers:s.headers,body:JSON.stringify({name:o,link:u})})).then((function(e){N(t(e,r,n,J),!0),B.reset(),c(O)})).catch((function(e){return console.error(e)})).finally((function(){D(!1,B)}))})),Promise.all([d("".concat(s.Url,"/users/me"),{headers:s.headers}),d("".concat(s.Url,"/cards"),{headers:s.headers})]).then((function(e){var o,c,u=(c=2,function(e){if(Array.isArray(e))return e}(o=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,c,u,a=[],i=!0,l=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=c.call(r)).done)&&(a.push(n.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(o,c)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(o,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],i=u[1];a._id,g.textContent=a.name,C.textContent=a.about,E.style.backgroundImage="url(".concat(a.avatar,")"),i.forEach((function(e){N(t(e,r,n,J))}))})).catch((function(e){return console.log(e)}));var D=function(e,t){var r=t.querySelector(".popup__button");e?(r.setAttribute("data-text",r.textContent),r.textContent="Сохранение..."):(r.textContent=r.getAttribute("data-text"),r.removeAttribute("data-text"))};function J(e,t){S.src=e,S.alt=t,h.textContent=t,o(v)}var H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__submit_inactive",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var r=Array.from(e.querySelectorAll(t.inputSelector)),n=e.querySelector(t.submitButtonSelector);l(r,n,t),r.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,r){t.validity.valid?i(e,t,r):function(e,t,r,n){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(e,t,t.validationMessage,r)}(e,o,t),l(r,n,t)}))}))}(t,e)}))}(H)})();