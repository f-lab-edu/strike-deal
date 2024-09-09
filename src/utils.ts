export const getBeautifiedNum = (val) =>
    val < 1000 ? val : val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
