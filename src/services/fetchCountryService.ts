import axios from "axios";

export default {
  fetchCountries: async () => {
    const res = await axios(`https://restcountries.eu/rest/v2/all`);

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.data;
  },
};
