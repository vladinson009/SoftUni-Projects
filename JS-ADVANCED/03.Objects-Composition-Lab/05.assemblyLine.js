function createAssemblyLine() {
    let myObj = {
        hasClima,
        hasAudio,
        hasParktronic
    }

    function hasClima(obj) {
        obj.temp = 21;
        obj.tempSettings = 21;
        obj.adjustTemp = () => {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else {
                obj.temp--;
            }
            return obj.temp;
        };
    };

    function hasAudio(obj) {
        obj.currentTrack = {
            name: null,
            artist: null
        }
        obj.nowPlaying = () => {
            if (obj.currentTrack != null) {
                console.log(`Now playing '${obj.currentTrack.name}' by ${obj.artist}`);
            }
        }
    }

    function hasParktronic(obj) {
        obj.checkDistance = (distance) => {
            if (distance < 0.1) {
                console.log('Beep! Beep! Beep!');
            } else if (0.1 <= distance && distance < 0.25) {
                console.log('Beep! Beep!');
            } else if (0.25 <= distance && distance < 0.5) {
                console.log('Beep!');
            }

        }
    }
    return myObj;
}
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();