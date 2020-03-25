function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

preloadImages(["assets/thumbnails/absent.jpg", 
				"assets/thumbnails/arc.jpg", 
				"assets/thumbnails/blinded.jpg",
				"assets/thumbnails/curve.jpg",
				"assets/thumbnails/disk.jpg",
				"assets/thumbnails/eclipse.jpg",
				"assets/thumbnails/halo.jpg",
				"assets/thumbnails/hikage.jpg",
				"assets/thumbnails/ice.jpg",
				"assets/thumbnails/isha.jpg",
				"assets/thumbnails/j.jpg",
				"assets/thumbnails/rabia2.jpg",
				"assets/thumbnails/reveal.jpg",
				"assets/thumbnails/secrete1.jpg",
				"assets/thumbnails/tino-close-up.jpg",
				"assets/thumbnails/tino-white-hat.jpg",
				"assets/thumbnails/tino4.jpg",
				"assets/thumbnails/tinotenda3.jpg",
				"assets/thumbnails/torso.jpg",
				"assets/thumbnails/two-hats.jpg"
				]);