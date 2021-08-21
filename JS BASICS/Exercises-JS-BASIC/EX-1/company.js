function company(input) {
    let neededHours = Number(input[0]); //необходимите часовете
    let days = Number(input[1]); //дните, с които фирмата разполага
    let overtimeEmployees = Number(input[2]); //броят на служителите, работещи извънредно

    let workingHours = days * 0.9 * 8;
    let overtime = overtimeEmployees * (2 * days);
    let totalHours = Math.floor(workingHours + overtime);

    if (totalHours >= neededHours) {
        console.log(`Yes!${totalHours - neededHours} hours left.`);
    } else {
        console.log(`Not enough time!${neededHours - totalHours} hours needed.`);
    }


}
company(['99', '3', '1'])