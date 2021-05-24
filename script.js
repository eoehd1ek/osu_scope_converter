function calc() {
    // 타블렛 정보
    let full_tablet_width = parseFloat(document.getElementById("tablet_right").value);
    let full_tablet_height = parseFloat(document.getElementById("tablet_bot").value);

    // 직접입력을 사용한 정보
    let old_width = parseFloat(document.getElementById("old_width").value);
    let old_height = parseFloat(document.getElementById("old_height").value);
    let sensitivity = parseFloat(document.getElementById("sensitivity").value);
    let old_ratio = old_width / old_height;
    
    // 변경할 해상도
    let new_width = parseFloat(document.getElementById("new_width").value);
    let new_height = parseFloat(document.getElementById("new_height").value);
    let new_ratio = new_width / new_height;


    // 타블렛 정보에 감도값 적용
    let tablet_width = full_tablet_width / sensitivity;
    let tablet_height = full_tablet_height / sensitivity;


    // 해상도 차이 적용
    let outside = old_width * new_height;
    let inside = old_height * new_width;

    let minimal = outside;
    let maximal = inside;
    if(minimal > maximal) {
        let tmp = minimal;
        minimal = maximal;
        maximal = tmp;
    }

    let bias = maximal / minimal;
    console.log(bias);
    // result에 총 가로, 세로 길이 정보 저장
    let result_width = 0;
    let result_height = tablet_height;
    // 예전이 큰 비율, 현재가 작은 비율     (ex 16:9 -> 5:4)
    if (old_ratio > new_ratio) {
        result_width = tablet_width / bias;
    } // 예전이 작은 비율, 현재가 큰 비율   (ex 5:4 -> 16:9)
    else {
        result_width = tablet_width * bias;
    }
    
    console.log(result_width);
    console.log(result_height);

    let ans_top = (full_tablet_height - result_height) / 2;
    let ans_bot = full_tablet_height - ans_top;
    let ans_left = (full_tablet_width - result_width) / 2;
    let ans_right = full_tablet_width - ans_left;

    // 결과 적용
    document.getElementById("ans_top").value = ans_top;
    document.getElementById("ans_bot").value = ans_bot;
    document.getElementById("ans_left").value = ans_left;
    document.getElementById("ans_right").value = ans_right;
}