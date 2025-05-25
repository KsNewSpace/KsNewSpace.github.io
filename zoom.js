function zoom() {
    var images = document.querySelectorAll("img");
	var videos = document.querySelectorAll("video");
	
    images.forEach(image => {
        image.addEventListener("click", () => {
            if (image.classList.contains("img-zoom-in")) {
                image.classList.add("img-zoom-out");
                image.classList.remove("img-zoom-in");
            } else {
                if(image.classList.contains("img-zoom-out")) {
                    image.classList.remove("img-zoom-out");
                }
                image.classList.add("img-zoom-in");
            }
        });
    });
	
	videos.forEach(video => {
        video.addEventListener("click", () => {
            if (video.classList.contains("img-zoom-in-video")) {
                video.classList.add("img-zoom-out-video");
                video.classList.remove("img-zoom-in-video");
            } else {
                if(video.classList.contains("img-zoom-out-video")) {
                    video.classList.remove("img-zoom-out-video");
                }
                video.classList.add("img-zoom-in-video");
            }
        });
    });
}
