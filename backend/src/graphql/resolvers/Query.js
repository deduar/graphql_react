import Message from "../../models/message";

const Query = {
    ping(){
        return "pong!"
    },
    messages: async () => {
        return await Message.find()
    }
}

export default Query;