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

@app.route('/zerar')
def ResetarBaseDados():
    aux.ResetarTabelas()
    return "Base de Dados reiniciada com sucesso"

@app.route('/iniciar')
def IniciarBaseDados():
    aux.Inicializar()
    return "Dados inseridos com sucesso!"

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
    response = aux.RetornarHistoricosPorAno(36430)
    return jsonify(response)

#rodar a api 

app.run()
