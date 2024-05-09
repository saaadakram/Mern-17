const evenOdd = new Promise((res, rej) => {
    const a = 2;
    a % 2 == 0 ? res("a is even") : rej("a is odd");
})
evenOdd
.then((res) =>{
console.log(res);
}
)
.catch((rej) => {
    console.log(rej)
})