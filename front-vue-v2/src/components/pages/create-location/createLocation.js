import { required } from 'vuelidate/lib/validators';
import LocationService from '@/services/LocationService';

export default {
  name: 'CreateLocationComponent',
  data() {
    return {
      locationForm: {
        Cep: null,
        Latitude: null,
        Longitude: null,
      },
      isSubmitted: false,
    };
  },
  validations: {
    locationForm: {
      Cep: { required },
      Latitude: { required },
      Longitude: { required },
    },
  },
  methods: {
    handleSubmitForm() {},
    async submitNewLocation() {
      try {
        this.isSubmitted = true;

        this.$v.$touch();
        if (this.$v.$invalid) {
          this.$swal({
            icon: 'error',
            title: 'Oops...',
            text: 'You need to include all the required fields!',
          });
          return;
        }
        await LocationService.createNewLocation(this.locationForm);
        this.$swal({
          title: 'Location added successfully!',
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
      } catch (error) {
        console.log(error);
      }
    },
  },
};
