import mongoose, { Schema } from "mongoose";

const cholesterolSchema=new Schema(
    {
        qh1: String,
        qh2: String,
        qh3: String,
        qh4: String,
        qh5: String,
        qh6: String,
        qh7: String,
        qh8: String,
        qh9: String,
        qh10: String,
        qh11: String,
        qh12: String,
        qh13: String,
        qh14: String,
        qh15: String,
        qh16: String,
        qh17: String,
        qh18: String,
        qh19: String,
        qh20: String,
        qh21: String,   
    },
    {
        timestamps:true,
    } 
);

const Cholesterol = mongoose.models.Cholesterol||mongoose.model("Cholesterol",cholesterolSchema);

export default Cholesterol;