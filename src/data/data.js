import EndlessWinterMashup from "../img/EndlessWinterMobile.png";
import KhanProject from "../img/Khan.ProjectMobile.png";
import Kamchatka from "../img/KamchatkaToursMobile.png";
import Unic from "../img/UnicMobile.png";
import Reali from "../img/RealiMobile.png";
import Crypto from "../img/CryptoMobile.png";
import Trillo from "../img/TrilloMobile.png";
import ToDo from "../img/ToDoMobile.png";
import Flash from "../img/flash-outline.svg";
import Smartphone from "../img/smartphone-outline.svg";
import Bulb from "../img/bulb-outline.svg";
import Activity from "../img/activity-outline.svg";
import Code from "../img/code-outline.svg";
import Search from "../img/search-outline.svg";
import Layers from "../img/layers-outline.svg";
import Shield from "../img/shield-outline.svg";

const data = {
    "projects": [
        {   
            "id": 1,
            "route": "endless_winter_project",
            "name": "Endless Winter Project",
            "small_description": "A website presenting the Endless Winter company from Austria.",
            "image": EndlessWinterMashup
        },
        {   
            "id": 2,
            "route": "khanproject",
            "name": "Khan.Project Portfolio Website",
            "small_description": "A website in two languages presenting a Czech architectural bureau.",
            "image": KhanProject
        },
        {   
            "id": 3,
            "route": "kamchatka_tours",
            "name": "Kamchatka Tours Landing Page",
            "small_description": "A landing page presenting the offer of a Kamchatka travel agency.",
            "image": Kamchatka
        },
        {   
            "id": 4,
            "route": "unic_twitter_clone",
            "name": "Unic Twitter Clone",
            "small_description": "This is a Twitter clone REST API with a JWT encrypted authentication.",
            "image": Unic
        },
        {   
            "id": 5,    
            "route": "crypto_web",
            "name": "Crypto Webpage",
            "small_description": "Single page React app which features cryptocurrency news and exchange rates.",
            "image": Crypto
        },
                {   
            "id": 6,
            "route": "reali_landing",
            "name": "Reali Landing Page",
            "small_description": "Landing page for a real estate agency selling luxury properties worldwide.",
            "image": Reali
        },
        {   
            "id": 7,
            "route": "trillo_page",
            "name": "Trillo Page",
            "small_description": "A single page design for a Trillo project. Entire layout was constructed with CSS Flexbox.",
            "image": Trillo
        },
                {   
            "id": 8,
            "route": "todo_list",
            "name": "ToDo List Project",
            "small_description": "A simple organizer app using React JS to keep track of my to-do's.",
            "image": ToDo
        },
        ],
    "services": [
        {
            "id": 1,
            "number": "01",
            "name": "Web Development",
            "description": "I build fully responsive websites and web apps that comply with all the latest standards.",
            "cards": [
                    {
                        "id": 1,
                        "name": "Responsive",
                        "img": Smartphone,
                        "desc": "My layouts will work on any device, big or small."
                    },
                    {
                        "id": 2,
                        "name": "Intuitive",
                        "img": Bulb,
                        "desc": "Strong preference for easy to use, intuitive UX/UI."
                    },
                    {
                        "id": 3,
                        "name": "Dynamic",
                        "img": Activity,
                        "desc": "I love making pages come to life."
                    }
                ]
            
            },
            {
            "id": 2,
            "number": "02",
            "name": "PSD To HTML",
            "description": "I offer pixel-perfect conversion of your design to HTML/CSS code ensuring 100% accuracy in each pixel.",
            "cards": [
                     {
                        "id": 1,
                        "name": "Optimized",
                        "img": Code,
                        "desc": "I optimize code, to speed the loading time up"
                    },
                     {
                        "id": 2,
                        "name": "SEO Friendly",
                        "img": Search,
                        "desc": "I create code which gives a SEO boost."
                    },
                     {
                        "id": 3,
                        "name": "Structured",
                        "img": Layers,
                        "desc": "I create a clean, easy to read and maintain code."
                    }
                ]
        }
    ],
    "skills": [
        {
            "id": 1,
            "name": "HTML and CSS",
            "value": "100%"
        },
        {
            "id": 2,
            "name": "JavaScript",
            "value": "80%"
        },
        {
            "id": 3,
            "name": "React JS",
            "value": "70%"
        },
        {
            "id": 4,
            "name": "Node JS",
            "value": "70%"
        },
        {
            "id": 5,
            "name": "Mongo DB",
            "value":"90%"
        },
        {
            "id": 6,
            "name": "Git and GitHub",
            "value": "100%"
        },
        {
            "id": 7,
            "name": "Figma",
            "value": "100%"
        }

    ]
};


export default data;