<template>
  <div id="app">
 
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Roboto-Regular, Roboto-Bold, sans-serif;
  src: local("Roboto-Regular, Roboto-Bold"),
    url(../src/fonts/Roboto-Regular.ttf) format("truetype"),
    url(../src/fonts/Roboto-Bold.ttf) format("truetype");
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
