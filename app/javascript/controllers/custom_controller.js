import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ['name'];

  connect() {
    //this.element.textContent = "A custom controller right here."
  }

  foo() {
    console.log("Element has been clicked");
    const name = this.nameTarget;
    console.log(name);
    console.log(name.value);
  }
}
