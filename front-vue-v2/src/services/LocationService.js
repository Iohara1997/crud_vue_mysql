import Api from './Api';

export default {
  async createNewLocation(location) {
    try {
      const response = await Api().post('/localizacoes', location);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getLocation() {
    try {
      const response = await Api().get('/localizacoes');
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async getLocationId(id) {
    try {
      const response = await Api().get(`/localizacoes/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async updateLocation(fields) {
    try {
      const response = await Api().put('/localizacoes', fields);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async deleteLocation(id) {
    try {
      const response = await Api().delete(`/localizacoes/${id}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },
};
