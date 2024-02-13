var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};

document.getElementById("calculateButton").addEventListener("click", function() {
    const inputArray = document.getElementById("inputArray").value.trim();
    const nums = inputArray.split(",").map(num => parseInt(num.trim()));
    const result = longestConsecutive(nums);
    document.getElementById("result").innerText = "Longest Consecutive Sequence: " + result;
    console.log("Longest Consecutive Sequence:", result);

});