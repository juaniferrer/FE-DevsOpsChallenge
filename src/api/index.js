const axios = require("axios");
const BASE_URL = "http://127.0.0.1:5000";

// ------ AUTH ------

const login = async (data) => {
  const { username, password } = data;
  var bodyFormData = new FormData();
  bodyFormData.append("username", username);
  bodyFormData.append("password", password);
  const response = await axios({
    method: "post",
    url: `${BASE_URL}/login`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data.length > 0;
};

// ------ OVERVIEW -----
const getAllAsignedAssets = async () => {
  const response = await axios.get(`${BASE_URL}/overview`);
  const { data } = response;
  let jsonResponse = [];
  data.map((item) => {
    jsonResponse.push({
      id: item[0],
      brand: item[1],
      model: item[2],
      imgUrl: item[4],
      developerId: item[9],
      name: `${item[11]} ${item[10]}`,
      fromDate: item[7],
    });
  });
  return jsonResponse;
};

const getAvailableAssets = async () => {
  const response = await axios.get(`${BASE_URL}/overview/availableAssets`);
  const { data } = response;
  let jsonResponse = [];
  data.map((item) => {
    jsonResponse.push({
      id: item[0],
      brand: item[1],
      model: item[2],
    });
  });
  return jsonResponse;
};

const addNewRegister = async (data) => {
  const { asset, developer } = data;
  var bodyFormData = new FormData();
  bodyFormData.append("assetId", asset.id);
  bodyFormData.append("developerId", developer.id);
  axios({
    method: "post",
    url: `${BASE_URL}/overview/addRegister`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ------ ASSETS ------

const getAssets = async () => {
  const response = await axios.get(`${BASE_URL}/assets/all`);
  const { data } = response;
  let jsonResponse = [];
  data.map((item) => {
    jsonResponse.push({
      id: item[0],
      brand: item[1],
      model: item[2],
      assetType: item[3],
      imgUrl: item[4],
      devId: item[8] ? null : item[5],
      devName: item[8] ? null : `${item[11]} ${item[10]}`,
    });
  });
  return jsonResponse;
};

const freeDevice = async (assetId) => {
  const response = await axios.get(
    `${BASE_URL}/assets/freedevice?assetId=${assetId}`
  );
  return response;
};

const deleteAsset = async (assetId) => {
  const response = await axios.get(
    `${BASE_URL}/assets/delete?assetId=${assetId}`
  );
};

const addAsset = (data) => {
  const { brand, model, assettype, imgurl } = data;
  var bodyFormData = new FormData();
  bodyFormData.append("brand", brand);
  bodyFormData.append("model", model);
  bodyFormData.append("assettype", assettype);
  bodyFormData.append("imgurl", imgurl);

  axios({
    method: "post",
    url: `${BASE_URL}/assets/add`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// ----- DEVELOPERS ------

const getDevelopers = async () => {
  const response = await axios.get(`${BASE_URL}/developers`);
  const { data } = response;
  let jsonResponse = [];
  data.map((item) => {
    if (item[8])
      jsonResponse.push({
        id: item[0],
        name: `${item[2]} ${item[1]}`,
        phone: item[3],
        address: item[4],
        city: item[5],
        state: item[6],
        country: item[7],
      });
  });
  return jsonResponse;
};

const addDeveloper = (data) => {
  const { firstName, lastName, phone, address, city, state, country } = data;
  var bodyFormData = new FormData();
  bodyFormData.append("firstname", firstName);
  bodyFormData.append("lastname", lastName);
  bodyFormData.append("phone", phone);
  bodyFormData.append("address", address);
  bodyFormData.append("city", city);
  bodyFormData.append("state", state);
  bodyFormData.append("country", country);

  axios({
    method: "post",
    url: `${BASE_URL}/developers/add`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

const getDeveloperAssets = async (devId) => {
  const response = await axios.get(`${BASE_URL}/assets?developerId=${devId}`);
  let jsonResponse = [];
  response.data.map((r) =>
    jsonResponse.push({
      assetId: r[1],
      brand: r[5],
      model: r[6],
    })
  );
  return jsonResponse;
};

const deleteDeveloper = async (devId) => {
  const response = await axios.get(
    `${BASE_URL}/developers/delete?developerId=${devId}`
  );
};

export {
  getAssets,
  freeDevice,
  addAsset,
  deleteAsset,
  login,
  getDevelopers,
  addDeveloper,
  getDeveloperAssets,
  deleteDeveloper,
  getAllAsignedAssets,
  getAvailableAssets,
  addNewRegister,
};
