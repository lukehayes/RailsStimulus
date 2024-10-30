import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "source" ];

  copy()
  {
    clicked("Before Click");
    navigator.clipboard.writeText(this.sourceTarget.value)
    clicked("After Click");
  }

}
