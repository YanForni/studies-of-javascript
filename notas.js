
function getScore(score) {
    
    let scoreA = (score>= 90 && score <= 100)
    let scoreB = (score>= 80 && score <90)
    let scoreC = (score>= 70 && score <80)
    let scoreD = (score>= 60 && score <70)
    let scoreF = (score < 60 && score > 0)
    if (scoreA) {
        scoreFinal = 'A';
    } else if (scoreB) {
        scoreFinal = 'B';
    } else if (scoreC) {
        scoreFinal = 'C';
    } else if (scoreD) {
        scoreFinal = 'D';
    } else if (scoreF) {
        scoreFinal = 'F';
    } else {
        scoreFinal = 'Nota inválida';
    }

    return scoreFinal
}

