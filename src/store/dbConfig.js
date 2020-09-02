import PouchDB from "pouchdb";

var timeEntriesDB = new PouchDB("timeEntries");
var projectsDB = new PouchDB("projects");
// PouchDB.debug.enable("*");

export default {
  timeEntriesDB,
  projectsDB
};
