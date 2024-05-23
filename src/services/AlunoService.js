const database = require(`../database`)

module.exports={
    // Metodos para pesquisar todos os alunos
    searchAlunos:()=>{
        return new Promise(
            (accepted, rejected) => {
                database.query("SELECT * FROM aluno", (error, result) => {
                    if(error){
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    //Metodo para pesquisar os alunos por curso
    getAlunosByCurso: (codigo) => {
        return new Promise((accepted, rejected) => {
            database.query(
                `SELECT * FROM aluno WHERE fk_turma = ${codigo}`, (error, result) => {
                    if(error){
                        rejected(error)
                        return
                    }

                    accepted(result)
                }
            )
        })
    },
    getAlunoById: (id) => {
        return new Promise((accepted, rejected) => {
            database.query(
                `SELECT * FROM aluno WHERE id = ${id}`, (error, result) => {
                    if(error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                }
            )
        })
    },
    
    //Metodo para cadastrar um aluno
    createAluno: (nome, telefone, data, endereco, turma) => {
        return new Promise((accepted, rejected) =>{
            database.query(
            `INSERT INTO aluno (nome, telefone, dt_nascimento, endereco, fk_turma) VALUES
            ('${nome}','${telefone}', '${data}', '${endereco}', ${turma})`, 
            (error, result) => {
                if(error){
                    rejected(error)
                    return
                }

                accepted(result)
            })
        })
    },
    //Metodo para atualizar as informacoes de um aluno
    updateAluno: (id, nome, telefone, data, endereco) => {
        return new Promise((accepted, rejected) => {
            database.query(
                `UPDATE aluno SET nome = '${nome}', telefone = '${telefone}', dt_nascimento = '${data}', endereco = '${endereco}' WHERE id = ${id}`,
                (error, result) => {
                    if(error){
                        rejected(error)
                        return
                    }
                    accepted(result)
            })
        })
    },

    deleteAluno: (id) => {
        return new Promise((accepted, rejected) => {
            database.query(`DELETE FROM aluno WHERE id = ${id}`, (error, result) => {
                if(error){
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    }
}