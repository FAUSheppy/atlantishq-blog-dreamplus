var prevBgIndex = 0;
var bodyBgSwitchIndex = 0;var gradients = [
              [],
              ['#40e0d0', '#ff8c00', '#ff0080'], 
              ['#3e5151', '#decba4'], 
              ['#11998e', '#38ef7d'], 
              ['#108dc7', '#ef8e38'], 
              ['#fc5c7d', '#6a82fb'], 
              ['#fc466b', '#3f5efb'], 
              ['#c94b4b', '#4b134f'], 
              ['#23074d', '#cc5333'] 
            ]
    document.body.style.setProperty('--colorBG', connect(gradients[getRandomInt(0, gradients.length)]))
    function getRandomInt(min, max) {
                  min = Math.ceil(min)
                  max = Math.floor(max)
                  var random
                  while (1) {
                                random = Math.floor(Math.random() * (max - min)) + min
                                if (random !== prevBgIndex) {
                                                  prevBgIndex = random
                                                  break
                                                }
                              }
                  return random
                }
    function connect(arr) { 
       var str = '' 
       for (var i = 0; i < arr.length; i++) { 
         if (i !== arr.length - 1) { 
           str += arr[i] + ', ' 
         } else { 
           str += arr[i] 
         } 
       } 
       return str 
     }

