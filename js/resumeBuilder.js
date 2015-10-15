var bio = {
  "name" : "Andy Edwards",
  "role" : "Full-stack Web Developer",
  "contacts" : {
    "mobile" : "515-981-6664",
    "email" : "edwja1@gmail.com",
    "github" : "edwja",
    "twitter" : "@edwja",
    "location" : "Des Moines, IA"
  },
  "welcomeMessage" : "I am a happy programmer!",
  "biopic" : "images/fry.jpg",
  "skills" : [ "Ruby", "Python", "HTML5", "JavaScript" ],

  "display" : function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", this.name));

    $("[id$=Contacts]").append(HTMLmobile.replace("%data%", this.contacts.mobile));
    $("[id$=Contacts]").append(HTMLemail.replace("%data%", this.contacts.email));
    $("[id$=Contacts]").append(HTMLgithub.replace("%data%", this.contacts.github));
    $("[id$=Contacts]").append(HTMLtwitter.replace("%data%", this.contacts.twitter));
    $("[id$=Contacts]").append(HTMLlocation.replace("%data%", this.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    $("#header").append(HTMLskillsStart);
    this.skills.forEach(function(skill) {
      $("#skills").append(HTMLskills.replace("%data%", skill));
    });
  }
};

var education = {
  "schools" : [
    {
      "name" : "Tufts University",
      "location" : "Medford, MA",
      "degree" : "Bachelor of Science",
      "majors" : [ "Computer Science" ],
      "dates" : "1984-1986",
      "graduated" : "1987",
      "url" : "http://www.tufts.edu"
    },
    {
      "name" : "Iowa State University",
      "location" : "Ames, IA",
      "degree" : "Master of Science",
      "majors" : [ "Computer Science" ],
      "dates" : "1987-1993",
      "graduated" : "1993",
      "url" : "http://www.iastate.edu"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "https://www.udacity.com"
    }
  ],
  "display" : function() {
    this.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolNameDegree = HTMLschoolName.replace("%data%", school.name).replace("#", school.url)+HTMLschoolDegree.replace("%data%", school.degree);
      $(".education-entry:last").append(formattedSchoolNameDegree);
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
      school.majors.forEach(function(major) {
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
      })
    });
    $("#education").append(HTMLonlineClasses);
    this.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);
      var formattedCourseTitleAndSchool = HTMLonlineTitle.replace("%data%", course.title) +
                                          HTMLonlineSchool.replace("%data%", course.school);
      $(".education-entry:last").append(formattedCourseTitleAndSchool);
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", course.dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", course.url));
    });
  }
};

var work = {
  "jobs" : [
    {
      "title" : "VP Administration",
      "employer" : "Edwards Graphic Arts, Inc.",
      "dates" : "1999-Present",
      "location" : "Des Moines, IA",
      "description" : "Accounting duties"
    },
    {
      "title" : "Software Engineer",
      "employer" : "NewMonics Inc.",
      "dates" : "1996-1999",
      "location" : "Ames, IA",
      "description" : "Software Development, QA"
    }
  ],
  "display" : function() {
    this.jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(
        HTMLworkEmployer.replace("%data%", job.employer) +
          HTMLworkTitle.replace("%data%", job.title)
      );
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", job.dates));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
    })
  }
};

var projects = {
  "projects" : [
    {
      "title" : "Heartbeat",
      "dates" : "1991-1996",
      "description" : "Distributed Unix System Monitor",
      "images" : []
    }
  ],
  "display" : function() {
    this.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.title));
      $(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
    })
  }
};


bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
