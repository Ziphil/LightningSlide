//

import {
  SlideTemplateManager,
  withRange
} from "@zenml/slide";


let manager = new SlideTemplateManager();

manager.registerElementRule(["div", "span", "img", "br"], "slide", withRange((transformer, document, element) => {
  let self = document.createDocumentFragment();
  self.appendElement(element.tagName, (self) => {
    for (let i = 0 ; i < element.attributes.length ; i ++) {
      let {name, value} = element.attributes.item(i)!;
      if (name !== "range") {
        self.setAttribute(name, value);
      }
    }
    self.appendChild(transformer.apply());
  });
  return self;
}));

export default manager;