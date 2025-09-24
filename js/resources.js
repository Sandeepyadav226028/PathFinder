// Resource details data
const resourceDetails = {
    'math-engineering': {
        title: 'Complete Mathematics for Engineering',
        type: 'E-Book',
        subject: 'Mathematics',
        format: 'PDF',
        size: '25 MB',
        pages: 450,
        author: 'Dr. R.K. Sharma',
        downloads: 12500,
        rating: 4.8,
        description: 'Comprehensive guide covering all mathematical concepts required for engineering studies including calculus, linear algebra, differential equations, and numerical methods.',
        chapters: [
            'Calculus Fundamentals',
            'Linear Algebra',
            'Differential Equations',
            'Complex Analysis',
            'Numerical Methods',
            'Probability and Statistics',
            'Vector Calculus',
            'Fourier Series'
        ],
        features: [
            'Step-by-step solutions',
            'Practice problems with answers',
            'Engineering applications',
            'Visual illustrations',
            'Formula quick reference'
        ],
        previewUrl: '#',
        downloadUrl: '#'
    },
    'physics-videos': {
        title: 'Physics Video Lectures',
        type: 'Video Course',
        subject: 'Physics',
        format: 'MP4',
        size: '2.3 GB',
        duration: '24 Hours',
        author: 'Prof. Anita Gupta',
        downloads: 8900,
        rating: 4.6,
        description: 'Complete video series covering fundamental physics concepts with practical demonstrations and real-world applications.',
        chapters: [
            'Mechanics - 8 hours',
            'Thermodynamics - 4 hours',
            'Electromagnetism - 6 hours',
            'Optics - 3 hours',
            'Modern Physics - 3 hours'
        ],
        features: [
            'HD quality videos',
            'Interactive animations',
            'Real-world examples',
            'Practice problems',
            'Downloadable notes'
        ],
        previewUrl: '#',
        downloadUrl: '#'
    },
    'organic-chemistry': {
        title: 'Organic Chemistry Simplified',
        type: 'E-Book',
        subject: 'Chemistry',
        format: 'PDF',
        size: '18 MB',
        pages: 320,
        author: 'Dr. S. Patel',
        downloads: 6750,
        rating: 4.7,
        description: 'Easy-to-understand guide to organic chemistry with detailed mechanisms, reaction pathways, and examples.',
        chapters: [
            'Basic Concepts',
            'Hydrocarbons',
            'Functional Groups',
            'Reaction Mechanisms',
            'Stereochemistry',
            'Spectroscopy',
            'Bio-organic Chemistry'
        ],
        features: [
            'Color-coded mechanisms',
            '3D molecular structures',
            'Reaction flowcharts',
            'Memory aids',
            'Practice questions'
        ],
        previewUrl: '#',
        downloadUrl: '#'
    },
    'cell-biology': {
        title: 'Cell Biology Presentations',
        type: 'Presentation',
        subject: 'Biology',
        format: 'PPTX',
        size: '45 MB',
        slides: 150,
        author: 'Dr. M. Kumar',
        downloads: 4200,
        rating: 4.5,
        description: 'Comprehensive slide deck covering cell structure, functions, and processes with detailed diagrams and explanations.',
        chapters: [
            'Cell Structure',
            'Cell Membrane',
            'Cell Organelles',
            'Cell Division',
            'Cellular Metabolism',
            'Cell Signaling',
            'Cell Cycle'
        ],
        features: [
            'High-quality diagrams',
            'Animated slides',
            'Detailed explanations',
            'Summary points',
            'Review questions'
        ],
        previewUrl: '#',
        downloadUrl: '#'
    },
    'python-guide': {
        title: 'Python Programming Guide',
        type: 'Programming',
        subject: 'Computer Science',
        format: 'ZIP',
        size: '12 MB',
        files: 50,
        author: 'Tech Academy',
        downloads: 15800,
        rating: 4.9,
        description: 'Complete Python programming tutorial with examples, exercises, and projects for beginners and advanced learners.',
        chapters: [
            'Python Basics',
            'Data Structures',
            'Object-Oriented Programming',
            'File Handling',
            'Exception Handling',
            'Modules and Packages',
            'GUI Programming',
            'Web Development',
            'Data Science with Python'
        ],
        features: [
            'Code examples',
            'Practice exercises',
            'Mini projects',
            'Cheat sheets',
            'Video tutorials'
        ],
        previewUrl: '#',
        downloadUrl: '#'
    },
    'calculus-problems': {
        title: 'Calculus Problem Sets',
        type: 'Practice Set',
        subject: 'Mathematics',
        format: 'PDF',
        size: '8 MB',
        problems: 200,
        author: 'Math Department',
        downloads: 9300,
        rating: 4.4,
        description: 'Collection of calculus problems with detailed solutions and explanations covering limits, derivatives, and integrals.',
        chapters: [
            'Limits and Continuity',
            'Derivatives',
            'Applications of Derivatives',
            'Integration',
            'Applications of Integration',
            'Sequences and Series',
            'Multivariable Calculus'
        ],
        features: [
            'Step-by-step solutions',
            'Multiple difficulty levels',
            'Hints and tips',
            'Common mistakes',
            'Formula reference'
        ],
        previewUrl: '#',
        downloadUrl: '#'
    }
};

// Download resource
function downloadResource(resourceId) {
    const resource = resourceDetails[resourceId];
    if (!resource) return;

    // Simulate download
    showNotification('Download started...', 'info');
    
    // Update user data
    const userData = getFromLocalStorage('pathfinderUserData', {});
    userData.downloadedResources = userData.downloadedResources || [];
    
    if (!userData.downloadedResources.includes(resourceId)) {
        userData.downloadedResources.push(resourceId);
        saveToLocalStorage('pathfinderUserData', userData);
    }

    // Simulate download progress
    setTimeout(() => {
        showNotification(`${resource.title} downloaded successfully!`, 'success');
    }, 2000);
}

// Preview resource
function previewResource(resourceId) {
    const resource = resourceDetails[resourceId];
    if (!resource) return;

    // Create modal with resource preview
    const modal = document.createElement('div');
    modal.className = 'resource-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="resource-info">
                    <h2>${resource.title}</h2>
                    <div class="resource-meta">
                        <span class="type-badge">${resource.type}</span>
                        <span class="subject-badge">${resource.subject}</span>
                        <span class="rating">
                            <i class="fas fa-star"></i> ${resource.rating}
                        </span>
                    </div>
                </div>
                <button class="close-btn" onclick="closeResourceModal()">&times;</button>
            </div>
            
            <div class="modal-body">
                <div class="resource-section">
                    <h3>Description</h3>
                    <p>${resource.description}</p>
                </div>

                <div class="resource-details-grid">
                    <div class="detail-card">
                        <i class="fas fa-file"></i>
                        <div>
                            <h4>Format</h4>
                            <p>${resource.format}</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <i class="fas fa-weight"></i>
                        <div>
                            <h4>Size</h4>
                            <p>${resource.size}</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <i class="fas fa-download"></i>
                        <div>
                            <h4>Downloads</h4>
                            <p>${resource.downloads.toLocaleString()}</p>
                        </div>
                    </div>
                    <div class="detail-card">
                        <i class="fas fa-user"></i>
                        <div>
                            <h4>Author</h4>
                            <p>${resource.author}</p>
                        </div>
                    </div>
                </div>

                <div class="resource-section">
                    <h3>Contents</h3>
                    <div class="contents-list">
                        ${resource.chapters.map((chapter, index) => `
                            <div class="content-item">
                                <div class="content-number">${index + 1}</div>
                                <div class="content-title">${chapter}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="resource-section">
                    <h3>Features</h3>
                    <div class="features-grid">
                        ${resource.features.map(feature => `
                            <div class="feature-item">
                                <i class="fas fa-check"></i>
                                <span>${feature}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="resource-section">
                    <h3>Preview</h3>
                    <div class="preview-container">
                        <div class="preview-placeholder">
                            <i class="fas fa-file-alt"></i>
                            <p>Preview not available in demo mode</p>
                            <p>Download the full resource to access complete content</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn btn-primary" onclick="downloadResource('${resourceId}')">
                    <i class="fas fa-download"></i> Download Now
                </button>
                <button class="btn btn-secondary" onclick="closeResourceModal()">Close</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .resource-modal {
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

        .resource-info h2 {
            margin: 0 0 1rem 0;
        }

        .resource-meta {
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

        .subject-badge {
            background: #10b981;
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

        .resource-section {
            margin-bottom: 2rem;
        }

        .resource-section h3 {
            color: #333;
            margin-bottom: 1rem;
        }

        .resource-details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
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

        .contents-list {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .content-item {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: #f8fafc;
            border-radius: 8px;
            transition: transform 0.2s ease;
        }

        .content-item:hover {
            transform: translateX(5px);
        }

        .content-number {
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

        .content-title {
            font-weight: 500;
            color: #333;
        }

        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }

        .feature-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem;
            background: #f8fafc;
            border-radius: 8px;
        }

        .feature-item i {
            color: #10b981;
        }

        .preview-container {
            background: #f8fafc;
            border-radius: 10px;
            padding: 3rem;
            text-align: center;
            border: 2px dashed #e5e7eb;
        }

        .preview-placeholder i {
            font-size: 3rem;
            color: #667eea;
            margin-bottom: 1rem;
        }

        .preview-placeholder p {
            color: #666;
            margin: 0.5rem 0;
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

// Close resource modal
function closeResourceModal() {
    const modal = document.querySelector('.resource-modal');
    if (modal) {
        document.body.removeChild(modal);
    }
}

// Initialize resources page
document.addEventListener('DOMContentLoaded', () => {
    // Close modal when clicking outside the modal content
    document.addEventListener('click', (e) => {
        if (e.target.classList && e.target.classList.contains('resource-modal')) {
            closeResourceModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeResourceModal();
        }
    });
});

// Make functions globally available for inline handlers or other scripts
window.previewResource = previewResource;
window.downloadResource = downloadResource;
window.closeResourceModal = closeResourceModal;