import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faHouse,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const solidIcons = () => {
  return library.add(faTrash, faPlus, faMinus, faMagnifyingGlass, faHouse);
};

export default solidIcons;
