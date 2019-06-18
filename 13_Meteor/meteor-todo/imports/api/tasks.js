import { Mongo } from 'meteor/mongo';
// Tables are called Collections in Mongo
export const Tasks = new Mongo.Collection('tasks');

// Rows are called Documents in Mongo