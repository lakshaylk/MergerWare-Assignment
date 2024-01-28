import Tabular from 'meteor/aldeed:tabular';
import { Payments } from "../../startup/lib/collections";

new Tabular.Table({
  name: "payments",
  collection: Payments,
  columns: [
    {data: "_id", title: "REF ID"},
    {data: "amount", title: "Amount"},
    {data: "createdBy", title: "Paid By"},
    {data: "status", title: "Status"}
  ]
});