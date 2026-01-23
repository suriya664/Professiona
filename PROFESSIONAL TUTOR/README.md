# 🎓 Professional Tutor Directory - TutorHub

A comprehensive multi-page website system for connecting students with verified tutors. Built with HTML, CSS (Bootstrap 5), and JavaScript following a strict 3-color design system.

## 🎨 Design System

### Color Palette
- **Deep Navy** - `#0B132B` (Main background, authority, education feel)
- **Pure White** - `#F9FAFB` (Text, cards, clarity)  
- **Scholar Gold** - `#F4C430` (CTAs, highlights, active states)

### Usage Rules
- **70% Navy** - Primary backgrounds and sections
- **25% White** - Cards, text content, overlays
- **5% Gold** - Buttons, icons, borders, ratings, hover effects

## 📁 Project Structure

```
PROFESSIONAL TUTOR/
├── index.html              # Home Page 1 - Trusted Academy Mode
├── home2.html              # Home Page 2 - Student Dashboard Mode
├── find-tutors.html        # Find Tutors with filters
├── tutor-profile.html      # Detailed tutor profile page
├── subjects.html           # Subject categories and learning paths
├── blog.html               # Blog/Resources page
├── login.html              # User login page
├── register.html           # User registration page
├── dashboard.html          # User dashboard (student/tutor)
├── css/
│   └── styles.css          # Main stylesheet with design system
├── js/
│   └── main.js             # Main JavaScript functionality
└── README.md               # This file
```

## 🧭 Main Navigation

- **Home** - Trusted Academy landing page
- **Home 2** - Student Dashboard preview mode
- **Find Tutors** - Advanced search with filters
- **Subjects** - Browse by subject categories
- **How It Works** - Platform explanation
- **Reviews** - User testimonials
- **Blog/Resources** - Educational content
- **Dashboard** - User control panel

## 🏠 Home Pages

### Home Page 1 - Trusted Academy Mode
- **Hero Section**: Academic welcome with search functionality
- **Featured Subjects**: Mathematics, Science, Coding, Languages, Test Prep
- **Top Tutors**: Verified tutor profiles with ratings
- **Trust & Verification**: Security features showcase
- **Student Success Stats**: Animated counters
- **CTA Banner**: Call-to-action for registration

### Home Page 2 - Student Dashboard Mode
- **Learning Console**: Stats dashboard
- **How It Works Timeline**: 4-step process visualization
- **Learning Categories**: School, College, Professional, Competitive Exams, Hobby Learning
- **Popular Tutors Near You**: Location-based recommendations

## 🔍 Find Tutors Page
- **Advanced Filters**: Subject, price, rating, availability, mode, experience
- **Tutor Grid**: Detailed tutor cards with booking options
- **Map View Toggle**: Geographic visualization (UI mock)
- **Sort Options**: Relevance, rating, price, experience, reviews
- **Quick Search**: Subject and location-based search

## 👨‍🏫 Tutor Profile Page
- **Profile Header**: Avatar, verification badges, stats
- **About Section**: Detailed tutor information
- **Subjects Taught**: Specialization areas
- **Experience Timeline**: Professional background
- **Availability Calendar**: Booking interface
- **Reviews & Ratings**: Student feedback
- **Booking Modal**: Session scheduling system

## 📚 Subjects Page
- **Learning Paths**: Structured educational journeys
- **Subject Categories**: 6 main categories with sub-topics
- **Featured Tutors**: Subject-matter experts
- **Search Functionality**: Find specific subjects
- **Interactive Cards**: Hover effects and animations

## 📰 Blog/Resources Page
- **Article Categories**: Study Tips, Career Guidance, Exam Strategies, Learning Tools
- **Featured Articles**: Educational content with engagement metrics
- **Learning Resources**: Downloadable templates and guides
- **Newsletter Subscription**: Content updates
- **Search & Filter**: Find relevant content

## 🔐 Authentication System

### Login Page
- **Email/Phone Login**: Flexible authentication
- **Password Toggle**: Show/hide password
- **Remember Me**: Session persistence
- **Social Login**: Google and Facebook integration (UI)
- **Forgot Password**: Recovery flow
- **Split Design**: Features showcase + login form

### Register Page
- **Role Selection**: Student vs Tutor signup
- **Form Validation**: Real-time feedback
- **Password Strength Meter**: Visual security indicator
- **Conditional Fields**: Role-specific information
- **Terms & Conditions**: Legal compliance
- **Social Registration**: Quick signup options

## 📊 User Dashboard

### Student Modules
- **Overview**: Stats and upcoming sessions
- **My Sessions**: Booking history and management
- **Saved Tutors**: Favorite instructors
- **Learning Progress**: Subject-wise tracking
- **Messages**: Tutor communication
- **Payments**: Transaction history
- **Settings**: Profile management

### Tutor Modules (UI Structure)
- **Session Requests**: Booking management
- **Availability Calendar**: Schedule management
- **Earnings**: Revenue tracking
- **Student Reviews**: Feedback management
- **Profile Manager**: Information updates

## ✨ Premium UI Features

### Academic Motion System
- **Scroll Reveal**: Content animations on scroll
- **Parallax Hero**: Depth effects
- **Gold Shimmer Hover**: Subtle glow animations
- **Micro-interactions**: Button states, form feedback

### Interactive Elements
- **Magnetic CTA Buttons**: Hover attraction effects
- **Star Rating Pulse**: Animated rating displays
- **Booking Confirmation**: Success animations
- **Page Transitions**: Smooth navigation effects

### Dashboard Effects
- **Card Slide-in**: Content loading animations
- **Toast Notifications**: User feedback system
- **Progress Ring Loaders**: Visual loading states
- **Skeleton Cards**: Content placeholder animations

### Performance Optimizations
- **Lazy Loading**: Tutor images and content
- **GPU Acceleration**: Smooth hover effects
- **Debounced Search**: Optimized filtering
- **Throttled Scroll**: Performance-friendly animations

## 🛠 Technologies Used

- **HTML5**: Semantic markup structure
- **Bootstrap 5**: Responsive grid system and components
- **Font Awesome 6**: Icon library
- **Vanilla JavaScript**: Interactive functionality
- **CSS3**: Animations and transitions
- **CSS Variables**: Design system implementation

## 🎯 Key Features

### User Experience
- **Responsive Design**: Mobile-first approach
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized loading and animations
- **Cross-browser Compatibility**: Modern browser support

### Business Logic
- **Search & Filtering**: Advanced tutor discovery
- **Booking System**: Session scheduling
- **User Authentication**: Secure login/registration
- **Review System**: Trust and reputation building
- **Payment Integration**: Transaction processing (UI)

### Content Management
- **Blog System**: Educational content delivery
- **Resource Library**: Downloadable materials
- **Subject Organization**: Structured learning paths
- **User Profiles**: Detailed information display

## 🚀 Getting Started

1. **Clone/Download** the project files
2. **Open** `index.html` in your web browser
3. **Navigate** through the different pages using the menu
4. **Explore** the features and interactions

## 📱 Mobile Responsiveness

The website is fully responsive and works seamlessly across:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🎨 Customization

### Modifying Colors
Update the CSS variables in `css/styles.css`:
```css
:root {
    --navy: #0B132B;
    --white: #F9FAFB;
    --gold: #F4C430;
}
```

### Adding New Pages
1. Create new HTML file in root directory
2. Include navigation and footer components
3. Link to `css/styles.css` and `js/main.js`
4. Add menu item to navigation

### Customizing Animations
Modify animation keyframes in `css/styles.css` or add new ones for custom effects.

## 🔧 Browser Support

- **Chrome** 60+
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

## 📄 License

This project is for educational and demonstration purposes.

---

**Built with ❤️ for the education community**
