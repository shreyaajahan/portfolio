const data = {
  nav: [
    {id:'home', label:'Home'},
    {id:'projects', label:'Projects'},
    {id:'skills', label:'Skills'},
    {id:'summary', label:'Summary'},
    {id:'contact', label:'Contact'}
  ],
  hero: {
    name: 'Shreyaa J',
    title: 'Web Developer',
    subtitle: 'Building modern, responsive web apps with React, Node.js & Firebase',
    ctas: [
      {label:'View Projects', href:'#projects'},
      {label:'Contact Me', href:'#contact'}
    ]
  },
  about: {
    intro: `Motivated learner committed to applying skills, delivering meaningful results, and continuously growing within a dynamic organization.`,
    profile: {
      src: '/src/assets/profile-illustration.svg',
      alt: 'Profile Illustration'
    }
  },
  resume: {
    objective: `Motivated learner committed to applying skills, delivering meaningful results, and continuously growing within a dynamic organization.`,
    education: [
      {
        title: 'B.Tech Information Technology',
        school: 'KONGU ENGINEERING COLLEGE',
        cgpa: '8.63',
        years: '2023-2027'
      },
      {
        title: 'Higher Secondary (HSC)',
        school: 'SRI VANI MATRIC HR.SEC.SCHOOL',
        percent: '93%',
        years: '2022-2023'
      },
      {
        title: 'Secondary School (SSLC)',
        school: 'SRIVANI MATRIC HR.SEC.SCHOOL',
        years: '2019-2020'
      }
    ],
    certifications: [
      'Oracle Apex Cloud Developer',
      'Oracle AI Foundations Associate'
    ],
    areasOfInterest: [
      'Database Management System',
      'Object Oriented Programming System'
    ],
    responsibilities: [
      'Class Representative (5th SEM)',
      'Joint Treasurer (IT Association 2025-2026)',
      'Executive Member (IT Association 2024-2025)'
    ],
    achievements: [
      'Won 2nd Prize in Project Presentation conducted by CSI in KEC',
      'Achieved 3rd Prize in Paper Presentation titled Blue Eyes Technology',
      'Secured top 5 in HSC'
    ]
  },
  projects: [
    {
      id: 'book-nook',
      title: 'QUIZ APP',
      desc: 'Developed a full-stack Quiz Management System using React.js, Node.js, Express.js, and MongoDB. Implemented secure user authentication with JWT and bcrypt, role-based access control for Admin and User functionalities, and features such as quiz participation, score tracking, quiz history, and leaderboard management. Deployed the application using Vercel and Render.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT','bcrypt', 'VS Code'],
      demo: '',
      github: 'https://quiz-app-plum-nu.vercel.app/'
    },
    {
      id: 'job-portal',
      title: 'JOB PORTAL',
      desc: 'Job searching and recruitment platform with secure auth, media management, and application tracking.',
      tech: ['React','Node.js','MongoDB'],
      demo: 'https://job-portal-client-three-psi.vercel.app/',
      github: ''
    },
    {
      id: 'finance-tracker',
      title: 'FINANCE TRACKER',
      desc: 'Track, categorize and analyze expenses with persistence and insightful summaries.',
      tech: ['React','Next.js','Drizzle ORM'],
      demo: 'https://finance-tracker-three-flame.vercel.app/',
      github: ''
    }
  ],
  skills: ['Node.js','MongoDB','Firebase','HTML & CSS','JavaScript','React.js','C','JAVA','C++'],
  contact: {
    email: 'shreyaajahan@gmail.com',
    linkedin: 'https://www.linkedin.com/in/shreyaa-j-357128295/',
    github: 'https://github.com/shreyaajahan',
    leetcode: 'https://leetcode.com/u/shreyaaj/',
    phone: '9842484828'
  }
}

export default data
