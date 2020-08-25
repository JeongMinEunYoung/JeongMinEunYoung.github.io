(() => {
    window.onload = () => {

        const e = [...document.querySelectorAll(".preview-item")], t = document.querySelector("#preview"),
            o = document.querySelector(".preview-close"), c = document.querySelector("#prev"),
            r = document.querySelector("#next"), n = document.querySelector("#preview-image"),
            s = document.querySelectorAll(".call"), a = document.querySelectorAll(".message");

        let k = 1;
        const v = ["resources/compressed/image-1.jpg", "resources/compressed/image-2.jpg", "resources/compressed/image-3.jpg", "resources/compressed/image-9.jpg", "resources/compressed/image-5.jpg", "resources/compressed/image-6.jpg", "resources/compressed/image-7.jpg", "resources/compressed/image-8.jpg", "resources/compressed/image-4.jpg"],
            y = e => {
                k = e, n.src = v[e], (e => {
                    e.classList.remove("hidden")
                })(t)
            }, h = e => {
                const {currentTarget: t} = e, {position: o} = t.dataset;
                y(o)
            }, S = (e, t) => {
                const o = t.length - 1;
                e > o && (e = 0), e < 0 && (e = o), y(e)
            };

        function q(e) {
            var t = document.createElement("textarea");
            document.body.appendChild(t), t.value = e, t.select(), document.execCommand("copy"), document.body.removeChild(t)
        }

        e.forEach(e => {
            e.addEventListener("click", h)
        }), o.addEventListener("click", () => {
            (e => {
                e.classList.add("hidden")
            })(t)
        }), c.addEventListener("click", () => {
            S(--k, v)
        }), r.addEventListener("click", () => {
            S(++k, v)
        }), Kakao.init("621825037a17efac957f388450f47601"), Kakao.isInitialized(), document.querySelector("#kakaoSharing").addEventListener("click", () => {
            Kakao.Link.sendCustom({templateId: 35032, templateArgs: {title: "제목 영역입니다.", description: "설명 영역입니다."}})
        }), document.querySelector("#facebookSharing").addEventListener("click", () => {
            location.href = "https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http://jeongmineunyoung.github.io/"
        }), document.querySelector("#basicSharing").addEventListener("click", () => {
            q("https://jeongmineunyoung.github.io"), alert("복사되었습니다.")
        }), document.querySelector("#copyAddress").addEventListener("click", () => {
            q("경기도 수원시 권선구 경수대로 401 루클라비"), alert("주소가 복사되었습니다.")
        }), s.forEach(e => {
            e.addEventListener("click", () => {
                const {phone: t} = e.dataset, o = atob(t);
                location.href = `tel:${o}`
            })
        }), a.forEach(e => {
            e.addEventListener("click", () => {
                const {message: t} = e.dataset, o = atob(t);
                location.href = `sms:${o}`
            })
        }), setTimeout(() => {
            var e = new kakao.maps.LatLng(37.2624598, 127.0241684), t = new kakao.maps.ZoomControl,
                o = document.getElementById("map"), c = {center: e, level: 3}, r = new kakao.maps.Map(o, c);
            r.addControl(t, kakao.maps.ControlPosition.RIGHT), new kakao.maps.Marker({position: e}).setMap(r)
        }, 2e3)

    }
})();