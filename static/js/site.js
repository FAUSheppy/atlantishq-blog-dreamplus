var onload = function() {
    var colors = "red orange yellow olive green teal blue violet purple pink brown".split(" ");
    var tags   = document.getElementsByClassName('ui label red')
    
    /* elements are removed once their class name changes */
    var i = 0
    while (tags.length) {
        if(tags[0].contains("blue")){
            break;
        }
        console.log("wtf: "+tags[0].classList)
        tags[0].classList[2] = "blue"
        //colors[Math.floor(Math.random() * colors.length)];
        console.log("tfw: "+"'"+tags[0].classList[2]+"'")
        i++;
        if(i > 20){
            break;
        }
    }
};

document.addEventListener('DOMContentLoaded',onload);
