function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  var imgElement = document.querySelector("#profile img")
  var currentImage = imgElement.getAttribute("src")

  if (currentImage.includes("assets/Avatar.png")) {
    imgElement.setAttribute("src", "assets/avatar-light.png")
  } else {
    imgElement.setAttribute("src", "assets/Avatar.png")
  }
}
