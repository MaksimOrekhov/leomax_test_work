import map from './modules/map';
import searchForm from './modules/searchForm';
import footer from './modules/footer';
import breadcrumbs from './modules/breadcrumbs';

let domloaded = function () {
  map();
  searchForm();
  footer();
  breadcrumbs();
}

if (document.readyState === "complete") {
    domloaded();
} else {
    document.addEventListener("DOMContentLoaded", domloaded);
}