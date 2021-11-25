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
           
I am a recently qualified London-based UX/UI designer and front end developer. 
<br /><br />
I am an innovative and solutions-focused designer and developer, approaching projects with the goal of enhancing the experience & engagement of products for the end user, and have already had success with this on a freelance basis.
<br /><br />


Over the past few months I have worked with GCPS Consulting as a UX designer, assisting them in assessing how their products and services are displayed & advertised and improving the user journey using UX design principles. Alongside this, I have been working with a team of developers, collaborating on projects, including a CMS built in VUE.JS for HSBC.
<br /><br />

I took on these projects having recently completed a Glasgow Caledonian University-accredited Professional Diploma in UX/UI Design, as well being mentored and self learning HTML, CSS, JS and VUE.JS; gaining essential skills and knowledge needed to launch my career in the industry.

<br /><br />

As part of my diploma I gained experience working on a project from ideation to prototyping, conducting usability testing, formulating quantitative and qualitative data gathered from the initial research stages to create responsive designs, wire frames and prototypes, to address pain points and better improve the overall customer journey.
<br /><br />
Meanwhile, working in front end development based languages, to start building out designs and be able to better work with and collaborate with developers. Working from a design, building it out, and solving any problems that arise at the same time. I also have back end experience, working on API integrations.
<br /><br />

I studied Graphic Design and Illustration at both Brighton and Kingston universities before obtaining my professional diploma; am skilled in HTML, CSS, JS, VUE.JS and Figma 

          </p>
          <hr class="break" />

          <h3 style="margin-top: 5px"><b>Education.</b></h3>
          <hr class="break" />

          <h5 style="padding-top: 10px">
            <b>UX Design Institute (Professional Diploma) </b>
          </h5>
          <p style="padding-top: 1px">2020 - 2021, London</p>

          <h5 style="padding-top: 10px">
            <b>Brighton University / BA Illustration </b>
          </h5>
          <p style="padding-top: 1px">2013 - 2014, Brighton</p>

          <h5 style="padding-top: 10px">
            <b>Kingston University / Foundation Diploma in Art & Design </b>
          </h5>
          <p style="padding-top: 1px">
            2012 - 2013, London. Distinction grade (A)
          </p>

          <h5 style="padding-top: 10px">
            <b>Richmond upon Thames College / Art & Design BTEC </b>
          </h5>
          <p style="padding-top: 1px">2009 - 2012, London. Grades DMM (ABB).</p>

          <h5 style="padding-top: 10px">
            <b>Richard Challoner School / GCSEs </b>
          </h5>
          <p style="padding-top: 1px">
            2004 - 2009, London. Eight GCSEs including Maths (B) and English (B,
            B)
          </p>

          <hr class="break" />
        </div>
      </b-col>

      <b-col cols="6">
          <img src="@/assets/Hello.png" style="max-width: 100%" />
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

.breadcrumb > li + li:before {
  content: "";
}

.links {
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-left: 10px;
}
</style>
