function cinemaTickets(input) {
    let index = 0;
    let movie = input[index++];
    let totalSeats = 0;
    let student = 0;
    let standard = 0;
    let kid = 0;
    while (movie !== 'Finish') {
        let freeSeats = Number(input[index++]);
        let seats = 0;
        let kindOfticket = input[index++];
        while (kindOfticket !== 'End') {
            seats++;
            totalSeats++;
            switch (kindOfticket) {
                case 'student':
                    student++;
                    break;
                case 'standard':
                    standard++;
                    break;
                case 'kid':
                    kid++;
                    break;
            }
            if (seats === freeSeats) {
                break;
            }
            kindOfticket = input[index++];
        }
        console.log(`${movie} - ${(seats / freeSeats * 100).toFixed(2)}% full.`);
        movie = input[index++];

    }
    console.log(`Total tickets: ${totalSeats}`);
    console.log(`${(student / totalSeats * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standard / totalSeats * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalSeats * 100).toFixed(2)}% kids tickets.`);
}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"
])