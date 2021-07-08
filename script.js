function calc() {
    // 전체 타블렛 크기
    let tabletSizeWidth = parseInt(document.getElementById("tablet_size_right").value);
    let tabletSizeHeight = parseInt(document.getElementById("tablet_size_bottom").value);
    // 사용 중인 타블렛 좌표 크기
    let tabletAreaWidth = parseInt(document.getElementById("tablet_area_width").value);
    let tabletAreaHeight = parseInt(document.getElementById("tablet_area_height").value);
    // 현재 해상도와 마우스감도
    let nowWidth = parseInt(document.getElementById("now_width").value);
    let nowHeight = parseInt(document.getElementById("now_height").value);
    let nowSpeed = parseFloat(document.getElementById("now_speed").value);
    // 변경할 해상도
    let newWidth = parseInt(document.getElementById("new_width").value);
    let newHeight = parseInt(document.getElementById("new_height").value);


    // 배율(speed) 적용
    let resultWidth = tabletAreaWidth / nowSpeed;
    let resultHeight = tabletAreaHeight / nowSpeed;
    // 가로 길이 보정
    let resolutionWidth = (newWidth / nowWidth) / (newHeight / nowHeight)
    /* 옛 해상도와 타블렛 크기를 가로보정 길이만큼 늘리면
     * 옛 해상도와 목표 해상도의 비율이 같아짐.
     * 이후 (목표 해상도 / 옛 해상도)의 비율 만큼 타블렛 크기를 나눔 */
    nowWidth *= resolutionWidth;
    resultWidth *= resolutionWidth;
    resultWidth /= (newWidth / nowWidth);
    resultHeight /= (newHeight / nowHeight);
    console.log(`width: ${resultWidth}\nheight: ${resultHeight}`);

    let resultTop = (tabletSizeHeight - resultHeight) / 2;
    let resultBottom = tabletSizeHeight - resultTop;
    let resultLeft = (tabletSizeWidth - resultWidth) / 2;
    let resultRight = tabletSizeWidth - resultLeft;

    // 결과 적용
    document.getElementById("result_top").value = Math.floor(resultTop);
    document.getElementById("result_bottom").value = Math.floor(resultBottom);
    document.getElementById("result_left").value = Math.floor(resultLeft);
    document.getElementById("result_rigth").value = Math.floor(resultRight);
}

function calcAreaWidth() {
    const left = parseInt(elementTabletAreaLeft.value);
    const right = parseInt(elementTabletAreaRight.value);
    // console.log(`l: ${left}, r: ${right}`);
    if ((left != NaN) && (right != NaN)) {
        elementTabletAreaWidth.value = right - left;
    }
}

function calcAreaHeight() {
    const top = parseInt(elementTabletAreaTop.value);
    const bottom = parseInt(elementTabletAreaBottom.value);
    // console.log(`top: ${top}, bot: ${bottom}`);
    if ((top != NaN) && (bottom != NaN)) {
        elementTabletAreaHeight.value = bottom - top;
    }
}

// 사용 중인 타블렛 좌표 Width, Height 자동 계산
const elementTabletAreaTop = document.getElementById("tablet_area_top");
const elementTabletAreaBottom = document.getElementById("tablet_area_bottom");
const elementTabletAreaLeft = document.getElementById("tablet_area_left");
const elementTabletAreaRight = document.getElementById("tablet_area_right");
const elementTabletAreaWidth = document.getElementById("tablet_area_width");
const elementTabletAreaHeight = document.getElementById("tablet_area_height");

// 가로
elementTabletAreaLeft.addEventListener("input", calcAreaWidth);
elementTabletAreaRight.addEventListener("input", calcAreaWidth);
// 세로
elementTabletAreaTop.addEventListener("input", calcAreaHeight);
elementTabletAreaBottom.addEventListener("input", calcAreaHeight);
