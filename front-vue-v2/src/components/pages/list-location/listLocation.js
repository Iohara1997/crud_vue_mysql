import LocationService from '../../../services/LocationService';

export default {
  name: 'ListLocationComponent',
  data() {
    return {
      locations: [],
    };
  },
  mounted() {
    this.listAllLocations();
  },
  methods: {
    async listAllLocations() {
      const response = await LocationService.getLocation();
      this.locations = response;
    },

    async removeLocation(id) {
      this.$swal({
        title: 'Are you sure you want to delete the location?',
        text: 'Watch out! This Location will be deleted!',
        icon: 'warning',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes! Please, delete it!',
      }).then(async (result) => {
        if (result.value) {
          await LocationService.deleteLocation(id);
          this.$swal('Deleted', 'Success Deleted', 'success');
          this.listAllLocations();
        } else {
          this.$swal('Cancelled', 'Canceled Deletion', 'info');
        }
      });
    },
  },
};
