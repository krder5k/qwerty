var aliceTumbling = [
    { transform: 'rotate(0) translate3D(-50%, -50%, 0)' },
    {  offset: 0.3},
    { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)' }
];
var aliceTiming = {
    duration: 3000,
    iterations: Infinity
}
document.getElementById("basketball").animate(
    aliceTumbling,
    aliceTiming
)
document.getElementById("basketball").animate(
    [
        { transform: 'rotate(0) translate3D(-50%, -50%, 0)' },
        {  offset: 0.3},
        { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)' }
    ], {
        duration: 3000,
        iterations: Infinity
    }
);
document.getElementById("basketball").animate(
    [
        { transform: 'rotate(0) translate3D(-50%, -50%, 0)' },
        {  offset: 0.3},
        { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)'}
    ], 3000);

