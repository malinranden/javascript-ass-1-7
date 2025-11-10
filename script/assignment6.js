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



//////////////////////
/// Michelles code ///
//////////////////////

let library = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        isRead: true
    },
    {
        title: "Harry Potter 2",
        author: "J.K. Rowling",
        isRead: false
    }
];

function addBook() {
    let newBook = {};
    newBook.title = prompt("What is the name of the book?");
    newBook.author = prompt("Who wrote the book?");
    let read = prompt("Have you read this book yet? Yes or No.");
    //converts the promt to a boolean that accepts both lower and upper case answers
    newBook.isRead = read.toLowerCase() === "yes";
    library.push(newBook);

}//end of adding new book function 

function listBooks() {
    //check if there are any books in the library array. If no books, alert there are no books
    if (library.length === 0) {
        alert("No books in the library. Please add a book.");
        return;
    }
    //create a variable that will display the book list 
    let bookList = "Books in the library:\n";
    //look through the books, index them, and add the books to the bookList variable in sentence format
    library.forEach((book, index) => {
        bookList += `${index + 1}. ${book.title} by ${book.author} - ${book.isRead ? "Read" : "Not Read"}\n`;
    });
    //display the book list as an alert. It will create an aleart for each book, so you'll need to click 
    //ok for each book to get back to the menu 
    alert(bookList);
};

function markAsRead() {
    let titles = [];
    //list all unread books
    let unRead = library.filter((library) => {
        return library.isRead == false;
    });
    //put the titles into an array that can be displayed 
    unRead.forEach((unRead) => {
        titles.push(unRead.title);
    });
    //check if there are any unread books 
    if (titles.length > 0) {
        //promt the user to choose what book and show a list of the unread books
        const title = prompt(`Enter the title of the book you want to mark as read. The following are unread titles: ${titles}`);
        library.forEach((library) => {
            //marks the book indicated by the promt as read
            if (library.title == title) {
                alert(`${title} has been marked as read.`);
                return library.isRead = true;
            } else {
                return;
            }
        });
        //if there are no unread books, alert the user of this 
    } else {
        alert("You have read all the books in the list. Well done!");
        return;
    };
}; //end of the mark as read function 

let running = true;

function libraryApp() {
    while (running) {
        const choice = prompt(`
            Book tracker 
            1. Add Book 
            2. List Books 
            3. Mark Book as Read
            4. Exit
            Enter your choice`);

        switch (choice) {
            case "1":
                addBook();
                break;
            case "2":
                library.forEach(listBooks);
                break;
            case "3":
                markAsRead();
                break;
            case "4":
                running = false;
                alert("Goodbye!");
                break;
            default:
                alert("Invalid Chocie");
        }
    }
}; //end library app function 

//run the library app function 
libraryApp();
