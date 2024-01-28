import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './requestLoan.html';

Template.requestLoan.events({
    'submit #loanForm' (event, template) {
        event.preventDefault();

        Meteor.call("saveLoan",  {loanAmount: $("#loanAmount").val()?.trim(), loanPurpose: $("#loanPurpose").val()?.trim()} , (error, result) => {
            if (error) {
                alert(error.reason);
            }
            else {
                alert("Your loan is applied sucessfully!");
                FlowRouter.go('loans');
            }
        })
    }
})