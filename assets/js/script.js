class LanguageManager {
    constructor() {
        this.currentLanguage = 'en';
        this.translations = {
            en: {
                github_timeline: "GitHub Timeline Visualizer",
                welcome_title: "GitHub Activity Timeline",
                welcome_subtitle: "Visualize GitHub commit activity and discover patterns in your coding journey",
                username_placeholder: "Enter GitHub username...",
                analyze_btn: "Analyze",
                activity_stats: "Activity Statistics",
                total_commits: "Total Commits",
                most_active_month: "Most Active Month",
                longest_streak: "Longest Streak",
                avg_commits_day: "Avg Commits/Day",
                activity_timeline: "Activity Timeline",
                commit_heatmap: "Commit Heatmap",
                most_active_repos: "Most Active Repositories",
                loading_data: "Loading GitHub data...",
                error_title: "Error",
                try_again: "Try Again",
                less: "Less",
                more: "More",
                commits: "commits",
                days: "days",
                user_not_found: "User not found. Please check the username and try again.",
                rate_limit_exceeded: "GitHub API rate limit exceeded. Please try again later.",
                network_error: "Network error. Please check your connection and try again.",
                no_public_activity: "No public activity found for this user.",
                contributions: "contributions",
                year_btn: "Year",
                month_btn: "Month",
                week_btn: "Week"
            },
            de: {
                github_timeline: "GitHub Timeline Visualizer",
                welcome_title: "GitHub Aktivitäts-Timeline",
                welcome_subtitle: "Visualisiere GitHub Commit-Aktivität und entdecke Muster in deiner Programmierreise",
                username_placeholder: "GitHub Benutzername eingeben...",
                analyze_btn: "Analysieren",
                activity_stats: "Aktivitäts-Statistiken",
                total_commits: "Gesamt Commits",
                most_active_month: "Aktivster Monat",
                longest_streak: "Längste Serie",
                avg_commits_day: "Ø Commits/Tag",
                activity_timeline: "Aktivitäts-Timeline",
                commit_heatmap: "Commit-Heatmap",
                most_active_repos: "Aktivste Repositories",
                loading_data: "Lade GitHub-Daten...",
                error_title: "Fehler",
                try_again: "Nochmal versuchen",
                less: "Weniger",
                more: "Mehr",
                commits: "Commits",
                days: "Tage",
                user_not_found: "Benutzer nicht gefunden. Bitte überprüfe den Benutzernamen und versuche es erneut.",
                rate_limit_exceeded: "GitHub API-Ratenlimit überschritten. Bitte versuche es später erneut.",
                network_error: "Netzwerkfehler. Bitte überprüfe deine Verbindung und versuche es erneut.",
                no_public_activity: "Keine öffentliche Aktivität für diesen Benutzer gefunden.",
                contributions: "Beiträge",
                year_btn: "Jahr",
                month_btn: "Monat",
                week_btn: "Woche"
            },
            zh: {
                github_timeline: "GitHub 时间线可视化工具",
                welcome_title: "GitHub 活动时间线",
                welcome_subtitle: "可视化 GitHub 提交活动，发现你的编程之旅中的模式",
                username_placeholder: "输入 GitHub 用户名...",
                analyze_btn: "分析",
                activity_stats: "活动统计",
                total_commits: "总提交数",
                most_active_month: "最活跃月份",
                longest_streak: "最长连续",
                avg_commits_day: "平均提交/天",
                activity_timeline: "活动时间线",
                commit_heatmap: "提交热力图",
                most_active_repos: "最活跃的仓库",
                loading_data: "正在加载 GitHub 数据...",
                error_title: "错误",
                try_again: "重试",
                less: "少",
                more: "多",
                commits: "提交",
                days: "天",
                user_not_found: "未找到用户。请检查用户名并重试。",
                rate_limit_exceeded: "GitHub API 速率限制已超出。请稍后重试。",
                network_error: "网络错误。请检查你的连接并重试。",
                no_public_activity: "未找到此用户的公开活动。",
                contributions: "贡献",
                year_btn: "年",
                month_btn: "月",
                week_btn: "周"
            },
            ru: {
                github_timeline: "Визуализатор временной шкалы GitHub",
                welcome_title: "Временная шкала активности GitHub",
                welcome_subtitle: "Визуализируйте активность коммитов GitHub и откройте закономерности в вашем путешествии программирования",
                username_placeholder: "Введите имя пользователя GitHub...",
                analyze_btn: "Анализировать",
                activity_stats: "Статистика активности",
                total_commits: "Всего коммитов",
                most_active_month: "Самый активный месяц",
                longest_streak: "Самая длинная серия",
                avg_commits_day: "Среднее коммитов/день",
                activity_timeline: "Временная шкала активности",
                commit_heatmap: "Тепловая карта коммитов",
                most_active_repos: "Самые активные репозитории",
                loading_data: "Загружаются данные GitHub...",
                error_title: "Ошибка",
                try_again: "Попробовать снова",
                less: "Меньше",
                more: "Больше",
                commits: "коммитов",
                days: "дней",
                user_not_found: "Пользователь не найден. Пожалуйста, проверьте имя пользователя и попробуйте снова.",
                rate_limit_exceeded: "Превышен лимит скорости GitHub API. Пожалуйста, попробуйте позже.",
                network_error: "Ошибка сети. Пожалуйста, проверьте ваше соединение и попробуйте снова.",
                no_public_activity: "Публичная активность для этого пользователя не найдена.",
                contributions: "вклады",
                year_btn: "Год",
                month_btn: "Месяц",
                week_btn: "Неделя"
            },
            et: {
                github_timeline: "GitHub ajajoone visualiseerija",
                welcome_title: "GitHub tegevuse ajajoon",
                welcome_subtitle: "Visualiseeri GitHub commit'ide tegevust ja avasta mustreid oma programmeerimise teekonnas",
                username_placeholder: "Sisesta GitHub kasutajanimi...",
                analyze_btn: "Analüüsi",
                activity_stats: "Tegevuse statistika",
                total_commits: "Kokku commit'e",
                most_active_month: "Kõige aktiivsem kuu",
                longest_streak: "Pikim järjestikune seeria",
                avg_commits_day: "Keskmine commit'e/päev",
                activity_timeline: "Tegevuse ajajoon",
                commit_heatmap: "Commit'ide soojuskaart",
                most_active_repos: "Kõige aktiivsemad repositooriumid",
                loading_data: "GitHub andmete laadimine...",
                error_title: "Viga",
                try_again: "Proovi uuesti",
                less: "Vähem",
                more: "Rohkem",
                commits: "commit'id",
                days: "päeva",
                user_not_found: "Kasutajat ei leitud. Palun kontrolli kasutajanime ja proovi uuesti.",
                rate_limit_exceeded: "GitHub API kiiruse limiit ületatud. Palun proovi hiljem uuesti.",
                network_error: "Võrgu viga. Palun kontrolli oma ühendust ja proovi uuesti.",
                no_public_activity: "Selle kasutaja jaoks ei leitud avalikku tegevust.",
                contributions: "panused",
                year_btn: "Aasta",
                month_btn: "Kuu",
                week_btn: "Nädal"
            },
            ja: {
                github_timeline: "GitHub タイムライン可視化ツール",
                welcome_title: "GitHub アクティビティタイムライン",
                welcome_subtitle: "GitHub のコミット活動を可視化し、プログラミングの旅のパターンを発見しましょう",
                username_placeholder: "GitHub ユーザー名を入力...",
                analyze_btn: "分析",
                activity_stats: "アクティビティ統計",
                total_commits: "総コミット数",
                most_active_month: "最もアクティブな月",
                longest_streak: "最長連続記録",
                avg_commits_day: "平均コミット/日",
                activity_timeline: "アクティビティタイムライン",
                commit_heatmap: "コミットヒートマップ",
                most_active_repos: "最もアクティブなリポジトリ",
                loading_data: "GitHub データを読み込み中...",
                error_title: "エラー",
                try_again: "再試行",
                less: "少ない",
                more: "多い",
                commits: "コミット",
                days: "日",
                user_not_found: "ユーザーが見つかりません。ユーザー名を確認して再試行してください。",
                rate_limit_exceeded: "GitHub API のレート制限を超えました。しばらくしてから再試行してください。",
                network_error: "ネットワークエラー。接続を確認して再試行してください。",
                no_public_activity: "このユーザーの公開アクティビティが見つかりません。",
                contributions: "コントリビューション",
                year_btn: "年",
                month_btn: "月",
                week_btn: "週"
            },
            ar: {
                github_timeline: "أداة تصور الجدول الزمني لـ GitHub",
                welcome_title: "الجدول الزمني لنشاط GitHub",
                welcome_subtitle: "تصور نشاط الإيداعات في GitHub واكتشف الأنماط في رحلة البرمجة الخاصة بك",
                username_placeholder: "أدخل اسم المستخدم في GitHub...",
                analyze_btn: "تحليل",
                activity_stats: "إحصائيات النشاط",
                total_commits: "إجمالي الإيداعات",
                most_active_month: "الشهر الأكثر نشاطاً",
                longest_streak: "أطول سلسلة متتالية",
                avg_commits_day: "متوسط الإيداعات/اليوم",
                activity_timeline: "الجدول الزمني للنشاط",
                commit_heatmap: "خريطة حرارية للإيداعات",
                most_active_repos: "المستودعات الأكثر نشاطاً",
                loading_data: "جاري تحميل بيانات GitHub...",
                error_title: "خطأ",
                try_again: "حاول مرة أخرى",
                less: "أقل",
                more: "أكثر",
                commits: "إيداعات",
                days: "أيام",
                user_not_found: "المستخدم غير موجود. يرجى التحقق من اسم المستخدم والمحاولة مرة أخرى.",
                rate_limit_exceeded: "تم تجاوز حد معدل GitHub API. يرجى المحاولة مرة أخرى لاحقاً.",
                network_error: "خطأ في الشبكة. يرجى التحقق من اتصالك والمحاولة مرة أخرى.",
                no_public_activity: "لم يتم العثور على نشاط عام لهذا المستخدم.",
                contributions: "مساهمات",
                year_btn: "سنة",
                month_btn: "شهر",
                week_btn: "أسبوع"
            }
        };
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadLanguage();
    }

    setupEventListeners() {
        const languageBtn = document.getElementById('languageBtn');
        const languageMenu = document.getElementById('languageMenu');
        const languageOptions = document.querySelectorAll('.language-option');

        if (languageBtn) {
            languageBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                languageMenu.classList.toggle('show');
                languageBtn.classList.toggle('active');
                languageBtn.setAttribute('aria-expanded', languageMenu.classList.contains('show'));
            });
        }

        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                const selectedLang = option.dataset.lang;
                this.switchLanguage(selectedLang);
                languageMenu.classList.remove('show');
                languageBtn.classList.remove('active');
                languageBtn.setAttribute('aria-expanded', 'false');
            });

            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    option.click();
                }
            });
        });

        document.addEventListener('click', () => {
            languageMenu.classList.remove('show');
            languageBtn.classList.remove('active');
            languageBtn.setAttribute('aria-expanded', 'false');
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                languageMenu.classList.remove('show');
                languageBtn.classList.remove('active');
                languageBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        this.updateLanguageButton(lang);
        this.updateActiveOption(lang);
        this.translatePage(lang);
        this.updateDocumentLang(lang);
        localStorage.setItem('selectedLanguage', lang);
    }

    updateLanguageButton(lang) {
        const languageBtn = document.getElementById('languageBtn');
        const flagIcon = languageBtn.querySelector('.flag-icon');
        const languageText = languageBtn.querySelector('span');

        const languageNames = {
            'en': 'English',
            'de': 'Deutsch',
            'zh': '中文',
            'ru': 'Русский',
            'et': 'Eesti',
            'ja': '日本語',
            'ar': 'العربية'
        };

        flagIcon.src = `./assets/img/flags/${lang}.svg`;
        flagIcon.alt = languageNames[lang];
        languageText.textContent = languageNames[lang];
    }

    updateActiveOption(lang) {
        const languageOptions = document.querySelectorAll('.language-option');
        languageOptions.forEach(option => {
            if (option.dataset.lang === lang) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
    }

    updateDocumentLang(lang) {
        document.documentElement.lang = lang;
        document.body.setAttribute('lang', lang);
    }

    translatePage(lang) {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key, lang);
            if (translation) {
                element.textContent = translation;
            }
        });

        const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            const translation = this.getTranslation(key, lang);
            if (translation) {
                element.placeholder = translation;
            }
        });
    }

    getTranslation(key, lang) {
        return this.translations[lang] && this.translations[lang][key]
            ? this.translations[lang][key]
            : this.translations['en'][key];
    }

    loadLanguage() {
        const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
        this.switchLanguage(savedLanguage);
    }
}

class GitHubAPI {
    constructor() {
        this.baseURL = 'https://api.github.com';
        this.graphqlURL = 'https://api.github.com/graphql';
        this.token = null;
    }

    async makeRequest(url, options = {}) {
        const headers = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'GitHub-Activity-Timeline-Visualizer',
            ...options.headers
        };

        if (this.token) {
            headers['Authorization'] = `token ${this.token}`;
        }

        try {
            const response = await fetch(url, {
                ...options,
                headers
            });

            if (response.status === 404) {
                throw new Error('user_not_found');
            }

            if (response.status === 403) {
                throw new Error('rate_limit_exceeded');
            }

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            if (error.message.includes('Failed to fetch')) {
                throw new Error('network_error');
            }
            throw error;
        }
    }

    async getUser(username) {
        return await this.makeRequest(`${this.baseURL}/users/${username}`);
    }

    async getUserRepos(username, perPage = 100) {
        const repos = [];
        let page = 1;
        
        while (repos.length < 1000) {
            const pageRepos = await this.makeRequest(
                `${this.baseURL}/users/${username}/repos?type=all&sort=updated&per_page=${perPage}&page=${page}`
            );
            
            if (pageRepos.length === 0) break;
            
            repos.push(...pageRepos);
            
            if (pageRepos.length < perPage) break;
            page++;
        }
        
        return repos;
    }

    async getRepoCommits(username, repoName, since) {
        const commits = [];
        let page = 1;
        const perPage = 100;
        
        try {
            while (commits.length < 1000) {
                const url = `${this.baseURL}/repos/${username}/${repoName}/commits?author=${username}&since=${since}&per_page=${perPage}&page=${page}`;
                const pageCommits = await this.makeRequest(url);
                
                if (pageCommits.length === 0) break;
                
                commits.push(...pageCommits);
                
                if (pageCommits.length < perPage) break;
                page++;
            }
        } catch (error) {
            console.warn(`Could not fetch commits for ${repoName}:`, error.message);
        }
        
        return commits;
    }

    async getUserEvents(username, perPage = 100) {
        const events = [];
        let page = 1;
        
        while (events.length < 300) {
            try {
                const pageEvents = await this.makeRequest(
                    `${this.baseURL}/users/${username}/events/public?per_page=${perPage}&page=${page}`
                );
                
                if (pageEvents.length === 0) break;
                
                events.push(...pageEvents);
                
                if (pageEvents.length < perPage) break;
                page++;
            } catch (error) {
                console.warn('Could not fetch events:', error.message);
                break;
            }
        }
        
        return events;
    }
}

class GitHubAnalyzer {
    constructor() {
        this.api = new GitHubAPI();
        this.currentUser = null;
        this.currentData = null;
        this.chart = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupChart();
    }

    setupEventListeners() {
        const analyzeBtn = document.getElementById('analyzeBtn');
        const usernameInput = document.getElementById('usernameInput');
        const retryBtn = document.getElementById('retryBtn');
        const periodBtns = document.querySelectorAll('.period-btn');

        analyzeBtn.addEventListener('click', () => {
            const username = usernameInput.value.trim();
            if (username) {
                this.analyzeUser(username);
            }
        });

        usernameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const username = usernameInput.value.trim();
                if (username) {
                    this.analyzeUser(username);
                }
            }
        });

        retryBtn.addEventListener('click', () => {
            if (this.currentUser) {
                this.analyzeUser(this.currentUser);
            }
        });

        periodBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                periodBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                if (this.currentData) {
                    this.updateChart(btn.dataset.period);
                }
            });
        });
    }

    async analyzeUser(username) {
        this.currentUser = username;
        this.showLoading();
        
        try {
            const user = await this.api.getUser(username);
            const data = await this.fetchUserData(username);
            
            if (!data.commits || data.commits.length === 0) {
                throw new Error('no_public_activity');
            }
            
            this.currentData = data;
            this.displayResults(data);
        } catch (error) {
            console.error('Analysis error:', error);
            this.showError(this.getTranslation(error.message) || error.message);
        }
    }

    async fetchUserData(username) {
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
        const since = oneYearAgo.toISOString();

        const repos = await this.api.getUserRepos(username);
        const events = await this.api.getUserEvents(username);
        
        const commitsPromises = repos
            .filter(repo => !repo.fork)
            .slice(0, 20)
            .map(async repo => {
                const commits = await this.api.getRepoCommits(username, repo.name, since);
                return {
                    repo: repo.name,
                    commits: commits,
                    stars: repo.stargazers_count,
                    language: repo.language,
                    updated: repo.updated_at
                };
            });

        const repoCommits = await Promise.all(commitsPromises);
        
        const allCommits = [];
        const repoStats = [];
        
        repoCommits.forEach(repoData => {
            const commitCount = repoData.commits.length;
            if (commitCount > 0) {
                repoStats.push({
                    name: repoData.repo,
                    commits: commitCount,
                    stars: repoData.stars,
                    language: repoData.language || 'Unknown'
                });
                
                repoData.commits.forEach(commit => {
                    allCommits.push({
                        date: new Date(commit.commit.author.date),
                        repo: repoData.repo,
                        sha: commit.sha,
                        message: commit.commit.message
                    });
                });
            }
        });

        const eventCommits = this.processEvents(events);
        const combinedCommits = [...allCommits, ...eventCommits];
        const uniqueCommits = this.deduplicateCommits(combinedCommits);
        const dailyCommits = this.groupCommitsByDay(uniqueCommits, oneYearAgo);
        const stats = this.calculateStats(dailyCommits, uniqueCommits);
        
        return {
            username,
            commits: dailyCommits,
            repos: repoStats.sort((a, b) => b.commits - a.commits),
            stats,
            totalCommitsThisYear: uniqueCommits.length
        };
    }

    processEvents(events) {
        const commits = [];
        
        events.forEach(event => {
            if (event.type === 'PushEvent' && event.payload && event.payload.commits) {
                event.payload.commits.forEach(commit => {
                    commits.push({
                        date: new Date(event.created_at),
                        repo: event.repo.name.split('/')[1],
                        sha: commit.sha,
                        message: commit.message
                    });
                });
            }
        });
        
        return commits;
    }

    deduplicateCommits(commits) {
        const seen = new Set();
        return commits.filter(commit => {
            const key = `${commit.sha}-${commit.repo}`;
            if (seen.has(key)) {
                return false;
            }
            seen.add(key);
            return true;
        });
    }

    groupCommitsByDay(commits, startDate) {
        const dailyCommits = {};
        const endDate = new Date();
        
        const currentDate = new Date(startDate);
        while (currentDate <= endDate) {
            const dateKey = currentDate.toISOString().split('T')[0];
            dailyCommits[dateKey] = { date: new Date(currentDate), count: 0 };
            currentDate.setDate(currentDate.getDate() + 1);
        }
        
        commits.forEach(commit => {
            const dateKey = commit.date.toISOString().split('T')[0];
            if (dailyCommits[dateKey]) {
                dailyCommits[dateKey].count++;
            }
        });
        
        return Object.values(dailyCommits).sort((a, b) => a.date - b.date);
    }

    calculateStats(dailyCommits, allCommits) {
        const totalCommits = allCommits.length;
        const daysWithCommits = dailyCommits.filter(day => day.count > 0).length;
        const avgCommits = daysWithCommits > 0 ? (totalCommits / dailyCommits.length).toFixed(1) : '0.0';
        
        const monthlyCommits = {};
        dailyCommits.forEach(day => {
            const month = day.date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
            monthlyCommits[month] = (monthlyCommits[month] || 0) + day.count;
        });
        
        const mostActiveMonth = Object.entries(monthlyCommits)
            .reduce((a, b) => monthlyCommits[a[0]] > monthlyCommits[b[0]] ? a : b, ['No activity', 0])[0];
        
        let longestStreak = 0;
        let currentStreak = 0;
        
        dailyCommits.forEach(day => {
            if (day.count > 0) {
                currentStreak++;
                longestStreak = Math.max(longestStreak, currentStreak);
            } else {
                currentStreak = 0;
            }
        });
        
        return {
            totalCommits,
            avgCommits,
            longestStreak,
            mostActiveMonth
        };
    }

    displayResults(data) {
        this.hideAllSections();
        this.showStats(data.stats);
        this.showTimeline(data.commits);
        this.showHeatmap(data.commits);
        this.showRepositories(data.repos);
    }

    showStats(stats) {
        document.getElementById('totalCommits').textContent = stats.totalCommits.toLocaleString();
        document.getElementById('mostActiveMonth').textContent = stats.mostActiveMonth;
        document.getElementById('longestStreak').textContent = `${stats.longestStreak} ${this.getTranslation('days')}`;
        document.getElementById('avgCommits').textContent = stats.avgCommits;
        
        document.getElementById('statsSection').style.display = 'block';
    }

    showTimeline(commits) {
        this.updateChart('month');
        document.getElementById('timelineSection').style.display = 'block';
    }

    showHeatmap(commits) {
        const heatmapGrid = document.getElementById('heatmapGrid');
        heatmapGrid.innerHTML = '';
        
        const maxCommits = Math.max(...commits.map(day => day.count));
        const weeks = this.groupCommitsByWeek(commits);
        
        weeks.forEach(week => {
            const weekElement = document.createElement('div');
            weekElement.className = 'heatmap-week';
            
            week.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.className = 'heatmap-day';
                
                const level = this.getCommitLevel(day.count, maxCommits);
                dayElement.setAttribute('data-level', level);
                dayElement.title = `${day.date.toDateString()}: ${day.count} ${this.getTranslation('contributions')}`;
                
                weekElement.appendChild(dayElement);
            });
            
            heatmapGrid.appendChild(weekElement);
        });
        
        document.getElementById('heatmapSection').style.display = 'block';
    }

    groupCommitsByWeek(commits) {
        const weeks = [];
        let currentWeek = [];
        
        commits.forEach((day, index) => {
            if (currentWeek.length === 0) {
                const dayOfWeek = day.date.getDay();
                for (let i = 0; i < dayOfWeek; i++) {
                    currentWeek.push({ date: new Date(), count: 0, isEmpty: true });
                }
            }
            
            currentWeek.push(day);
            
            if (day.date.getDay() === 6 || index === commits.length - 1) {
                while (currentWeek.length < 7) {
                    currentWeek.push({ date: new Date(), count: 0, isEmpty: true });
                }
                
                weeks.push([...currentWeek]);
                currentWeek = [];
            }
        });
        
        return weeks;
    }

    getCommitLevel(count, maxCommits) {
        if (count === 0) return 0;
        if (maxCommits === 0) return 0;
        
        const percentage = count / maxCommits;
        if (percentage <= 0.25) return 1;
        if (percentage <= 0.5) return 2;
        if (percentage <= 0.75) return 3;
        return 4;
    }

    showRepositories(repos) {
        const reposGrid = document.getElementById('repositoriesGrid');
        reposGrid.innerHTML = '';
        
        repos.slice(0, 12).forEach(repo => {
            const repoCard = document.createElement('div');
            repoCard.className = 'repo-card';
            
            repoCard.innerHTML = `
                <div class="repo-header">
                    <i class="fab fa-github repo-icon"></i>
                    <a href="https://github.com/${this.currentUser}/${repo.name}" target="_blank" class="repo-name">${repo.name}</a>
                </div>
                <div class="repo-stats">
                    <div class="repo-stat">
                        <i class="fas fa-code-branch"></i>
                        <span>${repo.commits} ${this.getTranslation('commits')}</span>
                    </div>
                    <div class="repo-stat">
                        <i class="fas fa-star"></i>
                        <span>${repo.stars}</span>
                    </div>
                    <div class="repo-stat">
                        <i class="fas fa-circle" style="color: ${this.getLanguageColor(repo.language)};"></i>
                        <span>${repo.language}</span>
                    </div>
                </div>
            `;
            
            reposGrid.appendChild(repoCard);
        });
        
        document.getElementById('repositoriesSection').style.display = 'block';
    }

    getLanguageColor(language) {
        const colors = {
            'JavaScript': '#f1e05a',
            'Python': '#3572A5',
            'Java': '#b07219',
            'TypeScript': '#2b7489',
            'HTML': '#e34c26',
            'CSS': '#563d7c',
            'PHP': '#4F5D95',
            'C++': '#f34b7d',
            'C': '#555555',
            'Go': '#00ADD8',
            'Rust': '#dea584',
            'Swift': '#ffac45',
            'Kotlin': '#F18E33',
            'Ruby': '#701516',
            'C#': '#239120'
        };
        return colors[language] || '#ff6b7a';
    }

    setupChart() {
        const canvas = document.getElementById('timelineChart');
        const ctx = canvas.getContext('2d');
        
        this.chart = {
            canvas,
            ctx,
            data: null
        };
    }

    updateChart(period) {
        if (!this.currentData || !this.chart) return;
        
        const canvas = this.chart.canvas;
        const ctx = this.chart.ctx;
        
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const commits = this.currentData.commits;
        let groupedData;
        
        switch (period) {
            case 'week':
                groupedData = this.groupByWeek(commits);
                break;
            case 'month':
                groupedData = this.groupByMonth(commits);
                break;
            default:
                groupedData = this.groupByMonth(commits);
        }
        
        this.drawChart(ctx, groupedData, canvas.width, canvas.height);
    }

    groupByWeek(commits) {
        const weeks = {};
        commits.forEach(day => {
            const weekStart = new Date(day.date);
            weekStart.setDate(weekStart.getDate() - weekStart.getDay());
            const weekKey = weekStart.toISOString().split('T')[0];
            
            weeks[weekKey] = (weeks[weekKey] || 0) + day.count;
        });
        
        return Object.entries(weeks)
            .map(([date, count]) => ({ date: new Date(date), count }))
            .sort((a, b) => a.date - b.date);
    }

    groupByMonth(commits) {
        const months = {};
        commits.forEach(day => {
            const monthKey = `${day.date.getFullYear()}-${day.date.getMonth()}`;
            months[monthKey] = (months[monthKey] || 0) + day.count;
        });
        
        return Object.entries(months).map(([key, count]) => {
            const [year, month] = key.split('-');
            return { date: new Date(year, month, 1), count };
        }).sort((a, b) => a.date - b.date);
    }

    drawChart(ctx, data, width, height) {
        if (!data || data.length === 0) return;
        
        const padding = 40;
        const chartWidth = width - 2 * padding;
        const chartHeight = height - 2 * padding;
        
        const maxCount = Math.max(...data.map(d => d.count));
        if (maxCount === 0) return;
        
        const xStep = chartWidth / Math.max(data.length - 1, 1);
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let i = 0; i <= 5; i++) {
            const y = padding + (i * chartHeight) / 5;
            ctx.moveTo(padding, y);
            ctx.lineTo(width - padding, y);
        }
        for (let i = 0; i < data.length; i += Math.ceil(data.length / 10)) {
            const x = padding + i * xStep;
            ctx.moveTo(x, padding);
            ctx.lineTo(x, height - padding);
        }
        ctx.stroke();
        
        ctx.fillStyle = 'rgba(255, 107, 122, 0.2)';
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        
        data.forEach((point, index) => {
            const x = padding + index * xStep;
            const y = height - padding - (point.count / maxCount) * chartHeight;
            ctx.lineTo(x, y);
        });
        
        ctx.lineTo(padding + (data.length - 1) * xStep, height - padding);
        ctx.closePath();
        ctx.fill();
        
        ctx.strokeStyle = '#ff6b7a';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        data.forEach((point, index) => {
            const x = padding + index * xStep;
            const y = height - padding - (point.count / maxCount) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        data.forEach((point, index) => {
            const x = padding + index * xStep;
            const y = height - padding - (point.count / maxCount) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fillStyle = '#ff6b7a';
            ctx.fill();
        });
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.stroke();
        
        ctx.fillStyle = '#b8b8b8';
        ctx.font = '12px Segoe UI';
        ctx.textAlign = 'center';
        
        for (let i = 0; i <= 5; i++) {
            const value = Math.round((maxCount / 5) * (5 - i));
            const y = padding + (i * chartHeight) / 5;
            ctx.textAlign = 'right';
            ctx.fillText(value.toString(), padding - 10, y + 4);
        }
        
        ctx.textAlign = 'center';
        const labelStep = Math.ceil(data.length / 6);
        for (let i = 0; i < data.length; i += labelStep) {
            const x = padding + i * xStep;
            const date = data[i].date;
            const label = date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
            ctx.fillText(label, x, height - padding + 20);
        }
    }

    showLoading() {
        this.hideAllSections();
        document.getElementById('loadingSection').style.display = 'block';
    }

    showError(message) {
        this.hideAllSections();
        document.getElementById('errorMessage').textContent = message;
        document.getElementById('errorSection').style.display = 'block';
    }

    hideAllSections() {
        const sections = ['statsSection', 'timelineSection', 'heatmapSection', 'repositoriesSection', 'loadingSection', 'errorSection'];
        sections.forEach(sectionId => {
            document.getElementById(sectionId).style.display = 'none';
        });
    }

    getTranslation(key) {
        const languageManager = window.languageManager;
        if (languageManager) {
            return languageManager.getTranslation(key, languageManager.currentLanguage);
        }
        return key;
    }
}

class MobileOptimizations {
    constructor() {
        this.init();
    }

    init() {
        this.setupTouchOptimizations();
        this.setupOrientationHandler();
    }

    setupTouchOptimizations() {
        const touchElements = document.querySelectorAll('.stat-card, .repo-card, .period-btn, .analyze-btn');

        touchElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                element.style.transform = 'scale(0.98)';
            }, { passive: true });

            element.addEventListener('touchend', () => {
                setTimeout(() => {
                    element.style.transform = '';
                }, 100);
            }, { passive: true });
        });
    }

    setupOrientationHandler() {
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                window.scrollTo(0, window.scrollY);
                if (window.gitHubAnalyzer && window.gitHubAnalyzer.currentData) {
                    const activePeriod = document.querySelector('.period-btn.active').dataset.period;
                    window.gitHubAnalyzer.updateChart(activePeriod);
                }
            }, 100);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const languageManager = new LanguageManager();
    const gitHubAnalyzer = new GitHubAnalyzer();
    const mobileOptimizations = new MobileOptimizations();

    window.languageManager = languageManager;
    window.gitHubAnalyzer = gitHubAnalyzer;
    window.mobileOptimizations = mobileOptimizations;

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

window.addEventListener('load', function() {
    const loadingTime = performance.now();
    console.log(`Website loaded in ${loadingTime.toFixed(2)}ms`);
});