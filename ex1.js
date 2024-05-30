var nums = []
for (let index = 0; index < 10; index++) {
    nums[index] = Math.floor(Math.random() * (20 - 0 + 1)) + 0
}

let sum = nums.reduce(
    (numP, numC) => numP + numC
)

console.log(nums)
console.log(`Soma dos valores: ${sum}`)

