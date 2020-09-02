import Vue from "vue";
import Vuex from "vuex";
import PouchDB from "pouchdb";

var timeEntriesDB = new PouchDB("timeEntries");
var projectsDB = new PouchDB("projects");
// PouchDB.debug.enable("*");

timeEntriesDB.put({ name: "Gwen" }, {}, () => {
  console.log("worked");
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
