(() => {
    const previewItem = [...document.querySelectorAll(".preview-item")];
    const preview = document.querySelector("#preview");
    const previewClose = document.querySelector(".preview-close");
    const previewPrev = document.querySelector("#prev");
    const previewNext = document.querySelector("#next");
    const previewImage = document.querySelector("#preview-image");

    let index = 1;
    const images = [
        "resources/images/image-1.jpg",
        "resources/images/image-2.jpg",
        "resources/images/image-3.jpg",
        "resources/images/image-9.jpg",
        "resources/images/image-5.jpg",
        "resources/images/image-6.jpg",
        "resources/images/image-7.jpg",
        "resources/images/image-8.jpg",
        "resources/images/image-4.jpg"
    ];

    const showPreview = e => {
        e.classList.remove("hidden")
    };

    const closePreview = e => {
        e.classList.add("hidden");
    };

    const drawPreview = position => {
        index = position;
        previewImage.src = images[position];
        showPreview(preview);
    };

    const previewEvent = v => {
        const {currentTarget : target} = v;
        const {position} = target.dataset;
        drawPreview(position)
    };

    const isNext = (index , imageList) => {
        const size = imageList.length - 1;
        if ( index > size){
            index = 0;
        }

        if( index < 0) {
            index = size;
        }
        drawPreview(index);
    }

    const previewPrevEvent = () => {
        index--;
        isNext(index, images);
    }
    const previewNextEvent = () => {
        index++;
        isNext(index, images);
    }

    previewItem.forEach(v => {
        v.addEventListener("click" , previewEvent);
    });

    previewClose.addEventListener("click" , () => {closePreview(preview)})

    previewPrev.addEventListener("click", previewPrevEvent);
    previewNext.addEventListener("click", previewNextEvent);

    Kakao.init('621825037a17efac957f388450f47601');
    Kakao.isInitialized();

    document.querySelector("#kakaoSharing").addEventListener("click", () => {

        Kakao.Link.sendCustom({
            templateId: 35032 ,
            templateArgs: {
                'title': '제목 영역입니다.',
                'description': '설명 영역입니다.'
            }
        });
        //]]>
    })

    document.querySelector("#facebookSharing").addEventListener("click" , () => {
        location.href = `https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&u=http://jeongmineunyoung.github.io/`
    })


    document.querySelector("#basicSharing").addEventListener("click" , () => {
        copyToClipboard("https://jeongmineunyoung.github.io")
        alert("복사되었습니다.")
    });

    document.querySelector("#copyAddress").addEventListener("click" , () => {
        copyToClipboard("경기도 수원시 권선구 경수대로 401 루클라비")
        alert("주소가 복사되었습니다.")
    });

    function copyToClipboard(val) {
        var t = document.createElement("textarea");
        document.body.appendChild(t);
        t.value = val;
        t.select();
        document.execCommand('copy');
        document.body.removeChild(t);
    }


    // 마커
    var markerPosition  = new kakao.maps.LatLng(37.2624598,127.0241684);

    // 지도 확대 축소
    var zoomControl = new kakao.maps.ZoomControl();

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: markerPosition, // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);


})();