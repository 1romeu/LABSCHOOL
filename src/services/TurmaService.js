const database = require('../database')

module.exports = {
    searchTurmaById: (codigo) =>{
        return new Promise((accepted, rejected) => {
        database.query(`SELECT * FROM turma WHERE id_turma = ${codigo}`,
            (error, result) => {
                if(error){
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    }, 

    //Metodo para adicionar quantidade de aluno
    AddAlunos: (id) => {
        return new Promise((accepted, rejected) => {
            database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos + 1 WHERE id_turma = ${id}`,
            (error, result) => {
                if(error){
                    rejected(error)
                    return
                }
                accepted(result)    
            })
        })
    },
    //Metodo para remover quantidade de aluno

    searchTurma:()=>{
        return new Promise(
            (accepted, rejected) => {
                database.query("SELECT * FROM turma", (error, result) => {
                    if(error){
                        rejected(error)
                    }
                    accepted(result)
                })
            }
        )
    }, 

    getTurmaByCurso: (codigo) => {
        return new Promise((accepted, rejected) => {
            database.query(
            `SELECT * FROM aluno WHERE fk_turma = ${codigo}`, (error, result) => {
                if(error){
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    },
    createTurma: (nome, descricao, quantidade_alunos) => {
        return new Promise((accepted, rejected) => {
            database.query(
            `INSERT INTO turma (nome, descricao, quantidade_alunos) VALUES  
            ('${nome}', '${descricao}', '${quantidade_alunos}')`,
            (error, result) => {
                if(error){
                    rejected(error)
                    return
                }
                
                accepted(result)
            })
        })
    },

    updateTurma: (id_turma, nome, descricao, quantidade_alunos) => {
        return new Promise((accepted, rejected) => {
            database.query(
            `UPDATE turma SET nome = '${nome}', descricao = '${descricao}', quantidade_alunos = ${quantidade_alunos} WHERE id_turma = ${id_turma}`,
            (error, result) => {
                if(error){
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    },

    deleteTurma: (id_turma) => {
        return new Promise((accepted, rejected) => {
        database.query(`DELETE FROM turma WHERE id_turma = ${id_turma}`, (error, result) => {
            if(error){
                rejected(error)
                return
                }
                accepted(result)
            })
        })
    },

DelAlunos: (id) => {
    return new Promise((accepted, rejected) => {
        database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos - 1 WHERE id_turma = ${id}`,
        (error, result) => {
                if(error){
                    rejected(error)
                    return
                }
                accepted(result)    
            })
        }) 
    }
}