export function fakultet(tall) {
    if (tall <= 0 ) {
        return 1
    }
    else if (tall <= 2 ) {
        return tall
    }
    return tall * fakultet(tall - 1);

}