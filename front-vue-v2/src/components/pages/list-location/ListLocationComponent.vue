<template>
  <div>
      <h3 class="text-center">List All Locations</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th class="text-center">Id</th>
            <th class="text-center">CEP</th>
            <th class="text-center">Data de entrada</th>
            <th class="text-center">Latitude</th>
            <th class="text-center">Longitude</th>
            <th class="text-center">Location Registration</th>
            <th class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="location in locations" :key="location.ID">
            <td class="text-center">{{ location.ID }}</td>
            <td class="text-center">{{ location.Cep }}</td>
            <td class="text-center">{{ location.Data_Entrada }}</td>
            <td class="text-center">{{ location.Latitude }}</td>
            <td class="text-center">{{ location.Longitude }}</td>
            <td class="text-center">
              <router-link
                :to="{ name: 'update', params: { id: location.ID } }"
                class="btn btn-success">
                <font-awesome-icon :icon="['fas', 'edit']"/>Edit
              </router-link>
            </td>
            <td class="text-center">
              <button @click="removeLocation(location.ID)" class="btn btn-danger">
                <font-awesome-icon :icon="['fas', 'trash']"/>Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script src="./listLocation.js"></script>
<style scoped></style>
