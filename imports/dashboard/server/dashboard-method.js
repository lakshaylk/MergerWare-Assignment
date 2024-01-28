Meteor.methods({
    assignRoleToUser(role = null) {
        try {
            if (!role) {
                throw new Meteor.Error(404, "Role not found!")
            }

            // assign role to current logged-in user
            return Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.role': role}});
        }
        catch (error) {
            throw error;
        }
    }
})