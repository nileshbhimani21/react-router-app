import {  index, route } from "@react-router/dev/routes";

export default [
    index("routes/home/index.jsx"), 
    route("about", "routes/about.jsx"),
    route("*", "routes/_empty.jsx"),
];
