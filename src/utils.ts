export const getBeautifiedNum = (val: number): string => {
    const str = val.toString().split('').reverse();

    // reduce를 사용하여 3자리마다 쉼표를 추가
    const formatted = str.reduce((acc, digit, index) => {
        // 인덱스가 3의 배수일 때마다(첫 번째 자리 제외) 쉼표를 추가
        if (index % 3 === 0 && index !== 0) {
            return digit + ',' + acc;
        }
        return digit + acc;
    }, '');

    return formatted;
};
