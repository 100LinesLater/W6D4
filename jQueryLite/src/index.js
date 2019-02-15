const DomNodeCollection = require('./dom_node_collection')

const $l = function theCoreFunction (arg) {
  if (arg instanceof HTMLElement) {
    return new DomNodeCollection([arg]);
  } else {
  return new DomNodeCollection(Array.from(document.querySelectorAll(arg)));
  }
}

window.$l = $l;
