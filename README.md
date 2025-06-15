# GitHub Activity Timeline Visualizer

An interactive web application for visualizing GitHub commit activities with temporal patterns and statistics.

![GitHub Activity Timeline Visualizer](https://img.shields.io/badge/GitHub-Activity%20Timeline-ff6b7a?style=for-the-badge&logo=github)

## 🌟 Features

### 📊 Activity Statistics
- **Total Commits** - All commits from the past year
- **Most Active Month** - Month with the highest commit count
- **Longest Streak** - Longest streak of consecutive days with commits
- **Average Commits/Day** - Calculated average activity

### 📈 Interactive Visualizations
- **Timeline Chart** - Commit activity across different time periods (Year/Month/Week)
- **Heatmap** - GitHub-style commit heatmap for the entire year
- **Repository Overview** - Most active repositories with statistics

### 🌍 Multi-language Support
- **English** 🇬🇧
- **German** 🇩🇪
- **Chinese** 🇨🇳
- **Russian** 🇷🇺
- **Estonian** 🇪🇪
- **Japanese** 🇯🇵
- **Arabic** 🇸🇦 (with RTL support)

### 📱 Responsive Design
- Fully responsive for all devices
- Touch-optimized for mobile usage
- Same design language as MaxDev's portfolio

## 🚀 Live Demo

Try the app directly: [GitHub Activity Timeline Visualizer](timeline.maxdevelopement.me)

## 🛠️ Technologies

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
- **API**: GitHub REST API v3
- **Design**: Responsive CSS Grid & Flexbox
- **Charts**: Canvas-based chart visualization
- **Internationalization**: Custom i18n system

## 📋 Prerequisites

- Modern web browser with JavaScript support
- Internet connection for GitHub API access

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/maxdevel0pement/github-activity-timeline.git
   cd github-activity-timeline
   ```

2. **Serve the files**
   - For local development: Use Live Server
   - For production: Upload to web server

3. **Optional: Configure GitHub Token**
   ```javascript
   // In assets/js/script.js
   class GitHubAPI {
       constructor() {
           this.token = 'your_github_token_here'; // For higher rate limits
       }
   }
   ```

## 📁 Project Structure

```
github-activity-timeline/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css         # Main styles with RTL support
│   ├── js/
│   │   └── script.js         # Main logic & API integration
│   └── img/
│       └── flags/            # Flag icons for language selection
│           ├── en.svg
│           ├── de.svg
│           ├── zh.svg
│           ├── ru.svg
│           ├── et.svg
│           ├── ja.svg
│           └── ar.svg
├─── LICENSE                   # Project license
├─── README.md                 # Project documentation
├─── logos/
│    └── Logo - MaxDev - White - Cover.png    # MaxDev logo
└── README.md
```

## 🎯 Usage

1. **Enter Username**: Type a GitHub username in the search field
2. **Analyze**: Click "Analyze" or press Enter
3. **Explore Results**: 
   - View statistics in the cards
   - Navigate timeline with different time periods
   - Examine heatmap for detailed daily view
   - Browse repository list for project insights

### 🔍 Example Usernames to Test
- `maxdevel0pement` - Creator of this project
- `octocat` - GitHub's mascot
- `torvalds` - Creator of Linux
- `gaearon` - React developer

## 🌐 API Integration

### GitHub REST API v3
- **User Data**: `/users/{username}`
- **Repositories**: `/users/{username}/repos`
- **Commits**: `/repos/{owner}/{repo}/commits`
- **Events**: `/users/{username}/events/public`

### Rate Limiting
- **Without Token**: 60 requests/hour
- **With Token**: 5000 requests/hour
- Automatic error handling for rate limits

## 🎨 Design Principles

### Color Scheme
```css
--primary-color: #ff6b7a;
--secondary-color: #ff4757;
--background: #2c2c2c;
--text-primary: #ffffff;
--text-secondary: #b8b8b8;
```

### Responsive Breakpoints
- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🔧 Customization

### Adding a New Language

1. **Add translations to LanguageManager:**
```javascript
this.translations = {
    // ... existing languages
    'fr': {
        github_timeline: "GitHub Timeline Visualizer",
        welcome_title: "GitHub Activity Timeline",
        // ... more translations
    }
};
```

2. **Add flag icon:**
```
assets/img/flags/fr.svg
```

3. **Add language option to HTML:**
```html
<div class="language-option" data-lang="fr" role="menuitem" tabindex="0">
    <img src="./assets/img/flags/fr.svg" alt="French" class="flag-icon">
    <span>Français</span>
</div>
```

### Configuring GitHub Token

For higher rate limits, create a Personal Access Token:

1. GitHub → Settings → Developer settings → Personal access tokens
2. Create token with `public_repo` scope
3. Add to `script.js`:
```javascript
this.token = 'ghp_your_token_here';
```

## 🐛 Error Handling

### Common Errors
- **User not found**: Check username spelling
- **Rate limit exceeded**: Wait or use token
- **Network error**: Check internet connection
- **No public activity**: User has no public commits

### Debug Mode
```javascript
// In browser console
console.log('GitHub Analyzer:', window.gitHubAnalyzer);
console.log('Current Data:', window.gitHubAnalyzer.currentData);
```

## 🤝 Contributing

1. **Fork** the repository
2. **Create Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

### Development Guidelines
- Use vanilla JavaScript (no frameworks)
- Maintain responsive design
- Follow existing code structure
- Document new features

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**MaxDev** - [@maxdevel0pement](https://github.com/maxdevel0pement)

- 💼 Portfolio: [MaxDev About Me](maxdevelopement.me)
- 📫 Email: askmaxai@gmail.com
- 💬 Discord: @maxdevelopement

## 🙏 Acknowledgments

- **GitHub** for the comprehensive REST API
- **Font Awesome** for the icons
- **Inspiration** from GitHub's own contributions graph
- **Community** for feedback and suggestions

## 📈 Roadmap

### Planned Features
- [ ] **GitHub GraphQL API** integration for better performance
- [ ] **Year comparison** between different years
- [ ] **Team analysis** for organization insights
- [ ] **Export functions** (PNG, PDF, CSV)
- [ ] **Calendar integration** with important events
- [ ] **Commit message analysis** for trends
- [ ] **Programming language statistics** over time

### Improvements
- [ ] **Offline mode** with Local Storage
- [ ] **Dark/Light theme** toggle
- [ ] **Advanced filtering** options
- [ ] **Performance optimizations**

## 🔗 Related Projects

- [GitHub Skyline](https://skyline.github.com/) - 3D GitHub activity
- [GitStats](https://gitstats.me/) - GitHub statistics
- [GitHub Wrapped](https://www.githubwrapped.tech/) - Year in review

---

⭐ **If you like this project, give it a star!** ⭐

Made with ❤️ by [MaxDev](https://github.com/maxdevel0pement)
