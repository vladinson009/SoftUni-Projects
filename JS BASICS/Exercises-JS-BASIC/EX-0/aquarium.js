function aquarium(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentAmount = Number(input[3]);
    let aquariumVolume = length * width * height;
    let totalLiter = aquariumVolume * 0.001;
    let percent = percentAmount * 0.01;
    let result = totalLiter * (1 - percent);

    console.log(result);

}
aquarium(['85', '75', '47', '17']) // length / width / height / percentAmount