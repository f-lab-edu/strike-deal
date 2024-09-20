export const getBeautifiedNum = (val: number): string => {
    const str = val.toString().split('').reverse(); // 뒤짚어서 3자리 단위로 콤마 찍기

    let formatted = '';

    str.forEach((v, i) => {
        if (i % 3 === 0 && i !== 0) {
            formatted = ',' + formatted;
        }
        formatted = v + formatted;
    });

    return formatted;
};
