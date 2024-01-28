import { Loans } from "../../startup/lib/collections"

Meteor.publish("getLoandById", (id) => {
    if (id) {
        return Loans.find({_id: id});
    }
})