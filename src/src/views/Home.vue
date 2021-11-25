<template>
  <b-container class="flex-cols">
    <b-row>
      <b-col cols="6">
        <div style="float: left">
          <b-button v-b-toggle.sidebar-backdrop variant="white">
            <hr
              class="solid"
              style="border-top: 5px solid black; width: 55px"
            />

            <hr
              class="solid"
              style="border-top: 5px solid black; width: 55px"
            />

            <hr
              class="solid"
              style="border-top: 5px solid black; width: 55px"
            />
          </b-button>

          <b-sidebar
            id="sidebar-backdrop"
            title=""
            :backdrop-variant="variant"
            backdrop
            shadow
          >
            <div class="px-3 py-2">
              <b-form-group style="text-align: center">
                <router-link to="/"><b>Home</b></router-link>
                <hr class="break-menu" />
                <router-link to="/about"><b>About</b></router-link>
                <hr class="break-menu" />
                <br />
                <p style="font-size: 20px">Projects</p>
                <hr class="break-menu" />
              </b-form-group>
            </div>
          </b-sidebar>
        </div>
        <div style="margin-top: 150px; margin-left: 90px">
          <h1><b>James Nolan.</b></h1>
          <hr class="break" />
          <p style="padding-top: 11px">
            Qualified London-based UX/UI designer and Front end developer.<br /><br />
            I have a passion for building simple and captivating digital
            products, with an emphasis on the intended user, working from
            ideation to iteration.<br /><br />
            Skilled in <b>HTML</b>, <b>CSS</b>,<b> JS</b>, <b>VUE.JS </b>and <b>Figma </b>
          </p>

          <hr class="break" />

          <br />

          <b-breadcrumb class="links">
            <b-breadcrumb-item
              href="https://www.linkedin.com/in/james-alexander-nolan"
            >
              <b-icon
                icon="linkedin"
                scale="3"
                shift-h="10"
                aria-hidden="true"
              ></b-icon>
            </b-breadcrumb-item>

            <b-breadcrumb-item href="https://github.com/jamesalexnolan">
              <b-icon
                icon="github"
                scale="3"
                shift-h="70"
                aria-hidden="true"
              ></b-icon>
            </b-breadcrumb-item>

            <b-breadcrumb-item a href="mailto:jamesnolan1@hotmail.com">
              <b-icon
                icon="Envelope"
                scale="3"
                shift-h="120"
                aria-hidden="true"
              ></b-icon>
            </b-breadcrumb-item>
          </b-breadcrumb>
        </div>
      </b-col>

      <b-col cols="6">
        <img src="@/assets/Hello.png" style="max-width: 100%" />
      </b-col>
    </b-row>
  </b-container>
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
          href: "#https://www.linkedin.com/in/james-alexander-nolan",
        },
        {
          text: "Github",
          href: "#https://github.com/jamesalexnolan",
        },
      ],
      variant: "dark",
      variants: ["dark", "light", "white"],
    };
  },
};
</script>

<style scoped>
.breadcrumb > li + li:before {
  content: "";
}

.break {
  width: 450px;
  height: 5px;
  margin: auto;
  border: black;
  background-color: black;
  opacity: 1;
}

.break-menu {
  width: 120px;
  height: 5px;
  margin: auto;
  border: black;
  background-color: black;
  opacity: 1;
}

a {
  color: black;
  text-decoration: none;
  background-color: transparent;
}

.solid {
  opacity: 1;
}

.links {
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 77%;
  padding: 10px;
  margin-right: 110px;
}
</style>
