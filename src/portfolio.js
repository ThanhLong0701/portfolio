/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello!",
  title2: "Thanh Long",
  logo_name: "Thanh Long",
  nickname: "Thanh Long",
  full_name: "Thanh Long",
  subTitle:
    "I am a Front End Developer with 2 years of experience. I have developed many types of UI from chrome extension applications, CMS, CRM systems to microlearing platforms.",
  subTitle1: "I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces, improve the performance and intuitively implemented UX.",
  resumeLink:
    "https://drive.google.com/file/d/15q0jAemHL0OefXpZfb29uWNQI0x2wmuz/view?usp=sharing",
  mail: "lythanhlong.fetel.hcmus@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  // github: "https://github.com/hrishi1999",
  linkedin: "https://www.linkedin.com/in/hrishi-patel-ba8476140/",
  gmail: "lythanhlong.fetel.hcmus@gmail.com",
  gitlab: " ",
  facebook: "https://www.facebook.com/lythanh.long.07012001/",
  twitter: "https://twitter.com/hrishi_55",
  instagram: "https://www.instagram.com/picleric/",
};

const skills = {
  data: [
    {
      title: "FRONT-END",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and VueJS",
        "⚡ Improve site performance by implementing code optimization, which reduces load times by 30%.",
        "⚡ Collaborate with the backend team to integrate RESTful APIs and ensure seamless data flow.",
        "⚡ Developed and maintained front-end code for Microlearning platform, serving multiple countries using React.js and Redux.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },

        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },

        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },

    {
      title: "BACK-END",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Backend development using NodeJS, ExpressJS",
        "⚡ Experience hosting and managing web apps on Netlify and AWS",
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Certifications by deeplearning.ai and Stanford Online",
    //     "⚡ Experience with 10+ Projects",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#6E6E6E",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Science",
      subtitle: "Bachelor in Electronics and Telecommunications",
      logo_path: "images.png",
      alt_name: "DAL",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Majored in network telecommunications.",
        "⚡ GPA: 7.0.",
        "⚡ Worked on projects on courses like Mobile Computing and Web Technologies.",
      ],
      website_link: "https://hcmus.edu.vn/",
    },

  ],
};
const activities = {
  activities: [
    {
      title: "University of Science",
      subtitle: "Member of the Executive Committee of the Student Union",
      logo_path: "images.png",
      alt_name: "DAL",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Organize monthly events, skills activities for students.",
      ],
    },
    {
      title: "University of Science Esport Club",
      subtitle: "Member of USEC club",
      logo_path: "2.jpg",
      alt_name: "DAL",
      duration: "2019 - 2023",
      descriptions: [
        "⚡ Organize e-sports tournaments for students.",
        "⚡ Conceptualize, manage and design media products.",
      ],
    },
  ],
};
const certifications = {
  certifications: [
    {
      title: "AWS Developer Associate",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "AWS Certified Cloud Practioner",
      subtitle: "Amazon Web Services",
      logo_path: "aws.png",
      certificate_link:
        "https://www.credly.com/badges/8b2db191-702d-427c-91aa-0f926be447a6/public_url",
      alt_name: "AWS",
      color_code: "#ffc475",
    },
    {
      title: "Google Summer of Code 2019",
      subtitle: "Google / Sugar Labs",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffc475",
    },
    {
      title: "Google Code-In Student",
      subtitle: "2014-2017",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#1e70c1",
    },
    {
      title: "Google Summer of Code Mentor",
      subtitle: "2017 / 2018 / 2020",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#ffbfae",
    },
    {
      title: "Google Code-In Mentor",
      subtitle: "2017 / 2018 / 2019",
      logo_path: "google_logo.png",
      certificate_link: " ",
      alt_name: "Google",
      color_code: "#b190b0",
    },
    {
      title: "Deep Learning Specialization",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/737a9587023c666b8e6cb303157aaeba",
      alt_name: "deeplearning.ai",
      color_code: "#47A048",
    },
    {
      title: "Sequence Models",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FM5AKEZA9NUY",
      alt_name: "deeplearning.ai",
      color_code: "#F6B808",
    },
    {
      title: "Convolutional Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U8BLDNUT9UUM",
      alt_name: "deeplearning.ai",
      color_code: "#2AAFED",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/YLC25SJQKH3Y",
      alt_name: "deeplearning.ai",
      color_code: "#E2405F",
    },
    {
      title: "Machine Learning",
      subtitle: "deeplearning.ai",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/72KY93DT82MP",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/25JXRB2RWHRX",
      alt_name: "Google",
      color_code: "#7A7A7A",
    },
    {
      title: "Improving Deep Neural Networks",
      subtitle: "deeplearning.ai",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/records/PKR9M9LQ3JWC",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Android Developer Nanodegree",
      subtitle: "Part of Google India Scholarship Program",
      logo_path: "100.png",
      certificate_link: "https://graduation.udacity.com/confirm/HLE7K5V3",
      alt_name: "Google",
      color_code: "#C5E2EE",
    },
    {
      title: "InOut 4.0 Winner #2",
      subtitle: "2017",
      logo_path: "ino.png",
      certificate_link: " ",
      alt_name: "InOut",
      color_code: "#fffbf3",
    },
  ],
};

// Experience Page
const experience = {
  title: "Work Experience",
  description:
    "I have mostly completed projects on my own and am actively looking for Front End Developer job opportunities. I love organizing seminars to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",

      experiences: [
        {
          title: "Full Stack Developer",
          company: "ADS Agency",
          company_url: "https://adsagency.vn/",
          logo_path: "cropped-adsagency-logo-1.png",
          duration: "May 2023 - Present",
          location: "Ho Chi Minh City, Vietnam",
          description:
            [
              "Develop TrueAds project using Agile method to build a CRM system for about 50 businesses, helping website performance increase by 15%. ",
              "Develop prototypes and mockups for new features, enhancing consumer UI/UX experience.",
              "Integrate websites with Facebook API services to enhance user experience, increase engagement, automate message replies and comments features, and analyze sales data for Weilaya, Lavender and 50 more."
            ],
          color: "#f10000",
        },
        {
          title: "Front End Engineer",
          company: "Trainizi",
          company_url: "https://trainizi.com/",
          logo_path: "Logo IZI_Trainizi.png",
          duration: "Feb 2023 - Jan 2024",
          location: "Ho Chi Minh City, Vietnam",
          description:
            [
              "Developed and maintained front-end code for Microlearning platform, serving multiple countries using React.js and Redux.",
              "Implement responsive designs and mobile-optimized UI/UX.",
              "Collaborate with the backend team to integrate RESTful APIs and ensure seamless data flow.",
              "Improve site performance by implementing code optimization, which reduces load times by 30%.",
              "Contributed to the development of customer dashboards, providing real-time data analysis and visualization capabilities."
            ],
          color: "#2962FF",
        },
        {
          title: "Front End Developer",
          company: "Insight Lab Vietnam",
          company_url: "https://insightlab.vn/",
          logo_path: "logo-insight.png",
          duration: "Sept 2021 - Aug 2022",
          location: "Ho Chi Minh City, Vietnam",
          description:
            [
              "Execute projects related to Chrome extensions.",
              "Design web applications based on highly responsive user interfaces to sell Chrome extensions.",
              "Build reusable components and Front-End libraries for future use.",
            ],
          color: "#2962FF",
        },
      ],
    },

  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Front End Developer. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "thanhlong.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "My Resume",
    subtitle:
      "Here is my resume!!",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      name: "Trainizi",
      url: "trainizi.com",
      description: "Trainizi is an interactive microlearning platform that uses gamification and AI to train, engage, and retain deskless and officeless workers, offering triple the return on investment.",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "ADS Agency",
      url: "",
      description:
        "The software converts Facebook conversations into orders, providing sales solutions with high conversion, quick comment processing, and automated customer chat.",
        languages: [
          {
            name: "React.js",
            iconifyClass: "logos-react",
          },
          {
            name: "TypeScript",
            iconifyClass: "devicon-typescript",
          },
          {
            name: "Node.js",
            iconifyClass: "devicon-nodejs",
          },
          {
            name: "Express.js",
            iconifyClass: "devicon-express",
          },
          {
            name: "MongoDB",
            iconifyClass: "logos-mongodb",
          },
          
        ],
    },
    {
      name: "Udemy Summary with ChatGPT",
      url: "https://chromewebstore.google.com/detail/dcclmkicpmnakdmgehlbbcagfpkdpkdl?hl=vi",
      description: "Udemy summary with custom ChatGPT prompt",
      languages: [
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "SMIT",
      url: "https://chromewebstore.google.com/detail/ads-check-manager-by-smit/noaoekbohflongoiocgejbpbkgjbdedc?hl=vi",
      description: "Ads Check Manager is a solution for professional advertisers.",
      languages: [
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    // {
    //   name: "Cab Security System",
    //   url: " ",
    //   description:
    //     "Driver drowsiness detection, profanity detection, violence detection, SMS alerts, cab driver tracking.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Lensinator",
    //   url: " ",
    //   description:
    //     "Published on Play Store back in 2017, crossed 55K downloads. Performed object detection, image captioning, OCR, handwritten OCR, barcode and QR code scanning with product information.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "Doorbell.io",
    //   url: "https://github.com/Hrishi1999/Doorbell.io",
    //   description:
    //     "A sound-classifier webapp made with ReactJS + TensorflowJS.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "TensorflowJS",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Video Summarization",
    //   url: "https://github.com/Hrishi1999/Video-Summarization",
    //   description:
    //     "A video summarization webapp. A Flask-based backend which servers the Tensorflow model and a frontend made in ReactJS.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //   ],
    // },
    // {
    //   name: "Dashboard Activity",
    //   url: "https://github.com/Hrishi1999/Dashboard.activity",
    //   description:
    //     "Google Summer of Code project. A Dashboard activity for Sugar OS which tracks user activity so user can know where they use their most time and where they create most files.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Pickle",
    //   url: " ",
    //   description:
    //     "An app similar to Uber Eats but targeted for Gruhudhyogs (homemade pickles and products). Order management, live order tracking, rating and reviews system, etc.",
    //   languages: [
    //     {
    //       name: "Java",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Project Health Card",
    //   url: "",
    //   description:
    //     "An aadhard-card like utility card which keeps track of all your health records suchs as: Medicines, Lab Reports, Recent Diseases, Allergies, etc.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-java",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "MongoDB",
    //       iconifyClass: "logos-mongodb",
    //     },
    //   ],
    // },
    // {
    //   name: "Food Classifier",
    //   url: " ",
    //   description:
    //     "A food classifier app using tflite which classfier over 50 Indian Dishes.",
    //   languages: [
    //     {
    //       name: "Flutter",
    //       iconifyClass: "logos-flutter",
    //     },
    //     {
    //       name: "Dart",
    //       iconifyClass: "logos-dart",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Clustering",
    //   url: " ",
    //   description:
    //     "A simple use of K-Means Clustering algorithm to sort images by automatically predicting number of classes. This can be used to clean an image dataset.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "Antivirus",
    //   url: " ",
    //   description:
    //     "A project from 2012. Made an antivirus with realtime scanning. Implemented by using comparison of md5 hashes.",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //   ],
    // },
    // {
    //   name: "Sugar on Windows",
    //   url: " ",
    //   description:
    //     "Run and setup Sugar OS to be able to run on Windows using Windows Subsystem for Linux",
    //   languages: [
    //     {
    //       name: "Visual Basic",
    //       iconifyClass: "logos-dotnet",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },
    // {
    //   name: "Object + Face Detection",
    //   url: " ",
    //   description: "2017 project. Object detection + accurate face detection.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "OpenCV",
    //       iconifyClass: "logos-opencv",
    //     },
    //   ],
    // },
    // {
    //   name: "Image Captioning with Visual Attention",
    //   url: " ",
    //   description: "Ongoing. Used MSCOCO 2014/2017 for image captioning.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Tensorflow",
    //       iconifyClass: "logos-tensorflow",
    //     },
    //     {
    //       name: "Jupyter Notebook",
    //       iconifyClass: "logos-jupyter",
    //     },
    //   ],
    // },
    // {
    //   name: "DalSocial",
    //   url: " ",
    //   description:
    //     "An Android app to meet new people in the university, organize and join events. ",
    //   languages: [
    //     {
    //       name: "Kotlin",
    //       iconifyClass: "simple-icons:kotlin",
    //       color: "#F18E33",
    //     },
    //     {
    //       name: "Android",
    //       iconifyClass: "simple-icons:android",
    //       color: "#3DDC84",
    //     },
    //     {
    //       name: "Firebase",
    //       iconifyClass: "logos-firebase",
    //     },
    //   ],
    // },
    // {
    //   name: "HalifaxFoodie",
    //   url: " ",
    //   description:
    //     "CSCI5410 Project. A multi-client recipe app for Halifax Foodies.",
    //   languages: [
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "AWS",
    //       iconifyClass: "logos-aws",
    //     },
    //     {
    //       name: "Google Cloud",
    //       iconifyClass: "logos-google-cloud",
    //     },
    //   ],
    // },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  activities,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
