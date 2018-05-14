        refresh_handler = function(e) {
        var elements = document.querySelectorAll("*[realsrc]");
        for (var i = 0; i < elements.length; i++) {
                var boundingClientRect = elements[i].getBoundingClientRect();
                if (elements[i].hasAttribute("realsrc") && boundingClientRect.top < window.innerHeight) {
                    elements[i].setAttribute("src", elements[i].getAttribute("realsrc"));
                    elements[i].removeAttribute("realsrc");
                }
            }
        var elements = document.querySelectorAll("*[rrealsrc]");
        for (var i = 0; i < elements.length; i++) {
                var boundingClientRect = elements[i].getBoundingClientRect();
                var offset = 500
                if (elements[i].hasAttribute("rrealsrc") && boundingClientRect.top < window.innerHeight + offset) {
                    elements[i].style.backgroundImage = elements[i].getAttribute("rrealsrc");
                    elements[i].removeAttribute("rrealsrc");
                }
            }

        };

        document.getElementById("main_scrollable").addEventListener('scroll', refresh_handler);
        window.addEventListener('resize', refresh_handler);
        window.addEventListener('load', refresh_handler);
