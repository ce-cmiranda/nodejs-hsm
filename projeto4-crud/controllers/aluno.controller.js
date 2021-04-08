const { json } = require('body-parser');
const Aluno = require('../models/aluno.models');

exports.create = (req, res) => {
    console.log(req.body)
    // console.log(json(req.body))
    if(!req.body){
        return res.status(400).send({
            "message": "Necessários informar o aluno e a média1"
        });
    }

    
    const aluno = new Aluno({
        nome: req.body.nome || "Nome não informado",
        media: req.body.media,
    });

    aluno.save()
    .then(data => {
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Erro ao criar"
        })
    })
}

exports.findAll = (req, res) =>{
    Aluno.find()
    .then(alunos=>{
        res.send(alunos);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Erro ao buscar o aluno"
        });
    });
}

exports.findOne = (req, res) => {
    Aluno.findById(req.params.alunoId)
    
    .then(aluno =>{
        if(!aluno){
            return res.status(404).send({
                message: "Aluno não encontrado "+ req.params.alunoId
            });
        }
        res.send(aluno);
    }).catch(err=>{
        if(err.kind == 'ObjectId'){
            return res.status(404).send({
                message: "Aluno não encontrado "+ req.params.alunoId
            })
        }
        return res.status(500).send({
            message: "Nota não encontrada" + req.params.alunoId
        })
    })

}

exports.update = (req, res) => {
    if(!req.body.nome){
        return res.status(400). send({
            message: "O nome do aluno precisa estar preenchido"
        })
    }

    Aluno.findByIdAndUpdate(req.params.alunoId,{
        nome: req.body.nome || "Nome não informado",
        media: req.body.media
    }, {new: true})
    .then(aluno => {
        print(console.log(aluno))
        if(!aluno){
            return res.status(404).send({
                message: "Aluno não pode ser encontrado " + req.params.alunoId
            });
        }
        res.send(aluno)
    }).catch(err => {
        if(err.kind == "ObjectId"){
            return res.status(404).send({
                message: "Aluno não encontrado "+ req.params.alunoId
            });
        }
        return res.status(500).send({
            message: "Erro ao atualizar aluno "+req.params.alunoId
        });
    });
}


exports.delete = (req, res) => {
    Aluno.findByIdAndRemove(req.params.alunoId)
    .then(aluno =>{
        print(aluno)
        if(!aluno){
            return res.status(404).send({
                message: "Aluno não encontrado " + req.params.alunoId
            });
        }
        res.send({
            message: "Aluno deletado"
        })
    }).catch(err =>{
        if(err.kind === "ObjectId" || err.name === "Not Found"){
            return res.status(404).send({
                message: "Aluno não encontrado " + req.params.alunoId
            });
        }
        return res.status(500).send({
            message: "Aluno não encontrado "+req.params.alunoId
        })
    })
}
