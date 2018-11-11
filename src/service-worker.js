self.addEventListener("install", event => {
  console.log("V1 installing…");
});

self.addEventListener("activate", event => {
  console.log("V1 now ready to handle fetches!");
});
