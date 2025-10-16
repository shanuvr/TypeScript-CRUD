import mongoose,{Document} from "mongoose"

interface ITask extends Document{
    title:string;
    description?:string;
    completed:boolean;
}

const takSchema =  new mongoose.Schema<ITask>({
    title:{type:String,required:true},
    description :{type:String},
    completed:{type:Boolean,default:false}

})

const Task = mongoose.model<ITask>("task",takSchema)
export default Task