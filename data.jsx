import { useState } from "react";


export const Buses = [

    {

        id: 1,

        name: "Chennai Express",

        source: "Chennai",

        destination: "Madurai",

        departureTime: "06:00 AM",

        arrivalTime: "12:30 PM",

        duration:"06:30 Hrs",


        price : 500 ,

        availableDates: ["2023-10-15", "2023-10-16", "2023-10-17", "2023-10-18","2024-04-16"],

        busType: "Sleeper",

        numberOfSeats: 36,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },



        availableSeats: ["U19", "U24", "U30", "L4", "L16", "L6"],

    },

    {

        id: 2,

        name: "Coimbatore Comfort",

        source: "Coimbatore",

        destination: "Chennai",

        departureTime: "07:30 AM",

        arrivalTime: "02:00 PM",

        

        duration:"07:00 Hrs",
        price : 500 ,

        availableDates: ["2023-10-15", "2023-10-16", "2023-10-17", "2023-10-18","2024-04-16"],

        busType: "Seater",

        numberOfSeats: 60,

        seatLayout: {

            first: [

                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

                [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],

            ],

            second: [

                [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],

            ],
        },

        availableSeats: [

            1,

            2,

            3,

            5,

            7,

            13,

            15,

            30,

            35,

            60,

            59,

        ],

    },
    {

        id: 3,

        name: "Bangalore Express",

        source: "Chennai",

        destination: "Bangalore",

        departureTime: "10:00 PM",

        arrivalTime: "04:30 AM",
        duration:"06:30 Hrs",

        price : 500 ,

        availableDates: ["2024-04-15", "16-04-2024", "2024-04-17", "2024-04-18"],

        busType: "Sleeper",

        numberOfSeats: 36,

        seatLayout: {

            lower: {

                first: [

                    [1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12],

                ],

                second: [13, 14, 15, 16, 17, 18],

            },

            upper: {

                first: [

                    [19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30],

                ],

                second: [31, 32, 33, 34, 35, 36],

            },
        },


        availableSeats: ["U19", "U24", "U30", "U32", "U36", "L4", "L16", "L6", "L10"],

    },
    {

        id: 4,

        name: "Bangalore Travels",

        source: "Chennai",

        destination: "Bangalore",
duration:"06:30 Hrs",
        departureTime: "11:00 PM",

        arrivalTime: "05:30 AM",

        price : 800 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 36,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["U19", "U24", "U30", "U32", "U36", "U33", "L4", "L16", "L6", "L10", "L11"],

    },

    {

        id: 5,

        name: "Fast Express",

        source: "Chennai",

        destination: "Bangalore",

        departureTime: "10:00 PM",

        arrivalTime: "04:30 AM",
        duration:"06:30 Hrs",


        price : 900 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 36,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },



        availableSeats: ["U19", "U24", "U30", "U32", "U36", "L4", "L16", "L6", "L10"],

    },

    {

        id: 6,

        name: "Quick Travel",

        source: "Chennai",

        destination: "Bangalore",

        departureTime: "11:00 PM",

        arrivalTime: "06:30 AM",

        price : 950 ,

        duration:"06:30 Hrs",


        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 36,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["U19", "U24", "U30", "U32", "U36", "L4", "L16", "L6", "L10"],

    },
    {

        id: 7,

        name: "ABCD Travels",

        source: "Coimbatore",

        destination: "Madurai",

        departureTime: "07:30 AM",

        arrivalTime: "01:00 PM",

        

        duration:"05:00 Hrs",

        price : 550 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Seater",

        numberOfSeats: 60,

        seatLayout: {

            first: [

                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

                [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],

            ],

            second: [

                [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],

            ],
        },

        availableSeats: [
            3, 4, 5, 6, 7, 8, 9, 10,16, 17, 18, 19, 20,54, 55, 56, 57,42, 43, 44
          

        ],

    },

    {

        id: 8,

        name: "ACD Travels",

        source: "Coimbatore",

        destination: "Madurai",

        departureTime: "09:30 AM",

        arrivalTime: "03:00 PM",

        

        duration:"05:00 Hrs",

        price : 550 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Seater",

        numberOfSeats: 60,

        seatLayout: {

            first: [

                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

                [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],

            ],

            second: [

                [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],

            ],
        },

        availableSeats: [
            3, 4, 5, 6, 7, 8,  20,38, 39, 40, 41, 42, 43, 44, 45,54, 55, 56, 57,42, 43, 44
          

        ],

    },
    {

        id: 9,

        name: "Fast Travels",

        source: "Coimbatore",

        destination: "Madurai",

        departureTime: "10:30 AM",

        arrivalTime: "04:00 PM",

        

        duration:"05:00 Hrs",

        price : 550 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Seater",

        numberOfSeats: 60,

        seatLayout: {

            first: [

                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],

                [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],

            ],

            second: [

                [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60],

            ],
        },

        availableSeats: [
            3, 4, 5, 6, 7, 8,  20,38, 39, 40, 41, 42, 43, 44, 45,54, 55, 56, 57,42, 43, 44
          

        ],

    },

    {

        id: 10,

        name: "Fast Travels",

        source: "Bangalore",

        destination: "Chennai",

        departureTime: "09:30 PM",

        arrivalTime: "03:00 AM",

        

        duration:"05:00 Hrs",

        price : 900 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 60,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["U19", "U24", "U30", "U32", "U36", "L4", "L16", "L6", "L10"]
    },


    {

        id: 11,

        name: "EFD Travels",

        source: "Bangalore",

        destination: "Chennai",

        departureTime: "10:30 PM",

        arrivalTime: "04:00 AM",

        

        duration:"05:00 Hrs",

        price : 850 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 60,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["L13", "L14", "L15", "L16","L9", "L10", "L11", "L12","U19", "U20", "U21", "U22","U31", "U32", "U33", "U34"]
    },

    {

        id: 12,

        name: "Speed Travels",

        source: "Bangalore",

        destination: "Chennai",

        departureTime: "10:30 PM",

        arrivalTime: "04:00 AM",

        

        duration:"05:00 Hrs",

        price : 850 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 60,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["L13", "L14", "L15", "L16","L9",  "L2", "L3", "L4", "L5","L10", "L11", "L12","U19", "U20", "U21", "U22","U31", "U32", "U33", "U34"]
    },

    {

        id: 13,

        name: "LOJ Travels",

        source: "Salem",

        destination: "Chennai",

        departureTime: "10:30 PM",

        arrivalTime: "04:00 AM",

        

        duration:"05:00 Hrs",

        price : 850 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 60,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["L13", "L14", "L15", "L16","L9",  "L2", "L3", "L4", "L5","L10", "L11", "L12","U19", "U20", "U21", "U22","U31", "U32", "U33", "U34"]
    },

    {

        id: 14,

        name: "WDF Travels",

        source: "Salem",

        destination: "Chennai",

        departureTime: "10:30 PM",

        arrivalTime: "04:00 AM",

        

        duration:"05:00 Hrs",

        price : 850 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 60,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["L9",  "L2", "L3", "L4", "L5","L10", "L11", "L12","U19", "U20", "U21", "U22","U31", "U32", "U33", "U34"]
    },

    {

        id: 15,

        name: "PPP Travels",

        source: "Salem",

        destination: "Chennai",

        departureTime: "10:30 PM",

        arrivalTime: "04:00 AM",

        

        duration:"05:00 Hrs",

        price : 850 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 60,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },


        availableSeats: ["L13", "L14", "L15", "L16","L9",  "L2", "L3", "L4", "L5","L10", "L11", "L12","U19", "U20", "U21", "U22","U31", "U32", "U33", "U34"]
    },
    {

        id: 16,

        name: "UYT Express",

        source: "Chennai",

        destination: "Bangalore",

        departureTime: "10:00 PM",

        arrivalTime: "04:30 AM",
        duration:"06:30 Hrs",


        price : 900 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 36,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },



        availableSeats: ["U19", "U24", "U30", "U32", "U36", "L4", "L16", "L6", "L10"],

    },

    {

        id: 17,

        name: "KKK Express",

        source: "Chennai",

        destination: "Bangalore",

        departureTime: "10:00 PM",

        arrivalTime: "04:30 AM",
        duration:"06:30 Hrs",


        price : 900 ,

        availableDates: ["2024-03-15", "2024-03-16", "2024-03-17", "2024-03-18","2024-04-16","2024-03-10", "2024-03-11", "2024-03-12", "2024-03-13","2024-03-14"],

        busType: "Sleeper",

        numberOfSeats: 36,

        seatLayout: {

            lower: {

                first: [

                    ["L1", "L2", "L3", "L4", "L5", "L6"], 
                    ["L7", "L8", "L9", "L10", "L11", "L12"]

                ],

                second: ["L13", "L14", "L15", "L16", "L17", "L18"],

            },

            upper: {

                first: [

                    ["U19", "U20", "U21", "U22", "U23", "U24"], 
                    ["U25", "U26", "U27", "U28", "U29", "U30"]

                ],

                second: ["U31", "U32", "U33", "U34", "U35", "U36"],

            },
        },



        availableSeats: ["U19", "U24", "U30", "U32", "U36", "L4", "L16", "L6", "L10"],

    },




    

]

export const locations = [

    "Chennai",
    
    "Coimbatore",
    
    "Trichy",
    
    "Madurai",
    
    "Salem",

    "Bangalore"
    
    ];


    export const currentuser = null