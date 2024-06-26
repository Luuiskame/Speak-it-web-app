const {Message} = require('../db')

const getMessages = async (req,res)=>{
    try {
        const {chatId, offset} = req.params
        const {page = 1, limit = 30} = req.query

        const messages = await Message.findAll({
            where:{
                chatId
            },
            order: [['timestamp', 'DESC']],
            limit: parseInt(limit, 30),
            offset: (page -1)  * limit,
        })
        return res.status(200).json(messages)
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getMessages