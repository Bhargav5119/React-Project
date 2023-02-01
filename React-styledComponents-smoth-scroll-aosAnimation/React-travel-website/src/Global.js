import service1 from "./assets/service1.png"
import service2 from "./assets/service2.png"
import service3 from "./assets/service3.png"
import service4 from "./assets/service4.png"
import cuba from "./assets/cuba.png"
import paris from "./assets/paris.png"
import japan from "./assets/japan.png"
import tour1 from "./assets/tour1.png"
import tour2 from "./assets/tour2.png"
import tour3 from "./assets/tour3.png"

export const navmenu = [
    {
        id: 6,
        url: "home",
        title: "Home"
    },
    {
        id: 1,
        url: "service",
        title: "Service"
    },
    {
        id: 2,
        url: "destination",
        title: "Destination"
    },
    {
        id: 3,
        url: "offer",
        title: "Offer"
    },
    {
        id: 4,
        url: "tour",
        title: "Tour"
    },
    {
        id: 5,
        url: "blog",
        title: "Blog"
    },
]

export const serviceData = [
    {
        image : service1,
        title : "Choose Destination",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dignissimos?"
    },
    {
        image : service2,
        title : "Explore the place",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dignissimos?"
    },
    {
        image : service3,
        title : "Start Your Journey",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dignissimos?"
    },
    {
        image : service4,
        title : "Let's Enjoy",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, dignissimos?"
    }
]

export const destinationData = [
    {
        name : "Cuba City",
        image : cuba
    },
    {
        name : "Paris",
        image : paris
    },
    {
        name: "Japan",
        image : japan
    }
]

export const ToursData = [
    {
        image : tour1,
        title : "Santorini, Oia Greece",
        price : 2000,
        review : "5K Reviews"
    },
    {
        image : tour2,
        title : "LightHouse, Bellwood",
        price : 4000,
        review : "5K Reviews"
    },
    {
        image : tour3,
        title : "Riverfront, Japan",
        price : 3000,
        review : "5K Reviews"
    },
]