class Book {
    public title: string;
    public isRead: boolean;
}

class BookChecker {
    public static isBookRead(books: Book[], titleToSearch: string) : boolean {
        return books.some(b => b.title === titleToSearch && b.isRead);
    } // Implementation here
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(BookChecker.isBookRead(books, "Devastación")); // true
console.log(BookChecker.isBookRead(books, "Canción de hielo y fuego")); // false
console.log(BookChecker.isBookRead(books, "Los Pilares de la Tierra")); // false
