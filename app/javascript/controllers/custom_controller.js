import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.element.textContent = "A custom controller right here."
  }

  foo() {
    console.log("Element has been clicked");
  }
}
