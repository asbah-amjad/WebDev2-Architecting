import OrderMessage from '../models/orderMessage.js';

export const getOrder = async (req,res) => {
    try{
        const orderMessages = await OrderMessage.find();

        res.status(200).json(orderMessages);
    } catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const getOrderById = async (req, res) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).send(`Invalid ID supplied`);
    try {
        const order = await OrderMessage.findById(id);
        
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addOrder = async (req,res) => {
    const {id, sandwitchId, status} = req.body;

    const newOrder = new OrderMessage({id, sandwitchId, status});
    try{
        await newOrder.save();

        res.status(200).json(newOrder);
    } catch(error){
        res.status(400).json({ message: error.message });
    }
}