function oscarsCeremony(input) {
    let rent = Number(input[0]);
    let statue = rent * 0.7;
    let cathering = statue * 0.85;
    let music = cathering / 2;

    let result = rent + statue + cathering + music
    console.log(result.toFixed(2));
}
oscarsCeremony(['3500'])