// app/javascript/controllers/typed_js_controller.js
import { Controller } from "@hotwired/stimulus"
// Don't forget to import the NPM package
import Typed from "typed.js"

export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Assemble personal collections of your favorite vintage films from the 60's, 70's and beyond."],
      typeSpeed: 40,
      loop: true
    });
  }
}
