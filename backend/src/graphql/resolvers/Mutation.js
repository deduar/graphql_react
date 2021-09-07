import Message from "../../models/message";

const Mutation = {
    createMessage: async (_,{title,content,author}) => {
        const newMessage = new Message({title,content,author});
        return await newMessage.save()
    }
}

export default Mutation;