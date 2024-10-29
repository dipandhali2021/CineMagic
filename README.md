# CineMagic

CineMagic is a web application that allows users to discover movies and TV shows. It utilizes React, Redux, and the TMDB API to provide an engaging experience for movie enthusiasts. Users can explore various genres, search for specific titles, and watch trailers.

## Features

- Browse movies and TV shows by categories.
- Search functionality for specific titles.
- Detailed views of movies and TV shows, including descriptions, ratings, and genres.
- User authentication using Firebase.
- Responsive design for optimal viewing on all devices.

## Tech Stack

- **Frontend**: React, Redux, React Router
- **Styling**: SCSS, Bootstrap
- **API**: TMDB API
- **Authentication**: Firebase
- **State Management**: Redux Toolkit

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/dipandhali2021/CineMagic.git
   ```

2. Navigate into the project directory:
   ```bash
   cd CineMagic
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Running the Application

To run the development server, use the following command:
```bash
npm run dev
```

## API Configuration

- The application uses the TMDB API for fetching movie and TV show data. You may need to create a `.env` file in the root of your project to store your TMDB API key:
  ```plaintext
  REACT_APP_TMDB_API_KEY=your_api_key_here
  ```

- Replace `your_api_key_here` with your actual TMDB API key.

## Firebase Configuration

To set up Firebase authentication, add the following environment variables in your `.env` file:

```plaintext
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
```

- Replace the placeholders with the actual values from your Firebase project settings.

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

- Fork the repository
- Create your feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/) file for details.

## Acknowledgments

- [TMDB-API](https://developer.themoviedb.org/reference/intro/getting-started) for providing movie data.
- [Firebase](https://firebase.google.com/) for user authentication.
- [React](https://react.dev/) for building the user interface.
