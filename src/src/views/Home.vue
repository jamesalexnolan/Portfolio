<template>
  <div>
    <b-container class="flex-cols">
      <b-row align-v="center">
        <b-col>
          <div>
            <b-navbar>
              <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarToggleExternalContent2"
                    aria-controls="navbarToggleExternalContent2"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i class="fas fa-bars"></i>
                  </button>
                </div>
              </nav>
              <div class="collapse" id="navbarToggleExternalContent2">
                <div class="bg-light shadow-3 p-4">
                  <button class="btn btn-link btn-block border-bottom m-0">
                    Link 1
                  </button>
                  <button class="btn btn-link btn-block border-bottom m-0">
                    Link 2
                  </button>
                  <button class="btn btn-link btn-block m-0">Link 3</button>
                </div>
              </div>
            </b-navbar>
          </div>
          <div>
            <h1><b>James Nolan.</b></h1>
            <hr
              class="solid"
              style="border-top: 5px solid black; width: 300px"
            />
            <h4>I love to code, hire me</h4>
            <div>
              <b-breadcrumb
                v-bind:items="items"
                style="width: 50px; height: 50px"
              >
              
              </b-breadcrumb>
            </div>
            <hr
              class="solid"
              style="border-top: 5px solid black; width: 300px"
            />
          </div>
        </b-col>

        <b-col>
          <img src="@/assets/Hello.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      items: [
        {
          text: "Linkedin",
          href: "#https://www.linkedin.com/in/james-alexander-nolan/",
          icon: "linkedin",
        },
        {
          text: "Github",
          href: "#https://github.com/jamesalexnolan",
          icon: "github",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
