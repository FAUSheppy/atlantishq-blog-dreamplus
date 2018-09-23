/* determine which size of image to load */
function getSize(){
    trueRes = screen.width/window.devicePixelRatio
	if(trueRes > 1920)
        return ''
    else if(trueRes <= 1920 && trueRes >= 1200)
        return '-640x480'
    else
        return '-320x240'
}


/* check if browser is capable of webp */
function supportsWebp() {
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  //if (!self.createImageBitmap) return false;
  //const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  //return createImageBitmap(webpData).then(() => true, () => false);
}
var webP = supportsWebp()

/* function to load images */
function changeSrc(offset){
    var elements = document.querySelectorAll("*[rrealsrc]");
    for (var i = 0; i < elements.length; i++) {
            var boundingClientRect = elements[i].getBoundingClientRect();
            if (elements[i].hasAttribute("rrealsrc") && boundingClientRect.top < window.innerHeight +offset) {
				var newSrc = elements[i].getAttribute("rrealsrc")
                if(!newSrc.includes(".png")){
                    /* remove url( ... ) */
				    newSrc = newSrc.substring(4,newSrc.length-1)

                    /* get correct size */
                    newSrc += getSize()

				    /* load webP if supported */
				    if(webP){
				    	newSrc = newSrc  + '.webp'
				    }
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
