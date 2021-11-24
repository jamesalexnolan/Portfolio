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
                <router-link to="/">Home</router-link>
                <br />
                <router-link to="/about">About</router-link>
              </b-form-group>
            </div>
          </b-sidebar>
        </div>
        <div style="padding: 150px">
          <h1><b> Project Project Project </b></h1>
          <hr class="break" />
          <p style="padding-top: 11px">
            Project Project Project Project Project Project
          </p>

          <hr class="break" />

          <br />
        </div>
      </b-col>

      <b-col cols="6">
        <img
          src="https://via.placeholder.com/636

C/O https://placeholder.com/"
          style="max-width: 100%"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<style scoped>
.break {
  width: 450px;
  height: 5px;
  margin: auto;
  border: black;
  background-color: black;
  opacity: 1;
}

.solid {
  opacity: 1;
}
</style>
