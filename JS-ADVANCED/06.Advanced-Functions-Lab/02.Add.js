function solution(first) {
    let result = first;

    function solve(second) {
        return result = first + second;
    }
    return solve
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));