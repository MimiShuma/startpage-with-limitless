function saveNote() {
    // Get the input value
    var note = document.getElementById('noteInput').value;

    // Create a new list item
    var listItem = document.createElement('li');
    listItem.textContent = note;

    // Append the list item to the notes list
    document.getElementById('notesList').appendChild(listItem);

    // Clear the input field after saving
    document.getElementById('noteInput').value = '';
}