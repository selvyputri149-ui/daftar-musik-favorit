// Data musik favorit Inggris
const songs = [
    { title: "Bohemian Rhapsody", artist: "Queen", year: 1975 },
    { title: "Someone Like You", artist: "Adele", year: 2011 },
    { title: "Wonderwall", artist: "Oasis", year: 1995 },
    { title: "Shape of You", artist: "Ed Sheeran", year: 2017 },
    { title: "Fix You", artist: "Coldplay", year: 2005 },
    { title: "Space Oddity", artist: "David Bowie", year: 1969 },
    { title: "Back to Black", artist: "Amy Winehouse", year: 2006 },
    { title: "Don't Look Back in Anger", artist: "Oasis", year: 1996 },
    { title: "Rolling in the Deep", artist: "Adele", year: 2010 },
    { title: "Yellow", artist: "Coldplay", year: 2000 }
];

// Ambil elemen tabel
const tableBody = document.getElementById("song-table");

// Mengisi tabel menggunakan JavaScript
songs.forEach((song, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td>${song.year}</td>
    `;

    tableBody.appendChild(row);
});
