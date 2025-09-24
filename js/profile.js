// Initialize profile page
document.addEventListener('DOMContentLoaded', () => {
    loadUserProfile();
    updateProfileStats();
    updateRecentActivity();
});

// Load user profile data
function loadUserProfile() {
    const userData = getFromLocalStorage('pathfinderUserData', {});
    
    // Update user info (in a real app, this would come from user authentication)
    const userInfo = {
        name: 'Priya Sharma',
        grade: '12th Grade',
        school: 'Delhi Public School',
        location: 'New Delhi, India',
        stream: 'Science',
        interests: ['Mathematics', 'Physics', 'Technology', 'Programming'],
        goals: [
            { text: 'Complete aptitude test', completed: true },
            { text: 'Research engineering colleges', completed: false },
            { text: 'Prepare for entrance exams', completed: false }
        ]
    };

    // Update progress based on user data
    updateProgressBars(userData);
}

// Update profile statistics
function updateProfileStats() {
    const userData = getFromLocalStorage('pathfinderUserData', {});
    
    const stats = {
        quizzes: userData.completedQuizzes ? userData.completedQuizzes.length : 3,
        savedColleges: userData.savedColleges ? userData.savedColleges.length : 5,
        downloadedResources: userData.downloadedResources ? userData.downloadedResources.length : 12
    };

    // Update stat cards
    document.querySelectorAll('.stat-card').forEach(card => {
        const statIcon = card.querySelector('.stat-icon i');
        const statNumber = card.querySelector('.stat-content h3');
        
        if (statIcon.classList.contains('fa-clipboard-check')) {
            statNumber.textContent = stats.quizzes;
        } else if (statIcon.classList.contains('fa-heart')) {
            statNumber.textContent = stats.savedColleges;
        } else if (statIcon.classList.contains('fa-download')) {
            statNumber.textContent = stats.downloadedResources;
        }
    });
}

// Update progress bars
function updateProgressBars(userData) {
    const progressData = userData.progress || {
        mathematics: 85,
        physics: 72,
        chemistry: 68,
        biology: 45,
        computerScience: 90
    };

    const progressItems = document.querySelectorAll('.progress-item');
    progressItems.forEach(item => {
        const subjectName = item.querySelector('.progress-header span').textContent.toLowerCase();
        const progressFill = item.querySelector('.progress-fill');
        const progressText = item.querySelector('.progress-header span:last-child');
        
        let progress = 0;
        switch (subjectName) {
            case 'mathematics':
                progress = progressData.mathematics || 0;
                break;
            case 'physics':
                progress = progressData.physics || 0;
                break;
            case 'chemistry':
                progress = progressData.chemistry || 0;
                break;
            case 'biology':
                progress = progressData.biology || 0;
                break;
            case 'computer science':
                progress = progressData.computerScience || 0;
                break;
        }
        
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;
    });
}

// Update recent activity
function updateRecentActivity() {
    const userData = getFromLocalStorage('pathfinderUserData', {});
    const activities = [];

    // Generate activities based on user data
    if (userData.completedQuizzes && userData.completedQuizzes.length > 0) {
        const lastQuiz = userData.completedQuizzes[userData.completedQuizzes.length - 1];
        activities.push({
            icon: 'fa-clipboard-check',
            text: 'Completed <strong>Engineering Aptitude Quiz</strong>',
            time: '2 hours ago'
        });
    }

    if (userData.downloadedResources && userData.downloadedResources.length > 0) {
        activities.push({
            icon: 'fa-download',
            text: 'Downloaded <strong>Complete Mathematics for Engineering</strong>',
            time: '1 day ago'
        });
    }

    if (userData.savedColleges && userData.savedColleges.length > 0) {
        activities.push({
            icon: 'fa-heart',
            text: 'Saved <strong>Government College of Engineering</strong>',
            time: '2 days ago'
        });
    }

    activities.push({
        icon: 'fa-briefcase',
        text: 'Explored <strong>Software Engineer</strong> career path',
        time: '3 days ago'
    });

    // Update activity list
    const activityList = document.querySelector('.activity-list');
    if (activityList) {
        activityList.innerHTML = activities.map(activity => `
            <div class="activity-item">
                <div class="activity-icon">
                    <i class="fas ${activity.icon}"></i>
                </div>
                <div class="activity-content">
                    <p>${activity.text}</p>
                    <span class="activity-time">${activity.time}</span>
                </div>
            </div>
        `).join('');
    }
}

// Update achievements
function updateAchievements() {
    const userData = getFromLocalStorage('pathfinderUserData', {});
    const achievements = [];

    // Check for quiz master achievement
    if (userData.completedQuizzes && userData.completedQuizzes.length >= 3) {
        achievements.push({
            icon: 'fa-trophy',
            title: 'Quiz Master',
            description: 'Completed 3 aptitude quizzes'
        });
    }

    // Check for top performer achievement
    const progress = userData.progress || {};
    if (progress.mathematics >= 90) {
        achievements.push({
            icon: 'fa-star',
            title: 'Top Performer',
            description: 'Scored above 90% in Mathematics'
        });
    }

    // Check for resource explorer achievement
    if (userData.downloadedResources && userData.downloadedResources.length >= 10) {
        achievements.push({
            icon: 'fa-book-reader',
            title: 'Resource Explorer',
            description: 'Downloaded 10+ resources'
        });
    }

    // Check for path finder achievement
    achievements.push({
        icon: 'fa-compass',
        title: 'Path Finder',
        description: 'Explored 5 career paths'
    });

    // Update achievements grid
    const achievementsGrid = document.querySelector('.achievements-grid');
    if (achievementsGrid) {
        achievementsGrid.innerHTML = achievements.map(achievement => `
            <div class="achievement-card">
                <div class="achievement-icon">
                    <i class="fas ${achievement.icon}"></i>
                </div>
                <h4>${achievement.title}</h4>
                <p>${achievement.description}</p>
            </div>
        `).join('');
    }
}

// Edit profile function
function editProfile() {
    showNotification('Profile editing feature coming soon!', 'info');
}

// Export profile data
function exportProfile() {
    const userData = getFromLocalStorage('pathfinderUserData', {});
    const profileData = {
        userInfo: {
            name: 'Priya Sharma',
            grade: '12th Grade',
            school: 'Delhi Public School',
            location: 'New Delhi, India'
        },
        statistics: {
            quizzes: userData.completedQuizzes ? userData.completedQuizzes.length : 0,
            savedColleges: userData.savedColleges ? userData.savedColleges.length : 0,
            downloadedResources: userData.downloadedResources ? userData.downloadedResources.length : 0
        },
        progress: userData.progress || {},
        achievements: [],
        activity: []
    };

    // Create and download JSON file
    const dataStr = JSON.stringify(profileData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pathfinder-profile.json';
    link.click();
    URL.revokeObjectURL(url);

    showNotification('Profile exported successfully!', 'success');
}

// Reset profile data
function resetProfile() {
    if (confirm('Are you sure you want to reset all your profile data? This action cannot be undone.')) {
        localStorage.removeItem('pathfinderUserData');
        location.reload();
        showNotification('Profile reset successfully!', 'success');
    }
}

// Add profile action buttons
function addProfileActions() {
    const profileMain = document.querySelector('.profile-main');
    if (profileMain) {
        const actionsSection = document.createElement('div');
        actionsSection.className = 'profile-actions';
        actionsSection.innerHTML = `
            <h3>Profile Actions</h3>
            <div class="action-buttons">
                <button class="btn btn-primary" onclick="editProfile()">
                    <i class="fas fa-edit"></i> Edit Profile
                </button>
                <button class="btn btn-secondary" onclick="exportProfile()">
                    <i class="fas fa-download"></i> Export Data
                </button>
                <button class="btn btn-danger" onclick="resetProfile()">
                    <i class="fas fa-trash"></i> Reset Data
                </button>
            </div>
        `;

        profileMain.appendChild(actionsSection);

        // Add styles for profile actions
        const style = document.createElement('style');
        style.textContent = `
            .profile-actions {
                background: white;
                border-radius: 15px;
                box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                padding: 2rem;
                margin-top: 2rem;
            }

            .profile-actions h3 {
                margin-bottom: 1rem;
                color: #333;
            }

            .action-buttons {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
            }

            .btn-danger {
                background: #ef4444;
                color: white;
            }

            .btn-danger:hover {
                background: #dc2626;
            }
        `;
        document.head.appendChild(style);
    }
}

// Initialize profile page with all features
document.addEventListener('DOMContentLoaded', () => {
    loadUserProfile();
    updateProfileStats();
    updateProgressBars(getFromLocalStorage('pathfinderUserData', {}));
    updateRecentActivity();
    updateAchievements();
    addProfileActions();
});

// Make functions globally available
window.editProfile = editProfile;
window.exportProfile = exportProfile;
window.resetProfile = resetProfile;