// APP THAT TRACKS BOOKS //

// Create a small app to track books you’ve read or want to read 
// (If you are not into books, feel free to change it to movies, etc). 
// Use prompt and alert to simulate the menu.  

// You will:  
//     - Use objects to represent books  
//     - Store multiple books in an array  
//     - Write functions to add, list and update books  

// Requirements:  
//     - A library array to store all book objects  
//     - Each book should have:  
//         Title  
//         Author  
//         isRead  
//     - Implement these functions:  
//         addBook() – asks for details and adds a new book object to the library  
//         listBooks() – display a list of all books (console.log works fine here)  
//         markAsRead(title) – finds a book by title and sets isRead to true  


let library = [ // this is an array of objects (each book is one object)
    {
        title: "The long way", 
        author: "Bernard Moitessier", 
        /*isRead: true*/
    },
    {title: "En lycklig man", author: "Arto Paasilinna"/*, isRead: false*/},
    {title: "Tarot", author: "Kim Arnold"/*, isRead: false*/},
];

function addBook() {
    let title = prompt(`Add the book title:`);
    let author = prompt(`Add the author:`);
    // let isRead = prompt(`Have you read this book? yes/no`); // ternary
    let book = {
        title, author
    }
    book.isRead = false;
    library.push(book);
}


function listBooks() { 
    for (let i = 0; i < library.length; i++) {
        console.log(library[i].title);
    }
}
// i could do forEach here instead
// library.forEach((book) => {console.log(`${book.title}`)}); 
// - an other way of writing the first line in this function

function markAsRead(title) {
    const bookTitle = library.find(book => book.title.toLowerCase() === title.toLowerCase());
    bookTitle.isRead = true;
    console.table(library);
}


function removeBook() {
    let bookToRemove = prompt(`Write the title of the book you want to remove:`).toLowerCase();
    library = library.filter(book => book.title.toLowerCase() !== bookToRemove);
}


let running = true;
while (running) {
    const choice = prompt(`
        Book Tracker
        1. Add Books
        2. List Books
        3. Mark Book as Read
        4. Remove book
        5. Exit
        Enter your choice:`);

    switch (choice) {
        case "1":
            addBook();
            break;
        case "2":
            listBooks();
            break;
        case "3":
            const title = prompt(`Enter the title of the book to mark as read:`);
            markAsRead(title);
            break;
        case "4":
            removeBook();
            break;
        case "5":
            running = false;
            alert(`Goodbye!`);
            break;
        default:
            alert(`Invalid choice.`);
    }
};
