var nums = []
for (let index = 0; index < 10; index++) {
    nums[index] = Math.floor(Math.random() * (20 - 0 + 1)) + 0
}

let quadrados = nums.map(
    num => num ** 2
)

console.log(nums)
console.log(quadrados)
