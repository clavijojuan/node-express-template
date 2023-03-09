const { response } = require('express');

const usuariosGet = ( req, res = response ) => {

    const query = req.query;

    res.json({
        ok: true,
        msg: 'get API',
        query
    })
}

const usuariosPost = ( req, res = response ) => {

    const { body } = req;

    res.json({
        ok: true,
        msg: 'post API',
        body
    })
}

const usuariosPut = ( req, res = response ) => {


    const { id } = req.params;


    res.json({
        ok: true,
        msg: 'put API',
        id
    })
}

const usuariosPatch = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'patch API'
    })
}

const usuariosDelete = ( req, res = response ) => {
    res.json({
        ok: true,
        msg: 'delete API'
    })
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}