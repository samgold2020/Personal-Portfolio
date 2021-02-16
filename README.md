[![Netlify Status](https://api.netlify.com/api/v1/badges/37def81a-da64-4124-bdf3-3798eb93a693/deploy-status)](https://app.netlify.com/sites/sam-goldstein/deploys)

<!-- PROJECT LOGO -->
<br />

  <h3 align="center">Personal Portfolio</h3>

<p align="center">
  <a href="https://sam-goldstein.netlify.app/">
    <img src="https://media.giphy.com/media/lN1MSFi7bgPjLItYeU/giphy.gif" alt="Personal Portfolio Gif" width="800" height="600">
    <br/>
  </a>
    <a href="https://github.com/samgold2020/Personal-Portfolio"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/samgold2020/Personal-Portfolio">View Demo</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Report Bug</a>
    ·
    <a href="https://github.com/othneildrew/Best-README-Template/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <!-- <li><a href="#contributing">Contributing</a></li> -->
    <!-- <li><a href="#license">License</a></li> -->
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

This is a personal portfolio built to showcase my projects, provide links to their respective repositories and hosted sites, and facilitate contact with me through Netlify forms. 
### Built With

* [React](https://reactjs.org/)
* [Styled Components](https://styled-components.com/)
* [React Icons](https://react-icons.github.io/react-icons/)

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.
* [React](https://reactjs.org/)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install
  ```
### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/samgold2020/Personal-Portfolio
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
## Usage

The projects carousel displays the next project.id when the arrow is clicked 
```
//set state for current project, initialize at zero
 const [current, setCurrent] = useState(0);
 const length = slides.length

 //create a function for nextSlide onClick
 const nextSlide = () => {
   //Create a ternary for setting state, if it reaches the end set it back to zero, otherwise add one to the current slide.length
   setCurrent(current === length - 1 ? 0 : current + 1);
 };

//create a function for the previousSlide onClick
 const prevSlide = () => {
   setCurrent(current === 0 ? length - 1 : current - 1);
 };

 //If there is no data or the data is not an array, return null
 if(!Array.isArray(slides) || slides.length <= 0){
   return null;
 }
 ```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/samgold2020/Personal-Portfolio/issues) for a list of proposed features (and known issues).

<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Styled Components](https://styled-components.com/)
* [React Icons](https://react-icons.github.io/react-icons/)
* [Animate On Scroll](https://michalsnik.github.io/aos/)
* [Chicago Skyline Image](https://www.motionplaces.com/chicago-dusk-timelapse-free-stock-footage/)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)

<!-- CONTACT -->
## Contact

Sam Goldstein - [@twitter](https://twitter.com/@sgoldstein92) - sgoldstein312@gmail.com

Project Link: [https://github.com/your_username/repo_name](https://sam-goldstein.netlify.app/)

