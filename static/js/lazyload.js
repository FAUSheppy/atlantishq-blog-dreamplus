/* determine which size of image to load */
function getSize(){
	console.log(screen.width/window.devicePixelRatio)
}


/* check if browser is capable of webp */
function supportsWebp() {
  if (!self.createImageBitmap) return false;
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  return createImageBitmap(webpData).then(() => true, () => false);
}
var webP = supportsWebp()

/* function to load images */
function changeSrc(offset){
    var elements = document.querySelectorAll("*[rrealsrc]");
    for (var i = 0; i < elements.length; i++) {
            var boundingClientRect = elements[i].getBoundingClientRect();
            if (elements[i].hasAttribute("rrealsrc") && boundingClientRect.top < window.innerHeight +offset) {
				var newSrc = elements[i].getAttribute("rrealsrc")
				/* load webP if supported */
				if(webP){
					newSrc = newSrc.substring(4,newSrc.length-1)
					newSrc = newSrc  + '.webp'
				}
                elements[i].setAttribute("src", newSrc);
                elements[i].style.backgroundImage = 'url(' + newSrc +')';
                elements[i].removeAttribute("rrealsrc");
            }
        }

}
refresh_handler = function(e) {
    /* images directly in view first (offset 0)*/
	changeSrc(0)
	/* then load images almost in view */
	changeSrc(500)
};

/* add listeners */
document.getElementById("main_scrollable").addEventListener('scroll', refresh_handler);
window.addEventListener('resize', refresh_handler);
window.addEventListener('load', refresh_handler);
getSize()
