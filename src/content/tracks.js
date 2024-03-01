import html5 from '../assets/html5.svg';
import css3 from '../assets/css3.svg';
import javascript from '../assets/javascript.svg';
import react from '../assets/react.svg';
import nodejs from '../assets/nodejs.svg';
import laravel from '../assets/laravel.svg';

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
                                status: "1"
                            },
                            {
                                title: "Semantic HTML",
                                status: "1"
                            },
                            {
                                title: "Form & Validation",
                                status: "1"
                            },
                            {
                                title: "Accessibility",
                                status: "1"
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
                                status: "1"
                            },
                            {
                                title: "Layouts",
                                status: "1"
                            },
                            {
                                title: "Responsiveness",
                                status: "1"
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
                                status: "1"
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
                                status: "1"
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
                                status: "1"
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
                                status: "1"
                            }
                        ]
                    }, 
                ],
            }
        ] 
    },
];

export default tracks