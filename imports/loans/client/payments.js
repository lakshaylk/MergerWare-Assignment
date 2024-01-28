import './payments.html';
import '../lib/payment-tabular';

Template.payments.helpers({
    selector() {
      return Meteor.user()?.profile?.role != "admin" ? {createdBy: Meteor.userId()} : {}
    }
  });