function calculateSalary(input) {
    if (input >= 1000) {
        return input * 3;
    } else if (input > 500) {
        return input * 2;
    } else {
        return input
    }
}

module.exports = {
    calculateSalary
}