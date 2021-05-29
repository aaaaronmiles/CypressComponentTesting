import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@org/app1",
  app: () => System.import("@org/app1"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@org/app2",
  app: () => System.import("@org/app2"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
