//

import fallbackManager from "./fallback";
import htmlManager from "./html";
import specialGoogleFontManager from "./special/google-font";


let managers = [
  specialGoogleFontManager,
  htmlManager,
  fallbackManager
];

export default managers;