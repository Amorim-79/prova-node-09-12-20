"use strict";
const celebrate_1 = require("celebrate");
module.exports = celebrate_1.celebrate({
    body: celebrate_1.Joi.object().keys({
        name: celebrate_1.Joi.string().required(),
        username: celebrate_1.Joi.string().required(),
        email: celebrate_1.Joi.string().required().email(),
    })
}, {
    abortEarly: false,
});
