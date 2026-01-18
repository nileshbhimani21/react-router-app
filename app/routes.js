import {  index, layout, route } from "@react-router/dev/routes";

export default  [
  route("login", "routes/login.jsx"),
  layout("routes/layout.jsx", [
    index("routes/dashboard/index.jsx"),
    route("settings", "routes/settings/index.jsx")
  ]),
  route("*", "routes/_empty.jsx"),
];
