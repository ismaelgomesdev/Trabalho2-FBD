import Conexao as conn

# Inicialização

def CriarTabelas():
    sql = open("./SQL/CREATE_TABLES.sql", "r")
    conn.ExecutarQuery(sql.read())
    sql.close()

def DroparTabelas():
    sql = open("./SQL/DROP_TABLES.sql", "r")
    conn.ExecutarQuery(sql.read())
    sql.close()

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
    arquivo.close()

def InserirAlunos():
    arquivo = open("./Dados/Alunos.csv", "r", encoding='utf-8-sig')

    sql = ""

    for aluno in arquivo.readlines():
        aluno = aluno.replace("\n", "")
        aluno = aluno.split(";")
        sql += f"INSERT INTO ALUNOS (MATRICULA_ALUNO, NOME_ALUNO, SEMESTRE_ALUNO, DATA_NASCIMENTO_ALUNO) VALUES ({aluno[0]}, '{aluno[1]}', {aluno[2]}, '{aluno[3]}');\n"
    
    conn.ExecutarQuery(sql)
    arquivo.close()

def InserirProfessores():
    arquivo = open("./Dados/Professores.csv", "r", encoding='utf-8-sig')

    sql = ""

    for professor in arquivo.readlines():
        professor = professor.replace("\n","")
        professor = professor.split(";")
        sql += f"INSERT INTO PROFESSORES (NOME_PROFESSOR, AREA_PESQUISA_PROFESSOR) VALUES ('{professor[1]}', '{professor[2]}');\n"

    conn.ExecutarQuery(sql)
    arquivo.close()

def InserirTurmas():
    arquivo = open("./Dados/Turmas.csv", "r", encoding='utf-8-sig')

    sql = ""

    for turma in arquivo.readlines():
        turma = turma.replace("\n","")
        turma = turma.split(";")
        sql += f"INSERT INTO TURMAS (CODIGO_DISCIPLINA, CODIGO_PROFESSOR, ANO_TURMA, HORARIO_TURMA) VALUES ({turma[1]}, {turma[2]}, '{turma[3]}', '{turma[4]}');\n"

    conn.ExecutarQuery(sql)
    arquivo.close()

def InserirHistoricos():
    arquivo = open("./Dados/Historico.csv", "r", encoding='utf-8-sig')

    sql = ""

    for historico in arquivo.readlines():
        historico = historico.replace("\n","")
        historico = historico.split(";")
        sql += f"INSERT INTO HISTORICOS (MATRICULA_ALUNO, CODIGO_TURMA,CODIGO_DISCIPLINA, CODIGO_PROFESSOR , ANO_HISTORICO, FREQUENCIA_HISTORICO, NOTA_HISTORICO) \
        VALUES ({historico[1]},	{historico[2]},	{historico[3]},	{historico[4]},	'{historico[5]}',	{historico[6]},	{historico[7]});\n"

    conn.ExecutarQuery(sql)
    arquivo.close()

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

def RetornarAlunos():
    sql = "SELECT * FROM ALUNOS"
    response = conn.ExecutarQueryPesquisa(sql)
    return response

def RetornarDisciplinas():
    sql = "SELECT * FROM DISCIPLINAS"
    response = conn.ExecutarQueryPesquisa(sql)
    return response

def RetornarTurmas():
    sql = """SELECT DS.NOME_DISCIPLINA, PF.NOME_PROFESSOR, TM.HORARIO_TURMA, TM.ANO_TURMA FROM TURMAS AS TM
	JOIN DISCIPLINAS AS DS ON TM.codigo_disciplina = DS.codigo_disciplina
	JOIN PROFESSORES AS PF ON TM.codigo_professor = PF.codigo_professor
    ORDER BY TM.ANO_TURMA DESC"""
    response = conn.ExecutarQueryPesquisa(sql)
    return response

def RetornarHistoricosPorAno(matricula):
    sql = f"""SELECT HS.ano_historico FROM HISTORICOS AS HS
	JOIN ALUNOS AS AL ON HS.matricula_aluno = AL.matricula_aluno
	WHERE AL.matricula_aluno = {matricula}
    GROUP BY HS.ano_historico"""
    response = conn.ExecutarQueryPesquisa(sql)
    return response


def GetAlunosComNotaMaiorQue7():
    sql = f"""SELECT AL.MATRICULA_ALUNO, AL.NOME_ALUNO FROM HISTORICOS AS HS
	JOIN ALUNOS AS AL ON HS.MATRICULA_ALUNO = AL.MATRICULA_ALUNO
	JOIN DISCIPLINAS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
WHERE
	HS.NOTA_HISTORICO > 7 AND
	DS.NOME_DISCIPLINA = 'Fundamentos de Banco de Dados'"""
    response = conn.ExecutarQueryPesquisa(sql)
    return response


def GetMediaNotasComputacaoGrafica():
    sql = f"""SELECT DS.NOME_DISCIPLINA, AVG(HS.NOTA_HISTORICO) FROM HISTORICOS AS HS
	JOIN DISCIPLINAS AS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
WHERE DS.NOME_DISCIPLINA = 'Computação Gráfica I'	
GROUP BY DS.NOME_DISCIPLINA"""
    response = conn.ExecutarQueryPesquisa(sql)
    return response


def GetAlunosComFrequenciaMenorQue75():
    sql = f"""SELECT AL.NOME_ALUNO, DS.NOME_DISCIPLINA, HS.FREQUENCIA_HISTORICO FROM HISTORICOS AS HS
	JOIN DISCIPLINAS AS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
	JOIN ALUNOS AS AL ON HS.MATRICULA_ALUNO = AL.MATRICULA_ALUNO
WHERE
	HS.FREQUENCIA_HISTORICO < 0.75
ORDER BY HS.FREQUENCIA_HISTORICO DESC"""
    response = conn.ExecutarQueryPesquisa(sql)
    return response


def GetProfessoresComAulaParaPeloMenos5Alunos():
    sql = f"""SELECT COUNT(TM.CODIGO_TURMA) AS QUANTIDADE_ALUNOS, PF.NOME_PROFESSOR FROM HISTORICOS AS HS
	JOIN TURMAS AS TM ON HS.CODIGO_TURMA = TM.CODIGO_TURMA
	JOIN PROFESSORES AS PF ON HS.CODIGO_PROFESSOR = PF.CODIGO_PROFESSOR
WHERE
	PF.AREA_PESQUISA_PROFESSOR = 'Algoritmos e Otimização'
GROUP BY TM.CODIGO_TURMA, PF.NOME_PROFESSOR
HAVING COUNT(TM.CODIGO_TURMA) >= 5"""
    response = conn.ExecutarQueryPesquisa(sql)
    return response


def GetAlunosComNotaMenorQue5():
    sql = f"""SELECT * FROM HISTORICOS AS HS
	JOIN ALUNOS AS AL ON HS.MATRICULA_ALUNO = AL.MATRICULA_ALUNO
	JOIN DISCIPLINAS AS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
WHERE
	DS.NOME_DISCIPLINA = 'Fundamentos de Banco de Dados'
	AND HS.NOTA_HISTORICO < 5
	AND HS.ANO_HISTORICO = '2021.1'"""
    response = conn.ExecutarQueryPesquisa(sql)
    return response



