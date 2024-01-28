import './loans.html';
import '../lib/loan-tabular';

TabularTables = {};

Template.loans.helpers({
  selector() {
    return Meteor.user()?.profile?.role != "admin" ? {createdBy: Meteor.userId()} : {}
  }
});

  
Template.loanActions.helpers({
  isLender() {
    return Meteor.user()?.profile?.role == "lender";
  },
  isCompleted(status) {
    return status == "completed"
  }
});
  