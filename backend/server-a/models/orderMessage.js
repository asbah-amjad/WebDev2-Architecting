import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    orderId: Number,
    sandwitchId: Number,
    status: {
        type: String,
        enum: ['ordered', 'received', 'inQueue', 'ready', 'failed']
    },
});

const OrderMessage = mongoose.model('OrderMessage', orderSchema);

export default OrderMessage;