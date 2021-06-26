<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Add New Location</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="handleSubmitForm()">
          <div class="form-group">
            <label class="font-weight-bold">Location CEP</label>
            <input
              type="number"
              id="Cep"
              name="Cep"
              class="form-control"
              placeholder="Type CEP"
              v-model="locationForm.Cep"
              :class="{ 'is-invalid': isSubmitted && $v.locationForm.Cep.$error, }"
            />
            <div
              v-if="isSubmitted && !$v.locationForm.Cep.required"
              class="invalid-feedback">'Location CEP' field is required!
            </div>
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Location Latitude</label>
            <input
              type="text"
              id="Latitude"
              name="Latitude"
              class="form-control"
              placeholder="Type Latitude"
              v-model="locationForm.Latitude"
              :class="{ 'is-invalid': isSubmitted && $v.locationForm.Latitude.$error, }"
            />
            <div
              v-if="isSubmitted && !$v.locationForm.Latitude.required"
              class="invalid-feedback">'Location Latitude' field is required!
            </div>
          </div>
          <div class="form-group">
            <label class="font-weight-bold">Location Longitude</label>
            <input
              type="text"
              id="Longitude"
              name="Longitude"
              class="form-control"
              placeholder="Type Longitude"
              v-model="locationForm.Longitude"
              :class="{ 'is-invalid': isSubmitted && $v.locationForm.Longitude.$error, }"
            />
            <div
              v-if="isSubmitted && !$v.locationForm.Longitude.required"
              class="invalid-feedback">'Location Longitude' field is required!
            </div>
          </div>
          <div class="form-group">
            <button @click="submitNewLocation" class="btn btn-primary mt-3">
              <font-awesome-icon :icon="['fas', 'plus-circle']"/> Location
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script src="./createLocation.js"></script>
<style src="" scoped></style>
