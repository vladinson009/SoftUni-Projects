function gramophone(band, album, song) {
    let duration = band.length * album.length * song.length / 2;
    let rotations = 0;
    while (duration > 0) {
        rotations++;
        duration -= 2.5
    }
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')