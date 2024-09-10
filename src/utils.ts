export const getBeautifiedNum = (val: number) =>
    val < 1000 ? val : val.toString().replace(/\d(?=(\d{3})+$)/g, '$&,');
