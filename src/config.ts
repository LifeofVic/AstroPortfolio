// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Victor Llapa | Portfolio';
export const SITE_DESCRIPTION = 'Welcome to my website!';


export const bio = {
name: "Victor Llapa", 
title: "Software Engineer",
about: "Currently partaking in a 20 week course at Prime Digital Academy, currently on my 17th week."
}

export const workHistoryInfo = {
experience: [
{
name: "Prime Digital Academy",
position: "Student Software Engineer",
location: "Minneapolis, Minnesota",
description: "A 20 week accelerated program with emerging skills sets to prepare individuals for the Tech Industry in Software Development.",
startDate: "Sep 2022",
endDate: "Present"
},
{
name: "Johnstech International",
position: "Shipping Clerk",
location: "Minneapolis, Minnesota",
description: "Shipped semiconductor products domestically and internationally with proper paper works. Receive incoming shipments and properly handle inventory on a weekly, monthly and quarterly basis. Assisted the Accounting department to properly manage any discrepancies with inventory logs.",
startDate: "Nov 2021",
endDate: "Aug 2022"
}
,{
name: "Johnstech International",
position:"Assembler",
location: "Minneapolis, Minnesota",
description:"Assembled semiconductor products using telescopes and hand tools to piece together larger components. Quality checks were conducted to meet company standards. Worked coherently with others to properly get products done and utilizing proper time management.",
startDate:"Jan 2020",
endDate: "Nov 2021"
}
],
education:[
{
name: "Prime Digital Academy",
title: "Student",
location: "Minneapolis, Minnesota",
description: "An accelerated course consisting of 20 weeks which go over skills used in the Technology Industry. Gaining experience in group work as well as individual work. Prime helps individuals grasp the knowledge in various tools to create, maintain and debug code.",
startDate: "Sep 2022",
endDate: "Present"
},
{
name: "Augsburg University",
title: "Student",
location: "Minneapolis, Minnesota",
description: "Completed 3 years towards the Bachelors Degree in Computer Science, working with Java.",
startDate: "Aug 2014",
endDate: "May 2018"
}


]

}  

//Start of projects list

export const builds = {
projects: [
{
name: "Gym Ready",
description:"A mobile first app that allows users to browse through exercises saved on the database, by filtering through muscle groups which then is filtered through muscle targeted. Gym Ready brings confidence to users by displaying the correct way each exercise is executed with animations. Gym Ready is made possible by utilizing Javascript, React, React Saga, Express.js, Node.js, Passport, HTML, PostgreSQL, HTML, CSS and Material UI.", 
image: ' '
},
{
name: 'Plug-N-Play',
description: "Plug n Play is a mobile first application designed to help users who are new to the video game atmosphere view game recommendations that are tailored to their personal interests. Plug-N-Play will provide the ability to personalize recommendations appropriately based on a questionnaire taken upon registering. Once a questionnaire is completed, the user will start to receive recommendation based on their interests. The user will be able to swipe left to ignore games and swipe right to add it to their wishlist list, there the user will be able to dislike or like the games which will impact the algorithm to readjust the games being displayed in their recommendation section.",
},
{
name: "Movie Saga",
description:"This project is a Movie Listing that will show the poster and title of the movie. When an user clicks on the image of the movie the user will be redirected to the details page. The details page will contain the movie's genre associated to it and the description of the movie. The user will also have a back button that will redirect the user to the homepage and select a new movie.", 
},
{
name: "Feedback-Redux Survey",
description:"Create a form that utilizes pages for each user input needed to complete the survey. The values for each input will have to be recorded and then reviewed at the end of the survey to then send stored in the database.", 
},



]

}
