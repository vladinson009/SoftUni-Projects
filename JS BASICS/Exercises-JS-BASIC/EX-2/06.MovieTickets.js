function movieTickets(input) {
    a1 = Number(input[0]);
    a2 = Number(input[1]);
    n = Number(input[2]);
    
    for (let s1 = a1; s1 <= a2 - 1; s1++) {
        for (let s2 = 1; s2 <= n - 1; s2++) {
            for (let s3 = 1; s3 <= n / 2 - 1; s3++) {
                if (s1 % 2 !== 0 && (s2 + s3 + s1) % 2 !== 0) {
                    console.log(`${String.fromCharCode(s1)}-${s2}${s3}${s1}`);
                }
            }
        }
    }
}
movieTickets(["69", "72", "4 "])