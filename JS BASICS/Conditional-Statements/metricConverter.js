function metricConverter(input) {

    let formatNumber = Number(input[0]);
    let inputMeasure = input[1];
    let outputMeasure = input[2];
    let result = Number('')
    switch (inputMeasure) {
        case 'mm': // 1 000
            if (outputMeasure === 'm') { // 1
                result = formatNumber / 1000;
                break;
            } else if (outputMeasure === 'cm') { // 100
                result = formatNumber / 10;
                break;
            }
            case 'cm': // 100 
                if (outputMeasure === 'm') { // 1
                    result = formatNumber / 100;
                    break
                } else if (outputMeasure === 'mm') { //1 000
                    result = formatNumber * 10;
                    break;
                }

                case 'm': // 1
                    if (outputMeasure === 'mm') { // 1000
                        result = formatNumber * 1000;
                        break
                    } else if (outputMeasure === 'cm') { // 100
                        result = formatNumber * 100;
                        break;
                    }
    }
    console.log(result.toFixed(3));
}
metricConverter(["12", "mm", "m"]);
metricConverter(["150", "m", "cm"]);
metricConverter(["45", "cm", "mm"])