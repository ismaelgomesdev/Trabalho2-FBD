import Conexao as conn

# Inicialização

def CriarTabelas():
    sql = open("./SQL/CREATE_TABLES.sql", "r")
    conn.ExecutarQuery(sql.read())

def DroparTabelas():
    sql = open("./SQL/DROP_TABLES.sql", "r")
    conn.ExecutarQuery(sql.read())

def ResetarTabelas():
    DroparTabelas()
    CriarTabelas()

def Inicializar():
    InserirDisciplinas()
    InserirAlunos()
    InserirProfessores()
    InserirTurmas()
    InserirHistoricos()

#Inserções

def InserirDisciplinas():
    arquivo = open("./Dados/Disciplinas.csv", "r", encoding='utf-8-sig')

    sql = ""

    for disciplina in arquivo.readlines():
        disciplina = disciplina.replace("\n", "")
        disciplina = disciplina.split(";")
        sql += f"INSERT INTO DISCIPLINAS (NOME_DISCIPLINA, CREDITOS_DISCIPLINA) VALUES ('{disciplina[1]}', {disciplina[2]});"

    conn.ExecutarQuery(sql)

def InserirAlunos():
    arquivo = open("./Dados/Alunos.csv", "r", encoding='utf-8-sig')

    sql = ""

    for aluno in arquivo.readlines():
        aluno = aluno.replace("\n", "")
        aluno = aluno.split(";")
        sql += f"INSERT INTO ALUNOS (MATRICULA_ALUNO, NOME_ALUNO, SEMESTRE_ALUNO, DATA_NASCIMENTO_ALUNO) VALUES ({aluno[0]}, '{aluno[1]}', {aluno[2]}, '{aluno[3]}');\n"
    
    conn.ExecutarQuery(sql)

def InserirProfessores():
    arquivo = open("./Dados/Professores.csv", "r", encoding='utf-8-sig')

    sql = ""

    for professor in arquivo.readlines():
        professor = professor.replace("\n","")
        professor = professor.split(";")
        sql += f"INSERT INTO PROFESSORES (NOME_PROFESSOR, AREA_PESQUISA_PROFESSOR) VALUES ('{professor[1]}', '{professor[2]}');\n"

    conn.ExecutarQuery(sql)

def InserirTurmas():
    arquivo = open("./Dados/Turmas.csv", "r", encoding='utf-8-sig')

    sql = ""

    for turma in arquivo.readlines():
        turma = turma.replace("\n","")
        turma = turma.split(";")
        sql += f"INSERT INTO TURMAS (CODIGO_DISCIPLINA, CODIGO_PROFESSOR, ANO_TURMA, HORARIO_TURMA) VALUES ({turma[1]}, {turma[2]}, '{turma[3]}', '{turma[4]}');\n"

    conn.ExecutarQuery(sql)

def InserirHistoricos():
    arquivo = open("./Dados/Historico.csv", "r", encoding='utf-8-sig')

    sql = ""

    for historico in arquivo.readlines():
        historico = historico.replace("\n","")
        historico = historico.split(";")
        sql += f"INSERT INTO HISTORICOS (MATRICULA_ALUNO, CODIGO_TURMA,CODIGO_DISCIPLINA, CODIGO_PROFESSOR , ANO_HISTORICO, FREQUENCIA_HISTORICO, NOTA_HISTORICO) \
        VALUES ({historico[1]},	{historico[2]},	{historico[3]},	{historico[4]},	'{historico[5]}',	{historico[6]},	{historico[7]});\n"

    conn.ExecutarQuery(sql)

def InserirAluno(matricula, nome, semestre, dataNascimento):
    sql = f"INSERT INTO ALUNOS (MATRICULA_ALUNO, NOME_ALUNO, SEMESTRE_ALUNO, DATA_NASCIMENTO_ALUNO) VALUES ({matricula}, '{nome}', {semestre}, '{dataNascimento}');"
    conn.ExecutarQuery(sql)

def InserirHistorico(matricula, codigoTurma, codigoDisciplina, codigoProfessor, anoHistorico, frequenciaHistorico, notaHistorico):
    sql = f"INSERT INTO HISTORICOS (MATRICULA_ALUNO, CODIGO_TURMA, CODIGO_DISCIPLINA, CODIGO_PROFESSOR , ANO_HISTORICO, FREQUENCIA_HISTORICO, NOTA_HISTORICO) \
        VALUES ({matricula}, {codigoTurma} , {codigoDisciplina}, {codigoProfessor}, '{anoHistorico}', {frequenciaHistorico}, {notaHistorico});"
    conn.ExecutarQuery(sql)


#Pesquisas
def RetorarProfessor():
    sql = "SELECT * FROM PROFESSORES"
    response = conn.ExecutarQueryPesquisa(sql)
    return response

def Main(): 
    retorno = RetorarProfessor()
    print(retorno)

Main()