const booksByCategory = [
    {
    category: "Riqueza",
    books: [
        {
            title: "Os segredos da mente milionária",
            author: "T. Marv Eker"
        },
        {
            title: "O homem mais rico da Babilônia",
            author: "George S. Clason"
        },
        {
            title: "Pai rico, pai pobre",
            author: "Robert T. Kiyosaki e Sharon L. Lechter"
        }
    ],
    },
    {
    category: "Inteligencia emocional",
    books: [
        {
            title:"Você é Insubstituível",
            author: "Augusto Cury",
        },
        {
            title: "Ansiedade - Como enfrentar o mal do século",
            author: "Augusto Cury",
        },
        {
            title: "Os 7 hábitos das pessoas altamente eficazes",
            author: "Stephen R. Covey",
        }
    ],
    }
]
categories = booksByCategory.length

console.log(`A quantidade de categorias é ${categories}`);

for ( let i = 0; i < categories; i++) {
    
    let currentCategory = (booksByCategory[i].category)
    let currentBooks = ((booksByCategory[i].books).length)
    console.log(`Na categoria ${currentCategory}, há ${currentBooks} livros`);
}

let authors = []

for (let l = 0; l < categories; l++) {

    var totalAuthors = 0
    let currentBooks = ((booksByCategory[l].books).length)
    totalAuthors += currentBooks

    for (let j = 0; j < totalAuthors; j++) {

        let authorIn = authors.includes((booksByCategory[l].books[j]).author)
        if (authorIn == false) {
            authors.push((booksByCategory[l].books[j]).author)
        }   
    }
}

console.log(`São ${authors.length} autores no total`);

function booksOf(author) {

    let authorBooks = []
    for (let k = 0; k <categories; k++) {
         
        for (let m = 0; m < totalAuthors; m++) {
    
            if (booksByCategory[k].books[m].author == author) {
                authorBooks.push(((booksByCategory[k]).books[m]).title)
            }
        }
    }
    return(`Deste autor há ${authorBooks.length} livros, que são os seguintes: ${authorBooks}`);
}





