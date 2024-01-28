import './payLoan.html';
import { Loans } from "../../startup/lib/collections";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

Template.payLoan.onCreated(function() {
    console.log('FlowRouter.current().params.id: ', FlowRouter.current().params.id);
    this.subscribe('getLoandById', FlowRouter.current().params.id);
})

Template.payLoan.helpers({
    getLoanInfo() {
        return Loans.findOne({_id: FlowRouter.current().params.id});
    }
});

Template.payLoan.events({
    'submit #loanForm' (event, template) {
        event.preventDefault();

        const loan = Loans.findOne({_id: FlowRouter.current().params.id});
        const amount =  $("#loanAmount").val()?.trim();

        // payment should be lessthan equal to loan amount
        if (parseFloat(amount) <= parseFloat(loan?.loanAmount)) {
            Meteor.call("lentMoney", FlowRouter.current().params.id, amount, (error, result) => {
                if (error) {
                    alert(error.reason);
                }
                else {
                    alert("Payment done sucessfully!");
                    FlowRouter.go('loans');
                }
            })
        }
        else {
            alert("You cant pay extra! The amount should be lesser or equal to loan amount!")
        }

    }
})