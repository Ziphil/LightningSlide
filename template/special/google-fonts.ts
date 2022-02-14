//

import {
  SlideTemplateManager,
  withRange
} from "@zenml/slide";


let manager = new SlideTemplateManager();

manager.registerElementRule("sample", "slide", withRange((transformer, document, element) => {
  let self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("sample-line");
    self.appendElement("span", (self) => {
      self.addClassName("text sample-text");
      self.appendTextNode("Gallia est omnis divisa in partes tres,");
    });
  });
  self.appendElement("div", (self) => {
    self.addClassName("sample-line");
    self.appendElement("span", (self) => {
      self.addClassName("text sample-text");
      self.appendTextNode("Quarum unam incolunt Belgaem,");
    });
  });
  self.appendElement("div", (self) => {
    self.addClassName("sample-line");
    self.appendElement("span", (self) => {
      self.addClassName("text sample-text");
      self.appendTextNode("Aliam Aquitani,");
    });
  });
  self.appendElement("div", (self) => {
    self.addClassName("sample-line");
    self.appendElement("span", (self) => {
      self.addClassName("text sample-text");
      self.appendTextNode("Tertiam qui ipsorum lingua Celtae.");
    });
  });
  return self;
}));

manager.registerElementRule("specimen", "slide", withRange((transformer, document, element) => {
  let self = document.createDocumentFragment();
  let strings = ["ABCDEFGHIJKLM", "NOPQRSTUVWXYZ", "abcdefghijklm", "nopqrstuvwxyz"];
  let highlightChars = element.getAttribute("high") ?? "";
  for (let string of strings) {
    self.appendElement("div", (self) => {
      self.addClassName("specimen-line");
      for (let char of string) {
        self.appendElement("div", (self) => {
          self.addClassName("specimen-char");
          if (highlightChars.indexOf(char) >= 0) {
            self.addClassName("highlight");
          }
          self.appendElement("span", (self) => {
            self.addClassName("text");
            self.appendTextNode(char);
          });
        });
      }
    });
  }
  return self;
}));

export default manager;