import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import './login.html';


Template.login.events({
    'submit #loginForm' (event, template) {
        event.preventDefault();

        Meteor.loginWithPassword( $("#email").val()?.trim()?.toLowerCase(), $("#password").val()?.trim(), (error, result) => {
            if (error) {
                alert(error.reason);
            }
            else {
                alert("Login sucessfull!");
                FlowRouter.go('dashboard');
            }
        })
    }
})