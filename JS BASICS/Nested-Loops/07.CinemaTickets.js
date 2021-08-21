function cinemaTickets(input) {
    let index = 0;
    let movieName = input[index++];
    let freeSeats = Number(input[index++]);
    let kindOfTicket = input[index++];

    let student = 0;
    let standart = 0;
    let kid = 0;
    let totalTickets = 0;
    while (movieName !== 'Finish') {
        let seats = 0
        while (kindOfTicket !== 'End') {
            seats++
            switch (kindOfTicket) {
                case 'student':
                    student++;
                    break;
                case 'standard':
                    standart++;
                    break;
                case 'kid':
                    kid++;
                    break;
            }
            if (seats === freeSeats) {
                break;
            }
            kindOfTicket = input[index++];
        }
        console.log(`${movieName} - ${(seats / freeSeats * 100).toFixed}% full.`);
        totalTickets += seats;

        movieName = input[index++];
        freeSeats = Number(input[index++]);
        kindOfTicket = input[index++];
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(student / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standart / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kid / totalTickets * 100).toFixed(2)}% kids tickets.`);
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