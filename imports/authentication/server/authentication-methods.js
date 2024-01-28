Meteor.methods({
    registerUsers(userData) {
        try {
            return Accounts.createUser({
                email: userData.email,
                password: userData.password
            })
        }
        catch (error) {
            throw error;
        }
    }
})