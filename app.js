const categories = {
    history: "History",
    fiction: "Fiction",
    manga: "Fantasy"
}

const catalog = [
    {title: "It ends with us", ISBN: "1501110365", year: 2016, pages: 385, category: categories.fiction},
    {title: "Fullmetal Alchemist", ISBN: "1591169208", year: 2005, pages: 192, category: categories.manga},
    {title: "Alchemist", ISBN: "9785415023622", year: 2020, pages: 168, category: categories.fiction},
    {title: "People we meet on vacation", ISBN: "1984806750", year: 2021, pages: 384, category: categories.fiction},
    {title: "Salt", ISBN: "0142001619", year: 1668, pages: 496, category: categories.history},
    {title: "Histories", ISBN: "9781853264665", year: 1908, pages: 768, category: categories.history},
    {title: "Edens Zero", ISBN: "1632367564", year: 2018, pages: 192, category: categories.manga},
    {title: "The Silk Roads: A New History of the World", ISBN: "9781408839997", year: 2016, pages: 656, category: categories.history},
    {title: "The Wish", ISBN: "1538728621", year: 2021, pages: 387, category: categories.fiction},
    {title: "1776", ISBN: "0743226720", year: 2005, pages: 386, category: categories.history},
    {title: "The midnight library", ISBN: "1786892715", year: 2020, pages: 304, category: categories.fiction},
    {title: "Martial Peak", ISBN: "9798560416126", year: 2021, pages: 96, category: categories.manga},
];

const outputCategory = (name) => {
    const books = catalog.filter(book => book.category === name);

    console.log(`${name} (${books.length} Books)`);
    books.forEach(book => {
        const isNew = book.year === 2021;
        let newBook = "";
        if (isNew) {
            newBook = "(New Book)"
        }
        console.log(`
    ISBN: ${book.ISBN}
    Year: ${book.year} ${newBook}
    Title:${book.title}
    Pages:${book.pages}
    `)
    })
}

outputCategory(categories.history);
outputCategory(categories.fiction);
outputCategory(categories.manga);

