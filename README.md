# Notes App

A simple full-stack Notes application built using Next.js and MongoDB.  
The application allows users to create, view, edit, delete, and search notes through a clean interface.

## Features
- Create a new note
- View all notes
- Edit existing notes
- Delete notes
- Search notes by title

## Tech Stack
- Next.js (App Router)
- React
- MongoDB
- JavaScript
- Git & GitHub

## Getting Started

1. Clone the repository
   git clone https://github.com/Shreyasaini2004/notes_app.git
   cd notes_app

2. Install dependencies
   npm install

3. Create a .env.local file in the root directory
   MONGODB_URI=mongodb://127.0.0.1:27017/notesDB

4. Run the development server
   npm run dev

5. Open the app in your browser
   http://localhost:3000

## API Endpoints
- GET /api/notes        → Fetch all notes
- POST /api/notes       → Create a note
- PUT /api/notes/:id    → Update a note
- DELETE /api/notes/:id → Delete a note

## Author
Shreya Saini  
GitHub: https://github.com/Shreyasaini2004
