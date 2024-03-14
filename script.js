// Create Resume in JSON format

var resume = {
    "name": "Abhijith Shreyas.S",
    "contact": 
    {
      "phone": "8754903263",
      "email": "shreoffl@gmail.com",
      "linkedin": "linkedin.com/abhijith",
      "github": "github.com/abhijith"
    },
    "summary": "Results-oriented professional with proficiency in HTML, CSS and Javascript, committed to continuous learning. Strong analytical thinker and communicator with presentation and time management skills coupled with an ability to work within a team or individually.",
    "education": [
      {
        "degree": "MCA",
        "field": "Computer Science and IT",
        "duration": "2021-2023",
        "institution": "Jain Deemed to be University",
        "gpa": "7.83 / 10.00"
      },
      {
        "degree": "M.Sc",
        "field": "Zoology",
        "duration": "2019-2021",
        "institution": "Presidency College",
        "gpa": "9.0 / 10.00"
      },
      {
        "degree": "B.Sc",
        "field": "Zoology",
        "duration": "2016-2019",
        "institution": "Madras Christian College",
        "gpa": "7.7 / 10.00"
      },
      {
        "degree": "Class XII",
        "duration": "2015-2016",
        "institution": "Velammal Matriculation Higher Secondary School",
        "percentage": "71.25"
      }
    ],
    "skills": {
      "programming_languages": ["HTML", "CSS", "Javascript", "Python"],
      "technologies": ["Ionic Framework"],
      "tools": ["Microsoft Word", "Excel", "Powerpoint", "Blogger", "Figma"],
      "core_competencies": ["Technical Support", "Installation", "Maintenance and Upgrades", "IT Hardware/Software Support", "Troubleshooting", "Escalation Handling", "Team Coordination", "Problem-Solving", "Attention to Detail"],
      "languages_known": ["English", "Tamil", "Malayalam"]
    },
    "projects": [
      {
        "name": "GreenBite-Fictional Organic Delivery Website",
        "description": "Designed an organic food delivery website with a clean and visually appealing interface. The emphasis on user-friendly navigation and a modern aesthetic ensures an effective presentation.",
        "tools_used": ["Figma"],
        "view_prototype": "Figma View Prototype"
      },
      {
        "name": "Ecommerce Website Development",
        "description": "Developed an E-commerce application for buying clothes and accessories involving the successful frontend development.",
        "tools_used": ["HTML", "CSS", "Javascript"],
        "github_link": "Github Link"
      },
      {
        "name": "Portfolio Website",
        "description": "Developed a distinguished personal portfolio using HTML and CSS to showcase skills, certifications, education and projects. Prioritized a polished and engaging user experience with interactive elements, enhancing overall presentation.",
        "tools_used": ["HTML", "CSS"],
        "github_link": "Github Link",
        "view_website": "View website"
      }
    ],
    "certifications":[
      {
        "name": "Mastering Figma: Beginner to Expert UI/UX Design",
        "provider": "GUVI",
        "view_certificate": "View Certificate",
        "certificate_id": "ID-7Z7t3C06eR61564A0B"
      },
      {
        "name": "Build iOS, Android and Web Apps using Angular and Ionic",
        "provider": "UDEMY",
        "view_certificate": "View Certificate",
        "certificate_id": "ID-UC-d7e9e269-1064-42f0-b5de-3ae749f4a30a"
      },
      {
        "name": "Programming with Python",
        "provider": "Internshala",
        "view_certificate": "View Certificate",
        "certificate_id": "ID-A2B99BB5-06BD-46AB-C746-783B6C8C949B"
      }
    ]
  }
  
//for Loop
  console.log("Education:");
for (var i = 0; i < resume.education.length; i++) {
  var edu = resume.education[i];
  console.log("- Degree: " + edu.degree);
  console.log("  Field: " + edu.field);
  console.log("  Duration: " + edu.duration);
  console.log("  Institution: " + edu.institution);
  if (edu.gpa) {
    console.log("  GPA: " + edu.gpa);
  } else if (edu.percentage) {
    console.log("  Percentage: " + edu.percentage);
  }
}

//for...in Loop
console.log("Education:");
for (var index in resume.education) {
  var edu = resume.education[index];
  console.log("- Degree: " + edu.degree);
  console.log("  Field: " + edu.field);
  console.log("  Duration: " + edu.duration);
  console.log("  Institution: " + edu.institution);
  if (edu.gpa) {
    console.log("  GPA: " + edu.gpa);
  } else if (edu.percentage) {
    console.log("  Percentage: " + edu.percentage);
  }
}

//for...of Loop
console.log("Education:");
for (var edu of resume.education) {
  console.log("- Degree: " + edu.degree);
  console.log("  Field: " + edu.field);
  console.log("  Duration: " + edu.duration);
  console.log("  Institution: " + edu.institution);
  if (edu.gpa) {
    console.log("  GPA: " + edu.gpa);
  } else if (edu.percentage) {
    console.log("  Percentage: " + edu.percentage);
  }
}

//for...each Loop
console.log("Education:");
resume.education.forEach(function(edu) {
  console.log("- Degree: " + edu.degree);
  console.log("  Field: " + edu.field);
  console.log("  Duration: " + edu.duration);
  console.log("  Institution: " + edu.institution);
  if (edu.gpa) {
    console.log("  GPA: " + edu.gpa);
  } else if (edu.percentage) {
    console.log("  Percentage: " + edu.percentage);
  }
});

 
