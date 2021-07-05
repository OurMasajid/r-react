/**
 * @param {string} text optional ext to show with overlay
 * @param {int} time optional time in second to hide indicator
 */

export function showIndicator(text, time) {
  text = text || "Loading...";
  var sliOverlay = document.getElementById('overlay');
  if (sliOverlay === null) {
    sliOverlay = document.createElement('div');
    sliOverlay.setAttribute("id", "overlay");
    sliOverlay.setAttribute("style", "position: fixed; display: block; width: 100%; height: 100%; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 2; cursor: pointer;")
    var sliText = document.createElement('div');
    sliText.setAttribute("style","position: absolute; top: 50%; left: 50%; font-size: 50px; color: white; transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%);");
    sliText.innerHTML = text;
    sliOverlay.appendChild(sliText);
    document.getElementsByTagName("body")[0].appendChild(sliOverlay);
  }
  else {
    sliOverlay.style.display = "block";
    sliOverlay.childNodes[0].innerHTML = text;
  }
  if (time) {
    setTimeout(hideIndicator, time * 1000);
  }
}

export function hideIndicator() {
  let e = document.getElementById("overlay");
  if (e) {
    e.style.display = "none"
  }
}

