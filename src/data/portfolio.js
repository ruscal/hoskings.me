
export const projects = [
    {
        id: "quest",
        title: "Quest",
        description: "Enterprise survey product for <a href='http://wearediscover.com'>Discover Corporation</a>, developed whilst Technical Director.",
        role: "Architect and lead developer",
        caption:{
            text: "Enterprise survey product for Discover",
            image: "http://www.wearediscover.com/wp-content/uploads/2016/05/shutterstock_390425545.jpg"
        },
        /*demo: "",
        media:[
            {title:"Caption 1", image:"http://www.wearediscover.com/wp-content/uploads/2016/05/shutterstock_390425545.jpg"},
            {title:"Caption 2", image:"http://www.wearediscover.com/wp-content/uploads/2016/05/shutterstock_390425545.jpg"},
            {title:"Caption 3", image:"http://www.wearediscover.com/wp-content/uploads/2016/05/shutterstock_390425545.jpg"}
        ],*/
        overview:{
            intro:"Modernisation of a legacy product to support increasing demands from the market research sector.",
            body:"Tasked with supporting more complex surveys, with a UI that allows non-technical administration and real-time client reporting.   " +
            "Almost a complete rewrite from front-end to back-end including implementing a whole new React / Redux SPA, restructuring report and response processes and developing a common survey engine that could be used by client and server."
        },
        challenges: {
            items:[
                {title:"Developing a coherent SPA", detail:"Previous version of product used a unstructured mixture of KnockoutJS and JQuery with Razor views to implement dynamic UI and was starting to become very hard to maintain and expand to meet requirements.  " +
                "After extensive research the immutability of a Fluxish architecture (Redux) coupled with the community support of React seemed the best fit for this project."},
                {title:"Common survey engine consumed by client and server", detail:"The client used the survey engine to determine any immediate changes to the current survey page when a response is captured and update the UI accordingly. " +
                "The server used the same engine to determine the state of the whole survey and calculate the projected route for the current response." +
                "The answer was to write the survey engine in JS (using Redux) and have it included in the client and run via ClearScript on the server.  A future improvement would be to move the server to node from ASP.NET."},
                {title:'Real-time reporting', detail:'Along with a simple UI for building charts and dashboards, the system needed a mechanism to keep all the client viewable data in sync, even during a period of high activity.  ' +
                'To this end each change in response data triggered a new "build" with a version number, and all charts were rebuilt using concurrent background processes with the build only being made live and viewable when all charts were up to date.  ' +
                'Clients would only see charts from the latest successful build.'}
            ]
        },
        technologies:{
            items:[
                "React", "Redux", "Bootstrap", "ASP.NET MVC", "ClearScript", "Entity Framework", "SQL Server", "HangFire", "SimpleInjector", "npm", "webpack", "babel", "ES6", "AnyChart"
            ]
        },
        clients: {
            items: [
                {name:"Novartis", url:"http://www.novartis.com"},
                {name:"Merck", url:"http://www.merck.com"},
                {name:"Roche", url:"https://www.roche.com"},
                {name:"Allergan", url:"https://www.allergan.com"}
            ]
        }
    },
    {
        id: "pulsechecker",
        title: "PulseChecker",
        description: "Employee and customer engagement tool for <a href='http://wearediscover.com'>Discover Corporation</a>, developed whilst Technical Director.",
        role: "Concept, architect and developer",
        caption:{
            text: "Employee and customer engagement tool",
            image: "http://www.wearediscover.com/wp-content/uploads/2016/04/pulsechecker-fullscreen.jpg"
        },
        /*demo: "",
        media:[
            {title:"", image:"/images/portfolio/quest/img1.jpg"}
        ],*/
        overview:{
            intro:"Develop a new way of engaging with employees and customers beyond the simple survey",
            body:"Several of our clients were suffering from survey fatigue within their organisations and were seeking new ways of encouraging engagement. " +
            "PulseChecker was our solution: super short surveys focusing on one issue, that once completed took the respondent to a live conversation feed showing the current results and allowing them to engage directly with project stakeholders and expand the discussion. " +
            "Initially developed as a proof of concept, client trials proved successful and it was launched as an enterprise product."
        },
        challenges: {
            items: [
                {
                    title:"Efficient responding",
                    detail: "Employees tend to receive too many emails and too many surveys, PulseChecker needed to be quick and easy to respond to or it wouldn't be used.  " +
                    "To achieve this the first question of the survey was embedded in the invitation email and surveys were encouraged to be only a few questions long."
                },
                {
                    title:"Word analysis",
                    detail: "The conversation feed could have hundreds of comments and so needed a mechanism to group and filter them. " +
                    "A rough word analysis was used to extract common themes and the list of themes was then displayed next to the feed for quick filtering."
                },
                {
                    title:"Two-way engagement",
                    detail: "Employees had lost a lot of trust in surveys as they didn't see issues that they raised being acted upon or even receive any feedback on the overall results.  " +
                    'PulseChecker tackled this in several ways: 1) Employees saw live results immediately, 2) They could have a direct conversation with management in the feed, 3) A significant project stakeholder was encouraged to submit a "Conclusion" post/email to all respondents,' +
                    ' that recognised the issues raised and gave an account as to what would happen next.'
                }
            ]
        },
        technologies:{
            items:[
                "KnockoutJS", "JQuery", "ASP.NET MVC", "Entity Framework", "SQL Server", "SimpleInjector"
            ]
        },
        quotes: {
            intro: "Quotes gathered in a feedback survey on use of PulseChecker within Novartis:",
            items:[
                "“Pulse Checker is a brilliant way to share views and opinions on topics of importance and interest”",
                "“Great initiative, surveys take less time and gives information in real-time, helps listen to the client, keeps it short and simple and gets to the point we want to focus”",
                "“It provides a constant flow of actionable insights and enables us to make timely and informed investments together as an organization”",
                "“I consider it to be the most effective communication tool due to the distance and difference in time zones”",
                "“The impact, insights and collaborative nature of the product is fantastic”"
            ]
        },
        clients: {
            intro: "Clients that have used the system:",
            items: [
                {name:"Novartis", url:"http://www.novartis.com"},
                {name:"Freshfields Bruckhaus Deringer", url:"https://www.freshfields.com"},
                {name:"Shire", url:"https://www.shire.com"}
            ]
        }
    }
];