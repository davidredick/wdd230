function preLoadImage(img) {
    let src = img.getAttribute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}


function lazyfunction () {

    let imagesToLoad = document.querySelectorAll("img[data-src]");

    let loadImages = (image) => {
        image.setAttribute("src", image.getAttribute("data-src"));
        image.onload = () => {
          image.removeAttribute("data-src");
        };
      };

    let imgOptions = {}



    let imgObserver = new IntersectionObserver ((entries. imgObserver) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage (entry.target);
                imgObserver.unobserve (entry.target)
            }
        })

    }, imgOptions);

    imagesToLoad.forEach(image => {
        imgObserver.observe(image);
    })




}