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


    // 마커가 표시될 위치입니다
    var markerPosition  = new kakao.maps.LatLng(37.2624598,127.0241684);

    var mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
            center: markerPosition, // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

})();