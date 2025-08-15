# 🏋️‍♂️ GYM Exercise App

A modern, responsive React application that helps users discover and learn about various gym exercises. Built with Material-UI and integrated with RapidAPI for comprehensive exercise data and YouTube videos.

## ✨ Features

- **Exercise Database**: Browse through thousands of exercises with detailed information
- **Body Part Filtering**: Filter exercises by specific body parts (arms, legs, chest, etc.)
- **Exercise Details**: View detailed information including target muscles, equipment needed, and instructions
- **YouTube Integration**: Watch exercise demonstration videos
- **Similar Exercises**: Discover related exercises based on target muscles and equipment
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful Material-UI components with smooth animations
- **Search Functionality**: Find specific exercises quickly
- **Pagination**: Easy navigation through exercise lists

## 🚀 Live Demo

**Vercel Deployment:** [Your App URL Here]
**GitHub Repository:** [demo](https://gym-exercise-alpha.vercel.app/)

## 🛠️ Technologies Used

- **Frontend Framework:** React 18
- **UI Library:** Material-UI (MUI) v5
- **Styling:** CSS3 with MUI theme system
- **State Management:** React Hooks (useState, useEffect)
- **Routing:** React Router DOM
- **API Integration:** RapidAPI
  - ExerciseDB API for exercise data
  - YouTube Search API for exercise videos
- **Build Tool:** Create React App
- **Package Manager:** npm

## 📱 Screenshots

*[Add screenshots of your app here]*

## 🏗️ Project Structure

```
gym_exercises/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and icons
│   │   ├── icons/         # UI icons
│   │   └── images/        # App images and logos
│   ├── components/        # Reusable UI components
│   │   ├── BodyPart.js    # Body part selection component
│   │   ├── ExerciseCard.js # Individual exercise display
│   │   ├── Exercises.js   # Exercise list with pagination
│   │   ├── ExerciseVideos.js # YouTube video integration
│   │   ├── HeroBanner.js  # Main banner component
│   │   ├── Navbar.js      # Navigation component
│   │   ├── SearchExercises.js # Search functionality
│   │   └── SimilarExercises.js # Related exercises
│   ├── pages/             # Main application pages
│   │   ├── Home.js        # Landing page
│   │   └── ExerciseDetail.js # Exercise detail view
│   ├── utils/             # Utility functions
│   │   └── fetchData.js   # API configuration and fetch functions
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)
- RapidAPI account and API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhruvpahujaaa/GYM_Exercise.git
   cd GYM_Exercise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_RAPID_API_KEY=your_rapidapi_key_here
   ```

4. **Get your RapidAPI key**
   - Sign up at [RapidAPI](https://rapidapi.com/)
   - Subscribe to [ExerciseDB API](https://rapidapi.com/justinwmFmG/api/exercisedb/)
   - Subscribe to [YouTube Search API](https://rapidapi.com/ytdlfree/api/youtube-search-and-download/)
   - Copy your API key and paste it in the `.env` file

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Set environment variables in Vercel**
   - Go to your Vercel dashboard
   - Select your project
   - Go to Settings → Environment Variables
   - Add `REACT_APP_RAPID_API_KEY` with your API key value

### Deploy to GitHub Pages

1. **Add homepage to package.json**
   ```json
   "homepage": "https://yourusername.github.io/GYM_Exercise"
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add deploy scripts to package.json**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 API Endpoints

The app integrates with two main APIs:

### ExerciseDB API
- **Base URL:** `https://exercisedb.p.rapidapi.com`
- **Endpoints:**
  - `/exercises` - Get all exercises
  - `/exercises/bodyPart/{bodyPart}` - Get exercises by body part
  - `/exercises/exercise/{id}` - Get exercise details
  - `/exercises/target/{target}` - Get exercises by target muscle
  - `/exercises/equipment/{equipment}` - Get exercises by equipment
  - `/exercises/bodyPartList` - Get list of body parts

### YouTube Search API
- **Base URL:** `https://youtube-search-and-download.p.rapidapi.com`
- **Purpose:** Search for exercise demonstration videos

## 🎨 Customization

### Theme Configuration
The app uses Material-UI theming. You can customize colors, typography, and other design elements in the theme configuration.

### Adding New Features
- **New Exercise Categories:** Extend the body part filtering
- **Additional Exercise Data:** Modify the exercise card components
- **New API Integrations:** Add more fitness-related APIs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **RapidAPI** for providing the exercise database and YouTube search APIs
- **Material-UI** for the beautiful component library
- **Create React App** for the project scaffolding
- **React community** for the excellent documentation and support

## 📞 Support

If you have any questions or need help with the project:

- **Create an issue** on GitHub
- **Contact:** [Your Contact Information]
- **Documentation:** [Link to additional docs if available]

---

**Made with ❤️ by [Your Name]**

*Happy exercising! 💪*
