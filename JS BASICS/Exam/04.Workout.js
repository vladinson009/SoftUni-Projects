function workout(input) {
    let index = 0;
    let nDays = Number(input[index++]);
    let mKM = Number(input[index++]);
    let totalKM = 0;
    for(let days = 0; days <= nDays; days++){
        let increasePercent = Number(input[index++]);
        totalKM += mKM;
        mKM = mKM + (mKM * (increasePercent / 100));
    }
    if(totalKM >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(totalKM - 1000)} more kilometers!`);
    }else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(1000 - totalKM)} more kilometers`);
    }
}
workout(["4",
"100",
"30",
"50",
"60",
"80"])