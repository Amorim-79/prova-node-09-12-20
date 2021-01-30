import { celebrate, Joi } from 'celebrate';

// Validações para a rota de Usuários
export = celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        username: Joi.string().required(),
        email: Joi.string().required().email(),
    })
}, {
    abortEarly: false,
});