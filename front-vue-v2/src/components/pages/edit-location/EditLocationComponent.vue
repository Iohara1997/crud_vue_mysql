<template>
  <div class="container">
      <div class="card">
        <div class="card-header">
          <h3>Update Location</h3>
        </div>
        <div class="card-body">
          <form v-on:submit.prevent="updateFormLocation()">
            <div class="form-group">
              <label class="font-weight-bold">Cep</label>
              <input
                type="number"
                id="Cep"
                name="Cep"
                class="form-control"
                v-model="locationForm.Cep"
              >
            </div>
            <div class="form-group">
              <label class="font-weight-bold">Latitude</label>
              <input
                type="text"
                id="Latitude"
                name="Latitude"
                class="form-control"
                v-model="locationForm.Latitude"
              >
            </div>
            <div class="form-group">
              <label class="font-weight-bold">Longitude</label>
              <input
                type="text"
                id="Longitude"
                name="Longitude"
                class="form-control"
                v-model="locationForm.Longitude"
              >
            </div>
            <div class="form-group">
              <button @click="updateLocation" class="btn btn-primary mt-3">
                <font-awesome-icon :icon="['fas', 'edit']" />Update
              </button>
            </div>
          </form>
        </div>
      </div>
  </div>
</template>

<script src="./editLocation.js"></script>
<style scoped></style>
