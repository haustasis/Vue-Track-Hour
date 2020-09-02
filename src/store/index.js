import Vue from "vue";
import Vuex from "vuex";
import PouchDB from "pouchdb";
import { v4 as uuidv4 } from "uuid";

var timeEntriesDB = new PouchDB("timeEntries");
var projectsDB = new PouchDB("projects");
// PouchDB.debug.enable("*");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    timeEntries: [],
    projects: []
  },
  mutations: {
    setTimeEntries(state, payload) {
      state.timeEntries = payload;
    }
  },
  actions: {
    async readTimeEntries({ commit }) {
      const docs = await timeEntriesDB.allDocs();
      commit("setTimeEntries", docs.rows);
    },
    async createTimeEntry({}, payload) {
      try {
        const res = await timeEntriesDB.put({ _id: uuidv4(), ...payload });
        console.log("success", res);
      } catch (err) {
        console.error(err);
      }
    },
    async createProject({}, payload) {
      try {
        const res = await projectsDB.put({ _id: uuidv4(), ...payload });
        console.log("success", res);
      } catch (err) {
        console.error(err);
      }
    }
  },
  modules: {}
});
