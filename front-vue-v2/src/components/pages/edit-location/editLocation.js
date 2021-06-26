import LocationService from '../../../services/LocationService';

export default {
  name: 'EditLocationComponent',
  data() {
    return {
      locationForm: {
      /* Cep: '',
        Latitude: '',
        Longitude: '', */
      },
    };
  },

  mounted() {
    this.getLocationId();
  },

  methods: {

    async getLocationId() {
      const { id } = this.$route.params;
      const response = await LocationService.getLocationId(id);
      this.locationForm = { ...response };
    },

    async updateLocation() {
      await LocationService.updateLocation(this.locationForm);
      this.$swal({
        title: 'Location updated successfully!',
        icon: 'success',
        showConfirmButton: true,
        allowOutsideClick: false,
        allowEnterKey: true,
        allowEscapeKey: false,
      }).then((data) => {
        this.$router.push({
          name: 'list',
        });
      });
    },
  },
};
