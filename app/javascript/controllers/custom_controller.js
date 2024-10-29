import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "name" ];

  foo() {
    console.log("Element has been clicked");

    console.log(this.nameTarget);
    console.log(`Name: ${this.name}`);
  }

  get name()
  {
    return this.nameTarget.value;
  }
}
