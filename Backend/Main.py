from flask import Flask, jsonify, request
from flask_cors import CORS

import Conexao as conn
import Auxiliares as aux

app = Flask(__name__)

CORS(app)
app.config['JSON_AS_ASCII'] = False #caracteres utf-8

#funcionalidades / endpoints

@app.route('/')
def homepage():
    return "A API está no ar"

@app.route('/criar')
def CriarTabelas():
    aux.CriarTabelas()
    return jsonify("Tabelas criadas com sucesso")

@app.route('/deletar')
def DeletarTabelas():
    aux.DroparTabelas()
    return jsonify("Tabelas excluídas com sucesso")

@app.route('/zerar')
def ResetarBaseDados():
    aux.ResetarTabelas()
    return jsonify("Base de Dados reiniciada com sucesso")

@app.route('/iniciar')
def IniciarBaseDados():
    aux.Inicializar()
    return jsonify("Dados inseridos com sucesso!")

@app.route('/pegaralunos')
def GetAlunos():
    response = aux.RetornarAlunos()
    return jsonify(response)

@app.route('/pegarprofessores')
def GetProfessores():
    response = aux.RetorarProfessor()
    return jsonify(response)

@app.route('/pegardisciplinas')
def GetDisciplinas():
    response = aux.RetornarDisciplinas()
    return jsonify(response)

@app.route('/pegarturmas')
def GetTurmas():
    response = aux.RetornarTurmas()
    return jsonify(response)

@app.route('/historico-por-ano')
def GetHistoricoPorAno():
    matricula = request.args.get('matricula')
    response = aux.RetornarHistoricosPorAno(matricula)
    return jsonify(response)

@app.route('/historico-aluno')
def GetHistoricoAluno():
    matricula = request.args.get('matricula')
    ano = request.args.get('ano')

    response = aux.RetornarHistoricoAluno(matricula, ano)
    return jsonify(response)

@app.route('/alunos-com-nota-maior-que-7')
def GetAlunosComNotaMaiorQue7():
    response = aux.GetAlunosComNotaMaiorQue7()
    return jsonify(response)

@app.route('/media-notas-computacao-grafica')
def GetMediaNotasComputacaoGrafica():
    response = aux.GetMediaNotasComputacaoGrafica()
    return jsonify(response)

@app.route('/alunos-com-frequencia-menor-que-75')
def GetAlunosComFrequenciaMenorQue75():
    response = aux.GetAlunosComFrequenciaMenorQue75()
    return jsonify(response)

@app.route('/professores-com-aula-para-pelo-menos-5-alunos')
def GetProfessoresComAulaParaPeloMenos5Alunos():
    response = aux.GetProfessoresComAulaParaPeloMenos5Alunos()
    return jsonify(response)

@app.route('/alunos-com-nota-menor-que-5')
def GetAlunosComNotaMenorQue5():
    response = aux.GetAlunosComNotaMenorQue5()
    return jsonify(response)

@app.route('/transacao')
def Transacao():
    response = aux.Transacao()
    return jsonify(response)

#rodar a api 

app.run()
