const TurmaService = require("../services/TurmaService")
const turmaService = require("../services/TurmaService")

module.exports = {
    readyTurma: async (request, response) => {
        let json = {error:"", result:[]}
        let turma = await turmaService.searchTurma()

        //Estrutura de repeticao
        for(let i in turma){
            json.result.push({
                id: turma[i].id_turma,
                nome: turma[i].nome,
                descricao: turma[i].descricao,
                quantidade_alunos: turma[i].quantidade_alunos
            })
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.json(json)
    },
    
    createTurma: async (request, response) => {
        let json = {error:"", result: {}}

        let nome = request.body.nome
        let descricao = request.body.descricao
        let quantidade_alunos = request.body.quantidade_alunos

        if(nome && descricao && quantidade_alunos >= 0){
            let turma = await turmaService.createTurma(
                nome,
                descricao,
                quantidade_alunos
            )
            json.result = {
                id_turma: turma.insertId,
                nome, 
                descricao,
                quantidade_alunos
            }
        }else {
            json.error = "Incomplete Fields"
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.json(json)
    },

    updateAluno: async (request, response) => {
        let json = {error:"", result: {}}

        let id_turma = request.params.codigo
        let nome = request.body.nome
        let descricao = request.body.descricao
        let quantidade_alunos = request.body.quantidade_alunos

        if(id_turma){
            await turmaService.updateTurma(id_turma, nome, descricao, quantidade_alunos)

            json.result = {id_turma, nome, descricao, quantidade_alunos}
        }else{
            json.error = "Error ID!"
        }
        
        response.header("Access-Control-Allow-Origin", "*")
        response.json(json)
    },

    deleteTurma: async (request, response) => {
        let json = {error:"", result:""}

        let id = request.params.codigo

        if(id){
            let turma = await turmaService.searchTurmaById(id)

                if(turma.length == 0){
                    json.error = "Turma não encontrado!"
                    response.header("Access-Control-Allow-Origin", "*")
                    response.status(400).json(json)
                }else{
                    await TurmaService.deleteTurma(id)
                    json.result = `Turma deleted sucessfully! ID: ${id}`

                    response.header("Access-Control-Allow-Origin", "*")
                    response.status(200).json(json)
                }
        }else{
            json.error = "Error ID!"
            response.header("Access-Control-Allow-Origin", "*")
            response.json(json)
        }
    }
}