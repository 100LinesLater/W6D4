class DomNodeCollection {
  constructor(array) {
    this.array = array;
  }

  html(arg) {
    if (arg) {
      this.array.forEach( el => {
        el.innerHTML = arg;
      })
    } else {
      return this.array[0].innerHTML;
    }
  }

  empty() {
    this.array.forEach( el => {
      el.innerHTML = "";
    })
  }

  append(arg) {
    if (arg instanceof DomNodeCollection) {
      this.array.forEach( el => {
        arg.array.forEach( argEl => {
          el.innerHTML += argEl.outerHTML + argEl.innerHTML;
        })
      })
    } else {
      this.array.forEach( el => {
        el.innerHTML += arg;
      })
    }
  }

  attr(name, value) {
    if (!value) {
      let res;
      this.array.forEach( el => {
        if (el.outerHTML.includes(name)) res = el;
      })
      return res;
    } else {
      this.array.forEach(el => {
        el.setAttribute(name, value);
      })

      // this.array.forEach(el => {
      //   let outer = el.outerHTML;
      //   outer.split(" ").map(elem => {
      //     if (elem.includes(name) )
      //   })
      // }) 
    }
  }

  addClass(className) {
      this.attr('class', className);
  }

  removeClass(className) {
  }
}

module.exports = DomNodeCollection;

// outer html <div></div>
//inner html ""
//outerhtml = div
// $l = DOMNodeCollection(each).outerHTML