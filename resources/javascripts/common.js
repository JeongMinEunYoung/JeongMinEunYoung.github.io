(() => {
    const d = document.querySelector(".event-1"), i = document.querySelector(".event-2"),
        m = document.querySelector(".event-3"), u = document.querySelector(".event-4"),
        l = document.querySelector(".event-5"), p = document.querySelector(".event-6");

    function g(e, t) {
        setTimeout(() => {
            e.classList.add("active")
        }, t)
    }

    g(d, 100), g(i, 250), g(m, 350), g(u, 350), g(l, 500), g(p, 550);

    const preload = new Image();
    const v = [
        "resources/images/JUN_Main.jpg","resources/compressed/JUN_1527.jpg", "resources/images/call_icon.png","resources/images/message_icon.png",
            "resources/compressed/image-1.jpg", "resources/compressed/image-2.jpg",
        "resources/compressed/image-3.jpg", "resources/compressed/image-9.jpg", "resources/compressed/image-5.jpg", "resources/compressed/image-6.jpg",
        "resources/compressed/image-7.jpg", "resources/compressed/image-8.jpg",
            "resources/compressed/image-4.jpg"];

    v.forEach(v => preload.src = v);

})();