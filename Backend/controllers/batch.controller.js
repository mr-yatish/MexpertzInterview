const { Batch } = require('../models');
// Create a new batch
async function createBatch(req, res) {
    try {
        const batch = req.body;
        const newbatch = new Batch({
            ...batch
        });
        await newbatch.save();
        return res.status(200).send({
            hasError: false,
            data: newbatch,
        });
    } catch (error) {

    }
}

module.exports = {
    createBatch
}