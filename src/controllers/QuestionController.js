const Database = require('../db/config')

module.exports ={

    index(req, res){
        const roomId = req.params.room;
        const questionId = req.params.question;
        const action = req.params.action;
        const password = req.body.password

        console.log(`room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`)
    },

    async create(req, res){
        const db = await Database()
        const roomId = req.params.room
        const question = req.body.question
        const room = roomId

        await db.run(`INSERT INTO questions(
            title,
            room,
            read
        )VALUES(
            "${question}",
            ${room},
            0
        )`)

        res.redirect(`/room/${roomId}`)
    }
}