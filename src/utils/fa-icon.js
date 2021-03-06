import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faStar,
  faSearch,
  faCartPlus,
  faChevronLeft,
  faPlus,
  faMinus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faShoppingCart,
  faStar,
  faSearch,
  faCartPlus,
  faChevronLeft,
  faPlus,
  faMinus,
  faTimes
);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("fa-icon", FontAwesomeIcon);
