export interface Project {
    id: string;
    category: "Web" | "Mobile" | "AI" | "ML" | "CLI";
    title: string;
    description: string;
    image: string;
    link: string;
    github?: string;
    tech: string[];
    failures?: string;
    lessons?: string;
}

export const projectsData: Project[] = [
    // Web
    {
        id: "elay-beauty",
        category: "Web",
        title: "ELAY Beauty",
        description: "Premium hair braiding, natural styling, and children's care by EL.AY Beauty. Where artistry meets effortless booking.",
        image: "/ELAY Beauty.png",
        link: "https://elay-beauty.vercel.app/",
        tech: ["React", "Tailwind CSS"],
        failures: "Faced challenges optimizing high-resolution imagery for fast load times without sacrificing the premium visual aesthetic required for a beauty brand.",
        lessons: "Mastered advanced image optimization and lazy loading techniques, significantly boosting performance scores while maintaining pristine visual fidelity."
    },
    {
        id: "ilesure",
        category: "Web",
        title: "ilesure Website",
        description: "The Website and Web Application for an Apartment Listing Platform in Ibadan, Nigeria. This robust platform enables property owners to list their apartments and helps home seekers find ideal living spaces effortlessly. Built with Next.js and integrated with comprehensive search and filtering capabilities, it features modern glassmorphism styling and smooth GSAP animations for a premium user experience.",
        image: "/ilesure.png",
        link: "https://ilesure.com",
        github: "https://github.com/mojojompe/",
        tech: ["Next.js", "TailwindCss", "TypeScript", "Gsap"],
        failures: "Initially struggled with complex state management across search filters, leading to sluggish UI updates and animation stuttering.",
        lessons: "Refactored global state handling and optimized component re-renders, ensuring the glassmorphism animations ran at a buttery-smooth 60fps."
    },
    {
        id: "Model-dashboard",
        category: "Web",
        title: "Loan Approver and Home Prediction Dashboard",
        description: "The Frontend Dashboard for the Loan Approver and Home Prediction Models that predicts house prices and loan approvals using Classification and Regression. It serves as an intuitive interface connecting end-users to complex machine learning APIs in the backend. Users can input specific property details or financial metrics to instantly receive real-time evaluations and data-driven insights.",
        image: "/Model Dashboard.png",
        link: "https://github.com/mojojompe",
        github: "https://github.com/mojojompe/SQI-Ai",
        tech: ["Python", "Django", "Html5", "CSS3"],
        failures: "The backend ML APIs frequently timed out when processing dense financial metrics from multiple concurrent users.",
        lessons: "Implemented asynchronous request polling and engaging frontend loading skeletons, keeping the UX responsive while models processed predictions."
    },
    {
        id: "reportam",
        category: "Web",
        title: "ReportAm",
        description: "A web app where residents report and track community problems in Oyo State, Nigeria. Built with a focus on civic engagement, this platform uses real-time updates and interactive maps to keep both citizens and government officials informed of reported issues and their resolution status.",
        image: "/Reportam.png",
        link: "https://reportam.vercel.app",
        github: "https://github.com/mojojompe/Reportam",
        tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        failures: "Integrating real-time interactive maps caused severe memory leaks when rapidly navigating between different community reports.",
        lessons: "Learned to properly clean up and unmount map instances, ensuring a stable and efficient geographical mapping experience."
    },
    {
        id: "medicare",
        category: "Web",
        title: "MediCare",
        description: "Digital healthcare platform bridging the gap between healthcare providers and patients. Features include appointment scheduling, virtual consultations, secure patient records, and real-time chat functionality, all wrapped in a sleek, accessible user interface.",
        image: "/Medicare.png",
        link: "https://medicare-home.vercel.app",
        github: "https://github.com/mojojompe/Medicare",
        tech: ["TypeScript", "React", "Node.js", "Express.js"],
        failures: "Real-time chat functionality experienced message drops during network latency spikes, risking crucial patient communication.",
        lessons: "Built a robust client-side message queue with automatic retry logic to guarantee the delivery of vital doctor-patient interactions."
    },
    {
        id: "campus-tech",
        category: "Web",
        title: "Campus Tech Group",
        description: "Built the frontend of a student collaboration portal using HTML, CSS and JavaScript. This project focuses on pure frontend optimization, responsive design, and providing an accessible platform for university students to share resources and collaborate on assignments.",
        image: "/CampusTech.png",
        link: "https://campus-tech-group.vercel.app/",
        github: "https://github.com/mojojompe/Campus-Tech",
        tech: ["HTML", "CSS", "JS"],
        failures: "Developing a strictly frontend architecture made reliable persistence of collaborative session data highly problematic.",
        lessons: "Gained a deep understanding of browser storage limitations and engineered the UI to gracefully handle state hydration limits."
    },
    {
        id: "goftem",
        category: "Web",
        title: "Goftem Stores",
        description: "Built with Next.js, MongoDB, Express.js and Node.js. Allows users to browse products, make payments and track orders. It includes an integrated admin dashboard for inventory management, dynamic product routing, and secure Stripe payment processing.",
        image: "/Goftem.png",
        link: "https://goftemstores.vercel.app",
        github: "https://github.com/mojojompe",
        tech: ["Next.js", "MongoDB", "Express", "Node.js"],
        failures: "The initial Stripe checkout integration occasionally triggered duplicate charge attempts when impatient users double-clicked the payment button.",
        lessons: "Secured transactions by adding idempotency keys and strict frontend button debouncing to ensure flawless payment processing."
    },

    // Mobile
    {
        id: "ilesure-app",
        category: "Mobile",
        title: "ilesure Mobile App",
        description: "The mobile application for an Apartment Listing Platform in Ibadan, Nigeria. This robust platform enables property owners to list their apartments and helps home seekers find ideal living spaces effortlessly.",
        image: "/ilesure_app.png",
        link: "https://ilesure.com",
        github: "https://github.com/mojojompe/",
        tech: ["React Native", "Expo"],
        failures: "Translating the web version's glassmorphism UI directly to React Native caused massive frame drops on older Android devices.",
        lessons: "Engineered adaptive UI fallbacks that render lightweight visuals on lower-end devices while preserving the premium aesthetic on capable hardware."
    },
    {
        id: "reportam-app",
        category: "Mobile",
        title: "ReportAm Mobile App",
        description: "A mobile app where residents report and track community problems in Oyo State, Nigeria. Built with a focus on civic engagement, this platform uses real-time updates and interactive maps.",
        image: "/ReportAm copy.png",
        link: "https://reportam.vercel.app",
        github: "https://github.com/mojojompe/Reportam",
        tech: ["React Native", "MongoDB"],
        failures: "Handling offline submissions for rural community reports led to permanent data loss if the app was closed before regaining connection.",
        lessons: "Architected a persistent local SQLite queue that automatically and silently syncs to MongoDB whenever network connectivity is restored."
    },
    {
        id: "saferoute-app",
        category: "Mobile",
        title: "Safe Route Ai Mobile App",
        description: "Helps users choose safer walking and driving routes by scoring paths based on risk and environment. Combines historical crime data, real-time lighting information, and pedestrian density.",
        image: "/Safe Route Ai_app.png",
        link: "https://safe-route-ai.vercel.app",
        github: "https://github.com/mojojompe/Safe-Route-Ai",
        tech: ["React Native", "Mapbox", "Expo"],
        failures: "Continuously rendering heavy Mapbox data layers over prolonged navigation sessions rapidly drained device batteries.",
        lessons: "Dramatically improved efficiency by clustering map markers and aggressively throttling geodata updates based on the user's velocity."
    },
    {
        id: "eduplanner",
        category: "Mobile",
        title: "EduPlanner",
        description: "Student productivity app built with React Native, Node.js and MongoDB to help students organize tasks. Features customizable daily schedules, assignment reminders, and analytics to track study progress. Offline-first architecture ensures it works without internet access.",
        image: "/Eduplanner.jpg",
        link: "https://edu-planner-home.vercel.app",
        github: "https://github.com/mojojompe",
        tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
        failures: "The offline-first synchronization engine occasionally produced destructive conflicts when syncing schedules across a student's phone and tablet.",
        lessons: "Designed a precise timestamp-based conflict resolution algorithm to accurately and non-destructively merge multi-device database changes."
    },

    // AI
    {
        id: "outbreakiq",
        category: "AI",
        title: "OutbreakIQ",
        description: "AI powered health Intelligence system that tracks, monitors and predicts disease outbreaks across Nigeria. Processes massive datasets from various health agencies to visualize outbreak hotspots and predict spread trajectories using deep learning algorithms.",
        image: "/OutbreakIQ.png",
        link: "https://github.com/mojojompe/",
        github: "https://github.com/folabas/",
        tech: ["Numpy", "Tensorflow", "Next.js"],
        failures: "Training the predictive deep learning model on massive nationwide health datasets initially took days, hindering rapid iteration.",
        lessons: "Modernized the training pipeline to leverage distributed TensorFlow, drastically shrinking model convergence times and allowing agile updates."
    },
    {
        id: "finalytics",
        category: "AI",
        title: "Finalytics",
        description: "Real time market visualisation and Ai powered price predictions using LSTM neural networks. Provides traders with actionable insights, sentiment analysis from financial news, and highly accurate forecasting models for stock and crypto markets.",
        image: "/Finalytics.png",
        link: "https://market-finalytics.vercel.app",
        github: "https://github.com/mojojompe/finalytics",
        tech: ["LSTM", "Python", "React"],
        failures: "The LSTM networks suffered from extreme overfitting on historical stock data, causing poor predictions on highly volatile trading days.",
        lessons: "Introduced advanced dropout layers and fused the data stream with real-time NLP sentiment analysis to make the model resilient to market shocks."
    },
    {
        id: "saferoute",
        category: "AI",
        title: "Safe Route Ai",
        description: "Helps users choose safer walking and driving routes by scoring paths based on risk and environment. Combines historical crime data, real-time lighting information, and pedestrian density to generate the optimal safe route, completely integrated with Mapbox.",
        image: "/SafeRoute.png",
        link: "https://safe-route-ai.vercel.app",
        github: "https://github.com/mojojompe/Safe-Route-Ai",
        tech: ["React", "Node.js", "Raindrop API", "Mapbox", "MongoDB"],
        failures: "The risk-scoring algorithm weighed historical crime statistics too heavily, penalizing newly developed and heavily lit safe pathways.",
        lessons: "Refined the heuristic by blending real-time environmental data—like street lighting—with history to generate perfectly balanced safety routes."
    },

    // ML
    {
        id: "homeprediction",
        category: "ML",
        title: "Lagos State Home Price Prediction Model",
        description: "A Regression Model built with Random Forest to estimate real estate prices in Lagos based on property features. Trained on scraped housing data, the model accounts for location, amenities, and market trends to deliver highly accurate property valuations.",
        image: "/Home Prediction.png",
        link: "https://www.kaggle.com/models/emmanueljompe/lagos-state-house-price-prediction",
        github: "https://github.com/mojojompe/SQI-Ai",
        tech: ["Python", "Random Forest", "Regression"],
        failures: "The Random Forest model struggled to generalize prices for extreme outliers, specifically luxury estates in rapidly gentrifying areas.",
        lessons: "Applied a logarithmic transformation on the price target variable and engineered specific neighborhood trend features to drastically boost accuracy."
    },
    {
        id: "loanapprover",
        category: "ML",
        title: "Loan Approver Model",
        description: "A Classification Model utilizing Random Forest to determine if a loan application should be approved or denied. Evaluates credit history, income, and debt-to-income ratios to mitigate risk for financial institutions while ensuring fair lending practices.",
        image: "/Loan Approver.png",
        link: "https://www.kaggle.com/models/emmanueljompe/loan-approver-model",
        github: "https://github.com/mojojompe/SQI-Ai",
        tech: ["Python", "Random Forest", "Classification"],
        failures: "The early classification model inadvertently demonstrated bias against certain demographic features that were tightly correlated with income levels.",
        lessons: "Conducted rigorous feature importance analysis to strip out biased proxies, ensuring the model's decisions were both fair and regulatory compliant."
    },
    {
        id: "tips",
        category: "ML",
        title: "Restaurant Tips Prediction Model",
        description: "A Machine Learning Model built to predict the amount a customer Tips. Uses variables such as bill total, day of the week, and party size to output expected gratuity, demonstrating core regression concepts in scikit-learn.",
        image: "/Tips.png",
        link: "https://www.kaggle.com/models/emmanueljompe/restaurant-tips-prediction",
        github: "https://github.com/mojojompe/SQI-Ai",
        tech: ["Python", "Scikit-learn", "Regression"],
        failures: "Basic linear regression entirely failed to capture the non-linear relationship between large party sizes and gratuity during weekend dinner rushes.",
        lessons: "Upgraded to an ensemble approach and incorporated specific time-of-day feature engineering to successfully capture complex human tipping patterns."
    },
    {
        id: "creditscoring",
        category: "ML",
        title: "Credit Scoring Model",
        description: "A machine learning model designed to predict creditworthiness based on applicant data. Focuses on robust feature engineering and hyperparameter tuning to ensure accurate and unbiased scoring.",
        image: "/Credit Scoring Code.png",
        link: "/",
        github: "https://github.com/mojojompe/CodeAlpha_Tasks",
        tech: ["Python", "Scikit-learn", "Random Forest"],
        failures: "Hyperparameter tuning using exhaustive grid search was unbearably slow and consumed excessive computational resources.",
        lessons: "Transitioned to RandomizedSearchCV and Bayesian optimization, yielding a superior model configuration in a mere fraction of the original computing time."
    },
    {
        id: "diseasepred",
        category: "ML",
        title: "Disease Prediction Model",
        description: "A disease prediction system utilizing ensemble learning techniques. Analyzes patient symptoms and historical medical records to predict the likelihood of specific diseases, aiding doctors in early diagnosis.",
        image: "/Disease Prediction Code.png",
        link: "/",
        github: "https://github.com/mojojompe/CodeAlpha_Tasks",
        tech: ["Ensemble Learning", "Python"],
        failures: "The complex ensemble model acted as a 'black box', making medical professionals deeply hesitant to trust its unexplainable disease predictions.",
        lessons: "Integrated SHAP (SHapley Additive exPlanations) to provide crystal-clear, interpretable feature contributions, which immediately drove clinical adoption."
    },
    {
        id: "charrecogn",
        category: "ML",
        title: "Handwritten Character Recognition Model",
        description: "Deep learning project for recognizing handwritten characters using CNNs. Trained on the MNIST dataset and extended to custom handwriting, achieving over 98% accuracy on test data.",
        image: "/Character Recognition Code.png",
        link: "/",
        github: "https://github.com/mojojompe/CodeAlpha_Tasks",
        tech: ["CNN", "Deep Learning", "Tensorflow"],
        failures: "The CNN severely overfitted to the pristine MNIST dataset, completely failing when tasked with recognizing messy, real-world custom handwriting.",
        lessons: "Implemented aggressive data augmentation protocols (rotations, scaling, noise injection) to force the model to become highly robust against varied scripts."
    },

    // CLI
    {
        id: "bank-cli",
        category: "CLI",
        title: "Bank Management System",
        description: "A command line interface for a bank. Allows users to create accounts, deposit, withdraw, and transfer funds securely. Implements a robust SQL database backend to ensure ACID compliance for all transactions.",
        image: "/Bank CLI.png",
        link: "https://github.com/mojojompe",
        github: "https://github.com/mojojompe",
        tech: ["Python", "SQL", "OOP"],
        failures: "Managing simultaneous transfers resulted in dangerous race conditions where user account balances updated incorrectly.",
        lessons: "Enforced strict SQL transaction isolation levels and row-level locking to absolutely guarantee ACID compliance during concurrent operations."
    },
    {
        id: "ayla",
        category: "CLI",
        title: "AYLA Voice Assistant",
        description: "Voice assistant using pyttsx3 and Speech Recognition. Performs actions and speaks responses, allowing users to open applications, search the web, and control system settings entirely via voice commands.",
        image: "/AYLA Voice Assistant.png",
        link: "https://github.com/mojojompe/Voice-Assistant-Demo",
        github: "https://github.com/mojojompe/Voice-Assistant-Demo",
        tech: ["Python", "pyttsx3"],
        failures: "The core speech recognition library struggled immensely with local accent variations, leading to incredibly frustrating command misinterpretations.",
        lessons: "Configured adaptive energy thresholds and integrated a highly forgiving NLP parser to interpret and execute ambiguous voice inputs gracefully."
    },
    {
        id: "facrec",
        category: "CLI",
        title: "Facial Recognition Software",
        description: "Uses Tkinter GUI for face-recognition attendance. Implements image capture, training and live tracking to automate attendance logging for schools or offices.",
        image: "/FR Software.png",
        link: "https://github.com/mojojompe/PYTHON",
        github: "https://github.com/mojojompe/PYTHON",
        tech: ["OpenCV", "Tkinter", "Pandas"],
        failures: "The facial recognition model was hypersensitive to ambient lighting, failing to authenticate users in dimly lit environments.",
        lessons: "Engineered an automated preprocessing pipeline using OpenCV for real-time histogram equalization before feeding frames to the neural network."
    },
    {
        id: "clinic",
        category: "CLI",
        title: "Clinic Management System",
        description: "Comprehensive CLI-based Clinic Management System featuring patient and doctor management. Handles appointment scheduling, prescription tracking, and generates detailed medical history reports.",
        image: "/CLI code.png",
        link: "https://github.com/mojojompe/Clinic-Management-System",
        github: "https://github.com/mojojompe/Clinic-Management-System",
        tech: ["Python", "Sqlite", "OOP"],
        failures: "The terminal interface grew overly complex, making it extremely difficult for non-technical clinic administrative staff to navigate.",
        lessons: "Redesigned the command architecture around intuitive, numbered menus with failsafe validation prompts to guarantee a foolproof user experience."
    }
];
