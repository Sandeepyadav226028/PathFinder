// Career details data
const careerDetails = {
    'software-engineer': {
        title: 'Software Engineer',
        field: 'Technology',
        description: 'Design, develop, and maintain software applications and systems for various platforms and industries.',
        salary: '₹8 - 25 LPA',
        demand: 'Very High Demand',
        skills: ['Programming', 'Problem Solving', 'Algorithms', 'Database Management'],
        courses: ['B.Tech Computer Science', 'BCA', 'MCA', 'B.Sc Computer Science'],
        responsibilities: [
            'Write clean, efficient, and well-documented code',
            'Design software solutions based on requirements',
            'Test and debug applications',
            'Collaborate with cross-functional teams',
            'Stay updated with latest technologies'
        ],
        companies: ['Google', 'Microsoft', 'Amazon', 'TCS', 'Infosys', 'Wipro'],
        growthPath: ['Junior Developer', 'Software Engineer', 'Senior Developer', 'Tech Lead', 'Architect']
    },
    'mechanical-engineer': {
        title: 'Mechanical Engineer',
        field: 'Engineering',
        description: 'Design, analyze, and manufacture mechanical systems and devices for various industries.',
        salary: '₹6 - 20 LPA',
        demand: 'High Demand',
        skills: ['CAD Design', 'Thermodynamics', 'Manufacturing', 'Material Science'],
        courses: ['B.Tech Mechanical Engineering', 'Diploma in Mechanical', 'M.Tech Mechanical'],
        responsibilities: [
            'Design mechanical components and systems',
            'Conduct analysis and simulations',
            'Oversee manufacturing processes',
            'Ensure product quality and safety',
            'Collaborate with other engineering disciplines'
        ],
        companies: ['Tata Motors', 'BHEL', 'L&T', 'Mahindra', 'Ashok Leyland', 'Siemens'],
        growthPath: ['Junior Engineer', 'Mechanical Engineer', 'Senior Engineer', 'Project Manager', 'Engineering Manager']
    },
    'doctor': {
        title: 'Doctor',
        field: 'Medical',
        description: 'Diagnose and treat illnesses, injuries, and other health conditions in patients.',
        salary: '₹10 - 50 LPA',
        demand: 'Very High Demand',
        skills: ['Medical Knowledge', 'Diagnosis', 'Patient Care', 'Communication'],
        courses: ['MBBS', 'BDS', 'BHMS', 'BAMS', 'MD/MS'],
        responsibilities: [
            'Examine patients and take medical histories',
            'Order and interpret diagnostic tests',
            'Diagnose health conditions',
            'Develop treatment plans',
            'Provide patient education and counseling'
        ],
        companies: ['AIIMS', 'Apollo Hospitals', 'Fortis', 'Max Healthcare', 'Columbia Asia', 'Government Hospitals'],
        growthPath: ['Intern', 'Junior Resident', 'Senior Resident', 'Consultant', 'Department Head']
    },
    'business-analyst': {
        title: 'Business Analyst',
        field: 'Business',
        description: 'Analyze business processes, identify requirements, and provide solutions to business problems.',
        salary: '₹7 - 22 LPA',
        demand: 'High Demand',
        skills: ['Data Analysis', 'Communication', 'Problem Solving', 'Business Knowledge'],
        courses: ['BBA', 'MBA', 'B.Com', 'Economics', 'Business Analytics'],
        responsibilities: [
            'Gather and analyze business requirements',
            'Document business processes',
            'Identify areas for improvement',
            'Propose solutions to business problems',
            'Work with stakeholders to implement changes'
        ],
        companies: ['McKinsey', 'BCG', 'Deloitte', 'Accenture', 'TCS', 'Infosys'],
        growthPath: ['Junior Analyst', 'Business Analyst', 'Senior Analyst', 'Project Manager', 'Business Architect']
    },
    'content-writer': {
        title: 'Content Writer',
        field: 'Arts',
        description: 'Create engaging content for websites, blogs, social media, and marketing materials.',
        salary: '₹4 - 15 LPA',
        demand: 'High Demand',
        skills: ['Writing', 'Creativity', 'SEO', 'Research'],
        courses: ['B.A English', 'Journalism', 'Mass Communication', 'Creative Writing'],
        responsibilities: [
            'Write engaging and original content',
            'Research topics thoroughly',
            'Optimize content for search engines',
            'Edit and proofread content',
            'Collaborate with marketing and design teams'
        ],
        companies: ['Times Internet', 'NDTV', 'India Today', 'Hindustan Times', 'Startups', 'Digital Agencies'],
        growthPath: ['Junior Writer', 'Content Writer', 'Senior Writer', 'Content Manager', 'Content Director']
    },
    'data-scientist': {
        title: 'Data Scientist',
        field: 'Technology',
        description: 'Analyze complex data to extract insights and support decision-making processes.',
        salary: '₹12 - 35 LPA',
        demand: 'Very High Demand',
        skills: ['Python/R', 'Statistics', 'Machine Learning', 'Data Visualization'],
        courses: ['B.Tech CS', 'M.Sc Statistics', 'Data Science', 'Machine Learning'],
        responsibilities: [
            'Collect and clean large datasets',
            'Develop predictive models',
            'Analyze data to identify trends',
            'Create data visualizations and reports',
            'Communicate insights to stakeholders'
        ],
        companies: ['Fractal', 'Mu Sigma', 'LatentView', 'Tiger Analytics', 'Amazon', 'Flipkart'],
        growthPath: ['Junior Data Scientist', 'Data Scientist', 'Senior Data Scientist', 'Lead Data Scientist', 'Chief Data Officer']
    }
};

// View career details
function viewCareerDetails(careerId) {
    const career = careerDetails[careerId];
    if (!career) return;

    // Create modal with career details
    const modal = document.createElement('div');
    modal.className = 'career-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${career.title}</h2>
                <span class="field-badge">${career.field}</span>
                <button class="close-btn" onclick="closeCareerModal()">&times;</button>
            </div>
            
            <div class="modal-body">
                <div class="career-section">
                    <h3>Description</h3>
                    <p>${career.description}</p>
                </div>

                <div class="career-details-grid">
                    <div class="detail-card">
                        <i class="fas fa-money-bill-wave"></i>
                        <div>
                            <h4>Salary Range</h4>
                            <p>${career.salary}</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <i class="fas fa-fire"></i>
                        <div>
                            <h4>Demand Level</h4>
                            <p>${career.demand}</p>
                        </div>
                    </div>
                </div>

                <div class="career-section">
                    <h3>Key Skills</h3>
                    <div class="skills-list">
                        ${career.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <div class="career-section">
                    <h3>Related Courses</h3>
                    <div class="courses-list">
                        ${career.courses.map(course => `<span class="course-tag">${course}</span>`).join('')}
                    </div>
                </div>

                <div class="career-section">
                    <h3>Responsibilities</h3>
                    <ul class="responsibilities-list">
                        ${career.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                    </ul>
                </div>

                <div class="career-section">
                    <h3>Top Companies</h3>
                    <div class="companies-list">
                        ${career.companies.map(company => `<span class="company-tag">${company}</span>`).join('')}
                    </div>
                </div>

                <div class="career-section">
                    <h3>Career Growth Path</h3>
                    <div class="growth-path">
                        ${career.growthPath.map((role, index) => `
                            <div class="growth-step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-title">${role}</div>
                                ${index < career.growthPath.length - 1 ? '<div class="step-arrow">→</div>' : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn btn-primary" onclick="saveCareer('${careerId}')">
                    <i class="fas fa-heart"></i> Save Career
                </button>
                <button class="btn btn-secondary" onclick="closeCareerModal()">Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .career-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }

        .modal-content {
            background: white;
            border-radius: 15px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .modal-header {
            padding: 2rem;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            position: relative;
        }

        .modal-header h2 {
            margin: 0 0 0.5rem 0;
        }

        .close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 50%;
            transition: background 0.3s ease;
        }

        .close-btn:hover {
            background: rgba(255,255,255,0.2);
        }

        .modal-body {
            padding: 2rem;
        }

        .career-section {
            margin-bottom: 2rem;
        }

        .career-section h3 {
            color: #333;
            margin-bottom: 1rem;
        }

        .career-details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .detail-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 10px;
        }

        .detail-card i {
            font-size: 1.5rem;
            color: #667eea;
        }

        .detail-card h4 {
            margin: 0 0 0.25rem 0;
            color: #333;
        }

        .detail-card p {
            margin: 0;
            color: #666;
        }

        .skills-list,
        .courses-list,
        .companies-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .skill-tag,
        .course-tag,
        .company-tag {
            background: #ede9fe;
            color: #667eea;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .responsibilities-list {
            list-style: none;
            padding: 0;
        }

        .responsibilities-list li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }

        .responsibilities-list li:before {
            content: "✓";
            position: absolute;
            left: 0;
            color: #10b981;
            font-weight: bold;
        }

        .growth-path {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }

        .growth-step {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .step-number {
            width: 30px;
            height: 30px;
            background: #667eea;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 0.9rem;
        }

        .step-title {
            font-weight: 500;
            color: #333;
        }

        .step-arrow {
            color: #667eea;
            font-size: 1.2rem;
        }

        .modal-footer {
            padding: 1.5rem 2rem;
            background: #f8fafc;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
        }
    `;
    document.head.appendChild(modalStyle);
}

// Close career modal
function closeCareerModal() {
    const modal = document.querySelector('.career-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Save career to profile
function saveCareer(careerId) {
    const userData = getFromLocalStorage('pathfinderUserData', {});
    userData.savedCareers = userData.savedCareers || [];
    
    if (!userData.savedCareers.includes(careerId)) {
        userData.savedCareers.push(careerId);
        saveToLocalStorage('pathfinderUserData', userData);
        showNotification('Career saved to your profile!');
    } else {
        showNotification('Career already saved!', 'info');
    }
    
    closeCareerModal();
}

// Initialize careers page
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to career cards
    document.querySelectorAll('.career-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const careerCard = e.target.closest('.career-card');
            const careerId = careerCard.getAttribute('data-career-id') || 
                           careerCard.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-');
            viewCareerDetails(careerId);
        });
    });

    // Close modal when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('career-modal')) {
            closeCareerModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCareerModal();
        }
    });
});

// Make functions globally available
window.viewCareerDetails = viewCareerDetails;
window.closeCareerModal = closeCareerModal;
window.saveCareer = saveCareer;