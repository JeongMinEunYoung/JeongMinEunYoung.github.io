(() => {
    const previewItem = [...document.querySelectorAll(".preview-item")];
    const preview = document.querySelector("#preview");
    const previewClose = document.querySelector(".preview-close");
    const previewPrev = document.querySelector("#prev");
    const previewNext = document.querySelector("#next");

    const closePreview = (e) => {
        e.style.display = "none";
    };

    const positionIsHorizontal = v => v === 'horizontal';

    const drawPreview = ({position , url}) => {
        // 가로
        if(positionIsHorizontal(position)) {

            return;
        }
    };

    const previewEvent = (v) => {
        const {currentTarget : target} = v;

        console.log(target.dataset.position);
        console.log(target.src)
    };

    previewItem.forEach(v => {
        v.addEventListener("click" , previewEvent);
    });

    previewClose.addEventListener("click" , () => {closePreview(preview)})
})();