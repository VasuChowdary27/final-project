import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'userModel',
            required: true
        },
        carCompany: {
            type: String,
            required: true,
        },
        carModel: {
            type: String,
            required: true,
        },
        yearOfPurchase: {
            type: String,
            required: true
        },
        fuelType: {
            type: String,
            required: true
        },
        KMsDriven: {
            type: String,
            required: true
        },
        carValue: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now
        }
    },

    { 
        collection: 'History Data' 
    }
)

const historyModel = mongoose.model('HistoryData', historySchema)

export default historyModel