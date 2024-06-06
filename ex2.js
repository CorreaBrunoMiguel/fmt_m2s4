var nums = []
for (let index = 0; index < 10; index++) {
    nums[index] = Math.floor(Math.random() * (20 - 0 + 1)) + 0
}

let pares = nums.filter(
    num => num % 2 == 0
)

console.log(nums)
console.log(pares)
