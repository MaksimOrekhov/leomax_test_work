import map from './modules/map';
import searchForm from './modules/searchForm';

let domloaded = function () {
  map();
  searchForm();
}

if (document.readyState === "complete") {
    domloaded();
} else {
    document.addEventListener("DOMContentLoaded", domloaded);
}