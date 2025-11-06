// let running
while () {
    const choice = prompt(`
        Book Tracker
        1. Add Books
        2. List Books
        3. Mark Book as Read
        4. Exit
        Enter your choice:`);
}

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
        running = false;
        alert(`Goodbye!`);
        break;
    default:
        alert(`Invalid choice.`);
}