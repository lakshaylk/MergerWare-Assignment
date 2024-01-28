import { Loans, Payments } from "../../startup/lib/collections";
import '../lib/loan-tabular';
import '../lib/payment-tabular';

Meteor.methods({
    saveLoan(loanData) {
        try {
            const date = new Date();
            return Loans.insert({
                ...loanData,
                createdBy: Meteor.userId(),
                createdAt: date,
                updatedAt: date,
                updatedBy: Meteor.userId(),
                status: "pending",
                pendingAmount: parseFloat(loanData.loanAmount)
            });
        }
        catch (error) {
            throw error;
        }
    },
    lentMoney(id, amount) {
        try {
            const date = new Date();
            const isPaid = Payments.insert({
                amount,
                loanId: id,
                createdBy: Meteor.userId(),
                createdAt: date,
                updatedAt: date,
                updatedBy: Meteor.userId(),
                status: "completed"
            })

            if (isPaid) {
                const loan = Loans.findOne({_id: id}); 
                const pendingAmount = parseFloat(loan?.pendingAmount) - parseFloat(amount);
                if (loan) {
                    return Loans.update({_id: id}, {
                        $set: {
                            pendingAmount: pendingAmount,
                            updatedAt: date,
                            updatedBy: Meteor.userId(),
                            status: pendingAmount == 0 ? "completed" : "pending"
                        }
                    });
                }
            }
        }
        catch (error) {
            throw error;
        }
    }
})