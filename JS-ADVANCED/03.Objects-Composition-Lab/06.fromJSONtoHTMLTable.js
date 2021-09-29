function fromJson(input) {
    let json = JSON.parse(input);
    console.log(json);

}
fromJson(`[{"Name":"Stamat",
    "Score":5.5},
   {"Name":"Rumen",
    "Score":6}]`)