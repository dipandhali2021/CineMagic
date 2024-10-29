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
4. Configure the project with necessary API and configuration keys   


## API and Config keys Configuration

Follow these steps: 
### Step 1: Get the TMDb API Key

1. Visit [The Movie Database (TMDb) Developer Page](https://developer.themoviedb.org/reference/intro/getting-started).
2. Create a TMDb account if you don’t have one.
3. After logging in, go to the 'API' section in your account settings.
4. Copy the **API Read Access Token** from the available tokens.

### Step 2: Get Firebase Config Keys

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Log in and create a new project, or select an existing one.
3. In the project dashboard, go to **Project Settings** (click on the gear icon).
4. Scroll down to the **Your apps** section and click **Add app** > **Web** to register a new web app.
5. After the app is registered, you’ll see a Firebase config object with API keys and other settings. Copy the config values (e.g., `apiKey`, `authDomain`, etc.).

### Step 3: Get the Database URL

1. In the Firebase Console, go to **Realtime Database** in the left sidebar.
2. If you don’t have a database already, create a new one.
3. Copy the **Database URL** from the database settings.
4. It should look something like https://your-project-id.firebaseio.com

### Step 4: Set Up Environment Variables

1. In your project directory, navigate to the `CineMagic` folder:
   ```bash
   cd CineMagic
   
2. Create a `.env` file in the project directory and paste the  keys in it as follows.

        VITE_APP_TMDB_TOKEN=your_tmdb_api_read_access_token
        VITE_FIREBASE_API_KEY=your_firebase_api_key
        VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
        VITE_FIREBASE_DATABASE_URL=your_firebase_database_url
        VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
        VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
        VITE_FIREBASE_MESSAGING_ID=your_firebase_messaging_id
        VITE_FIREBASE_APP_ID=your_firebase_app_id

**Note: Make sure to replace each placeholder with the actual values from TMDb and Firebase.**

3. You can refer to `.env.template` for a sample layout of environment variables.


## Running the Application

To run the development server, use the following command:
```bash
npm run dev
```

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
