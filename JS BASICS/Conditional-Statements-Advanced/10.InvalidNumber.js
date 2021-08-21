function invalid(input){

    let invalid = Number(input[0]);

    if (!(invalid >= 100 && invalid <= 200 || invalid === 0))  {
        console.log('invalid')
    }
}
invalid(["75"])