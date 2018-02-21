import map from './modules/map';

let domloaded = function () {
  map()
}

if (document.readyState === "complete") {
    domloaded();
} else {
    document.addEventListener("DOMContentLoaded", domloaded);
}