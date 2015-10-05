var bio = {
  "name" : "Andy Edwards",
  "role" : "Full-stack Web Developer",
  "contacts" : {
    "email" : "edwja1@gmail.com",
    "mobile" : "515-981-6664",
    "location" : "Des Moines, IA"
  },
  "bioPic" : "images/fry.jpg",
  "welcomeMsg" : "I am a happy programmer!",
  "skills" : [ "Ruby", "Python", "HTML5", "JS" ]
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
  ]
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
      "graduated" : "1993"
    }
  ],
  "onlineCourses" : [
    {
      "title" : "Front-End Web Developer Nanodegree",
      "school" : "Udacity",
      "dates" : "2015",
      "url" : "https://www.udacity.com"
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Heartbeat",
      "dates" : "1991-1996",
      "description" : "Distributed Unix System Monitor",
      "images" : ""
    }
  ]
};

$("#header").append(HTMLheaderName.replace("%data%", bio.name));

if (bio.skills) {
  $("#header").append(HTMLskillsStart);
  bio.skills.forEach(function(skill) {
    $("#skills").append(HTMLskills.replace("%data%", skill));
  });
}

function displayWork() {
  if (work.jobs) {
    for(var i in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      $(".work-entry:last").append(
        HTMLworkEmployer.replace("%data%", work.jobs[i].employer) +
          HTMLworkTitle.replace("%data%", work.jobs[i].title)
      );
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
      $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
      $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
  }
}

displayWork();

// $('#main').append(internationalizeButton);
//
// function inName(fullname) {
//   var names = fullname.split(/ /);
//   for(var i in names) {
//     var string = names[i];
//     names[i] = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//   }
//   names[names.length - 1] = names[names.length - 1].toUpperCase();
//   return names.join(' ');
// }

projects.display = function() {
  for (var i in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
  }
}

projects.display();

$('#mapDiv').append(googleMap);
