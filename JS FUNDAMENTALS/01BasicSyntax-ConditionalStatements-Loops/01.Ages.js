function ageOf(age) {
    if (age <= 2 && age >= 0) {
        console.log('baby');
    } else if (age <= 13 && age >= 3) {
        console.log('child');
    } else if (age <= 19 && age >= 14) {
        console.log('teenager');
    } else if (age <= 65 && age >= 20) {
        console.log('adult');
    } else if (age >= 66) {
        console.log('elder');
    } else {
        console.log('out of bounds');
    }
}
ageOf(-2)

// 0-2 – baby; 
// 3-13 – child; 
// 14-19 – teenager;
// 20-65 – adult;∫
// <=66 – elder; 