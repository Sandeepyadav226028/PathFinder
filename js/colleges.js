// College details data
const collegeDetails = {
    'gce-engineering': {
        name: 'Government College of Engineering',
        type: 'Engineering',
        location: '2.5 km away',
        rating: 4.2,
        students: '2,500',
        fees: '₹50,000/year',
        description: 'Premier government engineering college known for excellence in technical education and research.',
        courses: [
            { name: 'B.Tech Computer Science', duration: '4 Years', seats: 120 },
            { name: 'B.Tech Electronics', duration: '4 Years', seats: 90 },
            { name: 'B.Tech Mechanical', duration: '4 Years', seats: 110 },
            { name: 'M.Tech Computer Science', duration: '2 Years', seats: 30 }
        ],
        facilities: ['Hostel', 'Computer Lab', 'Library', 'Sports', 'Cafeteria', 'WiFi'],
        faculty: {
            total: 150,
            phd: 80,
            experience: 'Average 12 years'
        },
        placement: {
            highest: '₹45 LPA',
            average: '₹8 LPA',
            companies: ['TCS', 'Infosys', 'Wipro', 'Google', 'Microsoft']
        },
        contact: {
            phone: '+91 123 456 7890',
            email: 'info@gce.edu',
            website: 'www.gce.edu'
        }
    },
    'du-north': {
        name: 'Delhi University - North Campus',
        type: 'Arts & Science',
        location: '5.0 km away',
        rating: 4.5,
        students: '5,000',
        fees: '₹15,000/year',
        description: 'Prestigious constituent college of Delhi University offering diverse programs in arts and sciences.',
        courses: [
            { name: 'B.A English', duration: '3 Years', seats: 200 },
            { name: 'B.Sc Physics', duration: '3 Years', seats: 150 },
            { name: 'B.Com Honors', duration: '3 Years', seats: 180 },
            { name: 'B.A Economics', duration: '3 Years', seats: 120 }
        ],
        facilities: ['Library', 'WiFi', 'Canteen', 'Auditorium', 'Sports Complex', 'Hostel'],
        faculty: {
            total: 300,
            phd: 200,
            experience: 'Average 15 years'
        },
        placement: {
            highest: '₹25 LPA',
            average: '₹6 LPA',
            companies: ['Deloitte', 'KPMG', 'EY', 'Amazon', 'Accenture']
        },
        contact: {
            phone: '+91 987 654 3210',
            email: 'admission@du.ac.in',
            website: 'www.du.ac.in'
        }
    },
    'gpc-technology': {
        name: 'Government Polytechnic College',
        type: 'Technology',
        location: '3.8 km away',
        rating: 4.0,
        students: '1,800',
        fees: '₹25,000/year',
        description: 'Leading polytechnic college focused on practical technical education and skill development.',
        courses: [
            { name: 'Diploma Mechanical', duration: '3 Years', seats: 60 },
            { name: 'Diploma Civil', duration: '3 Years', seats: 60 },
            { name: 'Diploma Electrical', duration: '3 Years', seats: 60 },
            { name: 'Diploma Computer', duration: '3 Years', seats: 60 }
        ],
        facilities: ['Laboratory', 'Workshop', 'Hostel', 'Sports', 'Library', 'Computer Lab'],
        faculty: {
            total: 80,
            phd: 30,
            experience: 'Average 10 years'
        },
        placement: {
            highest: '₹15 LPA',
            average: '₹4 LPA',
            companies: ['L&T', 'Tata Motors', 'BHEL', 'Siemens', 'ABB']
        },
        contact: {
            phone: '+91 555 123 4567',
            email: 'info@gpc.edu',
            website: 'www.gpc.edu'
        }
    },
    'gmc-medical': {
        name: 'Government Medical College',
        type: 'Medical',
        location: '7.2 km away',
        rating: 4.7,
        students: '1,200',
        fees: '₹25,000/year',
        description: 'Top government medical college with excellent hospital facilities and research opportunities.',
        courses: [
            { name: 'MBBS', duration: '5.5 Years', seats: 150 },
            { name: 'BDS', duration: '5 Years', seats: 50 },
            { name: 'B.Sc Nursing', duration: '4 Years', seats: 100 },
            { name: 'MD Pharmacology', duration: '3 Years', seats: 20 }
        ],
        facilities: ['Hospital', 'Labs', 'Hostel', 'Library', 'Research Center', 'Sports'],
        faculty: {
            total: 200,
            phd: 150,
            experience: 'Average 18 years'
        },
        placement: {
            highest: '₹50 LPA',
            average: '₹12 LPA',
            companies: ['AIIMS', 'Apollo', 'Fortis', 'Max', 'Government Hospitals']
        },
        contact: {
            phone: '+91 222 333 4444',
            email: 'admission@gmc.edu',
            website: 'www.gmc.edu'
        }
    },
    'iit-engineering': {
        name: 'Indian Institute of Technology',
        type: 'Engineering',
        location: '12.0 km away',
        rating: 4.9,
        students: '8,000',
        fees: '₹90,000/year',
        description: 'Premier engineering institute known for world-class education and research excellence.',
        courses: [
            { name: 'B.Tech CSE', duration: '4 Years', seats: 100 },
            { name: 'B.Tech ECE', duration: '4 Years', seats: 80 },
            { name: 'B.Tech Mechanical', duration: '4 Years', seats: 90 },
            { name: 'M.Tech CSE', duration: '2 Years', seats: 50 }
        ],
        facilities: ['Computer Lab', 'Library', 'Hostel', 'Sports Complex', 'Research Labs', 'Incubation Center'],
        faculty: {
            total: 400,
            phd: 350,
            experience: 'Average 20 years'
        },
        placement: {
            highest: '₹2 Crore',
            average: '₹20 LPA',
            companies: ['Google', 'Microsoft', 'Amazon', 'Facebook', 'Apple']
        },
        contact: {
            phone: '+91 111 222 3333',
            email: 'admission@iit.edu',
            website: 'www.iit.edu'
        }
    },
    'gac-arts': {
        name: 'Government Arts College',
        type: 'Arts & Science',
        location: '4.5 km away',
        rating: 3.8,
        students: '3,200',
        fees: '₹12,000/year',
        description: 'Established arts college offering quality education in humanities and sciences.',
        courses: [
            { name: 'B.A History', duration: '3 Years', seats: 120 },
            { name: 'B.A Economics', duration: '3 Years', seats: 100 },
            { name: 'B.Sc Chemistry', duration: '3 Years', seats: 80 },
            { name: 'B.Com', duration: '3 Years', seats: 150 }
        ],
        facilities: ['Library', 'Science Lab', 'Auditorium', 'Canteen', 'Sports', 'WiFi'],
        faculty: {
            total: 120,
            phd: 60,
            experience: 'Average 8 years'
        },
        placement: {
            highest: '₹8 LPA',
            average: '₹3 LPA',
            companies: ['Schools', 'Banks', 'Government Offices', 'Startups']
        },
        contact: {
            phone: '+91 333 444 5555',
            email: 'info@gac.edu',
            website: 'www.gac.edu'
        }
    }
};

// View college details
function viewCollegeDetails(collegeId) {
    const college = collegeDetails[collegeId];
    if (!college) return;

    // Create modal with college details
    const modal = document.createElement('div');
    modal.className = 'college-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="college-info">
                    <h2>${college.name}</h2>
                    <div class="college-meta">
                        <span class="type-badge">${college.type}</span>
                        <span class="rating">
                            <i class="fas fa-star"></i> ${college.rating}
                        </span>
                        <span class="location">
                            <i class="fas fa-map-marker-alt"></i> ${college.location}
                        </span>
                    </div>
                </div>
                <button class="close-btn" onclick="closeCollegeModal()">&times;</button>
            </div>
            
            <div class="modal-body">
                <div class="college-section">
                    <h3>About</h3>
                    <p>${college.description}</p>
                </div>

                <div class="college-details-grid">
                    <div class="detail-card">
                        <i class="fas fa-users"></i>
                        <div>
                            <h4>Students</h4>
                            <p>${college.students}</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <i class="fas fa-rupee-sign"></i>
                        <div>
                            <h4>Annual Fees</h4>
                            <p>${college.fees}</p>
                        </div>
                    </div>
                </div>

                <div class="college-section">
                    <h3>Courses Offered</h3>
                    <div class="courses-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Course Name</th>
                                    <th>Duration</th>
                                    <th>Seats</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${college.courses.map(course => `
                                    <tr>
                                        <td>${course.name}</td>
                                        <td>${course.duration}</td>
                                        <td>${course.seats}</td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="college-section">
                    <h3>Facilities</h3>
                    <div class="facilities-grid">
                        ${college.facilities.map(facility => `
                            <div class="facility-item">
                                <i class="fas fa-check"></i>
                                <span>${facility}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="college-section">
                    <h3>Faculty Information</h3>
                    <div class="faculty-info">
                        <div class="faculty-stat">
                            <span class="stat-number">${college.faculty.total}</span>
                            <span class="stat-label">Total Faculty</span>
                        </div>
                        <div class="faculty-stat">
                            <span class="stat-number">${college.faculty.phd}</span>
                            <span class="stat-label">PhD Holders</span>
                        </div>
                        <div class="faculty-stat">
                            <span class="stat-number">${college.faculty.experience}</span>
                            <span class="stat-label">Avg Experience</span>
                        </div>
                    </div>
                </div>

                <div class="college-section">
                    <h3>Placement Highlights</h3>
                    <div class="placement-info">
                        <div class="placement-stat">
                            <span class="stat-number">${college.placement.highest}</span>
                            <span class="stat-label">Highest Package</span>
                        </div>
                        <div class="placement-stat">
                            <span class="stat-number">${college.placement.average}</span>
                            <span class="stat-label">Average Package</span>
                        </div>
                    </div>
                    <div class="top-companies">
                        <h4>Top Recruiting Companies</h4>
                        <div class="companies-list">
                            ${college.placement.companies.map(company => `<span class="company-tag">${company}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <div class="college-section">
                    <h3>Contact Information</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>${college.contact.phone}</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>${college.contact.email}</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-globe"></i>
                            <span>${college.contact.website}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn btn-primary" onclick="saveCollege('${collegeId}')">
                    <i class="fas fa-heart"></i> Save College
                </button>
                <button class="btn btn-secondary" onclick="window.open('https://${college.contact.website}', '_blank')">
                    <i class="fas fa-external-link-alt"></i> Visit Website
                </button>
                <button class="btn btn-secondary" onclick="closeCollegeModal()">Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .college-modal {
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
            max-width: 900px;
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

        .college-info h2 {
            margin: 0 0 1rem 0;
        }

        .college-meta {
            display: flex;
            gap: 1rem;
            align-items: center;
            flex-wrap: wrap;
        }

        .type-badge {
            background: rgba(255,255,255,0.2);
            color: white;
            padding: 0.25rem 0.75rem;
            border-radius: 15px;
            font-size: 0.9rem;
        }

        .rating {
            display: flex;
            align-items: center;
            gap: 0.25rem;
        }

        .location {
            display: flex;
            align-items: center;
            gap: 0.25rem;
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

        .college-section {
            margin-bottom: 2rem;
        }

        .college-section h3 {
            color: #333;
            margin-bottom: 1rem;
        }

        .college-details-grid {
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

        .courses-table {
            overflow-x: auto;
        }

        .courses-table table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .courses-table th,
        .courses-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid #e5e7eb;
        }

        .courses-table th {
            background: #f8fafc;
            font-weight: 600;
            color: #333;
        }

        .facilities-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }

        .facility-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem;
            background: #f8fafc;
            border-radius: 8px;
        }

        .facility-item i {
            color: #10b981;
        }

        .faculty-info,
        .placement-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .faculty-stat,
        .placement-stat {
            text-align: center;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 10px;
        }

        .stat-number {
            display: block;
            font-size: 1.5rem;
            font-weight: bold;
            color: #667eea;
        }

        .stat-label {
            color: #666;
            font-size: 0.9rem;
        }

        .top-companies h4 {
            margin-bottom: 1rem;
            color: #333;
        }

        .companies-list {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .company-tag {
            background: #ede9fe;
            color: #667eea;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }

        .contact-info {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 10px;
        }

        .contact-item i {
            color: #667eea;
            font-size: 1.2rem;
        }

        .modal-footer {
            padding: 1.5rem 2rem;
            background: #f8fafc;
            display: flex;
            gap: 1rem;
            justify-content: flex-end;
            flex-wrap: wrap;
        }
    `;
    document.head.appendChild(modalStyle);
}

// Close college modal
function closeCollegeModal() {
    const modal = document.querySelector('.college-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Save college to profile
function saveCollege(collegeId) {
    const userData = getFromLocalStorage('pathfinderUserData', {});
    userData.savedColleges = userData.savedColleges || [];
    
    if (!userData.savedColleges.includes(collegeId)) {
        userData.savedColleges.push(collegeId);
        saveToLocalStorage('pathfinderUserData', userData);
        showNotification('College saved to your profile!');
    } else {
        showNotification('College already saved!', 'info');
    }
    
    closeCollegeModal();
}

// Initialize colleges page
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to primary "View Details" buttons inside college cards (optional, HTML already has inline handlers)
    document.querySelectorAll('.college-card .college-actions .btn-primary, .college-card .btn-primary').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.college-card');
            if (!card) return;
            const collegeId = card.getAttribute('data-college-id') ||
                              (card.querySelector('h3') && card.querySelector('h3').textContent.toLowerCase().replace(/\s+/g, '-'));
            if (collegeId) viewCollegeDetails(collegeId);
        });
    });

    // Close modal when clicking outside the modal content
    document.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('college-modal')) {
            closeCollegeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCollegeModal();
        }
    });
});

// Make functions globally available for inline onclick handlers in HTML
window.viewCollegeDetails = viewCollegeDetails;
window.closeCollegeModal = closeCollegeModal;
window.saveCollege = saveCollege;