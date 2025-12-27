import axios from "axios";

const API_URL = import.meta.env.VITE_API_PATH;

export const employeeLists = async (token, { page = 1 } = {}) => {
  return await axios.get(`${API_URL}/employees`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
    },
    params: {
      page,
    },
  });
};

export const employeeDetail = async (token, { id }) => {
  return await axios.get(`${API_URL}/employees/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  });
};

export const employeeCreate = async (token, payload) => {
  return await axios.post(
    `${API_URL}/employees`,
    payload,
    {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const employeeUpdate = async (token, id, formData) => {
  return await axios.post(
    `${API_URL}/employees/${id}`,
    formData,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }
  );
};


export const employeeDelete = async (token, { id }) => {
  return await axios.delete(`${API_URL}/employees/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  });
};

