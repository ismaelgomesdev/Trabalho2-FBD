SELECT AL.MATRICULA_ALUNO, AL.NOME_ALUNO FROM HISTORICOS AS HS
	JOIN ALUNOS AS AL ON HS.MATRICULA_ALUNO = AL.MATRICULA_ALUNO
	JOIN DISCIPLINAS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
WHERE
	HS.NOTA_HISTORICO > 7 AND
	DS.NOME_DISCIPLINA = 'Fundamentos de Banco de Dados';

--

SELECT DS.NOME_DISCIPLINA, AVG(HS.NOTA_HISTORICO) FROM HISTORICOS AS HS
	JOIN DISCIPLINAS AS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
WHERE DS.NOME_DISCIPLINA = 'Computação Gráfica I'	
GROUP BY DS.NOME_DISCIPLINA;

--

SELECT AL.NOME_ALUNO, DS.NOME_DISCIPLINA, HS.FREQUENCIA_HISTORICO FROM HISTORICOS AS HS
	JOIN DISCIPLINAS AS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
	JOIN ALUNOS AS AL ON HS.MATRICULA_ALUNO = AL.MATRICULA_ALUNO
WHERE
	HS.FREQUENCIA_HISTORICO < 0.75
ORDER BY HS.FREQUENCIA_HISTORICO DESC;

--

SELECT COUNT(TM.CODIGO_TURMA) AS QUANTIDADE_ALUNOS, PF.NOME_PROFESSOR FROM HISTORICOS AS HS
	JOIN TURMAS AS TM ON HS.CODIGO_TURMA = TM.CODIGO_TURMA
	JOIN PROFESSORES AS PF ON HS.CODIGO_PROFESSOR = PF.CODIGO_PROFESSOR
WHERE
	PF.AREA_PESQUISA_PROFESSOR = 'Algoritmos e Otimização'
GROUP BY TM.CODIGO_TURMA, PF.NOME_PROFESSOR
HAVING COUNT(TM.CODIGO_TURMA) >= 5;

--

SELECT * FROM HISTORICOS AS HS
	JOIN ALUNOS AS AL ON HS.MATRICULA_ALUNO = AL.MATRICULA_ALUNO
	JOIN DISCIPLINAS AS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
WHERE
	DS.NOME_DISCIPLINA = 'Fundamentos de Banco de Dados'
	AND HS.NOTA_HISTORICO < 5
	AND HS.ANO_HISTORICO = '2021.1';

-- Transação

INSERT INTO ALUNOS (MATRICULA_ALUNO, NOME_ALUNO, SEMESTRE_ALUNO, DATA_NASCIMENTO_ALUNO) VALUES (392889, 'Tiago', 3, '2001-04-09');

INSERT INTO HISTORICOS (MATRICULA_ALUNO, CODIGO_TURMA,CODIGO_DISCIPLINA, CODIGO_PROFESSOR , ANO_HISTORICO, FREQUENCIA_HISTORICO, NOTA_HISTORICO) VALUES (392889, 1, 1, 1, '2020.1', 0.90, 8);

SELECT AL.MATRICULA_ALUNO, AL.NOME_ALUNO FROM HISTORICOS AS HS
	JOIN ALUNOS AS AL ON HS.MATRICULA_ALUNO = AL.MATRICULA_ALUNO
	JOIN DISCIPLINAS DS ON HS.CODIGO_DISCIPLINA = DS.CODIGO_DISCIPLINA
WHERE
	HS.NOTA_HISTORICO > 8 AND
	DS.NOME_DISCIPLINA = 'Fundamentos de Banco de Dados';




-- SQL para consultas com múltiplos parametros

SELECT * FROM HISTORICOS
	JOIN TURMAS ON HISTORICOS.codigo_turma = TURMAS.codigo_turma
	JOIN DISCIPLINAS ON HISTORICOS.codigo_disciplina = DISCIPLINAS.codigo_disciplina
	JOIN PROFESSORES ON HISTORICOS.codigo_professor = PROFESSORES.codigo_professor
	JOIN ALUNOS ON HISTORICOS.matricula_aluno = ALUNOS.matricula_aluno
WHERE
	HISTORICOS.nota_historico > 0
	AND HISTORICOS.ano_historico LIKE '%%'
	AND HISTORICOS.frequencia_historico > 0
	AND TURMAS.horario_turma LIKE '%%'
	AND ALUNOS.nome_aluno LIKE '%João%'
	AND ALUNOS.semestre_aluno > 0
	AND ALUNOS.data_nascimento_aluno BETWEEN '1500-01-01' AND '2021-12-28' /* A primeira data é a pesquisada, e a segunda é a data atual */
	AND PROFESSORES.nome_professor LIKE '%%'
	AND PROFESSORES.area_pesquisa_professor LIKE '%%'
	AND DISCIPLINAS.nome_disciplina LIKE '%%'
	AND DISCIPLINAS.creditos_disciplina > 0