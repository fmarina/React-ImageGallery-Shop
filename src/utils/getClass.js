export const getClass = (i) => {
    return (i % 5 === 0) ? "big" : (i % 6 === 0) && "wide";
}