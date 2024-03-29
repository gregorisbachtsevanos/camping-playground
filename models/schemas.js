const Joi = require('joi');
const campSchema = Joi.object({
    campground: Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required().min(0),
        location: Joi.string().required(),
        image: Joi.string().required(),
        description: Joi.string().required(),
    }).required()
})

const reviewSchema = Joi.object({
    review: Joi.object({
        body: Joi.string().required(),
        rating: Joi.number().required()
    }).required()
})

module.exports = {campSchema, reviewSchema}