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


})();