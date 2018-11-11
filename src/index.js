import runtime from "serviceworker-webpack-plugin/lib/runtime";
alert("hi");

if ("serviceWorker" in navigator) {
  const registration = runtime.register();
}
