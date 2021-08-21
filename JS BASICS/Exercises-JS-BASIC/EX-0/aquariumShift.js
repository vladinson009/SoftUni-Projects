function aquarium(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percentAmount = Number(input.shift());
    let aquariumVolume = length * width * height;
    let totalLiter = aquariumVolume * 0.001;
    let percent = percentAmount * 0.01;
    let result = totalLiter * (1 - percent);

    console.log(result.toFixed(2));

}
aquarium(['85', '75', '47', '17']) // length / width / height / percentAmount