import React from 'react';
import axios from 'axios';

const BASE_URL = 'https://jbac.in:9762/dashboardapi/';

export const jesusService = {
  getAbout: async () => {
    const response = await axios.post(`${BASE_URL}getaboutwebsite`, {});
    return response.data;
  },

  postSignup: async (data: any) => {
    const response = await axios.post(`${BASE_URL}postwebsitesignup`, data);
    return response.data;
  },

  login: async (data: any) => {
    const response = await axios.post(`${BASE_URL}passwordwebsitelogin`, data);
    return response.data;
  },

  getEvents: async () => {
    const response = await axios.post(`${BASE_URL}getupdateevents`, {});
    return response.data;
  },

  getDenominations: async () => {
    const response = await axios.post(`${BASE_URL}denomations`, {});
    return response.data;
  },

  // Helper for session management
  setSession: (userId: string, name: string) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('usr_id', userId);
      sessionStorage.setItem('name', name);
    }
  },

  clearSession: () => {
    if (typeof window !== 'undefined') {
      sessionStorage.clear();
    }
  },

  getUserId: () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('usr_id');
    }
    return null;
  }
};
