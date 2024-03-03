import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import laravel from '../assets/laravel.svg';
import {htmlBasics, htmlSemantics, htmlForm, htmlAccessibility, cssBasics, cssLayouts, cssResponsiveness, javascriptBasics, 
    javascriptDOM, javascriptFetch, reactComponentBasics, reactPassingProps, reactUseRef, reactHooks, reactRouter, reactContext, nodejsGlobals, nodejsModules, nodejsOSModule, nodejsPathModule, nodejsFSModule, nodejsHttpModule, nodejsNpm, javascriptPromise} from '../files'

const tracks = [
    {
        
        title: "HTML",
        categories: ['fullstack', 'frontend'],
        icon: html5,
        iconAlt: "logo of html 5 with the text above",
        subItems: [
            {
                title: "Basics",
                completed: 1,
                filePath: htmlBasics
            },
            {
                title: "Semantic HTML",
                completed: 1,
                filePath: htmlSemantics
            },
            {
                title: "Form & Validation",
                completed: 1,
                filePath: htmlForm
            },
            {
                title: "Accessibility",
                completed: 1,
                filePath: htmlAccessibility
            },
        ]
    },
    {
        title: "CSS",
        categories: ['fullstack', 'frontend'],
        icon: css3,
        iconAlt: "logo of css3 with the text above",
        subItems: [
            {
                title: "Basics",
                completed: 1,
                filePath: cssBasics
            },
            {
                title: "Layouts",
                completed: 1,
                filePath: cssLayouts
            },
            {
                title: "Responsiveness",
                completed: 1,
                filePath: cssResponsiveness
            },
            {
                title: "Preprocessors",
                completed: 0,
                filePath: ""
            }
        ]
    }, 
    {
        title: "Javascript",
        categories: ['fullstack', 'frontend'],
        icon: javascript,
        iconAlt: "logo of javascript",
        subItems: [
            {
                title: "Basics",
                completed: 1,
                filePath: javascriptBasics
            },
            {
                title: "DOM Manipulation",
                completed: 1,
                filePath: javascriptDOM
            },
            {
                title: "Fetch/API",
                completed: 1,
                filePath: javascriptFetch
            },
            {
                title: "Promise",
                completed: 1,
                filePath: javascriptPromise
            }
        ]
    }, 
    {
        title: "React",
        categories: ['fullstack', 'frontend'],
        icon: react,
        iconAlt: "logo of react",
        subItems: [
            {
                title: "Basics Components",
                completed: 1,
                filePath: reactComponentBasics
            },
            {
                title: "Passing Props",
                completed: 1,
                filePath: reactPassingProps
            },
            {
                title: "useRef",
                completed: 1,
                filePath: reactUseRef
            },
            {
                title: "useState & useEffect",
                completed: 1,
                filePath: reactHooks
            },
            {
                title: "Router",
                completed: 1,
                filePath: reactRouter
            },
            {
                title: "useContext",
                completed: 1,
                filePath: reactContext
            }
        ]
    },
    {
        title: "NodeJS",
        categories: ['fullstack', 'backend'],
        icon: nodejs,
        iconAlt: "logo of node.js with text above",
        subItems: [
            {
                title: "Globals",
                completed: 1,
                filePath: nodejsGlobals
            },
            {
                title: "Modules",
                completed: 1,
                filePath: nodejsModules
            },
            {
                title: "OS Module",
                completed: 1,
                filePath: nodejsOSModule
            },
            {
                title: "Path Module",
                completed: 1,
                filePath: nodejsPathModule
            },
            {
                title: "FS Module",
                completed: 1,
                filePath: nodejsFSModule
            },
            {
                title: "Http Module - Basic",
                completed: 1,
                filePath: nodejsHttpModule
            },
            {
                title: "Npm",
                completed: 1,
                filePath: nodejsNpm
            }
        ]
    },
    {
        title: "Laravel",
        categories: ['fullstack', 'backend'],
        icon: laravel,
        iconAlt: "logo of laravel",
        subItems: [
            {
                title: "Basics",
                completed: 0,
                filePath: ""
            }
        ]
    }, 
];

export default tracks