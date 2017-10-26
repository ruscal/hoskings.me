
export const projects = [
    {
        id: "hoskings-me",
        title: "hoskings.me",
        description: "Personal website for Russ Hoskings",
        caption:{
            text: "Personal website for Russ Hoskings",
            image: "/images/russ.jpg"
        },

        overview:{
            intro:"Portfolio site to showcase projects I have worked on and demonstrate my front-end skills.",
            body:"Built the site in React / Redux.  Source code is available to view on GitHub, follow the link above."
        },

        technologies:{
            items:[
                "React", "Redux", "npm", "webpack", "babel", "ES6"
            ]
        }
    },
    {
        id: "bounce",
        title: "bounce! experiment",
        demo:{title:"View demo", url:"http://hoskings-bounce.azurewebsites.net/"},
        description: "Experimental React / Redux animation project",
        caption:{
            text: "Fire bouncing balls",
            image: "/images/labs/bounce.png"
        },

        overview:{
            intro:"This is an experimental React / Redux animation project:",
            body:"<ul><li>add bouncing balls to a bounded box with gravity</li>" +
            "<li>run physics engine with each tick in time an action</li></ul>"
        },

        technologies:{
            items:[
                "React", "Redux", "npm", "webpack", "babel", "ES6"
            ]
        }
    }
];