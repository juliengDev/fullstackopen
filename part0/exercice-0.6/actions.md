sequenceDiagram
participant browser
participant server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
activate server
server-->>browser: HTML document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
activate server
server-->>browser: CSS document
deactivate server

browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
activate server
server-->>browser: JAVASCRIPT document
deactivate server

Note over browser: browser start executing script and retrieve<br>data from /exampleapp/data.json
browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
activate server
server-->>browser: JSON document
deactivate server
Note over browser: browser execute the event handler<br>that renders note to diplay


Note over browser: When the form is submitted, the JavaScript code retrieves the value of the text input field into an object : <br>var note = {content: e.target.elements[0].value,date: new Date(),}
Note over browser : The event handler creates a new note, adds it to the list of notes<br> using the `notes.push(note)` command, refreshes the list of notes on the page, and sends the new note to the server.

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa 
activate server
server-->>browser: status 201 - Response : {"message":"note created"}
deactivate server