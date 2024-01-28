import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './registration.html';


Template.registration.events({
    'submit #registrationForm' (event, template) {
        event.preventDefault();

        const password =  $("#password").val()?.trim();
        const cpassword =  $("#cpassword").val()?.trim();

        if (password !== cpassword) {
            alert("Password didnt match!")
            return false;
        }

        Meteor.call("registerUsers",  {email: $("#email").val()?.trim()?.toLowerCase(), password} , (error, result) => {
            if (error) {
                alert(error.reason);
            }
            else {
                alert("Registration sucessfull! \n Please login with registered email and password!");
                FlowRouter.go('login');
            }
        })
    }
})