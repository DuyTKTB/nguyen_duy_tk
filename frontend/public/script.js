// Smart Chatbot Data
const chatbotResponses = {
    'web-development': {
        message: "🚀 Tuyệt vời! Tôi chuyên phát triển website hiện đại với các công nghệ như React, Vue.js, Node.js, Python Flask. Bạn muốn xây dựng loại website nào?",
        options: [
            { text: "E-commerce", value: "ecommerce" },
            { text: "Portfolio/Business", value: "portfolio" },
            { text: "Web App", value: "webapp" },
            { text: "Landing Page", value: "landing" }
        ]
    },
    'ui-design': {
        message: "🎨 Thiết kế UI/UX là specialty của tôi! Tôi tạo ra những giao diện đẹp mắt, hiện đại và user-friendly. Bạn cần thiết kế cho dự án gì?",
        options: [
            { text: "Mobile App", value: "mobile-ui" },
            { text: "Website", value: "web-ui" },
            { text: "Dashboard", value: "dashboard-ui" },
            { text: "Brand Identity", value: "branding" }
        ]
    },
    'music-programming': {
        message: "🎵 Đây là lĩnh vực độc đáo của tôi! Tôi kết hợp âm nhạc với lập trình để tạo ra những trải nghiệm tương tác độc đáo. Bạn quan tâm đến điều gì?",
        options: [
            { text: "Interactive Audio", value: "interactive-audio" },
            { text: "Music Visualization", value: "music-viz" },
            { text: "Audio Games", value: "audio-games" },
            { text: "Sound Design", value: "sound-design" }
        ]
    },
    'consulting': {
        message: "💡 Tôi có thể tư vấn về chiến lược công nghệ, architecture, và giải pháp kỹ thuật. Bạn đang gặp challenge gì?",
        options: [
            { text: "Tech Stack", value: "tech-stack" },
            { text: "Performance", value: "performance" },
            { text: "Architecture", value: "architecture" },
            { text: "Digital Transform", value: "digital-transform" }
        ]
    },
    // Detailed responses
    'ecommerce': {
        message: "🛒 E-commerce website với payment gateway, inventory management, analytics dashboard. Timeline: 4-8 tuần. Budget estimate: 15-30M VND. Bạn có sản phẩm gì muốn bán online?",
        options: [
            { text: "Thời trang", value: "fashion" },
            { text: "Điện tử", value: "electronics" },
            { text: "Thực phẩm", value: "food" },
            { text: "Khác", value: "other" }
        ]
    },
    'portfolio': {
        message: "💼 Portfolio/Business website với design hiện đại, SEO optimization, responsive. Timeline: 2-4 tuần. Budget: 5-15M VND. Bạn thuộc lĩnh vực nào?",
        options: [
            { text: "Cá nhân", value: "personal" },
            { text: "Công ty", value: "company" },
            { text: "Dịch vụ", value: "service" },
            { text: "Startup", value: "startup" }
        ]
    },
    'webapp': {
        message: "⚡ Web Application phức tạp với database, user management, real-time features. Timeline: 6-12 tuần. Budget: 20-50M VND. Loại app nào bạn cần?",
        options: [
            { text: "CRM System", value: "crm" },
            { text: "Social Platform", value: "social" },
            { text: "Management Tool", value: "management" },
            { text: "Custom Solution", value: "custom" }
        ]
    },
    'mobile-ui': {
        message: "📱 Mobile UI design với focus vào user experience, material design principles. Tôi sẽ design wireframe, prototype và handoff cho dev. Budget: 8-20M VND.",
        options: [
            { text: "iOS App", value: "ios" },
            { text: "Android App", value: "android" },
            { text: "Cross-platform", value: "cross-platform" },
            { text: "Consultation", value: "ui-consult" }
        ]
    }
};

// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeCustomCursor();
    initializeChatbot();
    initializeNavigation();
    initializeAnimations();
    initializeInteractions();
    initializeParallax();
    initializeScrollEffects();
});

// Custom Cursor Implementation
function initializeCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Update dot position immediately
        cursorDot.style.left = mouseX + 'px';
        cursorDot.style.top = mouseY + 'px';
    });
    
    // Smooth ring animation
    function animateCursor() {
        const speed = 0.15;
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursorRing.style.left = cursorX + 'px';
        cursorRing.style.top = cursorY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .skill-card, .project-card, .quick-reply-item, .chatbot-button');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
        
        el.addEventListener('mousedown', () => {
            cursor.classList.add('cursor-click');
        });
        
        el.addEventListener('mouseup', () => {
            cursor.classList.remove('cursor-click');
        });
    });
}

// Smart Chatbot Implementation
function initializeChatbot() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const messagesContainer = document.getElementById('chatbot-messages');
    const messageInput = document.getElementById('chatbot-message-input');
    const sendButton = document.getElementById('send-message');
    const quickReplies = document.getElementById('quick-replies');
    const typingIndicator = document.getElementById('typing-indicator');
    const newMessageIndicator = document.getElementById('new-message');
    
    let isOpen = false;
    let conversationState = 'initial';
    
    // Toggle chatbot
    chatbotToggle.addEventListener('click', () => {
        isOpen = !isOpen;
        chatbotWindow.classList.toggle('open', isOpen);
        newMessageIndicator.style.display = 'none';
        
        if (isOpen) {
            messageInput.focus();
            // Welcome message after 1 second
            setTimeout(() => {
                if (conversationState === 'initial') {
                    showWelcomeMessage();
                }
            }, 1000);
        }
    });
    
    chatbotClose.addEventListener('click', () => {
        isOpen = false;
        chatbotWindow.classList.remove('open');
    });
    
    // Quick replies
    quickReplies.addEventListener('click', (e) => {
        const quickReply = e.target.closest('.quick-reply-item');
        if (quickReply) {
            const replyType = quickReply.dataset.reply;
            handleQuickReply(replyType);
        }
    });
    
    // Send message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            messageInput.value = '';
            handleUserMessage(message);
        }
    }
    
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function showWelcomeMessage() {
        setTimeout(() => {
            const welcomeMsg = `
                Xin chào! 👋 Tôi có thể giúp bạn hiểu rõ hơn về các dịch vụ của Nguyễn Duy TK:
                
                • 🔧 **Web Development** - Fullstack development
                • 🎨 **UI/UX Design** - Thiết kế hiện đại
                • 🎵 **Music Programming** - Âm nhạc + Code
                • 💡 **Tech Consulting** - Tư vấn công nghệ
                
                Bạn quan tâm đến dịch vụ nào? Hoặc có thể chat trực tiếp với tôi! 😊
            `;
            addMessage(welcomeMsg, 'bot');
            conversationState = 'welcomed';
        }, 500);
    }
    
    function handleQuickReply(replyType) {
        const response = chatbotResponses[replyType];
        if (response) {
            // Add user message
            const userMessage = document.querySelector(`[data-reply="${replyType}"] span`).textContent;
            addMessage(userMessage, 'user');
            
            // Show typing indicator
            showTyping();
            
            setTimeout(() => {
                hideTyping();
                addMessage(response.message, 'bot');
                
                if (response.options) {
                    setTimeout(() => {
                        showOptions(response.options);
                    }, 800);
                } else {
                    showContactPrompt();
                }
            }, 1500);
        }
    }
    
    function handleUserMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        showTyping();
        
        setTimeout(() => {
            hideTyping();
            
            // Simple keyword matching
            if (lowerMessage.includes('giá') || lowerMessage.includes('chi phí') || lowerMessage.includes('budget')) {
                addMessage("💰 Giá cả phụ thuộc vào độ phức tạp của dự án. Tôi có thể đưa ra estimate cụ thể sau khi hiểu rõ requirements. Bạn có thể chia sẻ chi tiết về dự án không?", 'bot');
            } else if (lowerMessage.includes('thời gian') || lowerMessage.includes('timeline') || lowerMessage.includes('bao lâu')) {
                addMessage("⏰ Timeline thường là:\n• Website đơn giản: 2-4 tuần\n• E-commerce: 4-8 tuần\n• Web App phức tạp: 6-12 tuần\n\nTùy thuộc vào scope và requirements cụ thể!", 'bot');
            } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('dự án') || lowerMessage.includes('project')) {
                addMessage("🎯 Tôi đã làm nhiều dự án thú vị:\n• E-commerce platforms\n• Music visualization tools\n• Facebook management system\n• 3D games với interactive audio\n\nBạn muốn xem demo nào không?", 'bot');
            } else if (lowerMessage.includes('công nghệ') || lowerMessage.includes('tech stack') || lowerMessage.includes('technology')) {
                addMessage("⚡ Tech stack tôi sử dụng:\n• Frontend: React, Vue.js, HTML/CSS\n• Backend: Node.js, Python Flask\n• Database: MongoDB, MySQL\n• Others: Unity, Roblox, DAW tools\n\nLựa chọn tech tùy vào requirement!", 'bot');
            } else if (lowerMessage.includes('liên hệ') || lowerMessage.includes('contact') || lowerMessage.includes('hợp tác')) {
                addMessage("📞 Tuyệt vời! Để thảo luận chi tiết về dự án, bạn có thể:\n\n• Email: [email của TK]\n• Phone: [số điện thoại]\n• Facebook: [link Facebook]\n\nHoặc click button 'Liên Hệ Hợp Tác' ở cuối trang!", 'bot');
            } else {
                // General response
                addMessage("🤔 Thú vị! Tôi hiểu bạn muốn tìm hiểu thêm. Có thể bạn muốn:\n\n• Xem portfolio của tôi\n• Thảo luận về một dự án cụ thể\n• Tìm hiểu về tech stack\n• Hỏi về giá cả và timeline\n\nBạn muốn nói chuyện về điều gì?", 'bot');
            }
            
            setTimeout(() => {
                showContactPrompt();
            }, 2000);
        }, 1200);
    }
    
    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        
        const avatar = document.createElement('div');
        avatar.classList.add('message-avatar');
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        const messageText = document.createElement('p');
        messageText.innerHTML = content.replace(/\n/g, '<br>');
        
        const messageTime = document.createElement('span');
        messageTime.classList.add('message-time');
        messageTime.textContent = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
        
        messageContent.appendChild(messageText);
        messageContent.appendChild(messageTime);
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Show new message indicator if chatbot is closed
        if (!isOpen && sender === 'bot') {
            newMessageIndicator.style.display = 'block';
        }
    }
    
    function showOptions(options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('message', 'bot-message');
        
        const avatar = document.createElement('div');
        avatar.classList.add('message-avatar');
        avatar.innerHTML = '<i class="fas fa-robot"></i>';
        
        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        
        const optionsContainer = document.createElement('div');
        optionsContainer.style.cssText = 'display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;';
        
        options.forEach(option => {
            const optionButton = document.createElement('button');
            optionButton.textContent = option.text;
            optionButton.style.cssText = `
                background: rgba(139, 92, 246, 0.2);
                border: 1px solid rgba(139, 92, 246, 0.3);
                color: rgba(255, 255, 255, 0.9);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-size: 0.85rem;
            `;
            
            optionButton.addEventListener('mouseenter', () => {
                optionButton.style.background = 'rgba(139, 92, 246, 0.3)';
                optionButton.style.transform = 'translateY(-2px)';
            });
            
            optionButton.addEventListener('mouseleave', () => {
                optionButton.style.background = 'rgba(139, 92, 246, 0.2)';
                optionButton.style.transform = 'translateY(0)';
            });
            
            optionButton.addEventListener('click', () => {
                handleQuickReply(option.value);
                optionsContainer.style.display = 'none';
            });
            
            optionsContainer.appendChild(optionButton);
        });
        
        messageContent.appendChild(optionsContainer);
        optionsDiv.appendChild(avatar);
        optionsDiv.appendChild(messageContent);
        
        messagesContainer.appendChild(optionsDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function showContactPrompt() {
        setTimeout(() => {
            addMessage("💬 Bạn còn câu hỏi nào khác không? Hoặc ready để start dự án rồi? 🚀", 'bot');
        }, 3000);
    }
    
    function showTyping() {
        typingIndicator.style.display = 'flex';
    }
    
    function hideTyping() {
        typingIndicator.style.display = 'none';
    }
    
    // Auto greeting after 5 seconds if not opened
    setTimeout(() => {
        if (!isOpen) {
            newMessageIndicator.style.display = 'block';
        }
    }, 5000);
}

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbar = document.querySelector('.navbar');
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initializeAnimations() {
    // Add stagger animation to elements
    const animatedElements = document.querySelectorAll('[class*="fade"]');
    
    animatedElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add special animations for different card types
                if (entry.target.classList.contains('skill-card')) {
                    entry.target.style.transform = 'translateY(0) scale(1)';
                }
                
                if (entry.target.classList.contains('project-card')) {
                    setTimeout(() => {
                        entry.target.style.transform = 'translateY(0) scale(1)';
                    }, 200);
                }
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const observeElements = document.querySelectorAll('.skill-card, .project-card, .intro-card, .mission-card');
    observeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Logo particles animation
    animateLogoParticles();
}

function animateLogoParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        setInterval(() => {
            particle.style.transform = `translateY(${Math.random() * 20 - 10}px) translateX(${Math.random() * 20 - 10}px)`;
        }, 2000 + index * 500);
    });
}

function initializeInteractions() {
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .intro-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-12px) scale(1.02)';
            
            // Add glow effect for skill cards
            if (this.classList.contains('skill-card')) {
                const glow = this.querySelector('.card-glow');
                if (glow) {
                    glow.style.opacity = '0.4';
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            
            // Remove glow effect
            if (this.classList.contains('skill-card')) {
                const glow = this.querySelector('.card-glow');
                if (glow) {
                    glow.style.opacity = '0';
                }
            }
        });
    });

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .nav-link');
    buttons.forEach(button => {
        button.addEventListener('click', createRipple);
    });

    // Logo click animation
    const logoContainer = document.querySelector('.logo-container');
    if (logoContainer) {
        logoContainer.addEventListener('click', function() {
            const logoCore = document.querySelector('.logo-core');
            logoCore.style.transform = 'scale(0.95)';
            setTimeout(() => {
                logoCore.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Skill tag hover effects
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function createRipple(event) {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 100;
    `;
    
    // Add ripple animation
    if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function handleContact() {
    const button = event.target.closest('.contact-button');
    const buttonText = button.querySelector('.button-text');
    const buttonIcon = button.querySelector('.button-icon');
    const originalText = buttonText.textContent;
    const originalIcon = buttonIcon.className;
    
    // Add loading state
    buttonText.textContent = 'Đang xử lý...';
    buttonIcon.className = 'fas fa-spinner fa-spin button-icon';
    button.disabled = true;
    button.style.background = 'linear-gradient(135deg, #6366f1, #8b5cf6)';
    
    // Simulate contact action
    setTimeout(() => {
        buttonText.textContent = 'Đã gửi thành công!';
        buttonIcon.className = 'fas fa-check button-icon';
        button.style.background = 'linear-gradient(135deg, #10b981, #06d6a0)';
        
        // Add success animation
        button.style.transform = 'scale(1.05)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 200);
        
        setTimeout(() => {
            buttonText.textContent = originalText;
            buttonIcon.className = originalIcon;
            button.disabled = false;
            button.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
        }, 3000);
    }, 1500);
}

// Parallax effect for background elements
function initializeParallax() {
    const circles = document.querySelectorAll('.floating-circle');
    
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        
        circles.forEach((circle, index) => {
            const speed = (index + 1) * 0.1;
            const yPos = -(scrolled * speed);
            circle.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    }, 16));
}

// Scroll effects
function initializeScrollEffects() {
    window.addEventListener('scroll', throttle(() => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        // Parallax for logo decoration
        const logoDecoration = document.querySelector('.logo-decoration');
        if (logoDecoration) {
            logoDecoration.style.transform = `translateY(${rate * 0.1}px) rotate(${scrolled * 0.05}deg)`;
        }
        
        // Dynamic glow effects
        const cards = document.querySelectorAll('.skill-card, .project-card');
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isVisible) {
                const visibility = 1 - Math.abs(rect.top - window.innerHeight / 2) / (window.innerHeight / 2);
                card.style.borderColor = `rgba(139, 92, 246, ${0.1 + visibility * 0.3})`;
            }
        });
    }, 16));
}

// Performance optimization: Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focused = document.activeElement;
        if (focused.classList.contains('contact-button')) {
            e.preventDefault();
            handleContact();
        }
        if (focused.classList.contains('nav-link')) {
            e.preventDefault();
            focused.click();
        }
    }
    
    // Navigation with arrow keys
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        const navLinks = Array.from(document.querySelectorAll('.nav-link'));
        const currentIndex = navLinks.findIndex(link => link.classList.contains('active'));
        
        if (e.key === 'ArrowDown' && currentIndex < navLinks.length - 1) {
            navLinks[currentIndex + 1].click();
        } else if (e.key === 'ArrowUp' && currentIndex > 0) {
            navLinks[currentIndex - 1].click();
        }
    }
});

// Mouse cursor effects
document.addEventListener('mousemove', function(e) {
    // Create trailing effect for interactive elements
    const interactiveElements = document.querySelectorAll('.skill-card:hover, .project-card:hover');
    
    interactiveElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        element.style.background = `
            radial-gradient(circle at ${x}% ${y}%, 
                rgba(139, 92, 246, 0.1) 0%, 
                rgba(255, 255, 255, 0.03) 50%
            )
        `;
    });
});

// Loading animation for page
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll progress indicator
function addScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #8b5cf6, #ec4899);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
addScrollProgress();