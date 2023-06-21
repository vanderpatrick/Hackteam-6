## **_Team Rainbow Mappers_**

# Out and About: Interactive World Map of Pride Events

![Am I Responsive Screenshot](./docs/amiresponsive.png)

[Live link](https://vanderpatrick.github.io/Hackteam-6/)

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> </p>

## Table of Content

1. [Criteria](#criteria)
2. [Intro](#intro)
3. [User Experience](#user-experience)
   1. [Project Goals](#project-goals)
   2. [Target Audience](#target-audience)
   3. [User Requirements and Expectations](#user-requirements-and-expectations)
   4. [User Stories](#user-stories)
   5. [Development Planes](#development-planes)
4. [Design](#design)
   1. [Colour Scheme](#colour-scheme)
   2. [Typography](#typography)
   3. [Imagery](#imagery)
5. [Features](#features)
   1. [Design Features](#design-features)
   2. [Existing Features](#existing-features)
   3. [Features To Implement In The Future](#features-to-implement-in-the-future)
6. [Technologies Used](#technologies-used)
   1. [Main Languages Used](#main-languages-used)
   2. [Frameworks, Libraries, and Programs Used](#frameworks-libraries-and-programs-used)
7. [Testing](#testing)
   1. [Testing User Stories](#testing-user-stories)
   2. [Manual Testing](#manual-testing)
   3. [Responsiveness](#responsiveness)
   4. [Automated Testing](#automated-testing)
8. [Credits](#credits)

# 🌈 Pride Representation 🥳

![Pride Representation Banner](https://res.cloudinary.com/djdefbnij/image/upload/v1685616402/pride2023banner_s33wvv.jpg)

## Criteria

In this section, we will briefly discuss how our team addressed the applicable criteria:

- ✨ What Framework was used?
  - **Tailwind CSS** Framework for the Frontend of this Project. For the Backend, **Flask** with **PostgreSQL** database was used for the custom-made API, and a third-party API **Mapbox API** was used for the interactive map on the main page of the site.
- ✨ How innovative is the idea and project?
  - The idea was born out of the interest to have a simple and interesting way to find out information, especially the beginnings, of the Pride movement around the world. The interactive world map was the logical conclusion of that thought.
- ✨ Was the README Template used and expanded upon?
  - The README Template given at the beginning of the Hackathon was used and expanded with more detail in order to give a better picture of the complexity of the project.
- ✨ Was the GitHub Project used to plan and execute the project?
  - The GitHub Project was used to plan and execute the project.
- ✨ Is the project completed and deployed?
  - The project is completed and deployed.

## Intro

Out and About is an exciting project that aims to create an interactive world map showcasing Pride events happening across different countries. This Full Stack project focuses on promoting inclusivity, diversity, and the celebration of LGBTQ+ communities worldwide.
With the Out and About platform, users will have the opportunity to explore a dynamic map that highlights some important Pride events. By clicking on specific countries, users can access some general information about each event, including dates, locations, and event descriptions or can contribute to the project by sending updated or missing information. Out and About aims to serve as a comprehensive resource for the LGBTQ+ community and allies, fostering a sense of unity and awareness about Pride celebrations worldwide.

## User Experience

### Project Goals

The primary goal of the project is to create an interactive website which allows users to find information about key events relating to the LGBTQ+ liberation movement in different countries. Additionally, the users are encouraged to submit suggestions of events they would like to be featured on the map.

### Target Audience

- People interested in Queer history;
- People who want to learn more about liberation movements across the world;
- People identifying as a part of the LGBTQ+ community;
- People wanting to become better allies.

### User Requirements and Expectations

- An intuitive navigation system;
- A way to find relevant information easily;
- Website functions to work as expected;
- A visually appealing design;
- Accessibility.
- An easy way to contact the site owners.

### User Stories

#### **First-time user**

1. As a new user, I want to identify the purpose of the website.
2. As a new user, I want to navigate the site intuitively and with ease.
3. As a new user, I want the instructions to be easily found, clear, and concise.
4. As a new user, I want the visual content to be attractive, appealing and relevant to the site content.
5. As a new user, I want to be able to easily find more information about the project.

#### **Returning user**

1. As a returning user, I want to be able to send information about events I think should be featured on the map to the site owners.
2. As a returning user, I want to be able to view the site on a range of different devices.
3. As a returning user, I want to be able to follow the site owners on social media.

### Development Planes

In order to create an interactive website that allows the user to get useful information about the history of the Pride events in different countries, the following planes are made.

[Back to top ⇧](#)

#### Strategy

The strategy incorporates user needs as well as product objectives. This website will focus on the following target audience, divided into three main categories:

- **Roles:**

  - New users
  - Returning users

- **Demographic:**

  - All ages

- **Psychographic:**

  - Lifestyles:

    - Interest in the LGBTQ+ community
    - Interest in human rights
    - Interest in travelling and knowing about the LBTQ+ events of the country they visit

  - Personality/Attitudes:
    - Open-minded
    - Respectful
    - Inclusive
    - Supportive of diversity

The website is supposed to enable the **user** to:

- select a country by moving and clicking the mouse.
- retrieve the information on the history of the Pride movement events in a particular country.
- get the information in a form of a short text about the history and an image of the event.
- suggest a change or an update of the information on the site.

#### Scope

The scope plane defines requirements based on the goals established on the strategy plane. So, accordingly, the identified required features are broken into the following categories:

- Content Requirements:
  - The user will be looking for:
    1. the information about some significant Pride events in a particular country.
    2. the information about the interaction on the Map Page.
    3. the form by which they will be able to contribute to the info on the site.
- Functionality Requirements:
  - The user will be able to:
    1. easily navigate through the pages whether they want to know more about the site, use the world map interactively to retrieve the info, or send the contributing information.
    2. hover over the world map and select the country about which they want to retrieve the info about Pride.
    3. retrieve the Pride events in a certain country by its name in a search bar.
    4. send the information about the Pride events that aren't presented on the world map or update the existing ones by contact form.

#### Structure

The above mentioned information was organized in a site map, showing how users can navigate through the site with ease and efficiency:

<details>
<summary>Site Map</summary>

![Site Map](./docs/sitemap.png)

</details>

#### Skeleton and Wireframes

For this project, we used [Balsamiq](https://balsamiq.com/) in the initial design phase, before the coding process. This enabled us to develop the website's structure, skeleton, layout and overall look and style. We created designs for desktop, tablet and mobile screens to ensure that responsiveness was at the forefront of the application from the beginning.

<details><summary>Screenshots</summary>

<img src="docs/wireframe_desktop.png">

_Desktop Wireframes_

<img src="docs/wireframe_ipad.png">

_iPad Wireframes_

<img src="docs/wireframe_mobile.png">

_Phone Wireframes_

</details>

[Back to top ⇧](#)

### Design,Layout and Structure

#### Colour Scheme

The default colour scheme was made by [Canva Color Palette Generator](https://www.canva.com/colors/color-palette-generator/).
The colours were selected from existing Tailwind CSS classes. They were chosen as they correspond nicely with the hero image.

<details>
<summary>Colour Palette</summary>
    
![Colour Palette](./docs/colour-palette.png)

</details>

Default black and white colours were generally used for the paragraphs and text elements.

#### Typography

Fonts used on the website are from the [Google Fonts](https://fonts.google.com/), namely **Oxygen** and **Oswald**.

#### Imagery

The images are taken from different sources and are credited in the Credits of this file. The main sources were:

- [Pixabay](https://pixabay.com/) for the front face of the cards,
- [Unsplash](https://unsplash.com/) for the image for the 404 page.
- [The Pattern Library](http://thepatternlibrary.com/) for the background images.

## Features

### Design Features

Each page within the site has a consistent and responsive navigation system. The details of features on the site are detailed below.

- The **Header** with the **Navigation Bar** is positioned at the top of the page.
- The **Footer** stays at the bottom of the screen at all times, on all screen sizes. All social media links on the footer open in a new tab. They are Facebook, Twitter and GitHub pages. The copyright info quotes **© 2023 Team Out and About**.

### Existing Features

#### Frontend

- **Navigation Bar** - Appears on every page for a consistently easy and intuitive navigable system.
- **Social Media Icons** - Appearing on every page, the icons are appropriate representations of the Social Media platforms, linking users to the developers' Instagram, GitHub and Facebook accounts together with credits.
- **[Home Page](# "PAGE")** - It is in fact the About page that contains the description of the site and instructions for the Map page features.
- **[Map Page](# "MAP")** - An interactive page containing the 3d globe world map on which the user can find information about the significant Pride Events by hovering and clicking on a desired country. There is an option to search for a country by search bar that appears at the top of the world map.
- **[Contact Page](# "CONTACT")** - The page on which there's a form for a user to fill in if wanting to contribute with an update or addition to the map information.
- **[404 Page](# "404 PAGE")** - 404 error page Pride Themed .

##### Map features

**Search by country**

![Search By Country](docs/imgs/map-features/country-search.png "Search By Country")

A search box to find the information of a specific country without the need for the globe.

**Globe**

A 3rd model of Earth that can be rotated and zoomed on using a mouse or touch screen.

![Globe](docs/imgs/map-features/globe.png "Globe")

**Country Highlight on Hover**

When hovering over a country the border is highlighted with alternating colors.

![Country Highlight on Hover](docs/imgs/map-features/highlight-country.png "Country Highlight on Hover")

**Info On country on click**

When a country is clicked it will either show information related to that country that is in our database:

![Info On country on click](docs/imgs/map-features/info-on-country.png "Info On country on click")

Or return a message to ask to go to the contact page if the person has some information they would like to share:

![No Info on click](docs/imgs/map-features/if-no-info.png "No Info on click")

#### Backend

#### Database Models

A PostgreSQL database hosted on render.com was used to hold the data collected for pride events.

##### Pride Event Model

A model describing a pride-related event that happen across the world.

| Key        | Name        | Type    | Extra Info                |
| ---------- | ----------- | ------- | ------------------------- |
| PrimaryKey | id          | Integer | Unique id                 |
|            | event       | String  | Title of Event            |
|            | date        | Date    | Date event happened       |
|            | country     | String  | Country event happened in |
|            | region      | String  | Region event happened in  |
|            | description | String  | Description of event      |
|            | image_link  | String  | Link to related image     |
|            | lat         | String  |                           |
|            | long        | String  |                           |

##### Contact Event Model

A model describing the information provided through the contact form

| Key        | Name        | Type    | Extra Info                |
| ---------- | ----------- | ------- | ------------------------- |
| PrimaryKey | id          | Integer |                           |
|            | email       | String  | email of contact          |
|            | country     | String  | Country event happened in |
|            | description | String  | Description of even       |

#### API for pride events

An API was built using Flask and flask_restx to handle different queries between the website and the database. It was hosted as a Web Service on render.com. The queries and url paths are explained below.

BASE_URL = https://pride-api.onrender.com

##### Get all events

Type of HTTP request: `GET`

URL: {BASE_URL}/api/events

On a successful request it returns a status of `200` and all the events in the database as a list:

```
[
  {
    "id": 0,
    "event": "string",
    "date": "string",
    "country": "string",
    "region": "string",
    "description": "string",
    "image_link": "string",
    "lat": "string",
    "long": "string"
  },
  .
  .
  .
]
```

##### Add an event

Type of HTTP request: `POST`

URL: {BASE_URL}/api/events

Package sent with `POST` request:

```
{
  "event": "string",
  "date": "string", // in the format of '%Y-%m-%d'
  "country": "string",
  "region": "string",
  "description": "string",
  "image_link": "string",
  "lat": "string",
  "long": "string"
}
```

On a successful request it returns `200` and the newly added event with an `id`:

```
{
  "id": 0,
  "event": "string",
  "date": "string",
  "country": "string",
  "region": "string",
  "description": "string",
  "image_link": "string",
  "lat": "string",
  "long": "string"
}
```

##### Edit an existing event in the database

Type of HTTP request: `PUT`

URL: {BASE_URL}//api/events/{id}

Where `id` is the id of the event you want to edit.

Package sent with `PUT` request:

```
{
  "event": "string",
  "date": "string",
  "country": "string",
  "region": "string",
  "description": "string",
  "image_link": "string",
  "lat": "string",
  "long": "string"
}

```

Returns with status `200` and the event you just edited:

```
{
  "id": 0,
  "event": "string",
  "date": "string",
  "country": "string",
  "region": "string",
  "description": "string",
  "image_link": "string",
  "lat": "string",
  "long": "string"
}
```

##### Delete an existing event from the database

Type of HTTP request: DELETE

URL: {BASE_URL}//api/events/{id}

Where `id` is the id of the event you want to delete.

##### Search events by country

Type of HTTP request: `GET`

URL: {BASE_URL}/api/events/{country}

Where `country` is the name of the country you are searching for (currently case sensitive).

On a successful request it returns a status of `200` and all the events in the database with that country name:

```
[
  {
    "id": 0,
    "event": "string",
    "date": "string",
    "country": "string",
    "region": "string",
    "description": "string",
    "image_link": "string",
    "lat": "string",
    "long": "string"
  },
  .
  .
  .
]
```

##### Get all contact form submissions

Type of HTTP request: `GET`

URL: {BASE_URL}/api/contacts

On a successful request it returns a status of `200` and all the contact form submissions in the database as a list:

```
[
  {
    "id": 0,
    "email": "string",
    "country": "string",
    "description": "string"
  },
  .
  .
  .
]
```

##### Add contact form submission to database

Type of HTTP request: `POST`

URL: {BASE_URL}/api/contacts

The package provided with the request:

```
{
  "email": "string",
  "country": "string",
  "description": "string"
}
```

On a successful request it returns a status of `200` and the newly added contact with an `id`:

```
{
  "id": 0,
  "email": "string",
  "country": "string",
  "description": "string"
}
```

### Features to Implement in future

- **Direct info input on the map** - This feature would allow the user to pinpoint into the map and choose to add the details directly by a pop-up window. The information would be sent to the API and the admin could decide to validate it if proven credible.
- **Image display of the events** - Although planned in the database as a possibility, the display of an image related to the event recorded in the database wasn't implemented because of lack of time.

[Back to top ⇧](#)

The goal section provides a concise summary of the main objective or purpose of the project or software described in this README. It addresses the following aspects:

- ➡️ Problem Statement
- ➡️ Objective(s)
- ➡️ Target Audience
- ➡️ Benefits

## Technologies Used

### Main Languages Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML "Link to HTML Docs home page")
  - The HyperText Markup Language stands for the standard markup language for creating web pages.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS "Link to CSS Docs home page")
  - Cascading Style Sheets used for styling the user interface.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript "Link to JavaScript Docs home page")
  - A programming language used for client-side scripting and frontend development.
- [Python](https://www.python.org/ "Link to Python home page")
  - A versatile programming language used for backend development.

### Frameworks, Libraries and Programs Used

- [Tailwind CSS](https://tailwindcss.com/ "Link to Tailwind CSS home page")
  - A utility-first CSS framework for rapid UI development.
- [REST API](https://restfulapi.net/ "Link to REST API homepage")
  - A set of architectural principles for building web services.
- [Flask](https://flask.palletsprojects.com/ "Link to Flask home page")
  - A lightweight web framework written in Python for building web applications.
- [Mapbox API](https://www.mapbox.com/ "Link to Mapbox API homp page")
  - An open-source mapping platform for custom-designed maps and location-based applications.
- [Render.com](https://render.com/ "Link to Render home page")
  - A cloud platform for deploying and scaling web applications.
- [PostgreSQL](https://www.postgresql.org/ "Link to PostgreSQL home page")
  - An open-source relational database management system.
- [Flowbite](https://flowbite.com/docs/getting-started/quickstart/ "Link to Flowbite homepage")
  - Flowbite was used to create a dropdown button in the navigation bar.
- [Canva Color Palette Generator](https://www.canva.com/colors/color-palette-generator/ "Link to Canva home page")
  - Canva Color Palette Generator was used to make the initial colour palette.
- [CSS Gradient](https://cssgradient.io/)
  - CSS Gradient web app was used to make gradient colour backgrounds.
- [Google Fonts](https://fonts.google.com/ "Link to Google Fonts")
  - Google onts was used to import the fonts "xxx", into the style.css file. These fonts were used throughout the project.
- [Font Awesome](https://fontawesome.com/ "Link to FontAwesome")
  - Font Awesome was used on almost all pages throughout the website to import icons (e.g. social media icons) for UX purposes.
- [GitPod](https://gitpod.io/ "Link to GitPod homepage")
  - GitPod was used for writing code, committing, and then pushing to GitHub.
- [GitHub](https://github.com/ "Link to GitHub") - GitHub was used to store the project after pushing
- [Balsamiq](https://balsamiq.com/ "Link to Balsamiq homepage")
  - Balsamiq was used to create the wireframes during the design phase of the project.
- [Figma](https://www.figma.com/)
  - Figma was used to site map for the readme.
- [Am I Responsive?](https://ui.dev/amiresponsive "Link to Am I Responsive Homepage") - Am I Responsive was used to test responsiveness and generate a design for the mockup imagery used at the beginning of this documentation.
- [Peek](https://github.com/phw/peek)
  - Peek was used to make screencasts for the documentation.

[Back to top ⇧](#)

## Testing

### Testing User Stories

#### New User Goals:

1. As a new user, I want to identify the purpose of the website.

| **Feature** |                **Action**                 |     **Expected Result**     | **Actual Result** |
| :---------: | :---------------------------------------: | :-------------------------: | :---------------: |
|  Home Page  | Navigate to the home page and scroll down | Identify the site's purpose | Works as expected |

<details><summary>See here</summary>
<img src="docs/userstorytesting/userstory1.png">
</details>

2. As a new user, I want to navigate the site intuitively and with ease.

|                **Feature**                 |         **Action**          |     **Expected Result**      | **Actual Result** |
| :----------------------------------------: | :-------------------------: | :--------------------------: | :---------------: |
|      "Explore our World Map" buttons       | Click on the explore button |      Go to the map page      | Works as expected |
|        Links in the Navigation Bar         |       Click on links        | Go to the corresponding page | Works as expected |
| "Contribute to the Map" link in the footer |      Click on the link      | Go to the contact form page  | Works as expected |
|                  404 Page                  |   Click on the Home link    |   Return to the Home page    | Works as expected |

<details><summary>See here</summary>
<img src="docs/userstorytesting/userstoryn2.gif">
<img src="docs/userstorytesting/userstoryn2b.gif">
<img src="docs/userstorytesting/userstoryn2c.gif">
</details>

3. As a new user, I want the instructions to be easily found, clear, and concise.

|                 **Feature**                 |                       **Action**                        |  **Expected Result**  | **Actual Result** |
| :-----------------------------------------: | :-----------------------------------------------------: | :-------------------: | :---------------: |
| "Want to explore?" section on the home page |           Go to the Home page and scroll down           | Find the instructions | Works as expected |
|    "Instructions" button on the Map page    | Go to the Map page and click on the instructions button | Find the instructions | Works as expected |

<details><summary>See here</summary>
<img src="docs/userstorytesting/userstoryn3b.gif">
</details>

4. As a new user, I want the visual content to be attractive, appealing and relevant to the site content.

| **Feature** | **Action** |        **Expected Result**        |           **Actual Result**           |
| :---------: | :--------: | :-------------------------------: | :-----------------------------------: |
| CSS Styling |    N/A     | Styling consistent and attractive | Styling consistent across the website |

<details><summary>See here</summary>
<img src="docs/userstorytesting/userstory4.png">
</details>

5. As a new user, I want to be able to easily find more information about the project.

|   **Feature**    |                **Action**                 |             **Expected Result**             | **Actual Result** |
| :--------------: | :---------------------------------------: | :-----------------------------------------: | :---------------: |
|    Home Page     | Navigate to the Home page and scroll down |          Locate the main paragraph          | Works as expected |
| Read More button |            Click on the button            | Find out more information about the project | Works as expected |

<details><summary>See here</summary>
<img src="docs/userstorytesting/userstoryn5.gif">
</details>

#### Returning User Goals:

1. As a returning user, I want to be able to send information about events I think should be featured on the map to the site owners.

|                **Feature**                 |             **Action**             |   **Expected Result**    | **Actual Result** |
| :----------------------------------------: | :--------------------------------: | :----------------------: | :---------------: |
| 'Contribute to the map' link in the footer |         Click on the link          |   See the contact form   | Works as expected |
|        'Submit' link in the navbar         |         Click on the link          |   See the contact form   | Works as expected |
|                Contact form                | Fill out the form and click submit | See a 'thank you' pop-up | Works as expected |

<details><summary>See here</summary>
<img src="docs/userstorytesting/userstoryr1a.gif">
</details>

2. As a returning user, I want to be able to view the site on a range of different devices.

| **Feature** |             **Action**              |      **Expected Result**       | **Actual Result** |
| :---------: | :---------------------------------: | :----------------------------: | :---------------: |
|  Home Page  |  View the Home page on your device  | Page adapts to the screen size | Works as expected |
|  Map Page   |  View the Map page on your device   | Page adapts to the screen size | Works as expected |
| Submit Page | View the Submit page on your device | Page adapts to the screen size | Works as expected |
|  404 Page   |  View the Home page on your device  | Page adapts to the screen size | Works as expected |

3. As a returning user, I want to be able to follow the site owners on social media.

|    **Feature**     |   **Action**   | **Expected Result** | **Actual Result** |
| :----------------: | :------------: | :-----------------: | :---------------: |
| Social media icons | See the footer | Click on the icons  | Works as expected |

<details><summary>See here</summary>
<img src="docs/userstorytesting/userstoryr3.gif">
</details>

### Manual Testing

#### Common Elements Testing

Manual testing was conducted on the following elements that appear on every page:

- Clicking on the Navigation Bar's links will bring the user to the specified page.

<details>

<summary>Navbar links</summary>

![Navbar links](docs/manualtesting/navbarlinks.gif)

</details>

- Hovering over the Navigation bar elements will trigger the `hover` effect, highlighting the link for the user.

<details>
<summary>Navbar hover effect</summary>

![Navbar hover effect](docs/manualtesting/hover.gif)

</details>
     
 
- Clicking on the Social Media links will open a new tab

- Facebook

<details>
<summary>Facebook Social Media link</summary>

![LinkedIn Social Media link](./assets/readme_files/testing/facebook.gif)

- Twitter

<details>
<summary>Twitter Social Media link</summary>

![Twitter Social Media link](./assets/readme_files/testing/twitter.gif)

</details>

- GitHub

<details>
<summary>GitHub Social Media link</summary>

![GitHub Social Media link](./assets/readme_files/testing/github.gif)

</details>

</details>

[Back to top ⇧](#)

#### Home Page

- Manual testing was conducted on the elements of the [Home Page](#).

<details>
<summary>Home Page</summary>

![Home Page](docs/userstorytesting/userstoryn5.gif)

</details>

#### Map Page

- Hovering over the world map shows the country that is positioned under the mouse. By clicking on the chosen country, the modal appears with the information about the Pride event in that country. The map can be zoomed in or out.

<details>
<summary>Map hover and zoom</summary>

![Map Hover and Zoom](docs/manualtesting/maphover.gif)

</details>

- By clicking on the chosen country on the world map, the modal appears with the information about the Pride event in said country. Modal is closed on clicking the "OK" button.

<details>
<summary>Map click</summary>

![Map Hover and Click](docs/manualtesting/mapclick.gif)

</details>

#### Contact Page

- Manual testing was conducted on the Contact Page ![Contact Page](docs/manualtesting/contactmanualtest.png)

### Responsiveness

Manual testing was conducted on all three site pages for responsiveness:

- Responsiveness of Home Page.

<details>
<summary>Resposiveness - Home Page</summary>

![Responsiveness - Home Page](#)

</details>
     
- Responsiveness of Map Page.

<details>
<summary>Responsiveness - Contact Page</summary>

![Resposiveness - Map Page](#)

</details>

- Responsiveness of Contact Page.

<details>
<summary>Responsiveness - Contact</summary>

![Responsiveness - Contact Page](#)

</details>

- Responsiveness of 404 Page.

<details>
<summary>Responsiveness - 404 Page</summary>

![Responsiveness - 404 Page](#)

</details>

[Back to top ⇧](#)

### Automated Testing

#### Code Validation

The [W3C Markup Validator](https://validator.w3.org/) service was used to validate the `HTML` and `CSS` code used. The [JSHint JavaScript Code Quality Tool](https://jshint.com/) was also used to validate the site's `JS` code. Python validation was made by the Code Institute [CI Python Linter](https://pep8ci.herokuapp.com/) validation web app.

**Results:**

- Home Page

<details>
<summary>Home Page HTML Validation</summary>

[Home Page HTML Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fvanderpatrick.github.io%2FHackteam-6%2Findex.html)

</details>

- Map Page

<details>
<summary>Map Page HTML Validation</summary>

[Map Page HTML Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fvanderpatrick.github.io%2FHackteam-6%2Fmap.html)

</details>

- Contact Page

<details>
<summary>Contact Page HTML Validation</summary>

[Contact Page HTML Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fvanderpatrick.github.io%2FHackteam-6%2Fcontactform.html)

</details>

- 404 Page

<details>
<summary>404 Page HTML Validation Results</summary>

[404 Page HTML Validation Results](https://validator.w3.org/nu/?doc=https%3A%2F%2Fvanderpatrick.github.io%2FHackteam-6%2F404.html)

</details>
<br>

- CSS Stylesheet

<details>
<summary>Style Sheet Validation</summary>

![Style Sheet Validation](docs/cssvalid.png)

</details>

<br>

- JavaScript

<details>
<summary>JavaScript Validation</summary>

![JavaScript Validation](#)

</details>
<br>

- Python

<details>
<summary>Python Validation</summary>

![Python Validation](#)

</details>

#### Browser Validation

- Google Chrome

<details>
<summary>Google Chrome Validation </summary>

![Google Chrome Test Image](#)

</details>

- ...

[Back to top ⇧](#)

#### Lighthouse Validation

- Home Page

<details>
<summary>Home Page Lighthouse Validation</summary>

![Home Page Lighthouse Validation](#)

</details>

- Map Page

<details>
<summary>Map Page Lighthouse Validation</summary>

![Map Page Lighthouse Validation](#)

</details>

- Contact Page

<details>
<summary>Contact Page Lighthouse Validation</summary>

![Contact Page Lighthouse Validation](#)

</details>

- 404 Page

<details>
<summary>404 Page Lighthouse Validation</summary>

![404 Page Lighthouse Validation](#)

</details>

[Back to top ⇧](#)

## Credits

We would like to give credit to the following individuals, organizations, and resources that have contributed to the project or provided inspiration:

### Resources

### Code Features

- [Tailgrail](https://tailgrail.com/tailwind/about-us)
  - Assisted in styling the about us page
- [Kindacode](https://www.kindacode.com/article/tailwind-css-creating-a-read-more-read-less-button/)
  - Assisted in adding interactivity to the about us page
- [Daily Dev Tips](https://daily-dev-tips.com/posts/making-gradient-text-with-tailwind-css/)
  - Helped create a gradient text

### Media

#### About Us images:

- **Pride image one** - [https://images.pexels.com/photos/11677294/pexels-photo-11677294.jpeg](https://images.pexels.com/photos/11677294/pexels-photo-11677294.jpeg)
- **Pride image two** [https://images.pexels.com/photos/2907679/pexels-photo-2907679.jpeg](https://images.pexels.com/photos/2907679/pexels-photo-2907679.jpeg)

## Team **Rainbow Mappers**

- 🙌 [Paul Clarke](https://github.com/pjrclarke), _Scrum Master_ -> codename: **Mr. Cool**
- 🙌 [Patrick Alexander Lucas Van Der Flier](https://github.com/vanderpatrick), _Project Manager_ -> codename: **'dunkin' Genius**
- 🙌 [Sean Meade](https://github.com/sean-meade) -> codename: **API Wizard**
- 🙌 [Philip Whitty](https://github.com/phillywhitty) -> codename: **Art Magician**
- 🙌 [Lauren Pechey](https://github.com/pecheylauren02) -> codename: **Rainbow Hermione**
- 🙌 [Martyna Nowak](https://github.com/mmnowak) -> codename: **Supergirl**
- 🙌 [Tomislav Dukez](https://github.com/tomdu3) -> codename: **Croatian David Attenborough**
