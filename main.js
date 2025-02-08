(()=>{"use strict";var e={Url:"https://mesto.nomoreparties.co/v1/pwff-cohort-1",headers:{authorization:"fd6b19c2-a28e-4657-990a-229a88c051b3","Content-Type":"application/json"}};function t(e,t){return fetch(e,t).then(n)}var n=function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))};function r(n,r){(function(n){return t("".concat(e.Url,"/cards/").concat(n),{method:"DELETE",headers:e.headers})})(r).then((function(){n.remove()})).catch((function(e){console.log("Ошибка при удалении карточки: ".concat(e))}))}function o(n,r,o){(function(n,r){return t("".concat(e.Url,"/cards/").concat(n),{method:r?"DELETE":"PUT",headers:e.headers})})(r,n.classList.contains("card__like-button_is-active")).then((function(e){n.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}function c(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),a=c.querySelector(".card__title"),u=c.querySelector(".card__image"),i=c.querySelector(".card__delete-button"),l=c.querySelector(".card__image"),s=c.querySelector(".card__like-button"),d=c.querySelector(".card__like-count");return d.textContent=e.likes.length,a.textContent=e.name,u.src=e.link,u.alt=e.name,i.addEventListener("click",(function(){return t(c)})),l.addEventListener("click",(function(){r(e.link,e.name)})),s.addEventListener("click",(function(){n(s,e._id,d)})),e.likes.some((function(e){return e._id===o}))&&s.classList.add("card__like-button_is-active"),e.owner._id!==o?i.remove():i.addEventListener("click",(function(){t(c,e._id)})),c}function a(e){e.classList.contains("popup_is-opened")||(e.classList.add("popup_is-opened"),document.addEventListener("keydown",i),e.addEventListener("click",l))}function u(e){e&&(e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),e.removeEventListener("click",l))}function i(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&u(t)}}function l(e){e.target===e.currentTarget&&u(e.currentTarget)}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){s(e,n,t)})),d(n,r,t)};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".profile__info"),m=_.querySelector(".profile__title"),y=_.querySelector(".profile__description"),v=document.querySelector(".profile__image"),S=_.querySelector(".profile__edit-button"),h=document.querySelector(".places__list"),b=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),g=document.querySelector(".profile__add-button"),E=document.querySelectorAll(".popup__close"),L=document.querySelector('.popup__form[name="edit-profile"]'),C=L.querySelector(".popup__input_type_name"),k=L.querySelector(".popup__input_type_description"),x=document.querySelector('.popup__form[name="new-place"]'),A=x.querySelector(".popup__input_type_card-name"),T=x.querySelector(".popup__input_type_url"),U=document.querySelector(".popup_type_avatar"),w=document.querySelector('.popup__form[name="edit-avatar"]'),j=w.querySelector(".popup__input_type_avatar"),O=document.querySelector(".popup_type_image"),B=O.querySelector(".popup__image"),P=O.querySelector(".popup__caption"),D=null;function I(e,t){B.src=e,B.alt=t,P.textContent=t,a(O)}function N(e,t){t?h.prepend(e):h.append(e)}S.addEventListener("click",(function(){C.value=m.textContent,k.value=y.textContent,p(L,M),a(b)})),g.addEventListener("click",(function(){x.reset(),p(x,M),a(q)})),v.addEventListener("click",(function(){w.reset(),p(w,M),a(U)})),E.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){t&&u(t)}))})),Promise.all([t("".concat(e.Url,"/users/me"),{headers:e.headers}),t("".concat(e.Url,"/cards"),{headers:e.headers})]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];D=u._id,m.textContent=u.name,y.textContent=u.about,v.style.backgroundImage="url(".concat(u.avatar,")"),i.forEach((function(e){N(c(e,r,o,I,D))}))})).catch((function(e){return console.log(e)}));var J,H=function(e,t){var n=t.querySelector(".popup__button");e?(n.setAttribute("data-text",n.textContent),n.textContent="Сохранение..."):(n.textContent=n.getAttribute("data-text"),n.removeAttribute("data-text"))},M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};L.addEventListener("submit",(function(n){var r,o;n.preventDefault(),H(!0,b),(r=C.value,o=k.value,t("".concat(e.Url,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:r,about:o})})).then((function(e){m.textContent=e.name,y.textContent=e.about,u(b)})).catch((function(e){return console.log(e)})).finally((function(){H(!1,b)}))})),x.addEventListener("submit",(function(n){var a,i;n.preventDefault(),H(!0,x),(a=A.value,i=T.value,t("".concat(e.Url,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:a,link:i})})).then((function(e){N(c(e,r,o,I,D),!0),x.reset(),u(q)})).catch((function(e){return console.error(e)})).finally((function(){H(!1,x)}))})),w.addEventListener("submit",(function(n){var r;n.preventDefault(),H(!0,w),(r=j.value,t("".concat(e.Url,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})})).then((function(e){v.style.backgroundImage="url(".concat(e.avatar,")"),w.reset(),u(U)})).catch((function(e){return console.log(e)})).finally((function(){H(!1,w)}))})),J=M,Array.from(document.querySelectorAll(J.formSelector)).forEach((function(e){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(e,J)}))})();