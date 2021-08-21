function trade(input) {
    let city = input[0];
    let sales = Number(input[1]);
    let commissions = 0
    switch (city) {

        case 'Sofia':
            if (0 <= sales && sales <= 500) {
                commissions = sales * 0.05;
            } else if (500 < sales && sales <= 1000) {
                commissions = sales * 0.07;
            } else if (1000 < sales && sales <= 10000) {
                commissions = sales * 0.08;
            } else if (sales > 10000) {
                commissions = sales * 0.12;
            };
            break;
        case 'Varna':
            if (0 <= sales && sales <= 500) {
                commissions = sales * 0.045;
            } else if (500 < sales && sales <= 1000) {
                commissions = sales * 0.075;
            } else if (1000 < sales && sales <= 10000) {
                commissions = sales * 0.1;
            } else if (sales > 10000) {
                commissions = sales * 0.13;
            };
            break;
        case 'Plovdiv':
            if (0 <= sales && sales <= 500) {
                commissions = sales * 0.055;
            } else if (500 < sales && sales <= 1000) {
                commissions = sales * 0.08;
            } else if (1000 < sales && sales <= 10000) {
                commissions = sales * 0.12;
            } else if (sales > 10000) {
                commissions = sales * 0.145;
            };
            break;
    }
    if (commissions !== 0) {
        console.log(commissions.toFixed(2));
    } else {
        console.log('error')
    }
}
trade(["Sofia", "1500"])