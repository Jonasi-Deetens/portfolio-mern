import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import laravel from '../assets/laravel.svg';
import {htmlBasics, htmlSemantics, htmlForm, htmlAccessibility, cssBasics, cssLayouts} from '../files'

const tracks = [
    {
        title: "Full Stack",
        categories: [
            {
                title: "Frontend",
                items : [
                    {
                        title: "HTML",
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
                                filePath: "../files/htmlBasics.txt"
                            },
                            {
                                title: "Preprocessors",
                                completed: 0,
                                filePath: "../files/htmlBasics.txt"
                            }
                        ]
                    }, 
                    {
                        title: "Javascript",
                        icon: javascript,
                        iconAlt: "logo of javascript",
                        subItems: [
                            {
                                title: "Basics",
                                completed: 1,
                                filePath: "../files/htmlBasics.txt"
                            }
                        ]
                    }, 
                    {
                        title: "React",
                        icon: react,
                        iconAlt: "logo of react",
                        subItems: [
                            {
                                title: "Basics",
                                completed: 1,
                                filePath: "../files/htmlBasics.txt"
                            }
                        ]
                    },
                ]
            },
            {
                title: "Backend",
                items : [
                    {
                        title: "NodeJS",
                        icon: nodejs,
                        iconAlt: "logo of node.js with text above",
                        subItems: [
                            {
                                title: "Basics",
                                completed: 1,
                                filePath: "../files/htmlBasics.txt"
                            }
                        ]
                    }, 
                    {
                        title: "Laravel",
                        icon: laravel,
                        iconAlt: "logo of laravel with text above",
                        subItems: [
                            {
                                title: "Basics",
                                completed: 1,
                                filePath: "../files/htmlBasics.txt"
                            }
                        ]
                    }, 
                ],
            }
        ] 
    },
];

export default tracks