import Tabular from 'meteor/aldeed:tabular';
import { Loans } from "../../startup/lib/collections";

new Tabular.Table({
  name: "loans",
  collection: Loans,
  columns: [
    {data: "_id", title: "ID"},
    {data: "loanAmount", title: "Amount"},
    {data: "loanPurpose", title: "Purpose"},
    {data: "status", title: "Status"},
    {
      title: "Actions",
      tmpl: Meteor.isClient && Template.loanActions
    }
  ]
});