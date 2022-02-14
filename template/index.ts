//

import fallbackManager from "./fallback";
import htmlManager from "./html";
import specialGoogleFontsManager from "./special/google-fonts";


let managers = [
  specialGoogleFontsManager,
  htmlManager,
  fallbackManager
];

export default managers;