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
              <b-form-group>
                <router-link to="/">Home</router-link>
                <br />
                <router-link to="/about">About</router-link>
              </b-form-group>
            </div>
          </b-sidebar>
        </div>
        <div style="padding: 150px">
          <h1 style="float: left"><b>James Nolan.</b></h1>
          <hr class="solid" style="border-top: 5px solid black; width: 450px" />
          <p style="float: left; text-align: left">
            Qualified London-based UX/UI designer.<br /><br />
            I have a passion for building simple and captivating digital
            products, with an emphasis on the intended user, working from
            ideation to iteration.<br /><br />
            Skilled in HTML, CSS, JS, VUE.JS and Figma
          </p>

          <hr
            class="solid"
            style="border-top: 5px solid black; width: 450px; padding-top: 3px"
          />

          <br />

          <b-breadcrumb
            style="
              display: inline-block;
              display: flex;
              align-items: center;
              justify-content: center;
            "
          >
            <b-breadcrumb-item
              href="#https://www.linkedin.com/in/james-alexander-nolan"
            >
              <b-icon
                icon="linkedin"
                scale="4"
                shift-h="10"
                aria-hidden="true"
              ></b-icon>
            </b-breadcrumb-item>

            <b-breadcrumb-item href="#https://github.com/jamesalexnolan">
              <b-icon
                icon="github"
                scale="4"
                shift-h="70"
                aria-hidden="true"
              ></b-icon>
            </b-breadcrumb-item>

             <b-breadcrumb-item a href=mailto:jamesnolan1@hotmail.com>
              <b-icon
                icon="Envelope"
                scale="4"
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
</style>
