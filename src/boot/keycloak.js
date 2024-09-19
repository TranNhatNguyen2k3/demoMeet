import { boot } from "quasar/wrappers";
import VueKeyCloak from "@dsb-norge/vue-keycloak-js";

export default boot(({ app, router }) => {
  app.use(VueKeyCloak, {
    init: {
      onLoad: "check-sso",
      silentCheckSsoRedirectUri:
        window.location.origin + "/silent-check-sso.html",
    },
    config: {
      url: "http://localhost:8080",
      clientId: "demo",
      realm: "master",
    },
    onReady: (keycloak) => {
      console.log("Keycloak ready: ", keycloak);
    },
  });
});
