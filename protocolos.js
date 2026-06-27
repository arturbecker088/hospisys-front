const dadosProtocolos = [
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DEFORMIDADE",
    "ds_explicacao": "ISTO É SEMPRE SUBJETIVO. INCLUI ANGULAÇÃO OU ROTAÇÃO ANORMAL."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INCHAÇO",
    "ds_explicacao": "QUALQUER AUMENTO ANORMAL NO TAMANHO."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "105",
    "ds_sintoma": "AGRESSÃO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BABA-SE",
    "ds_explicacao": "SALIVA SAINDO PELA BOCA POR INCAPACIDADE DE ENGOLIR."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "EDEMA DE LÍNGUA",
    "ds_explicacao": "INCHAÇO NA LÍNGUA DE QUALQUER INTENSIDADE."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EDEMA FACIAL",
    "ds_explicacao": "INCHAÇO DIFUSO NA FACE GERALMENTE ENVOLVENDO OS LÁBIOS."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "FRASES ENTRECORTADAS",
    "ds_explicacao": "DOENTES COM DIFICULDADE RESPIRATÓRIA TÃO GRANDE QUE NÃO CONSEGUEM NEM ARTICULAR FRASES CURTAS NUMA SÓ RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA ALÉRGICA IMPORTANTE",
    "ds_explicacao": "SENSIBILIDADE CONHECIDA COM REAÇÃO GRAVE (POR EXEMPLO: NOZES, CAMARÃO, PICADA DE ABELHA)."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR OU COCEIRA INTENSA",
    "ds_explicacao": "COCEIRA INTOLERÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ERUPÇÃO OU VESÍCULAS DISSEMINADAS",
    "ds_explicacao": "QUALQUER ERUPÇÃO, INCLUSIVE AS SECRETANTES OU BOLHOSAS, COBRINDO MAIS DE 10% DA SUPERFÍCIE CORPORAL."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR OU COCEIRA MODERADA",
    "ds_explicacao": "COCEIRA INTENSA, MAS SUPORTÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INFLAMAÇÃO LOCAL",
    "ds_explicacao": "IMPLICA DOR, INCHAÇO E VERMELHIDÃO, RESTRITA A UMA ÁREA DEFINIDA."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR OU COCEIRA LEVE RECENTE",
    "ds_explicacao": "QUALQUER COCEIRA QUE OCORREU NOS ÚLTIMOS SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "106",
    "ds_sintoma": "ALERGIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA DE OVERDOSE OU ENVENENAMENTO",
    "ds_explicacao": "ESTA INFORMAÇÃO PODE VIR DE OUTROS OU PODE SER DEDUZIDA NA PRESENÇA DE CAIXAS DE REMÉDIOS VAZIAS, ENTRE OUTRAS."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ALTO RISCO DE AUTOAGRESSÃO",
    "ds_explicacao": "UMA AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE QUE TEM PASSADO IMPORTANTE DE  AUTOAGRESSÃO E ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR OU ESTÁ TENTANDO IR EMBORA PARA TAL FINALIDADE É DE ALTO RISCO."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ALTO RISCO DE AGREDIR OUTROS",
    "ds_explicacao": "A PRESENÇA DE UM RISCO POTENCIAL DE DANO A OUTROS PODE SER AVALIADO OBSERVANDO-SE A POSTURA (TENSA OU COM PUNHOS CERRADOS), O PADRÃO DE DISCURSO (ALTO, COM PALAVRAS AMEAÇADORAS) E O COMPORTAMENTO PSICOMOTOR (INQUIETUDE, ANDANDO). ALTO RISCO DEVE SER PRESUMIDO SE ARMAS E VÍTIMAS POTENCIAIS ESTÃO POR PERTO OU SE HOUVE PERDA DO AUTOCONTROLE."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DE TRAUMA CRANIOENCEFÁLICO",
    "ds_explicacao": "HISTÓRIA DE TRAUMA FÍSICO ENVOLVENDO A CABEÇA. GERALMENTE ISSO SERÁ RELATADO PELO PACIENTE, MAS SE ELE ESTEVE INCONSCIENTE, A HISTÓRIA DEVERÁ SER COLHIDA DE UMA TESTEMUNHA CONFIÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA PSIQUIÁTRICA IMPORTANTE",
    "ds_explicacao": "HISTÓRIA DE EVENTO OU DOENÇA PSIQUIÁTRICA SIGNIFICATIVA."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "RISCO MODERADO DE AUTOAGRESSÃO",
    "ds_explicacao": "AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE SEM PASSADO IMPORTANTE DE AUTOAGRESSÃO, QUE NÃO ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR NEM TENTANDO IR EMBORA PARA TAL, MAS MANIFESTA DESEJO DE SE MACHUCAR, ESTÁ EM RISCO MODERADO."
  },
  {
    "cd_sintoma_avaliacao": "107",
    "ds_sintoma": "ALTERAÇÃO DO COMPORTAMENTO ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "RISCO MODERADO DE AGREDIR OUTROS",
    "ds_explicacao": "RISCO POTENCIAL DE DANO A OUTROS PODE SER AVALIADO OBSERVANDO-SE A POSTURA DO PACIENTE (TENSA E PUNHOS CERRADOS), O PADRÃO DE DISCURSO (ALTO, AMEAÇADOR) E COMPORTAMENTO MOTOR (INQUIETUDE, ANDANDO). RISCO MODERADO DEVE SER PRESUMIDO SE HÁ QUALQUER INDÍCIO DE POTENCIAL AGRESSÃO A ALGUÉM."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "FRASES ENTRECORTADAS",
    "ds_explicacao": "DOENTES COM DIFICULDADE RESPIRATÓRIA TÃO GRANDE QUE NÃO CONSEGUEM NEM ARTICULAR FRASES CURTAS NUMA SÓ RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PFE MUITO BAIXO",
    "ds_explicacao": "PICO DE FLUXO EXPIRATÓRIO DE 33% OU MENOS DO PREVISTO DE ACORDO COM A IDADE E SEXO DO PACIENTE (VER ESCALAS ANEXAS). ALGUNS PACIENTES CONHECEM SEU MELHOR PFE E ESTE DADO PODE SER USADO. SE A PROPORÇÃO DO VALOR MEDIDO FOR IGUAL OU INFERIOR A 33% DO PREVISTO, ESTE CRITÉRIO É PREENCHIDO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA RESPIRATÓRIA SIGNIFICATIVA",
    "ds_explicacao": "HISTÓRIA PRÉVIA DE CONDIÇÕES RESPIRATÓRIAS AMEAÇADORAS DA VIDA (POR EXEMPLO: DOENÇA PULMONAR OBSTRUTIVA CRÔNICA - DPOC, ASMA LÁBIL, USO DOMICILIAR DE O2, VENTILAÇÃO NÃO INVASIVA OU INVASIVA)."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "PFE BAIXO",
    "ds_explicacao": "PICO DE FLUXO EXPIRATÓRIO DE 50% OU MENOS DO PREVISTO DE ACORDO COM A IDADE E SEXO DO PACIENTE (VER ESCALAS ANEXAS). ALGUNS PACIENTES CONHECEM SEU MELHOR PFE E ESTE DADO PODE SER USADO. SE A PROPORÇÃO DO VALOR MEDIDO FOR IGUAL OU INFERIOR A 50% DO PREVISTO, ESTE CRITÉRIO É PREENCHIDO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SEM MELHORA COM SUA MEDICAÇÃO HABITUAL",
    "ds_explicacao": "A HISTÓRIA DEVE SER CONTADA PELO PACIENTE. A AUSÊNCIA DE MELHORA DA DISPNEIA COM O BRONCODILATADOR PRESCRITO PELO MÉDICO TAMBÉM É IMPORTANTE."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CHIEIRA",
    "ds_explicacao": "PODE HAVER UMA SIBILÂNCIA AUDÍVEL OU SÓ UMA SENSAÇÃO DE CHIADO. OBSTRUÇÃO MAIS GRAVE DE VIAS AÉREAS PODE SER SILENCIOSA (NÃO PASSA NENHUM AR)."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "TOSSE PRODUTIVA",
    "ds_explicacao": "A INFECÇÃO RESPIRATÓRIA GERALMENTE CAUSA TOSSE COM ESCARRO DE QUALQUER COR, FREQUENTEMENTE PURULENTO."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "108",
    "ds_sintoma": "ASMA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ALTO RISCO DE AUTOAGRESSÃO",
    "ds_explicacao": "UMA AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE QUE TEM PASSADO IMPORTANTE DE  AUTOAGRESSÃO E ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR OU ESTÁ TENTANDO IR EMBORA PARA TAL FINALIDADE É DE ALTO RISCO."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "AGITAÇÃO PSICOMOTORA ",
    "ds_explicacao": "PACIENTE QUE ESTÁ FÍSICO E/OU EMOCIONALMENTE MUITO PERTURBADO (ANGÚSTIA PERCEPTÍVEL)."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RISCO MODERADO DE AUTOAGRESSÃO",
    "ds_explicacao": "AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE SEM PASSADO IMPORTANTE DE AUTOAGRESSÃO, QUE NÃO ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR NEM TENTANDO IR EMBORA PARA TAL, MAS MANIFESTA DESEJO DE SE MACHUCAR, ESTÁ EM RISCO MODERADO."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA PSIQUIÁTRICA IMPORTANTE",
    "ds_explicacao": "HISTÓRIA DE EVENTO OU DOENÇA PSIQUIÁTRICA SIGNIFICATIVA."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "109",
    "ds_sintoma": "AUTOAGRESSÃO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "PROSTRAÇÃO, HIPOTONIA",
    "ds_explicacao": "PAIS DESCREVEM A CRIANÇA COMO \"\"MOLINHA¿. O TÔNUS GERALMENTE ESTÁ DIMINUÍDO (O SINAL MAIS CARACTERÍSTICO É A CABEÇA CAÍDA)."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INCAPAZ DE SE ALIMENTAR",
    "ds_explicacao": "ISTO É GERALMENTE RELATADO PELOS PAIS. CRIANÇA QUE NÃO INGERE ADEQUADAMENTE SÓLIDO OU LÍQUIDO VIA ORAL."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "INCONSOLÁVEL PELOS PAIS",
    "ds_explicacao": "RELATO DE CHORO OU SOFRIMENTO, NÃO RESPONDEM ÀS TENTATIVAS DE ACALANTO DOS PAIS."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHORO PROLONGADO OU ININTERRUPTO",
    "ds_explicacao": "RELATO DE CHORO CONTÍNUO POR 2 HORAS OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "COMPORTAMENTO ATÍPICO",
    "ds_explicacao": "CRIANÇA COM COMPORTAMENTO NÃO HABITUAL EM DADA SITUAÇÃO. OS CUIDADORES FREQUENTEMENTE FORNECEM ESTA INFORMAÇÃO ESPONTANEAMENTE. A CRIANÇA PODE ESTAR RABUGENTA, INDÓCIL, IRRITADIÇA OU COM COMPORTAMENTO DIFERENTE DO SEU HABITUAL."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE DOR LEVE RECENTE",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS NÃO CONSEGUEM QUEIXAR. ELES PODEM CHORAR OCASIONALMENTE E PORTAR DE FORMA ATÍPICA."
  },
  {
    "cd_sintoma_avaliacao": "110",
    "ds_sintoma": "BEBÊ CHORANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "INÍCIO ABRUPTO",
    "ds_explicacao": "INÍCIO EM SEGUNDOS OU MINUTOS. PODE ACORDAR O PACIENTE."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "PERDA TOTAL DA VISÃO AGUDA",
    "ds_explicacao": "PERDA DA VISÃO EM UM OU AMBOS OS OLHOS NAS ÚLTIMAS 24H E QUE NÃO VOLTOU AO NORMAL."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "REDUÇÃO RECENTE DA ACUIDADE VISUAL",
    "ds_explicacao": "QUALQUER  REDUÇÃO DA ACUIDADE VISUAL OCORRIDA HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "COURO CABELUDO TEMPORAL DOLORIDO",
    "ds_explicacao": "SENSIBILIDADE OU DOLORIMENTO À PALPAÇÃO DA REGIÃO TEMPORAL (PRINCIPALMENTE SOBRE A ARTÉRIA TEMPORAL)."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "111",
    "ds_sintoma": "CEFALEIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DE OVERDOSE OU ENVENENAMENTO",
    "ds_explicacao": "ESTA INFORMAÇÃO PODE VIR DE OUTROS OU PODE SER DEDUZIDA NA PRESENÇA DE CAIXAS DE REMÉDIOS VAZIAS, ENTRE OUTRAS."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DE TRAUMA CRANIOENCEFÁLICO",
    "ds_explicacao": "HISTÓRIA DE TRAUMA FÍSICO ENVOLVENDO A CABEÇA. GERALMENTE ISSO SERÁ RELATADO PELO PACIENTE, MAS SE ELE ESTEVE INCONSCIENTE, A HISTÓRIA DEVERÁ SER COLHIDA DE UMA TESTEMUNHA CONFIÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CEFALEIA",
    "ds_explicacao": "QUALQUER DOR AO REDOR DA CABEÇA NÃO RELACIONADA A ALGUMA ESTRUTURA ANATÔMICA ESPECIAL. A DOR FACIAL NÃO ESTÁ INCLUÍDA."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "112",
    "ds_sintoma": "CONVULSÕES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "TRAUMA OCULAR PENETRANTE",
    "ds_explicacao": "EVENTO TRAUMÁTICO FÍSICO RECENTE COM PERFURAÇÃO DO GLOBO OCULAR."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "INGESTÃO DE OBJETO PERIGOSO",
    "ds_explicacao": "INGESTÃO DE OBJETO PERIGOSO OU POTENCIALMENTE PERIGOSO QUE POSSA AMEAÇAR A VIDA COMO POR EXEMPLO: BATERIA, IMÃ, LÂMINAS."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OLHO VERMELHO",
    "ds_explicacao": "QUALQUER VERMELHIDÃO DO OLHO. PODE OU NÃO HAVER DOR. A VERMELHIDÃO DO OLHO PODE SER DIFUSA OU PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INFLAMAÇÃO LOCAL",
    "ds_explicacao": "IMPLICA DOR, INCHAÇO E VERMELHIDÃO, RESTRITA A UMA ÁREA DEFINIDA."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "INFECÇÃO LOCAL",
    "ds_explicacao": "MANIFESTA-SE GERALMENTE COMO INFLAMAÇÃO (DOR, INCHAÇO E VERMELHIDÃO) RESTRITA A UMA ÁREA DEFINIDA, COM OU SEM COLEÇÃO DE PUS."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "113",
    "ds_sintoma": "CORPO ESTRANHO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTO RISCO DE AUTOAGRESSÃO",
    "ds_explicacao": "UMA AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE QUE TEM PASSADO IMPORTANTE DE  AUTOAGRESSÃO E ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR OU ESTÁ TENTANDO IR EMBORA PARA TAL FINALIDADE É DE ALTO RISCO."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SINAIS DE DESIDRATAÇÃO",
    "ds_explicacao": "LÍNGUA SECA, ENOFTALMIA (OLHOS FUNDOS), TURGOR PASTOSO E, EM BEBÊS PEQUENOS, FONTANELA BAIXA. GERALMENTE, HÁ OLIGÚRIA (DIMINUIÇÃO DA DIURESE)."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ERUPÇÃO OU VESÍCULAS DISSEMINADAS",
    "ds_explicacao": "QUALQUER ERUPÇÃO, INCLUSIVE AS SECRETANTES OU BOLHOSAS, COBRINDO MAIS DE 10% DA SUPERFÍCIE CORPORAL."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "AGITAÇÃO PSICOMOTORA ",
    "ds_explicacao": "PACIENTE QUE ESTÁ FÍSICO E/OU EMOCIONALMENTE MUITO PERTURBADO (ANGÚSTIA PERCEPTÍVEL)."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "TRAUMA VAGINAL",
    "ds_explicacao": "QUALQUER HISTÓRIA OU OUTRA EVIDÊNCIA DE TRAUMA NA VAGINA."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DE TRAUMA CRANIOENCEFÁLICO",
    "ds_explicacao": "HISTÓRIA DE TRAUMA FÍSICO ENVOLVENDO A CABEÇA. GERALMENTE ISSO SERÁ RELATADO PELO PACIENTE, MAS SE ELE ESTEVE INCONSCIENTE, A HISTÓRIA DEVERÁ SER COLHIDA DE UMA TESTEMUNHA CONFIÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "RISCO MODERADO DE AUTOAGRESSÃO",
    "ds_explicacao": "AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE SEM PASSADO IMPORTANTE DE AUTOAGRESSÃO, QUE NÃO ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR NEM TENTANDO IR EMBORA PARA TAL, MAS MANIFESTA DESEJO DE SE MACHUCAR, ESTÁ EM RISCO MODERADO."
  },
  {
    "cd_sintoma_avaliacao": "114",
    "ds_sintoma": "CRIANÇA ABUSADA OU NEGLIGENCIADA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DE OVERDOSE OU ENVENENAMENTO",
    "ds_explicacao": "ESTA INFORMAÇÃO PODE VIR DE OUTROS OU PODE SER DEDUZIDA NA PRESENÇA DE CAIXAS DE REMÉDIOS VAZIAS, ENTRE OUTRAS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHORO PROLONGADO OU ININTERRUPTO",
    "ds_explicacao": "RELATO DE CHORO CONTÍNUO POR 2 HORAS OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO SE ALIMENTA",
    "ds_explicacao": "CRIANÇA QUE NÃO INGERE NADA SÓLIDO OU LÍQUIDO COMO DE HÁBITO. CRIANÇA QUE SE ALIMENTA, MAS VOMITA LOGO APÓS TAMBÉM PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NÃO ENTRETÍVEL",
    "ds_explicacao": "CRIANÇA ANGUSTIADA POR DOR OU OUTROS FATORES E QUE É INCAPAZ DE SE DISTRAIR COM CONVERSAS OU BRINCADEIRAS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "COMPORTAMENTO ATÍPICO",
    "ds_explicacao": "CRIANÇA COM COMPORTAMENTO NÃO HABITUAL EM DADA SITUAÇÃO. OS CUIDADORES FREQUENTEMENTE FORNECEM ESTA INFORMAÇÃO ESPONTANEAMENTE. A CRIANÇA PODE ESTAR RABUGENTA, INDÓCIL, IRRITADIÇA OU COM COMPORTAMENTO DIFERENTE DO SEU HABITUAL."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SINAIS DE DOR LEVE RECENTE",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS NÃO CONSEGUEM QUEIXAR. ELES PODEM CHORAR OCASIONALMENTE E PORTAR DE FORMA ATÍPICA."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "115",
    "ds_sintoma": "CRIANÇA IRRITADIÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "COMPROMETIMENTO VASCULAR DISTAL",
    "ds_explicacao": "HAVERÁ ASSOCIAÇÃO DE PALIDEZ, ESFRIAMENTO, ALTERAÇÃO DA SENSIBILIDADE E/OU DOR COM OU SEM PULSO DISTAL À LESÃO."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ARTICULAÇÃO QUENTE",
    "ds_explicacao": "QUALQUER AUMENTO DA TEMPERATURA EM TORNO DA ARTICULAÇÃO PREENCHE ESTE CRITÉRIO. GERALMENTE ESTÁ ASSOCIADA À VERMELHIDÃO."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR AO MOVIMENTO ARTICULAR",
    "ds_explicacao": "A DOR PODE OCORRER TANTO NA MOVIMENTAÇÃO ATIVA (DO PACIENTE) COMO PASSIVA (PELO EXAMINADOR) DA ARTICULAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DEFORMIDADE",
    "ds_explicacao": "ISTO É SEMPRE SUBJETIVO. INCLUI ANGULAÇÃO OU ROTAÇÃO ANORMAL."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INCHAÇO",
    "ds_explicacao": "QUALQUER AUMENTO ANORMAL NO TAMANHO."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SINAIS DE DOR LEVE RECENTE",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS NÃO CONSEGUEM QUEIXAR. ELES PODEM CHORAR OCASIONALMENTE E PORTAR DE FORMA ATÍPICA."
  },
  {
    "cd_sintoma_avaliacao": "116",
    "ds_sintoma": "CRIANÇA MANCANDO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "HISTÓRIA ALÉRGICA IMPORTANTE",
    "ds_explicacao": "SENSIBILIDADE CONHECIDA COM REAÇÃO GRAVE (POR EXEMPLO: NOZES, CAMARÃO, PICADA DE ABELHA)."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "14",
    "ds_pergunta": "DOR PRECORDIAL OU CARDÍACA",
    "ds_explicacao": "DOR NO MEIO DO PEITO, GERALMENTE EM APERTO OU PESO, QUE PODE IRRADIAR PARA O BRAÇO ESQUERDO OU PESCOÇO. PODE-SE ASSOCIAR A SUDORESE, NÁUSEAS, SENSAÇÃO DE LIPOTIMIA E/OU DOR EPIGÁSTRICA."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "15",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HISTÓRIA DE TRAUMA CRANIOENCEFÁLICO",
    "ds_explicacao": "HISTÓRIA DE TRAUMA FÍSICO ENVOLVENDO A CABEÇA. GERALMENTE ISSO SERÁ RELATADO PELO PACIENTE, MAS SE ELE ESTEVE INCONSCIENTE, A HISTÓRIA DEVERÁ SER COLHIDA DE UMA TESTEMUNHA CONFIÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "117",
    "ds_sintoma": "DESMAIO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "118",
    "ds_sintoma": "DIABETES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "PROSTRAÇÃO, HIPOTONIA",
    "ds_explicacao": "PAIS DESCREVEM A CRIANÇA COMO \"\"MOLINHA¿. O TÔNUS GERALMENTE ESTÁ DIMINUÍDO (O SINAL MAIS CARACTERÍSTICO É A CABEÇA CAÍDA)."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO REAGE AOS PAIS",
    "ds_explicacao": "NÃO REAGE DE FORMA ALGUMA AO ROSTO OU À VOZ DOS PAIS. REAÇÕES ANORMAIS E APARENTE PERDA DE RECONHECIMENTO DOS PAIS TAMBÉM SÃO SINAIS PREOCUPANTES."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "VÔMITO DE SANGUE",
    "ds_explicacao": "EVIDÊNCIAS DE VÔMITO COM SANGUE. O SANGUE VOMITADO PODE SER FRESCO, RUTILANTE, ESCURECIDO OU EM BORRA DE CAFÉ."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "EVACUAÇÃO DE SANGUE VIVO OU ESCURECIDO",
    "ds_explicacao": "EVIDÊNCIA DE SANGRAMENTO GASTRINTESTINAL ATIVO E/OU MACIÇO. PODERÁ HAVER EVACUAÇÃO DE SANGUE VERMELHO VIVO OU ESCURECIDO. QUANDO O TEMPO DO TRÂNSITO GASTRINTESTINAL AUMENTA, A EVACUAÇÃO SE TORNA PROGRESSIVAMENTE MAIS ESCURA ATÉ MELENA."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DE HEMORRAGIA DIGESTIVA IMPORTANTE",
    "ds_explicacao": "QUALQUER PASSADO DE SANGRAMENTO GASTRINTESTINAL MACIÇO OU ASSOCIADO A VARIZES ESOFAGIANAS."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HISTÓRIA AGUDA DE VÔMITO DE SANGUE",
    "ds_explicacao": "QUALQUER RELATO DE HEMATÊMESE FRANCA, VÔMITO DE SANGUE ALTERADO (BORRA DE CAFÉ) OU SANGUE MISTURADO AO VÔMITO NAS ÚLTIMAS 24 HORAS PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "FEZES PRETAS OU FEZES EM GROSELHA",
    "ds_explicacao": "QUALQUER RELATO DE FEZES ENEGRECIDAS PREENCHE ESTE CRITÉRIO. FEZES EM GROSELHA SÃO DE COLORAÇÃO VERMELHO ESCURO, CLASSICAMENTE VISTAS EM INTUSSUSCEPÇÃO. QUALQUER RELATO DESSES TIPOS DE FEZES PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SINAIS DE DESIDRATAÇÃO",
    "ds_explicacao": "LÍNGUA SECA, ENOFTALMIA (OLHOS FUNDOS), TURGOR PASTOSO E, EM BEBÊS PEQUENOS, FONTANELA BAIXA. GERALMENTE, HÁ OLIGÚRIA (DIMINUIÇÃO DA DIURESE)."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "119",
    "ds_sintoma": "DIARREIA E/OU VÔMITOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BABA-SE",
    "ds_explicacao": "SALIVA SAINDO PELA BOCA POR INCAPACIDADE DE ENGOLIR."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "LESÃO POR INALAÇÃO",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM ESPAÇO COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE ASPIRAÇÃO DE FUMAÇA. FULIGEM EM TORNO DA BOCA E NARIZ, ALÉM DE ROUQUIDÃO, ESTARÁ PRESENTE. HISTÓRIA É TAMBÉM A FORMA MAIS SEGURA DE SE DIAGNOSTICAR INALAÇÃO DE AGENTES QUÍMICOS - PODE NÃO HAVER ALGUM OUTRO SINAL."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "FRASES ENTRECORTADAS",
    "ds_explicacao": "DOENTES COM DIFICULDADE RESPIRATÓRIA TÃO GRANDE QUE NÃO CONSEGUEM NEM ARTICULAR FRASES CURTAS NUMA SÓ RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HEMOPTISE ",
    "ds_explicacao": "SANGUE AERADO EMITIDO COM O ESFORÇO DA TOSSE OBSERVADO PELO CLASSIFICADOR."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EXAUSTÃO",
    "ds_explicacao": "PACIENTES EM EXAUSTÃO RESPIRATÓRIA PERECEM REDUZIR O ESFORÇO QUE FAZEM PARA RESPIRAR APESAR DE SE MANTEREM EM INSUFICIÊNCIA RESPIRATÓRIA CONTÍNUA. É PRÉ-TERMINAL."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "PFE MUITO BAIXO",
    "ds_explicacao": "PICO DE FLUXO EXPIRATÓRIO DE 33% OU MENOS DO PREVISTO DE ACORDO COM A IDADE E SEXO DO PACIENTE (VER ESCALAS ANEXAS). ALGUNS PACIENTES CONHECEM SEU MELHOR PFE E ESTE DADO PODE SER USADO. SE A PROPORÇÃO DO VALOR MEDIDO FOR IGUAL OU INFERIOR A 33% DO PREVISTO, ESTE CRITÉRIO É PREENCHIDO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "HISTÓRIA RESPIRATÓRIA SIGNIFICATIVA",
    "ds_explicacao": "HISTÓRIA PRÉVIA DE CONDIÇÕES RESPIRATÓRIAS AMEAÇADORAS DA VIDA (POR EXEMPLO: DOENÇA PULMONAR OBSTRUTIVA CRÔNICA - DPOC, ASMA LÁBIL, USO DOMICILIAR DE O2, VENTILAÇÃO NÃO INVASIVA OU INVASIVA)."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "INÍCIO AGUDO APÓS TRAUMA",
    "ds_explicacao": "INÍCIO IMEDIATO DOS SINTOMAS EM 24H APÓS UM TRAUMA FÍSICO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "DOR PRECORDIAL OU CARDÍACA",
    "ds_explicacao": "DOR NO MEIO DO PEITO, GERALMENTE EM APERTO OU PESO, QUE PODE IRRADIAR PARA O BRAÇO ESQUERDO OU PESCOÇO. PODE-SE ASSOCIAR A SUDORESE, NÁUSEAS, SENSAÇÃO DE LIPOTIMIA E/OU DOR EPIGÁSTRICA."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "DOR EPIGÁSTRICA",
    "ds_explicacao": "DOR OU DESCONFORTO NO EPIGÁSTRIO ACOMPANHADA DE NÁUSEA, SUDORESE, SENSAÇÃO DE TONTEIRA."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "14",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EXPOSIÇÃO À FUMAÇA",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM LUGAR COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE EXPOSIÇÃO À FUMAÇA. PODE HAVER FULIGEM EM TORNO DA BOCA E NARIZ."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PFE BAIXO",
    "ds_explicacao": "PICO DE FLUXO EXPIRATÓRIO DE 50% OU MENOS DO PREVISTO DE ACORDO COM A IDADE E SEXO DO PACIENTE (VER ESCALAS ANEXAS). ALGUNS PACIENTES CONHECEM SEU MELHOR PFE E ESTE DADO PODE SER USADO. SE A PROPORÇÃO DO VALOR MEDIDO FOR IGUAL OU INFERIOR A 50% DO PREVISTO, ESTE CRITÉRIO É PREENCHIDO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DE HEMOPTISE",
    "ds_explicacao": "QUALQUER RELATO DE SANGUE AERADO EMITIDO COM O ESFORÇO DA TOSSE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR PLEURÍTICA",
    "ds_explicacao": "DOR LOCALIZADA NO TÓRAX QUE PIORA COM RESPIRAÇÃO, TOSSE OU ESPIRRO. DOR VENTILATÓRIO-DEPENDENTE."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CHIEIRA",
    "ds_explicacao": "PODE HAVER UMA SIBILÂNCIA AUDÍVEL OU SÓ UMA SENSAÇÃO DE CHIADO. OBSTRUÇÃO MAIS GRAVE DE VIAS AÉREAS PODE SER SILENCIOSA (NÃO PASSA NENHUM AR)."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "TOSSE PRODUTIVA",
    "ds_explicacao": "A INFECÇÃO RESPIRATÓRIA GERALMENTE CAUSA TOSSE COM ESCARRO DE QUALQUER COR, FREQUENTEMENTE PURULENTO."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "TRAUMA TORÁCICO",
    "ds_explicacao": "QUALQUER TRAUMA ABAIXO DA CLAVÍCULA E ACIMA DA ÚLTIMA COSTELA. TRAUMA NA PARTE INFERIOR DO TÓRAX PODE CAUSAR LESÃO DE ÓRGÃOS ABDOMINAIS."
  },
  {
    "cd_sintoma_avaliacao": "120",
    "ds_sintoma": "DISPNEIA EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BABA-SE",
    "ds_explicacao": "SALIVA SAINDO PELA BOCA POR INCAPACIDADE DE ENGOLIR."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "LESÃO POR INALAÇÃO",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM ESPAÇO COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE ASPIRAÇÃO DE FUMAÇA. FULIGEM EM TORNO DA BOCA E NARIZ, ALÉM DE ROUQUIDÃO, ESTARÁ PRESENTE. HISTÓRIA É TAMBÉM A FORMA MAIS SEGURA DE SE DIAGNOSTICAR INALAÇÃO DE AGENTES QUÍMICOS - PODE NÃO HAVER ALGUM OUTRO SINAL."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "FRASES ENTRECORTADAS",
    "ds_explicacao": "DOENTES COM DIFICULDADE RESPIRATÓRIA TÃO GRANDE QUE NÃO CONSEGUEM NEM ARTICULAR FRASES CURTAS NUMA SÓ RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ESFORÇO RESPIRATÓRIO AUMENTADO",
    "ds_explicacao": "HÁ AUMENTO DA FREQUÊNCIA RESPIRATÓRIA, USO DE MUSCULATURA ACESSÓRIA E RONCOS."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EXAUSTÃO",
    "ds_explicacao": "PACIENTES EM EXAUSTÃO RESPIRATÓRIA PERECEM REDUZIR O ESFORÇO QUE FAZEM PARA RESPIRAR APESAR DE SE MANTEREM EM INSUFICIÊNCIA RESPIRATÓRIA CONTÍNUA. É PRÉ-TERMINAL."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HEMOPTISE ",
    "ds_explicacao": "SANGUE AERADO EMITIDO COM O ESFORÇO DA TOSSE OBSERVADO PELO CLASSIFICADOR."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "PFE MUITO BAIXO",
    "ds_explicacao": "PICO DE FLUXO EXPIRATÓRIO DE 33% OU MENOS DO PREVISTO DE ACORDO COM A IDADE E SEXO DO PACIENTE (VER ESCALAS ANEXAS). ALGUNS PACIENTES CONHECEM SEU MELHOR PFE E ESTE DADO PODE SER USADO. SE A PROPORÇÃO DO VALOR MEDIDO FOR IGUAL OU INFERIOR A 33% DO PREVISTO, ESTE CRITÉRIO É PREENCHIDO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "HISTÓRIA RESPIRATÓRIA SIGNIFICATIVA",
    "ds_explicacao": "HISTÓRIA PRÉVIA DE CONDIÇÕES RESPIRATÓRIAS AMEAÇADORAS DA VIDA (POR EXEMPLO: DOENÇA PULMONAR OBSTRUTIVA CRÔNICA - DPOC, ASMA LÁBIL, USO DOMICILIAR DE O2, VENTILAÇÃO NÃO INVASIVA OU INVASIVA)."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "INÍCIO AGUDO APÓS TRAUMA",
    "ds_explicacao": "INÍCIO IMEDIATO DOS SINTOMAS EM 24H APÓS UM TRAUMA FÍSICO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "14",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "15",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EXPOSIÇÃO À FUMAÇA",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM LUGAR COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE EXPOSIÇÃO À FUMAÇA. PODE HAVER FULIGEM EM TORNO DA BOCA E NARIZ."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PFE BAIXO",
    "ds_explicacao": "PICO DE FLUXO EXPIRATÓRIO DE 50% OU MENOS DO PREVISTO DE ACORDO COM A IDADE E SEXO DO PACIENTE (VER ESCALAS ANEXAS). ALGUNS PACIENTES CONHECEM SEU MELHOR PFE E ESTE DADO PODE SER USADO. SE A PROPORÇÃO DO VALOR MEDIDO FOR IGUAL OU INFERIOR A 50% DO PREVISTO, ESTE CRITÉRIO É PREENCHIDO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DE HEMOPTISE",
    "ds_explicacao": "QUALQUER RELATO DE SANGUE AERADO EMITIDO COM O ESFORÇO DA TOSSE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR PLEURÍTICA",
    "ds_explicacao": "DOR LOCALIZADA NO TÓRAX QUE PIORA COM RESPIRAÇÃO, TOSSE OU ESPIRRO. DOR VENTILATÓRIO-DEPENDENTE."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CHIEIRA",
    "ds_explicacao": "PODE HAVER UMA SIBILÂNCIA AUDÍVEL OU SÓ UMA SENSAÇÃO DE CHIADO. OBSTRUÇÃO MAIS GRAVE DE VIAS AÉREAS PODE SER SILENCIOSA (NÃO PASSA NENHUM AR)."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "TOSSE PRODUTIVA",
    "ds_explicacao": "A INFECÇÃO RESPIRATÓRIA GERALMENTE CAUSA TOSSE COM ESCARRO DE QUALQUER COR, FREQUENTEMENTE PURULENTO."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "TRAUMA TORÁCICO",
    "ds_explicacao": "QUALQUER TRAUMA ABAIXO DA CLAVÍCULA E ACIMA DA ÚLTIMA COSTELA. TRAUMA NA PARTE INFERIOR DO TÓRAX PODE CAUSAR LESÃO DE ÓRGÃOS ABDOMINAIS."
  },
  {
    "cd_sintoma_avaliacao": "121",
    "ds_sintoma": "DISPNEIA EM CRIANÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ALTO RISCO DE AUTOAGRESSÃO",
    "ds_explicacao": "UMA AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE QUE TEM PASSADO IMPORTANTE DE  AUTOAGRESSÃO E ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR OU ESTÁ TENTANDO IR EMBORA PARA TAL FINALIDADE É DE ALTO RISCO."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTO RISCO DE AGREDIR OUTROS",
    "ds_explicacao": "A PRESENÇA DE UM RISCO POTENCIAL DE DANO A OUTROS PODE SER AVALIADO OBSERVANDO-SE A POSTURA (TENSA OU COM PUNHOS CERRADOS), O PADRÃO DE DISCURSO (ALTO, COM PALAVRAS AMEAÇADORAS) E O COMPORTAMENTO PSICOMOTOR (INQUIETUDE, ANDANDO). ALTO RISCO DEVE SER PRESUMIDO SE ARMAS E VÍTIMAS POTENCIAIS ESTÃO POR PERTO OU SE HOUVE PERDA DO AUTOCONTROLE."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "RISCO MODERADO DE AUTOAGRESSÃO",
    "ds_explicacao": "AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE SEM PASSADO IMPORTANTE DE AUTOAGRESSÃO, QUE NÃO ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR NEM TENTANDO IR EMBORA PARA TAL, MAS MANIFESTA DESEJO DE SE MACHUCAR, ESTÁ EM RISCO MODERADO."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RISCO MODERADO DE AGREDIR OUTROS",
    "ds_explicacao": "RISCO POTENCIAL DE DANO A OUTROS PODE SER AVALIADO OBSERVANDO-SE A POSTURA DO PACIENTE (TENSA E PUNHOS CERRADOS), O PADRÃO DE DISCURSO (ALTO, AMEAÇADOR) E COMPORTAMENTO MOTOR (INQUIETUDE, ANDANDO). RISCO MODERADO DEVE SER PRESUMIDO SE HÁ QUALQUER INDÍCIO DE POTENCIAL AGRESSÃO A ALGUÉM."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "AGITAÇÃO PSICOMOTORA ",
    "ds_explicacao": "PACIENTE QUE ESTÁ FÍSICO E/OU EMOCIONALMENTE MUITO PERTURBADO (ANGÚSTIA PERCEPTÍVEL)."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA PSIQUIÁTRICA IMPORTANTE",
    "ds_explicacao": "HISTÓRIA DE EVENTO OU DOENÇA PSIQUIÁTRICA SIGNIFICATIVA."
  },
  {
    "cd_sintoma_avaliacao": "122",
    "ds_sintoma": "DOENÇA MENTAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "COMPORTAMENTO CONTURBADOR",
    "ds_explicacao": "PACIENTE CUJO COMPORTAMENTO AFETA O BOM ANDAMENTO DO SERVIÇO. O PACIENTE PODE SER AMEAÇADOR."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "IMUNOSSUPRESSÃO CONHECIDA OU PROVÁVEL",
    "ds_explicacao": "QUALQUER PACIENTE EM USO DE DROGAS IMUNOSSUPRESSORAS (INCLUINDO USO PROLONGADO DE CORTICOIDE) OU COM DOENÇA QUE CAUSE IMUNOSSUPRESSÃO."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ERUPÇÃO OU VESÍCULAS DISSEMINADAS",
    "ds_explicacao": "QUALQUER ERUPÇÃO, INCLUSIVE AS SECRETANTES OU BOLHOSAS, COBRINDO MAIS DE 10% DA SUPERFÍCIE CORPORAL."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ARTICULAÇÃO QUENTE",
    "ds_explicacao": "QUALQUER AUMENTO DA TEMPERATURA EM TORNO DA ARTICULAÇÃO PREENCHE ESTE CRITÉRIO. GERALMENTE ESTÁ ASSOCIADA À VERMELHIDÃO."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR AO MOVIMENTO ARTICULAR",
    "ds_explicacao": "A DOR PODE OCORRER TANTO NA MOVIMENTAÇÃO ATIVA (DO PACIENTE) COMO PASSIVA (PELO EXAMINADOR) DA ARTICULAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR TESTICULAR",
    "ds_explicacao": "DOR NO TESTÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CORRIMENTO",
    "ds_explicacao": "NO CONTEXTO DAS DOENÇAS SEXUALMENTE TRANSMISSÍVEIS, CORRIMENTO SIGNIFICA QUALQUER RELATO DE SECREÇÃO PENIANA OU VAGINAL ANORMAL."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "123",
    "ds_sintoma": "DOENÇA SEXUALMENTE TRANSMISSÍVEL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO DE SANGUE",
    "ds_explicacao": "EVIDÊNCIAS DE VÔMITO COM SANGUE. O SANGUE VOMITADO PODE SER FRESCO, RUTILANTE, ESCURECIDO OU EM BORRA DE CAFÉ."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EVACUAÇÃO DE SANGUE VIVO OU ESCURECIDO",
    "ds_explicacao": "EVIDÊNCIA DE SANGRAMENTO GASTRINTESTINAL ATIVO E/OU MACIÇO. PODERÁ HAVER EVACUAÇÃO DE SANGUE VERMELHO VIVO OU ESCURECIDO. QUANDO O TEMPO DO TRÂNSITO GASTRINTESTINAL AUMENTA, A EVACUAÇÃO SE TORNA PROGRESSIVAMENTE MAIS ESCURA ATÉ MELENA."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SANGRAMENTO VAGINAL COM 20 SEMANAS DE GRAVIDEZ OU MAIS",
    "ds_explicacao": "QUALQUER PERDA DE SANGUE PELA VAGINA EM MULHER SABIDAMENTE COM 20 SEMANAS DE GRAVIDEZ OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR EPIGÁSTRICA",
    "ds_explicacao": "DOR OU DESCONFORTO NO EPIGÁSTRIO ACOMPANHADA DE NÁUSEA, SUDORESE, SENSAÇÃO DE TONTEIRA."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR IRRADIADA PARA O DORSO",
    "ds_explicacao": "DOR QUE TAMBÉM É SENTIDA NO DORSO DE FORMA CONS­TANTE OU INTERMITENTE."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HISTÓRIA AGUDA DE VÔMITO DE SANGUE",
    "ds_explicacao": "QUALQUER RELATO DE HEMATÊMESE FRANCA, VÔMITO DE SANGUE ALTERADO (BORRA DE CAFÉ) OU SANGUE MISTURADO AO VÔMITO NAS ÚLTIMAS 24 HORAS PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "FEZES PRETAS OU FEZES EM GROSELHA",
    "ds_explicacao": "QUALQUER RELATO DE FEZES ENEGRECIDAS PREENCHE ESTE CRITÉRIO. FEZES EM GROSELHA SÃO DE COLORAÇÃO VERMELHO ESCURO, CLASSICAMENTE VISTAS EM INTUSSUSCEPÇÃO. QUALQUER RELATO DESSES TIPOS DE FEZES PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "GRAVIDEZ POSSÍVEL",
    "ds_explicacao": "QUALQUER MULHER CUJA MENSTRUAÇÃO NORMAL NÃO OCORREU ESTÁ POSSIVELMENTE GRÁVIDA. ALÉM DISSO, PARA QUALQUER MULHER EM IDADE FÉRTIL COM VIDA SEXUAL ATIVA SEM PROTEÇÃO DEVERÁ SER CONSIDERADA A POSSIBILIDADE DE GRAVIDEZ."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR IRRADIADA PARA O OMBRO",
    "ds_explicacao": "DOR SENTIDA NA PONTA DO OMBRO. GERALMENTE INDICA IRRITAÇÃO DIAFRAGMÁTICA."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "124",
    "ds_sintoma": "DOR ABDOMINAL EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO DE SANGUE",
    "ds_explicacao": "EVIDÊNCIAS DE VÔMITO COM SANGUE. O SANGUE VOMITADO PODE SER FRESCO, RUTILANTE, ESCURECIDO OU EM BORRA DE CAFÉ."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EVACUAÇÃO DE SANGUE VIVO OU ESCURECIDO",
    "ds_explicacao": "EVIDÊNCIA DE SANGRAMENTO GASTRINTESTINAL ATIVO E/OU MACIÇO. PODERÁ HAVER EVACUAÇÃO DE SANGUE VERMELHO VIVO OU ESCURECIDO. QUANDO O TEMPO DO TRÂNSITO GASTRINTESTINAL AUMENTA, A EVACUAÇÃO SE TORNA PROGRESSIVAMENTE MAIS ESCURA ATÉ MELENA."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SANGRAMENTO VAGINAL COM 20 SEMANAS DE GRAVIDEZ OU MAIS",
    "ds_explicacao": "QUALQUER PERDA DE SANGUE PELA VAGINA EM MULHER SABIDAMENTE COM 20 SEMANAS DE GRAVIDEZ OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HISTÓRIA AGUDA DE VÔMITO DE SANGUE",
    "ds_explicacao": "QUALQUER RELATO DE HEMATÊMESE FRANCA, VÔMITO DE SANGUE ALTERADO (BORRA DE CAFÉ) OU SANGUE MISTURADO AO VÔMITO NAS ÚLTIMAS 24 HORAS PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "FEZES PRETAS OU FEZES EM GROSELHA",
    "ds_explicacao": "QUALQUER RELATO DE FEZES ENEGRECIDAS PREENCHE ESTE CRITÉRIO. FEZES EM GROSELHA SÃO DE COLORAÇÃO VERMELHO ESCURO, CLASSICAMENTE VISTAS EM INTUSSUSCEPÇÃO. QUALQUER RELATO DESSES TIPOS DE FEZES PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "GRAVIDEZ POSSÍVEL",
    "ds_explicacao": "QUALQUER MULHER CUJA MENSTRUAÇÃO NORMAL NÃO OCORREU ESTÁ POSSIVELMENTE GRÁVIDA. ALÉM DISSO, PARA QUALQUER MULHER EM IDADE FÉRTIL COM VIDA SEXUAL ATIVA SEM PROTEÇÃO DEVERÁ SER CONSIDERADA A POSSIBILIDADE DE GRAVIDEZ."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "MASSA ABDOMINAL VISÍVEL",
    "ds_explicacao": "MASSA VISÍVEL À OBSERVAÇÃO DO ABDOME."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "INCONSOLÁVEL PELOS PAIS",
    "ds_explicacao": "RELATO DE CHORO OU SOFRIMENTO, NÃO RESPONDEM ÀS TENTATIVAS DE ACALANTO DOS PAIS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SINAIS DE DOR LEVE RECENTE",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS NÃO CONSEGUEM QUEIXAR. ELES PODEM CHORAR OCASIONALMENTE E PORTAR DE FORMA ATÍPICA."
  },
  {
    "cd_sintoma_avaliacao": "125",
    "ds_sintoma": "DOR ABDOMINAL EM CRIANÇA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "TRAUMA DIRETO NO PESCOÇO",
    "ds_explicacao": "RELATO DE TRAUMA NO PESCOÇO E/OU NA CABEÇA POR CARGA QUE OCORREU DE CIMA PARA BAIXO. POR EXEMPLO: QUANDO ALGUMA COISA CAI NA CABEÇA CURVANDO-A PARA FRENTE, PARA TRÁS OU PARA O LADO OU PROVOCANDO UMA TORÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "126",
    "ds_sintoma": "DOR CERVICAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BABA-SE",
    "ds_explicacao": "SALIVA SAINDO PELA BOCA POR INCAPACIDADE DE ENGOLIR."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "IMUNOSSUPRESSÃO CONHECIDA OU PROVÁVEL",
    "ds_explicacao": "QUALQUER PACIENTE EM USO DE DROGAS IMUNOSSUPRESSORAS (INCLUINDO USO PROLONGADO DE CORTICOIDE) OU COM DOENÇA QUE CAUSE IMUNOSSUPRESSÃO."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RISCO ESPECIAL DE INFECÇÃO",
    "ds_explicacao": "EXPOSIÇÃO CONHECIDA A PATÓGENO DE ALTO RISCO, QUER EM LABORATÓRIO OU VIAGEM PARA REGIÃO DE PREVALÊNCIA CONHECIDA DE DOENÇA INFECCIOSA."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INÍCIO SÚBITO",
    "ds_explicacao": "INÍCIO NAS ÚLTIMAS 12 HORAS."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DE VIAGEM RECENTE",
    "ds_explicacao": "VIAGEM NAS DUAS ÚLTIMAS SEMANAS."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "127",
    "ds_sintoma": "DOR DE GARGANTA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR ABDOMINAL",
    "ds_explicacao": "RELATO DE QUALQUER DOR SENTIDA NO ABDOME. SE IRRADIADA PARA O DORSO PODE INDICAR DISSECÇÃO DE AORTA; SE ASSOCIADA A SANGRAMENTO VAGINAL, PODE SUGERIR GRAVIDEZ ECTÓPICA OU ABORTAMENTO."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "TRAUMA DIRETO NO DORSO",
    "ds_explicacao": "RELATO DE TRAUMA NO DORSO POR CARGA QUE OCORREU DE CIMA PARA BAIXO. POR EXEMPLO: QUANDO SE CAI DE PÉ OU QUANDO A CARGA PROVOCA INCLINAÇÃO PARA FRENTE, PARA TRÁS OU PARA O LADO OU UMA TORÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "INCAPAZ DE ANDAR",
    "ds_explicacao": "É IMPORTANTE DIFERENCIAR O PACIENTE QUE NÃO CONSEGUE CAMINHAR PELA DOR DAQUELE QUE REALMENTE NÃO CONSEGUE ANDAR. SÓ O ÚLTIMO PREENCHE TAL CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "CÓLICAS",
    "ds_explicacao": "DORES INTERMITENTES (EM ONDAS) QUE TENDEM A MELHORAR OU PIORAR A CADA 20 MINUTOS."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "128",
    "ds_sintoma": "DOR LOMBAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "GANGRENA DE ESCROTO",
    "ds_explicacao": "PELE NECROSADA, ENEGRECIDA EM TORNO DO ESCROTO E VIRILHA. GANGRENA PRECOCE PODE NÃO SER ENEGRECIDA, MAS SE MOSTRAR COMO UMA QUEIMADURA EM TODA ESPESSURA DA BOLSA, COM OU SEM DESCAMAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "IDADE DE 25 ANOS OU MENOS",
    "ds_explicacao": "IDADE DE 25 ANOS OU MENOS."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CELULITE DE ESCROTO",
    "ds_explicacao": "VERMELHIDÃO E INCHAÇO EM TORNO DA BOLSA ESCROTAL."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CÓLICAS",
    "ds_explicacao": "DORES INTERMITENTES (EM ONDAS) QUE TENDEM A MELHORAR OU PIORAR A CADA 20 MINUTOS."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "TRAUMA DE ESCROTO",
    "ds_explicacao": "QUALQUER TRAUMA RECENTE HÁ MENOS DE SETE DIAS ENVOLVENDO A BOLSA ESCROTAL."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "129",
    "ds_sintoma": "DOR TESTICULAR",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR PRECORDIAL OU CARDÍACA",
    "ds_explicacao": "DOR NO MEIO DO PEITO, GERALMENTE EM APERTO OU PESO, QUE PODE IRRADIAR PARA O BRAÇO ESQUERDO OU PESCOÇO. PODE-SE ASSOCIAR A SUDORESE, NÁUSEAS, SENSAÇÃO DE LIPOTIMIA E/OU DOR EPIGÁSTRICA."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA CARDÍACA IMPORTANTE",
    "ds_explicacao": "UMA ARRITMIA RECORRENTE AMEAÇADORA DA VIDA OU UMA CARDIOPATIA PREVIAMENTE CONHECIDA QUE PODE SE DETERIORAR RAPIDAMENTE."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR PLEURÍTICA",
    "ds_explicacao": "DOR LOCALIZADA NO TÓRAX QUE PIORA COM RESPIRAÇÃO, TOSSE OU ESPIRRO. DOR VENTILATÓRIO-DEPENDENTE."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "130",
    "ds_sintoma": "DOR TORÁCICA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA NÃO TOTALMENTE ATRIBUÍVEL AO ÁLCOOL",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM HISTÓRIA DE INGESTÃO ALCOÓLICA, MAS HÁ ALGUMA DÚVIDA DE OUTRAS CAUSAS DE DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA. ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA INADEQUADA",
    "ds_explicacao": "SE NÃO ESTÁ CLARA E INEQUÍVOCA A HISTÓRIA DE INGESTÃO AGUDA DE ÁLCOOL E SE TRAUMA CRANIANO, INGESTÃO DE DROGAS, COMORBIDADES, ETC. NÃO PODEM SER DEFINITIVAMENTE EXCLUÍDOS."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA TOTALMENTE ATRIBUÍVEL AO ÁLCOOL",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM HISTÓRIA CLARA DE INGESTÃO ALCOÓLICA, QUANDO OUTRAS CAUSAS DE ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA FORAM EXCLUÍDAS. ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DE TRAUMA CRANIOENCEFÁLICO",
    "ds_explicacao": "HISTÓRIA DE TRAUMA FÍSICO ENVOLVENDO A CABEÇA. GERALMENTE ISSO SERÁ RELATADO PELO PACIENTE, MAS SE ELE ESTEVE INCONSCIENTE, A HISTÓRIA DEVERÁ SER COLHIDA DE UMA TESTEMUNHA CONFIÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "TRAUMA RECENTE",
    "ds_explicacao": "QUALQUER TRAUMA OCORRIDO HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "131",
    "ds_sintoma": "EMBRIAGUEZ APARENTE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "EDEMA DE LÍNGUA",
    "ds_explicacao": "INCHAÇO NA LÍNGUA DE QUALQUER INTENSIDADE."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EDEMA FACIAL",
    "ds_explicacao": "INCHAÇO DIFUSO NA FACE GERALMENTE ENVOLVENDO OS LÁBIOS."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA ALÉRGICA IMPORTANTE",
    "ds_explicacao": "SENSIBILIDADE CONHECIDA COM REAÇÃO GRAVE (POR EXEMPLO: NOZES, CAMARÃO, PICADA DE ABELHA)."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "DOR OU COCEIRA INTENSA",
    "ds_explicacao": "COCEIRA INTOLERÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ERUPÇÃO OU VESÍCULAS DISSEMINADAS",
    "ds_explicacao": "QUALQUER ERUPÇÃO, INCLUSIVE AS SECRETANTES OU BOLHOSAS, COBRINDO MAIS DE 10% DA SUPERFÍCIE CORPORAL."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR OU COCEIRA MODERADA",
    "ds_explicacao": "COCEIRA INTENSA, MAS SUPORTÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR OU COCEIRA LEVE RECENTE",
    "ds_explicacao": "QUALQUER COCEIRA QUE OCORREU NOS ÚLTIMOS SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "132",
    "ds_sintoma": "ERUPÇÃO CUTÂNEA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "LESÃO OCULAR QUÍMICA AGUDA",
    "ds_explicacao": "QUALQUER SUBSTÂNCIA QUE RESPINGA OU CAI NOS OLHOS NAS ÚLTIMAS 12 HORAS E CAUSA DOR, QUEIMAÇÃO, REDUÇÃO DA VISÃO OU QUALQUER OUTRO SINTOMA."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "EDEMA DE LÍNGUA",
    "ds_explicacao": "INCHAÇO NA LÍNGUA DE QUALQUER INTENSIDADE."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EDEMA FACIAL",
    "ds_explicacao": "INCHAÇO DIFUSO NA FACE GERALMENTE ENVOLVENDO OS LÁBIOS."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "LESÃO POR INALAÇÃO",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM ESPAÇO COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE ASPIRAÇÃO DE FUMAÇA. FULIGEM EM TORNO DA BOCA E NARIZ, ALÉM DE ROUQUIDÃO, ESTARÁ PRESENTE. HISTÓRIA É TAMBÉM A FORMA MAIS SEGURA DE SE DIAGNOSTICAR INALAÇÃO DE AGENTES QUÍMICOS - PODE NÃO HAVER ALGUM OUTRO SINAL."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "MORTALIDADE QUÍMICA ALTA",
    "ds_explicacao": "MORTALIDADE É O POTENCIAL DE UMA SUBSTÂNCIA QUÍMICA CAUSAR DANO. INTERCONSULTA EM UM CENTRO DE INTOXICAÇÕES PODE SER NECESSÁRIA PARA SE ESTABELECER O RISCO DE LESÃO OU MORTE. NA DÚVIDA, CONSIDERE ALTO O RISCO."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "RISCO DE CONTAMINAÇÃO PERSISTENTE",
    "ds_explicacao": "DEVE SER CONSIDERADA SE A EXPOSIÇÃO QUÍMICA CONTINUAR (POR DESCONTAMINAÇÃO INADEQUADA). O RISCO DE CONTAMINAÇÃO DOS TRABALHADORES DE SAÚDE NÃO DEVE SER ESQUECIDO."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EXPOSIÇÃO À FUMAÇA",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM LUGAR COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE EXPOSIÇÃO À FUMAÇA. PODE HAVER FULIGEM EM TORNO DA BOCA E NARIZ."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ERUPÇÃO OU VESÍCULAS DISSEMINADAS",
    "ds_explicacao": "QUALQUER ERUPÇÃO, INCLUSIVE AS SECRETANTES OU BOLHOSAS, COBRINDO MAIS DE 10% DA SUPERFÍCIE CORPORAL."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "MORTALIDADE QUÍMICA MODERADA",
    "ds_explicacao": "MORTALIDADE É O POTENCIAL DE UMA SUBSTÂNCIA QUÍMICA CAUSAR DANO. INTERCONSULTA EM UM CENTRO DE INTOXICAÇÕES PODE SER NECESSÁRIA PARA SE ESTABELECER O RISCO DE LESÃO OU MORTE. NA DÚVIDA, CONSIDERE ESTE DISCRIMINADOR."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "133",
    "ds_sintoma": "EXPOSIÇÃO A AGENTES QUÍMICOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "COMPROMETIMENTO VASCULAR DISTAL",
    "ds_explicacao": "HAVERÁ ASSOCIAÇÃO DE PALIDEZ, ESFRIAMENTO, ALTERAÇÃO DA SENSIBILIDADE E/OU DOR COM OU SEM PULSO DISTAL À LESÃO."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "TRAUMA VAGINAL",
    "ds_explicacao": "QUALQUER HISTÓRIA OU OUTRA EVIDÊNCIA DE TRAUMA NA VAGINA."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INFLAMAÇÃO LOCAL",
    "ds_explicacao": "IMPLICA DOR, INCHAÇO E VERMELHIDÃO, RESTRITA A UMA ÁREA DEFINIDA."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INFECÇÃO LOCAL",
    "ds_explicacao": "MANIFESTA-SE GERALMENTE COMO INFLAMAÇÃO (DOR, INCHAÇO E VERMELHIDÃO) RESTRITA A UMA ÁREA DEFINIDA, COM OU SEM COLEÇÃO DE PUS."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "134",
    "ds_sintoma": "FERIDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "PROLAPSO DE CORDÃO UMBILICAL",
    "ds_explicacao": "PROLAPSO DE QUALQUER PARTE DO CORDÃO UMBILICAL PELO CÉRVIX UTERINO DURANTE O TRABALHO DE PARTO."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "APRESENTAÇÃO DE PARTES FETAIS",
    "ds_explicacao": "APRESENTAÇÃO DA CABEÇA (COROAMENTO) OU DE QUALQUER OUTRA PARTE FETAL PELA VAGINA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SANGRAMENTO VAGINAL INTENSO",
    "ds_explicacao": "ANGRAMENTO VAGINAL É MUITO DIFÍCIL DE QUANTIFICAÇÃO. EVIDÊNCIAS DE GRANDES PERDAS DE SANGUE PELA VAGINA OU FLUXO CONSTANTE PREENCHEM ESTE CRITÉRIO. GRANDES COÁGULOS PODEM SER OBSERVADOS. O USO DE GRANDE NÚMERO DE ABSORVENTES HIGIÊNICOS SUGERE PERDA INTENSA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SANGRAMENTO VAGINAL COM 20 SEMANAS DE GRAVIDEZ OU MAIS",
    "ds_explicacao": "QUALQUER PERDA DE SANGUE PELA VAGINA EM MULHER SABIDAMENTE COM 20 SEMANAS DE GRAVIDEZ OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "TRABALHO DE PARTO",
    "ds_explicacao": "GRÁVIDA QUE APRESENTA CONTRAÇÕES DOLOROSAS, FREQUENTES E REGULARES."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "AUSÊNCIA OU REDUÇÃO DE MOVIMENTOS FETAIS HÁ MAIS DE 12 HORAS, COM 20 SEMANAS DE GRAVIDEZ OU MAIS",
    "ds_explicacao": "RELATO DE AUSÊNCIA OU REDUÇÃO DE MOVIMENTOS FETAIS HÁ MAIS DE 12 HORAS, COM 20 SEMANAS DE GRAVIDEZ OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "PRESSÃO ARTERIAL MUITO ELEVADA",
    "ds_explicacao": "NÍVEIS TENSÓRICOS MUITO ELEVADOS. PRESSÃO ARTERIAL SISTÓLICA ELEVADA DE 160 MMHG OU MAIS E/OU PRESSÃO ARTERIAL DIASTÓLICA DE 110 MMHG OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "RELATO DE PERDA DE LÍQUIDO PELA VAGINA, ESVERDEADO E ESPESSO",
    "ds_explicacao": "QUALQUER RELATO DE PERDA DE LÍQUIDO PELA VAGINA COM COLORAÇÃO ESVERDEADA E ESPESSO."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "HISTÓRIA DE CONVULSÃO",
    "ds_explicacao": "QUALQUER HISTÓRIA DE CONVULSÃO, OBSERVADA OU RELATADA, QUE OCORREU NESSE PERÍODO DE DOENÇA OU APÓS TRAUMA. PARA GRAVIDEZ, SE HOUVE CONVULSÃO NAS 6 HORAS PRÉVIAS, PODE SIGNIFICAR ECLAMPSIA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DOR ABDOMINAL",
    "ds_explicacao": "RELATO DE QUALQUER DOR SENTIDA NO ABDOME. SE IRRADIADA PARA O DORSO PODE INDICAR DISSECÇÃO DE AORTA; SE ASSOCIADA A SANGRAMENTO VAGINAL, PODE SUGERIR GRAVIDEZ ECTÓPICA OU ABORTAMENTO."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SANGRAMENTO VAGINAL",
    "ds_explicacao": "QUALQUER RELATO DE PERDA DE SANGUE PELA VAGINA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PRESSÃO ARTERIAL ELEVADA",
    "ds_explicacao": "NÍVEIS TENSÓRICOS ELEVADOS. PRESSÃO ARTERIAL SISTÓLICA ELEVADA DE 140 MMHG OU MAIS E/OU PRESSÃO ARTERIAL DIASTÓLICA DE 90 MMHG OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "AUSÊNCIA OU REDUÇÃO DE MOVIMENTOS FETAIS HÁ MENOS DE 12 HORAS, COM 20 SEMANAS DE GRAVIDEZ OU MAIS",
    "ds_explicacao": "RELATO DE AUSÊNCIA OU REDUÇÃO DE MOVIMENTOS FETAIS HÁ ME­NOS DE 12 HORAS, COM 20 SEMANAS DE GRAVIDEZ OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DE TRAUMA",
    "ds_explicacao": "HISTÓRIA RECENTE DE TRAUMA FÍSICO."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "DOR IRRADIADA PARA O OMBRO",
    "ds_explicacao": "DOR SENTIDA NA PONTA DO OMBRO. GERALMENTE INDICA IRRITAÇÃO DIAFRAGMÁTICA."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "135",
    "ds_sintoma": "GRAVIDEZ",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO DE SANGUE",
    "ds_explicacao": "EVIDÊNCIAS DE VÔMITO COM SANGUE. O SANGUE VOMITADO PODE SER FRESCO, RUTILANTE, ESCURECIDO OU EM BORRA DE CAFÉ."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EVACUAÇÃO DE SANGUE VIVO OU ESCURECIDO",
    "ds_explicacao": "EVIDÊNCIA DE SANGRAMENTO GASTRINTESTINAL ATIVO E/OU MACIÇO. PODERÁ HAVER EVACUAÇÃO DE SANGUE VERMELHO VIVO OU ESCURECIDO. QUANDO O TEMPO DO TRÂNSITO GASTRINTESTINAL AUMENTA, A EVACUAÇÃO SE TORNA PROGRESSIVAMENTE MAIS ESCURA ATÉ MELENA."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DE HEMORRAGIA DIGESTIVA IMPORTANTE",
    "ds_explicacao": "QUALQUER PASSADO DE SANGRAMENTO GASTRINTESTINAL MACIÇO OU ASSOCIADO A VARIZES ESOFAGIANAS."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HISTÓRIA AGUDA DE VÔMITO DE SANGUE",
    "ds_explicacao": "QUALQUER RELATO DE HEMATÊMESE FRANCA, VÔMITO DE SANGUE ALTERADO (BORRA DE CAFÉ) OU SANGUE MISTURADO AO VÔMITO NAS ÚLTIMAS 24 HORAS PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "FEZES PRETAS OU FEZES EM GROSELHA",
    "ds_explicacao": "QUALQUER RELATO DE FEZES ENEGRECIDAS PREENCHE ESTE CRITÉRIO. FEZES EM GROSELHA SÃO DE COLORAÇÃO VERMELHO ESCURO, CLASSICAMENTE VISTAS EM INTUSSUSCEPÇÃO. QUALQUER RELATO DESSES TIPOS DE FEZES PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "136",
    "ds_sintoma": "HEMORRAGIA DIGESTIVA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "COMPROMETIMENTO VASCULAR DISTAL",
    "ds_explicacao": "HAVERÁ ASSOCIAÇÃO DE PALIDEZ, ESFRIAMENTO, ALTERAÇÃO DA SENSIBILIDADE E/OU DOR COM OU SEM PULSO DISTAL À LESÃO."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ENFISEMA SUBCUTÂNEO",
    "ds_explicacao": "GÁS DEBAIXO DA PELE QUE PODE SER DETECTADO POR SENSAÇÃO DE CREPITAÇÃO AO TOQUE. PODE HAVER BOLHAS DE GÁS E LINHA DE DEMARCAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ARTICULAÇÃO QUENTE",
    "ds_explicacao": "QUALQUER AUMENTO DA TEMPERATURA EM TORNO DA ARTICULAÇÃO PREENCHE ESTE CRITÉRIO. GERALMENTE ESTÁ ASSOCIADA À VERMELHIDÃO."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR AO MOVIMENTO ARTICULAR",
    "ds_explicacao": "A DOR PODE OCORRER TANTO NA MOVIMENTAÇÃO ATIVA (DO PACIENTE) COMO PASSIVA (PELO EXAMINADOR) DA ARTICULAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "137",
    "ds_sintoma": "INFECÇÕES LOCAIS E ABSCESSOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HEMOPTISE ",
    "ds_explicacao": "SANGUE AERADO EMITIDO COM O ESFORÇO DA TOSSE OBSERVADO PELO CLASSIFICADOR."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "IMUNOSSUPRESSÃO CONHECIDA OU PROVÁVEL",
    "ds_explicacao": "QUALQUER PACIENTE EM USO DE DROGAS IMUNOSSUPRESSORAS (INCLUINDO USO PROLONGADO DE CORTICOIDE) OU COM DOENÇA QUE CAUSE IMUNOSSUPRESSÃO."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "RISCO ESPECIAL DE INFECÇÃO",
    "ds_explicacao": "EXPOSIÇÃO CONHECIDA A PATÓGENO DE ALTO RISCO, QUER EM LABORATÓRIO OU VIAGEM PARA REGIÃO DE PREVALÊNCIA CONHECIDA DE DOENÇA INFECCIOSA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "DOR EPIGÁSTRICA",
    "ds_explicacao": "DOR OU DESCONFORTO NO EPIGÁSTRIO ACOMPANHADA DE NÁUSEA, SUDORESE, SENSAÇÃO DE TONTEIRA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "14",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "15",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "16",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DE HEMOPTISE",
    "ds_explicacao": "QUALQUER RELATO DE SANGUE AERADO EMITIDO COM O ESFORÇO DA TOSSE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ERUPÇÃO OU VESÍCULAS DISSEMINADAS",
    "ds_explicacao": "QUALQUER ERUPÇÃO, INCLUSIVE AS SECRETANTES OU BOLHOSAS, COBRINDO MAIS DE 10% DA SUPERFÍCIE CORPORAL."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "INÍCIO SÚBITO",
    "ds_explicacao": "INÍCIO NAS ÚLTIMAS 12 HORAS."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DE VIAGEM RECENTE",
    "ds_explicacao": "VIAGEM NAS DUAS ÚLTIMAS SEMANAS."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "138",
    "ds_sintoma": "MAL-ESTAR EM ADULTO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO REAGE AOS PAIS",
    "ds_explicacao": "NÃO REAGE DE FORMA ALGUMA AO ROSTO OU À VOZ DOS PAIS. REAÇÕES ANORMAIS E APARENTE PERDA DE RECONHECIMENTO DOS PAIS TAMBÉM SÃO SINAIS PREOCUPANTES."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "IMUNOSSUPRESSÃO CONHECIDA OU PROVÁVEL",
    "ds_explicacao": "QUALQUER PACIENTE EM USO DE DROGAS IMUNOSSUPRESSORAS (INCLUINDO USO PROLONGADO DE CORTICOIDE) OU COM DOENÇA QUE CAUSE IMUNOSSUPRESSÃO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE DESIDRATAÇÃO",
    "ds_explicacao": "LÍNGUA SECA, ENOFTALMIA (OLHOS FUNDOS), TURGOR PASTOSO E, EM BEBÊS PEQUENOS, FONTANELA BAIXA. GERALMENTE, HÁ OLIGÚRIA (DIMINUIÇÃO DA DIURESE)."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO SE ALIMENTA",
    "ds_explicacao": "CRIANÇA QUE NÃO INGERE NADA SÓLIDO OU LÍQUIDO COMO DE HÁBITO. CRIANÇA QUE SE ALIMENTA, MAS VOMITA LOGO APÓS TAMBÉM PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SEM URINAR",
    "ds_explicacao": "DIFICULDADE EM PRODUZIR OU ELIMINAR URINA. PODE SER DIFÍCIL SUA AVALIAÇÃO EM CRIANÇAS E IDOSOS. O RELATO DO NÚMERO DE FRALDAS TROCADAS PODE SER ÚTIL."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "139",
    "ds_sintoma": "MAL-ESTAR EM BEBÊ (DE 29 DIAS ATÉ 12 MESES)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO REAGE AOS PAIS",
    "ds_explicacao": "NÃO REAGE DE FORMA ALGUMA AO ROSTO OU À VOZ DOS PAIS. REAÇÕES ANORMAIS E APARENTE PERDA DE RECONHECIMENTO DOS PAIS TAMBÉM SÃO SINAIS PREOCUPANTES."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "IMUNOSSUPRESSÃO CONHECIDA OU PROVÁVEL",
    "ds_explicacao": "QUALQUER PACIENTE EM USO DE DROGAS IMUNOSSUPRESSORAS (INCLUINDO USO PROLONGADO DE CORTICOIDE) OU COM DOENÇA QUE CAUSE IMUNOSSUPRESSÃO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE DESIDRATAÇÃO",
    "ds_explicacao": "LÍNGUA SECA, ENOFTALMIA (OLHOS FUNDOS), TURGOR PASTOSO E, EM BEBÊS PEQUENOS, FONTANELA BAIXA. GERALMENTE, HÁ OLIGÚRIA (DIMINUIÇÃO DA DIURESE)."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO SE ALIMENTA",
    "ds_explicacao": "CRIANÇA QUE NÃO INGERE NADA SÓLIDO OU LÍQUIDO COMO DE HÁBITO. CRIANÇA QUE SE ALIMENTA, MAS VOMITA LOGO APÓS TAMBÉM PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SEM URINAR",
    "ds_explicacao": "DIFICULDADE EM PRODUZIR OU ELIMINAR URINA. PODE SER DIFÍCIL SUA AVALIAÇÃO EM CRIANÇAS E IDOSOS. O RELATO DO NÚMERO DE FRALDAS TROCADAS PODE SER ÚTIL."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "COMPORTAMENTO ATÍPICO",
    "ds_explicacao": "CRIANÇA COM COMPORTAMENTO NÃO HABITUAL EM DADA SITUAÇÃO. OS CUIDADORES FREQUENTEMENTE FORNECEM ESTA INFORMAÇÃO ESPONTANEAMENTE. A CRIANÇA PODE ESTAR RABUGENTA, INDÓCIL, IRRITADIÇA OU COM COMPORTAMENTO DIFERENTE DO SEU HABITUAL."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE DOR LEVE RECENTE",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS NÃO CONSEGUEM QUEIXAR. ELES PODEM CHORAR OCASIONALMENTE E PORTAR DE FORMA ATÍPICA."
  },
  {
    "cd_sintoma_avaliacao": "140",
    "ds_sintoma": "MAL-ESTAR EM CRIANÇA (MAIOR DE 12 MESES ATÉ 14 ANOS)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO REAGE AOS PAIS",
    "ds_explicacao": "NÃO REAGE DE FORMA ALGUMA AO ROSTO OU À VOZ DOS PAIS. REAÇÕES ANORMAIS E APARENTE PERDA DE RECONHECIMENTO DOS PAIS TAMBÉM SÃO SINAIS PREOCUPANTES."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SINAIS DE MENINGISMO",
    "ds_explicacao": "CLASSICAMENTE RIGIDEZ DE NUCA ASSOCIADA A CEFALEIA E FOTOFOBIA. EM CRIANÇAS PEQUENAS PODE HAVER IRRITABILIDADE À MANIPULAÇÃO, CHORO ESTRIDENTE E ABAULAMENTO DE FONTANELA."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "SINAIS DE DOR INTENSA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR INTENSA NÃO CONSEGUEM SE QUEIXAR. ELES VÃO GRITAR E/OU CHORAR DE FORMA CONTÍNUA E INCONSOLÁVEL E GERALMENTE ESTARÃO TAQUICÁRDICOS. PODEM TAMBÉM APRESENTAR SINAIS COMO PALIDEZ E SUDORESE."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "SINAIS DE DESIDRATAÇÃO",
    "ds_explicacao": "LÍNGUA SECA, ENOFTALMIA (OLHOS FUNDOS), TURGOR PASTOSO E, EM BEBÊS PEQUENOS, FONTANELA BAIXA. GERALMENTE, HÁ OLIGÚRIA (DIMINUIÇÃO DA DIURESE)."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NÃO SE ALIMENTA",
    "ds_explicacao": "CRIANÇA QUE NÃO INGERE NADA SÓLIDO OU LÍQUIDO COMO DE HÁBITO. CRIANÇA QUE SE ALIMENTA, MAS VOMITA LOGO APÓS TAMBÉM PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SEM URINAR",
    "ds_explicacao": "DIFICULDADE EM PRODUZIR OU ELIMINAR URINA. PODE SER DIFÍCIL SUA AVALIAÇÃO EM CRIANÇAS E IDOSOS. O RELATO DO NÚMERO DE FRALDAS TROCADAS PODE SER ÚTIL."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ICTERÍCIA",
    "ds_explicacao": "ICTERÍCIA NEONATAL."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "SINAIS DE DOR MODERADA",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS COM DOR MODERADA NÃO CONSEGUEM QUEIXAR. ELES GERALMENTE CHORAM INTERMITENTEMENTE E SÃO OCASIONALMENTE CONSOLÁVEIS."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SINAIS DE DOR LEVE RECENTE",
    "ds_explicacao": "CRIANÇAS PEQUENAS E BEBÊS NÃO CONSEGUEM QUEIXAR. ELES PODEM CHORAR OCASIONALMENTE E PORTAR DE FORMA ATÍPICA."
  },
  {
    "cd_sintoma_avaliacao": "141",
    "ds_sintoma": "MAL-ESTAR EM NEONATO (ATÉ 28 DIAS)",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "EDEMA FACIAL",
    "ds_explicacao": "INCHAÇO DIFUSO NA FACE GERALMENTE ENVOLVENDO OS LÁBIOS."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EDEMA DE LÍNGUA",
    "ds_explicacao": "INCHAÇO NA LÍNGUA DE QUALQUER INTENSIDADE."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "FRASES ENTRECORTADAS",
    "ds_explicacao": "DOENTES COM DIFICULDADE RESPIRATÓRIA TÃO GRANDE QUE NÃO CONSEGUEM NEM ARTICULAR FRASES CURTAS NUMA SÓ RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "ENVENENAMENTO DE ALTA MORTALIDADE",
    "ds_explicacao": "ALTA POTÊNCIA DO VENENO CAUSAR DANO. CONHECIMENTO REGIONAL PODE AJUDAR A IDENTIFICAR O ANIMAL PEÇONHENTO. INTERCONSULTA COM UM CENTRO DE TOXICOLOGIA PODE SER NECESSÁRIA. NA DÚVIDA, DEFINIR COMO ALTO O RISCO."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "HISTÓRIA ALÉRGICA IMPORTANTE",
    "ds_explicacao": "SENSIBILIDADE CONHECIDA COM REAÇÃO GRAVE (POR EXEMPLO: NOZES, CAMARÃO, PICADA DE ABELHA)."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "14",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "15",
    "ds_pergunta": "DOR OU COCEIRA INTENSA",
    "ds_explicacao": "COCEIRA INTOLERÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ENVENENAMENTO DE MODERADA MORTALIDADE",
    "ds_explicacao": "MODERADA POTÊNCIA DO VENENO CAUSAR DANO. CONHECIMENTO REGIONAL PODE AJUDAR A IDENTIFICAR O ANIMAL PEÇONHENTO. INTERCONSULTA COM UM CENTRO DE TOXICOLOGIA PODE SER NECESSÁRIA."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ERUPÇÃO OU VESÍCULAS DISSEMINADAS",
    "ds_explicacao": "QUALQUER ERUPÇÃO, INCLUSIVE AS SECRETANTES OU BOLHOSAS, COBRINDO MAIS DE 10% DA SUPERFÍCIE CORPORAL."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR OU COCEIRA MODERADA",
    "ds_explicacao": "COCEIRA INTENSA, MAS SUPORTÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INFLAMAÇÃO LOCAL",
    "ds_explicacao": "IMPLICA DOR, INCHAÇO E VERMELHIDÃO, RESTRITA A UMA ÁREA DEFINIDA."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INFECÇÃO LOCAL",
    "ds_explicacao": "MANIFESTA-SE GERALMENTE COMO INFLAMAÇÃO (DOR, INCHAÇO E VERMELHIDÃO) RESTRITA A UMA ÁREA DEFINIDA, COM OU SEM COLEÇÃO DE PUS."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "142",
    "ds_sintoma": "MORDEDURAS E PICADAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "MORTALIDADE ALTA",
    "ds_explicacao": "LETALIDADE É O POTENCIAL DE UMA SUBSTÂNCIA INGERIDA OU INALADA CAUSAR DANO. ALTA PROBABILIDADE DA SUBSTÂNCIA À QUAL A VÍTIMA FOI EXPOSTA CAUSAR DOENÇA GRAVE OU MORTE. INTERCONSULTA EM UM CENTRO DE INTOXICAÇÕES PODE SER NECESSÁRIA PARA SE ESTABELECER O RISCO DE LESÃO OU MORTE. NA DÚVIDA, CONSIDERE ALTO RISCO."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ALTO RISCO DE AUTOAGRESSÃO",
    "ds_explicacao": "UMA AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE QUE TEM PASSADO IMPORTANTE DE  AUTOAGRESSÃO E ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR OU ESTÁ TENTANDO IR EMBORA PARA TAL FINALIDADE É DE ALTO RISCO."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "AGITAÇÃO PSICOMOTORA ",
    "ds_explicacao": "PACIENTE QUE ESTÁ FÍSICO E/OU EMOCIONALMENTE MUITO PERTURBADO (ANGÚSTIA PERCEPTÍVEL)."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "MORTALIDADE MODERADA",
    "ds_explicacao": "LETALIDADE É O POTENCIAL DE UMA SUBSTÂNCIA INGERIDA OU INALADA CAUSAR DANO. MODERADA PROBABILIDADE DA SUBSTÂNCIA À QUAL A VÍTIMA FOI EXPOSTA CAUSAR DOENÇA GRAVE OU MORTE. INTERCONSULTA EM UM CENTRO DE INTOXICAÇÕES PODE SER NECESSÁRIA PARA SE ESTABELECER O RISCO DE LESÃO OU MORTE."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "RISCO MODERADO DE AUTOAGRESSÃO",
    "ds_explicacao": "AVALIAÇÃO INICIAL DO RISCO DE AUTOAGRESSÃO PODE SER FEITA PELO COMPORTAMENTO DO PACIENTE. AQUELE SEM PASSADO IMPORTANTE DE AUTOAGRESSÃO, QUE NÃO ESTÁ ATIVAMENTE TENTANDO SE MACHUCAR NEM TENTANDO IR EMBORA PARA TAL, MAS MANIFESTA DESEJO DE SE MACHUCAR, ESTÁ EM RISCO MODERADO."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA PSIQUIÁTRICA IMPORTANTE",
    "ds_explicacao": "HISTÓRIA DE EVENTO OU DOENÇA PSIQUIÁTRICA SIGNIFICATIVA."
  },
  {
    "cd_sintoma_avaliacao": "143",
    "ds_sintoma": "OVERDOSE E ENVENENAMENTO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PROSTRAÇÃO, HIPOTONIA",
    "ds_explicacao": "PAIS DESCREVEM A CRIANÇA COMO \"\"MOLINHA¿. O TÔNUS GERALMENTE ESTÁ DIMINUÍDO (O SINAL MAIS CARACTERÍSTICO É A CABEÇA CAÍDA)."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "RESPOSTA À VOZ OU À DOR APENAS",
    "ds_explicacao": "RESPOSTA A ESTÍMULOS DOLOROSOS. O ESTÍMULO PERIFÉRICO PADRÃO DEVE SER REALIZADO PRESSIONANDO UMA CANETA NO LEITO UNGUEAL DOS DEDOS DAS MÃOS. ESTE TIPO DE ESTÍMULO NÃO DEVE SER FEITO NO HÁLUX, POIS O REFLEXO ESPINHAL PODE CAUSAR FLEXÃO MESMO NA MORTE ENCEFÁLICA. PRESSÃO SUPRAORBITÁRIA TAMBÉM NÃO DEVE SER UTILIZADA, POIS PODE PRODUZIR O REFLEXO DE CONTORÇÃO DE FACE. RESPOSTA AO ESTÍMULO DA VOZ. NÃO É NECESSÁRIO GRITAR O NOME DO PACIENTE. CRIANÇAS PODEM NÃO RESPONDER, POR ESTAREM COM MEDO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "NÃO REAGE AOS PAIS",
    "ds_explicacao": "NÃO REAGE DE FORMA ALGUMA AO ROSTO OU À VOZ DOS PAIS. REAÇÕES ANORMAIS E APARENTE PERDA DE RECONHECIMENTO DOS PAIS TAMBÉM SÃO SINAIS PREOCUPANTES."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "PÚRPURA",
    "ds_explicacao": "ERUPÇÃO DE QUALQUER PARTE DO CORPO QUE É CAUSADA POR PEQUENAS HEMORRAGIAS DEBAIXO DA PELE. ERUPÇÃO PURPÚRICA NÃO EMPALIDECE QUANDO PRESSÃO É APLICADA SOBRE ELA."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ERUPÇÃO CUTÂNEA FIXA",
    "ds_explicacao": "ERUPÇÃO QUE NÃO SE EMPALIDECE (SE TORNA BRANCA) QUANDO PRESSÃO É APLICADA SOBRE ELA. PODE SER TESTADA USANDO-SE UM COPO PARA PRESSIONAR A LESÃO. NÃO SE OBSERVA ALTERAÇÃO DA COLORAÇÃO ATRAVÉS DO FUNDO DO COPO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "HISTÓRIA DE OVERDOSE OU ENVENENAMENTO",
    "ds_explicacao": "ESTA INFORMAÇÃO PODE VIR DE OUTROS OU PODE SER DEDUZIDA NA PRESENÇA DE CAIXAS DE REMÉDIOS VAZIAS, ENTRE OUTRAS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "INGESTÃO DE OBJETO PERIGOSO",
    "ds_explicacao": "INGESTÃO DE OBJETO PERIGOSO OU POTENCIALMENTE PERIGOSO QUE POSSA AMEAÇAR A VIDA COMO POR EXEMPLO: BATERIA, IMÃ, LÂMINAS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "IMUNOSSUPRESSÃO CONHECIDA OU PROVÁVEL",
    "ds_explicacao": "QUALQUER PACIENTE EM USO DE DROGAS IMUNOSSUPRESSORAS (INCLUINDO USO PROLONGADO DE CORTICOIDE) OU COM DOENÇA QUE CAUSE IMUNOSSUPRESSÃO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "14",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "15",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SINAIS DE DESIDRATAÇÃO",
    "ds_explicacao": "LÍNGUA SECA, ENOFTALMIA (OLHOS FUNDOS), TURGOR PASTOSO E, EM BEBÊS PEQUENOS, FONTANELA BAIXA. GERALMENTE, HÁ OLIGÚRIA (DIMINUIÇÃO DA DIURESE)."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NÃO SE ALIMENTA",
    "ds_explicacao": "CRIANÇA QUE NÃO INGERE NADA SÓLIDO OU LÍQUIDO COMO DE HÁBITO. CRIANÇA QUE SE ALIMENTA, MAS VOMITA LOGO APÓS TAMBÉM PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SEM URINAR",
    "ds_explicacao": "DIFICULDADE EM PRODUZIR OU ELIMINAR URINA. PODE SER DIFÍCIL SUA AVALIAÇÃO EM CRIANÇAS E IDOSOS. O RELATO DO NÚMERO DE FRALDAS TROCADAS PODE SER ÚTIL."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "INCONSOLÁVEL PELOS PAIS",
    "ds_explicacao": "RELATO DE CHORO OU SOFRIMENTO, NÃO RESPONDEM ÀS TENTATIVAS DE ACALANTO DOS PAIS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CHORO PROLONGADO OU ININTERRUPTO",
    "ds_explicacao": "RELATO DE CHORO CONTÍNUO POR 2 HORAS OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "COMPORTAMENTO ATÍPICO",
    "ds_explicacao": "CRIANÇA COM COMPORTAMENTO NÃO HABITUAL EM DADA SITUAÇÃO. OS CUIDADORES FREQUENTEMENTE FORNECEM ESTA INFORMAÇÃO ESPONTANEAMENTE. A CRIANÇA PODE ESTAR RABUGENTA, INDÓCIL, IRRITADIÇA OU COM COMPORTAMENTO DIFERENTE DO SEU HABITUAL."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "144",
    "ds_sintoma": "PAIS PREOCUPADOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DE OVERDOSE OU ENVENENAMENTO",
    "ds_explicacao": "ESTA INFORMAÇÃO PODE VIR DE OUTROS OU PODE SER DEDUZIDA NA PRESENÇA DE CAIXAS DE REMÉDIOS VAZIAS, ENTRE OUTRAS."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR PRECORDIAL OU CARDÍACA",
    "ds_explicacao": "DOR NO MEIO DO PEITO, GERALMENTE EM APERTO OU PESO, QUE PODE IRRADIAR PARA O BRAÇO ESQUERDO OU PESCOÇO. PODE-SE ASSOCIAR A SUDORESE, NÁUSEAS, SENSAÇÃO DE LIPOTIMIA E/OU DOR EPIGÁSTRICA."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "PALPITAÇÃO ATUAL",
    "ds_explicacao": "SENSAÇÃO DE CORAÇÃO ACELERADO QUE AINDA ESTÁ PRESENTE NO MOMENTO DA CLASSIFICAÇÃO DE RISCO."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA CARDÍACA IMPORTANTE",
    "ds_explicacao": "UMA ARRITMIA RECORRENTE AMEAÇADORA DA VIDA OU UMA CARDIOPATIA PREVIAMENTE CONHECIDA QUE PODE SE DETERIORAR RAPIDAMENTE."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "145",
    "ds_sintoma": "PALPITAÇÕES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "AVULSÃO DENTÁRIA AGUDA",
    "ds_explicacao": "AVULSÃO DE UM DENTE INTEIRO NAS ÚLTIMAS 24H."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INCHAÇO NA FACE",
    "ds_explicacao": "INCHAÇO NA FACE QUE PODE SER LOCALIZADO OU DIFUSO."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "146",
    "ds_sintoma": "PROBLEMAS DENTÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "COMPROMETIMENTO VASCULAR DISTAL",
    "ds_explicacao": "HAVERÁ ASSOCIAÇÃO DE PALIDEZ, ESFRIAMENTO, ALTERAÇÃO DA SENSIBILIDADE E/OU DOR COM OU SEM PULSO DISTAL À LESÃO."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "PELE CRÍTICA",
    "ds_explicacao": "FRATURA OU DESLOCAMENTO PODE DEIXAR FRAGMENTOS OU PONTAS DE OSSO PRESSIONANDO A PELE DE TAL FORMA QUE PODE AMEAÇAR SUA VIABILIDADE. A PELE ESTARÁ PÁLIDA, SOB TENSÃO, EM RISCO."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DEFORMIDADE GROSSEIRA",
    "ds_explicacao": "ISTO É SEMPRE SUBJETIVO. ANGULAÇÃO OU ROTAÇÃO GROSSEIRA OU ANORMAL É IMPLÍCITA."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "FRATURA EXPOSTA",
    "ds_explicacao": "QUALQUER FERIDA AO REDOR DA FRATURA DEVE SER CONSIDERADA SUSPEITA. SE HOUVER ALGUMA POSSIBILIDADE DE COMUNICAÇÃO ENTRE A FERIDA E A FRATURA, ESTA DEVE SER CONSIDERADA EXPOSTA."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR PLEURÍTICA",
    "ds_explicacao": "DOR LOCALIZADA NO TÓRAX QUE PIORA COM RESPIRAÇÃO, TOSSE OU ESPIRRO. DOR VENTILATÓRIO-DEPENDENTE."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DEFORMIDADE",
    "ds_explicacao": "ISTO É SEMPRE SUBJETIVO. INCLUI ANGULAÇÃO OU ROTAÇÃO ANORMAL."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INCHAÇO",
    "ds_explicacao": "QUALQUER AUMENTO ANORMAL NO TAMANHO."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "147",
    "ds_sintoma": "PROBLEMAS EM EXTREMIDADES",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DEFORMIDADE GROSSEIRA",
    "ds_explicacao": "ISTO É SEMPRE SUBJETIVO. ANGULAÇÃO OU ROTAÇÃO GROSSEIRA OU ANORMAL É IMPLÍCITA."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "REDUÇÃO RECENTE DA ACUIDADE VISUAL",
    "ds_explicacao": "QUALQUER  REDUÇÃO DA ACUIDADE VISUAL OCORRIDA HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "AVULSÃO DENTÁRIA AGUDA",
    "ds_explicacao": "AVULSÃO DE UM DENTE INTEIRO NAS ÚLTIMAS 24H."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INCHAÇO NA FACE",
    "ds_explicacao": "INCHAÇO NA FACE QUE PODE SER LOCALIZADO OU DIFUSO."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMATOMA DE ORELHA",
    "ds_explicacao": "HEMATOMA TENSO (GERALMENTE PÓS-TRAUMÁTICO) NA ORELHA."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DIPLOPIA",
    "ds_explicacao": "VISÃO DUPLA QUE DESAPARECE SE UM DOS OLHOS É FECHADO."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SENSIBILIDADE ALTERADA NA FACE",
    "ds_explicacao": "QUALQUER ALTERAÇÃO DE SENSIBILIDADE NA FACE."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "OLHO VERMELHO",
    "ds_explicacao": "QUALQUER VERMELHIDÃO DO OLHO. PODE OU NÃO HAVER DOR. A VERMELHIDÃO DO OLHO PODE SER DIFUSA OU PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "148",
    "ds_sintoma": "PROBLEMA EM FACE",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "LESÃO OCULAR QUÍMICA AGUDA",
    "ds_explicacao": "QUALQUER SUBSTÂNCIA QUE RESPINGA OU CAI NOS OLHOS NAS ÚLTIMAS 12 HORAS E CAUSA DOR, QUEIMAÇÃO, REDUÇÃO DA VISÃO OU QUALQUER OUTRO SINTOMA."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "TRAUMA OCULAR PENETRANTE",
    "ds_explicacao": "EVENTO TRAUMÁTICO FÍSICO RECENTE COM PERFURAÇÃO DO GLOBO OCULAR."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "PERDA TOTAL DA VISÃO AGUDA",
    "ds_explicacao": "PERDA DA VISÃO EM UM OU AMBOS OS OLHOS NAS ÚLTIMAS 24H E QUE NÃO VOLTOU AO NORMAL."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "REDUÇÃO RECENTE DA ACUIDADE VISUAL",
    "ds_explicacao": "QUALQUER  REDUÇÃO DA ACUIDADE VISUAL OCORRIDA HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OLHO VERMELHO",
    "ds_explicacao": "QUALQUER VERMELHIDÃO DO OLHO. PODE OU NÃO HAVER DOR. A VERMELHIDÃO DO OLHO PODE SER DIFUSA OU PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SENSAÇÃO DE CORPO ESTRANHO",
    "ds_explicacao": "SENSAÇÃO DE ALGUMA COISA NO OLHO. GERALMENTE É RELATADA COMO SE ALGO ESTIVESSE RASPANDO OU ARRANHANDO O OLHO."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DIPLOPIA",
    "ds_explicacao": "VISÃO DUPLA QUE DESAPARECE SE UM DOS OLHOS É FECHADO."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "149",
    "ds_sintoma": "PROBLEMAS EM OLHOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DE TRAUMA CRANIOENCEFÁLICO",
    "ds_explicacao": "HISTÓRIA DE TRAUMA FÍSICO ENVOLVENDO A CABEÇA. GERALMENTE ISSO SERÁ RELATADO PELO PACIENTE, MAS SE ELE ESTEVE INCONSCIENTE, A HISTÓRIA DEVERÁ SER COLHIDA DE UMA TESTEMUNHA CONFIÁVEL."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMATOMA DE ORELHA",
    "ds_explicacao": "HEMATOMA TENSO (GERALMENTE PÓS-TRAUMÁTICO) NA ORELHA."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "VERTIGEM",
    "ds_explicacao": "SENSAÇÃO AGUDA DE ESTAR TONTO OU RODANDO, PODENDO ESTAR ASSOCIADA A NÁUSEA E VÔMITO."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "PERDA RECENTE DA AUDIÇÃO",
    "ds_explicacao": "PERDA DA AUDIÇÃO EM UM OU AMBOS OS OUVIDOS HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "150",
    "ds_sintoma": "PROBLEMA EM OUVIDOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "PRIAPRISMO",
    "ds_explicacao": "EREÇÃO PENIANA SUSTENTADA."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "IMUNOSSUPRESSÃO CONHECIDA OU PROVÁVEL",
    "ds_explicacao": "QUALQUER PACIENTE EM USO DE DROGAS IMUNOSSUPRESSORAS (INCLUINDO USO PROLONGADO DE CORTICOIDE) OU COM DOENÇA QUE CAUSE IMUNOSSUPRESSÃO."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMATÚRIA FRANCA",
    "ds_explicacao": "COLORAÇÃO VERMELHA DA URINA CAUSADA POR SANGUE."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "RETENÇÃO URINÁRIA",
    "ds_explicacao": "IMPOSSIBILIDADE DE ELIMINAR URINA PELA URETRA ASSOCIADA A BEXIGOMA. É UMA CONDIÇÃO DE MUITA DOR, EXCETO SE HOUVER ALTERAÇÃO DO SENSÓRIO."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CÓLICAS",
    "ds_explicacao": "DORES INTERMITENTES (EM ONDAS) QUE TENDEM A MELHORAR OU PIORAR A CADA 20 MINUTOS."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "DISÚRIA",
    "ds_explicacao": "DOR E/OU DIFICULDADE EM URINAR. A DOR É TIPICAMENTE DESCRITA COMO FINCADA OU QUEIMAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "151",
    "ds_sintoma": "PROBLEMAS URINÁRIOS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "NOVO PULSO ANORMAL",
    "ds_explicacao": "BRADICARDIA (FREQUÊNCIA DE PULSO ABAIXO DE 60 BPM EM ADULTOS), TAQUICARDIA (FREQUÊNCIA DE PULSO ACIMA DE 100 BPM EM ADULTOS) OU RITMO IRREGULAR. NA CRIANÇA DEVE-SE DEFINIR BRADICARDIA E TAQUICARDIA CONFORME A IDADE. DEVE-SE CONSIDERAR ALTERAÇÃO DE FREQUÊNCIA DE PULSO E/OU RITMO QUE ESTÁ OCORRENDO NESTE EPISÓDIO."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "NEONATO QUENTE",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "BEBÊ QUENTE",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "SEPSE POSSÍVEL",
    "ds_explicacao": "EM ADULTO CONSIDERAR: ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA DESDE CONFUSÃO AO ESTUPOR OU COMA (ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO) OU FREQUÊNCIA RESPIRATÓRIA MAIOR QUE 22IRPM OU PRESSÃO ARTERIAL SISTÓLICA MENOR QUE 100 MMHG. EM BEBÊ E CRIANÇA CONSIDERAR: PULSO ANORMAL POR FAIXA ETÁRIA SE TEMPERATURA TIMPÂNICA FOR MENOR QUE 38,5°C OU ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA, POUCA INTERAÇÃO COM OS FAMILIARES) OU PERFUSÃO CAPILAR MAIOR QUE 2 SEGUNDOS. EM NEONATOS CONSIDERAR: ALTERAÇÃO DO PADRÃO DE ATIVIDADE (IRRITABILIDADE, CHORO INCONSOLÁVEL, SONOLÊNCIA) OU PREENCHIMENTO CAPILAR CENTRAL MAIOR QUE 2 SEGUNDOS (REALIZADO NO TÓRAX)."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "12",
    "ds_pergunta": "HIPOTERMIA",
    "ds_explicacao": "SE A PELE SE APRESENTA FRIA DIZ-SE QUE O PACIENTE ESTÁ CLINICAMENTE HIPOTÉRMICO. A TEMPERATURA DEVE SER AFERIDA LOGO QUE POSSÍVEL. TEMPERATURA MENOR QUE 35°C DEFINE HIPOTERMIA."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "13",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DEFORMIDADE GROSSEIRA",
    "ds_explicacao": "ISTO É SEMPRE SUBJETIVO. ANGULAÇÃO OU ROTAÇÃO GROSSEIRA OU ANORMAL É IMPLÍCITA."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "FRATURA EXPOSTA",
    "ds_explicacao": "QUALQUER FERIDA AO REDOR DA FRATURA DEVE SER CONSIDERADA SUSPEITA. SE HOUVER ALGUMA POSSIBILIDADE DE COMUNICAÇÃO ENTRE A FERIDA E A FRATURA, ESTA DEVE SER CONSIDERADA EXPOSTA."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "NEONATO FEBRIL",
    "ds_explicacao": "SE A PELE DO RECÉM-NASCIDO (COM IDADE DE 28 DIAS OU MENOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "10",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "11",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "BEBÊ FEBRIL",
    "ds_explicacao": "SE A PELE DO BEBÊ (COM IDADE MAIOR DE 28 DIAS ATÉ UM ANO) ESTIVER RE­LATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DEFORMIDADE",
    "ds_explicacao": "ISTO É SEMPRE SUBJETIVO. INCLUI ANGULAÇÃO OU ROTAÇÃO ANORMAL."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "INCHAÇO",
    "ds_explicacao": "QUALQUER AUMENTO ANORMAL NO TAMANHO."
  },
  {
    "cd_sintoma_avaliacao": "152",
    "ds_sintoma": "QUEDAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ESTRIDOR",
    "ds_explicacao": "RUÍDO INSPIRATÓRIO, EXPIRATÓRIO OU AMBOS, MELHOR ESCUTADO AO SE RESPIRAR DE BOCA ABERTA."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "EDEMA FACIAL",
    "ds_explicacao": "INCHAÇO DIFUSO NA FACE GERALMENTE ENVOLVENDO OS LÁBIOS."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "LESÃO POR INALAÇÃO",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM ESPAÇO COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE ASPIRAÇÃO DE FUMAÇA. FULIGEM EM TORNO DA BOCA E NARIZ, ALÉM DE ROUQUIDÃO, ESTARÁ PRESENTE. HISTÓRIA É TAMBÉM A FORMA MAIS SEGURA DE SE DIAGNOSTICAR INALAÇÃO DE AGENTES QUÍMICOS - PODE NÃO HAVER ALGUM OUTRO SINAL."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "SATURAÇÃO DE O2 MUITO BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO ABAIXO DE 95% EM TERAPIA COM O2 OU ABAIXO DE 92% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "MORTALIDADE QUÍMICA ALTA",
    "ds_explicacao": "MORTALIDADE É O POTENCIAL DE UMA SUBSTÂNCIA QUÍMICA CAUSAR DANO. INTERCONSULTA EM UM CENTRO DE INTOXICAÇÕES PODE SER NECESSÁRIA PARA SE ESTABELECER O RISCO DE LESÃO OU MORTE. NA DÚVIDA, CONSIDERE ALTO O RISCO."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SATURAÇÃO DE O2 BAIXA",
    "ds_explicacao": "SATURAÇÃO DE OXIGÊNIO MENOR QUE 95% EM AR AMBIENTE."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "EXPOSIÇÃO À FUMAÇA",
    "ds_explicacao": "HISTÓRIA DE CONFINAMENTO EM LUGAR COM FUMAÇA É O INDICADOR MAIS CONFIÁVEL DE EXPOSIÇÃO À FUMAÇA. PODE HAVER FULIGEM EM TORNO DA BOCA E NARIZ."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "QUEIMADURA ELÉTRICA",
    "ds_explicacao": "QUALQUER QUEIMADURA CAUSADA OU POSSIVELMENTE CAUSADA POR CORRENTE ELÉTRICA. ISTO INCLUI CORRENTES ALTERNADAS E CONTÍNUAS, TANTO DE FONTES NATURAIS COMO ARTIFICIAIS."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "MORTALIDADE QUÍMICA MODERADA",
    "ds_explicacao": "MORTALIDADE É O POTENCIAL DE UMA SUBSTÂNCIA QUÍMICA CAUSAR DANO. INTERCONSULTA EM UM CENTRO DE INTOXICAÇÕES PODE SER NECESSÁRIA PARA SE ESTABELECER O RISCO DE LESÃO OU MORTE. NA DÚVIDA, CONSIDERE ESTE DISCRIMINADOR."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INFLAMAÇÃO LOCAL",
    "ds_explicacao": "IMPLICA DOR, INCHAÇO E VERMELHIDÃO, RESTRITA A UMA ÁREA DEFINIDA."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INFECÇÃO LOCAL",
    "ds_explicacao": "MANIFESTA-SE GERALMENTE COMO INFLAMAÇÃO (DOR, INCHAÇO E VERMELHIDÃO) RESTRITA A UMA ÁREA DEFINIDA, COM OU SEM COLEÇÃO DE PUS."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "153",
    "ds_sintoma": "QUEIMADURAS",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "SANGRAMENTO VAGINAL INTENSO",
    "ds_explicacao": "ANGRAMENTO VAGINAL É MUITO DIFÍCIL DE QUANTIFICAÇÃO. EVIDÊNCIAS DE GRANDES PERDAS DE SANGUE PELA VAGINA OU FLUXO CONSTANTE PREENCHEM ESTE CRITÉRIO. GRANDES COÁGULOS PODEM SER OBSERVADOS. O USO DE GRANDE NÚMERO DE ABSORVENTES HIGIÊNICOS SUGERE PERDA INTENSA."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "SANGRAMENTO VAGINAL COM 20 SEMANAS DE GRAVIDEZ OU MAIS",
    "ds_explicacao": "QUALQUER PERDA DE SANGUE PELA VAGINA EM MULHER SABIDAMENTE COM 20 SEMANAS DE GRAVIDEZ OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CRIANÇA MUITO QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER MUITO QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "ADULTO MUITO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER MUITO QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE MUITO QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL, CORRESPONDE À TEMPERATURA DE 41 °C OU MAIS."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "TRAUMA VAGINAL",
    "ds_explicacao": "QUALQUER HISTÓRIA OU OUTRA EVIDÊNCIA DE TRAUMA NA VAGINA."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "GRAVIDEZ POSSÍVEL",
    "ds_explicacao": "QUALQUER MULHER CUJA MENSTRUAÇÃO NORMAL NÃO OCORREU ESTÁ POSSIVELMENTE GRÁVIDA. ALÉM DISSO, PARA QUALQUER MULHER EM IDADE FÉRTIL COM VIDA SEXUAL ATIVA SEM PROTEÇÃO DEVERÁ SER CONSIDERADA A POSSIBILIDADE DE GRAVIDEZ."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR ABDOMINAL",
    "ds_explicacao": "RELATO DE QUALQUER DOR SENTIDA NO ABDOME. SE IRRADIADA PARA O DORSO PODE INDICAR DISSECÇÃO DE AORTA; SE ASSOCIADA A SANGRAMENTO VAGINAL, PODE SUGERIR GRAVIDEZ ECTÓPICA OU ABORTAMENTO."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR IRRADIADA PARA O OMBRO",
    "ds_explicacao": "DOR SENTIDA NA PONTA DO OMBRO. GERALMENTE INDICA IRRITAÇÃO DIAFRAGMÁTICA."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "CRIANÇA QUENTE",
    "ds_explicacao": "SE A PELE DA CRIANÇA (MAIOR DE 1 ANO ATÉ 14 ANOS) ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "ADULTO QUENTE",
    "ds_explicacao": "SE A PELE ESTIVER QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE QUENTE. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 38,5°C ATÉ 40,9°C."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "9",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "CRIANÇA FEBRIL",
    "ds_explicacao": "SE A PELE DA CRIANÇA (COM IDADE ENTRE UM E 14 ANOS) ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER CLINICAMENTE QUE A CRIANÇA ESTÁ FEBRIL. A TEMPERATURA DEVE SER MEDIDA ASSIM QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ADULTO FEBRIL",
    "ds_explicacao": "SE A PELE ESTIVER RELATIVAMENTE QUENTE, PODE-SE DIZER QUE O PACIENTE ESTÁ CLINICAMENTE FEBRIL. A TEMPERATURA DEVE SER MEDIDA LOGO QUE POSSÍVEL. CORRESPONDE À TEMPERATURA DE 37,5°C ATÉ 38,4°C."
  },
  {
    "cd_sintoma_avaliacao": "154",
    "ds_sintoma": "SANGRAMENTO VAGINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "CONVULSIONANDO",
    "ds_explicacao": "PACIENTE QUE ESTÁ APRESENTANDO MOVIMENTOS TÔNICOS OU CLÔNICOS DE UMA CRISE CONVULSIVA TIPO GRANDE MAL OU APRESENTANDO CONVULSÃO PARCIAL."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HIPOGLICEMIA",
    "ds_explicacao": "GLICEMIA MENOR QUE 55 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HIPERGLICEMIA COM CETOSE",
    "ds_explicacao": "GLICEMIA MAIOR QUE 200 MG/DL COM CETONEMIA, CETONÚRIA OU SINAIS DE ACIDOSE (RESPIRAÇÃO DE KUSSMAUL - PROFUNDA E/OU HÁLITO CETÔNICO)."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MAIS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL HÁ MAIS DE 24H."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "VÔMITOS PERSISTENTES",
    "ds_explicacao": "VÔMITOS CONTÍNUOS OU QUE OCORREM SEM ALÍVIO ENTRE OS EPISÓDIOS."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "HIPERGLICEMIA",
    "ds_explicacao": "GLICEMIA MAIOR QUE 300 MG/DL."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "7",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "8",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMATOMA DE COURO CABELUDO",
    "ds_explicacao": "ÁREA DO COURO CABELUDO CONTUSA, MACHUCADA E ELEVADA. CONTUSÃO NA TESTA ABAIXO DA LINHA DO CABELO É DITA FRONTAL."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "VÔMITO",
    "ds_explicacao": "QUALQUER ÊMESE PREENCHE ESTE CRITÉRIO."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "155",
    "ds_sintoma": "TRAUMA CRANIOENCEFÁLICO",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "NOVO DÉFICIT NEUROLÓGICO HÁ MENOS DE 24 HORAS",
    "ds_explicacao": "QUALQUER NOVA PERDA DE FUNÇÃO NEUROLÓGICA QUE OCORREU NAS ÚLTIMAS 24H: ALTERAÇÃO OU PERDA DE SENSIBILIDADE, FRAQUEZA DE MEMBROS (TRANSITÓRIA OU PERMANENTE), RETENÇÃO URINÁRIA OU ALTERAÇÃO DA FUNÇÃO INTESTINAL."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA DE INCONSCIÊNCIA",
    "ds_explicacao": "DEVE HAVER UMA TESTEMUNHA CONFIÁVEL PARA RELATAR SE O PACIENTE PERDEU A CONSCIÊNCIA E POR QUANTO TEMPO. CASO CONTRÁRIO, SE O PACIENTE NÃO SE LEMBRA DO INCIDENTE, DEVE-SE PRESUMIR QUE ESTEVE INCONSCIENTE."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "COMORBIDADE IMPORTANTE",
    "ds_explicacao": "QUALQUER CONDIÇÃO MÉDICA PREEXISTENTE QUE REQUEIRA MEDICAÇÃO CONTÍNUA OU OUTROS CUIDADOS."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "156",
    "ds_sintoma": "TRAUMA MAIOR",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "OBSTRUÇÃO DE VIAS AÉREAS",
    "ds_explicacao": "VIA AÉREA PODE ESTAR OBSTRUÍDA POR NÃO SE MANTER PÉRVIA OU POR PERDER REFLEXOS PROTETORES QUE EVITAM ASPIRAÇÃO. A FALÊNCIA EM SE MANTER VIA AÉREA PÉRVIA RESULTARÁ EM OBSTRUÇÃO TOTAL INTERMITENTE OU OBSTRUÇÃO PARCIAL MANIFESTADA POR RONCOS OU GORGOLEJOS DURANTE A RESPIRAÇÃO."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "RESPIRAÇÃO INADEQUADA",
    "ds_explicacao": "PACIENTE QUE NÃO CONSEGUE RESPIRAR O SUFICIENTE PARA MANTER OXIGENAÇÃO ADEQUADA. PODE HAVER AUMENTO DO TRABALHO RESPIRATÓRIO, SINAS DE RESPIRAÇÃO INADEQUADA OU EXAUSTÃO."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HEMORRAGIA EXSANGUINANTE",
    "ds_explicacao": "HEMORRAGIA QUE ESTÁ OCORRENDO DE TAL FORMA QUE OCORRERÁ A MORTE SE NÃO FOR CONTIDA."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "CHOQUE",
    "ds_explicacao": "CHOQUE É DEFINIDO COMO OXIGENAÇÃO INADEQUADA DOS TECIDOS QUE RESULTA EM MÁ-PERFUSÃO TECIDUAL. SÃO SINAIS CLÁSSICOS: SUDORESE, PALIDEZ, TAQUICARDIA, HIPOTENSÃO E DIMINUIÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "CRIANÇA NÃO REATIVA",
    "ds_explicacao": "CRIANÇA QUE NÃO RESPONDE AO COMANDO VERBAL OU AO ESTÍMULO DOLOROSO."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "DISPNEIA AGUDA ",
    "ds_explicacao": "FÔLEGO CURTO OU FALTA DE AR SÚBITA OU REPENTINA PIORA DE FALTA DE AR CRÔNICA."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HEMORRAGIA MAIOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR FORTEMENTE OU ENCHARCA RAPIDAMENTE O CURATIVO."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA",
    "ds_explicacao": "PACIENTE NÃO TOTALMENTE ALERTA, COM ALTERAÇÃO DA ESCALA DE COMA DE GLASGOW EM RELAÇÃO AO ESTADO PRÉVIO. RESPONDE APENAS À VOZ OU À DOR OU ESTÁ IRRESPONSIVO. EM CASO DE DÚVIDA, PRESUMIR ALTERAÇÃO DO NÍVEL DE CONSCIÊNCIA."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVISCERAÇÃO",
    "ds_explicacao": "HERNIAÇÃO OU FRANCA EXTERIORIZAÇÃO DE ÓRGÃOS INTERNOS."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "MECANISMO DE TRAUMA SIGNIFICATIVO",
    "ds_explicacao": "TRAUMA PENETRANTE (FACADA OU TIRO) E TRAUMA COM ALTA TRANSFERÊNCIA DE ENERGIA COMO QUEDA DE ALTURA E ACIDENTES EM VIAS DE TRÂNSITO RÁPIDO (VELOCIDADE ACIMA DE 60 KM/H) SÃO SIGNIFICATIVOS, PRINCIPALMENTE SE HOUVE EJEÇÃO DO VEÍCULO, MORTES DE OUTRAS VÍTIMAS OU GRANDE DEFORMAÇÃO DO VEÍCULO."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "16",
    "ds_tipo_risco": "MUITO URGENTE",
    "nr_ordem_pergunta": "6",
    "ds_pergunta": "DOR INTENSA",
    "ds_explicacao": "DOR INTOLERÁVEL, GERALMENTE DESCRITA COMO JAMAIS SENTIDA. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "HEMORRAGIA MENOR INCONTROLÁVEL",
    "ds_explicacao": "HEMORRAGIA QUE NÃO É RAPIDAMENTE CONTROLADA POR COMPRESSÃO DIRETA E SUSTENTADA. O SANGUE CONTINUA A FLUIR LEVEMENTE OU A ESCORRER."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "HISTÓRIA HEMATOLÓGICA OU METABÓLICA SIGNIFICATIVA",
    "ds_explicacao": "PACIENTE COM CONDIÇÃO HEMATOLÓGICA SIGNIFICATIVA OU DESORDEM METABÓLICA CONGÊNITA COM CONHECIDA POSSIBILIDADE DE DETERIORAÇÃO RÁPIDA."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "HISTÓRIA DISCORDANTE",
    "ds_explicacao": "QUANDO A HISTÓRIA FORNECIDA NÃO EXPLICA OS ACHADOS FÍSICOS. PODE SER UM MARCADOR DE LESÃO NÃO ACIDENTAL EM CRIANÇAS OU ADULTOS VULNERÁVEIS, PODENDO SER SENTINELA DE ABUSO E MAUS TRATOS."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "DOR PLEURÍTICA",
    "ds_explicacao": "DOR LOCALIZADA NO TÓRAX QUE PIORA COM RESPIRAÇÃO, TOSSE OU ESPIRRO. DOR VENTILATÓRIO-DEPENDENTE."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "5",
    "ds_pergunta": "DOR MODERADA",
    "ds_explicacao": "DOR INTENSA, MAS SUPORTÁVEL. VER RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "INFLAMAÇÃO LOCAL",
    "ds_explicacao": "IMPLICA DOR, INCHAÇO E VERMELHIDÃO, RESTRITA A UMA ÁREA DEFINIDA."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "INFECÇÃO LOCAL",
    "ds_explicacao": "MANIFESTA-SE GERALMENTE COMO INFLAMAÇÃO (DOR, INCHAÇO E VERMELHIDÃO) RESTRITA A UMA ÁREA DEFINIDA, COM OU SEM COLEÇÃO DE PUS."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "3",
    "ds_pergunta": "DOR LEVE RECENTE ",
    "ds_explicacao": "QUALQUER DOR QUE TENHA OCORRIDO HÁ MENOS DE SETE DIAS. VEJA RÉGUA DA DOR."
  },
  {
    "cd_sintoma_avaliacao": "157",
    "ds_sintoma": "TRAUMA TORACOABDOMINAL",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "4",
    "ds_pergunta": "EVENTO RECENTE",
    "ds_explicacao": "PROBLEMA QUE SURGIU HÁ MENOS DE SETE DIAS."
  },
  {
    "cd_sintoma_avaliacao": "158",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO PRIMÁRIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "ANDA",
    "ds_explicacao": "EM ACIDENTE ENVOLVENDO MÚLTIPLAS VÍTIMAS, AO SER ACIONADO O PLANO DE CATÁSTROFE, QUALQUER PACIENTE QUE POSSA CAMINHAR, INDEPENDENTEMENTE DE SEU FERIMENTO, PREENCHE ESTE CRITÉRIO, SENDO PRIORIZADO COMO PADRÃO (VERDE)."
  },
  {
    "cd_sintoma_avaliacao": "158",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO PRIMÁRIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "FREQUÊNCIA RESPIRATÓRIA ANORMAL (< 10 OU > 29 IPM)",
    "ds_explicacao": "EM SITUAÇÕES DE MÚLTIPLAS VÍTIMAS, CONSIDERA-SE FREQUÊNCIA RESPIRATÓRIA ANORMAL QUANDO ELA ESTÁ MUITO ALTA (>29) OU MUITO BAIXA (<10). É PRIORIZADA COMO VERMELHA."
  },
  {
    "cd_sintoma_avaliacao": "158",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO PRIMÁRIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "PERFUSÃO CAPILAR ANORMAL (> 2 SEG)",
    "ds_explicacao": "TEMPO DE PERFUSÃO CAPILAR É O TEMPO DE PREENCHIMENTO DO LEITO UNGUEAL APÓS SER APLICADA PRESSÃO POR 5 SEGUNDOS. O VALOR NORMAL É MENOR QUE 2 SEG, MAS ESTE SINAL É POUCO ÚTIL EM CASO DE HIPOTERMIA. EM SITUAÇÕES DE MÚLTIPLAS VÍTIMAS, QUANDO A PERFUSÃO CAPILAR ESTÁ PROLONGADA (MAIOR QUE 2 SEGUNDOS), O PACIENTE É PRIORIZADO COMO VERMELHO."
  },
  {
    "cd_sintoma_avaliacao": "158",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO PRIMÁRIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "2",
    "ds_pergunta": "FREQUÊNCIA DE PULSO ANORMAL (> 120 BPM)",
    "ds_explicacao": "SE A PERFUSÃO CAPILAR NÃO PUDER SER MEDIDA EM SITUAÇÕES DE MÚLTIPLAS VÍTIMAS, A FREQUÊNCA DE PULSO MAIOR QUE 120 POR MINUTO É PRIORIZADA COMO VERMELHA."
  },
  {
    "cd_sintoma_avaliacao": "158",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO PRIMÁRIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "RESPIRA APÓS ABERTURA DE VIAS AÉREAS",
    "ds_explicacao": "EM SITUAÇÕES DE MÚLTIPLAS VÍTIMAS, DEVE SER AVALIADA A PRESENÇA DE RESPIRAÇÃO APÓS ABERTURA DE VIA AÉREA. A AUSÊNCIA DE RESPIRAÇÃO POR 10 SEGUNDOS APÓS MANOBRA DE ABERTURA DA VIA AÉREA IMPLICA EM DECLARAÇÃO DE ÓBITO (UMA COMPETÊNCIA MÉDICA), A NÃO SER QUE HAJA RECURSO PARA RESSUCITAÇÃO CARDIOPULMONAR SEM PREJUÍZO AO ATENDIMENTO DE OUTRAS VÍTIMAS CLASSIFICADAS COMO VERMELHO."
  },
  {
    "cd_sintoma_avaliacao": "159",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO SECUNDÁRIA",
    "cd_classificacao": "15",
    "ds_tipo_risco": "EMERGÊNCIA",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "TRTS 1 A 10",
    "ds_explicacao": "A PONTUAÇÃO DO TRTS É FEITA CONSIDERANDO A FREQUÊNCIA RESPIRATÓRIA (0-4), PRESSÃO ARTERIAL SISTÓLICA (0-4) E ESCALA DE COMA DE GLASGOW (0-4) PARA SE OBTER PONTUAÇÃO FINAL DE 0 A 12."
  },
  {
    "cd_sintoma_avaliacao": "159",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO SECUNDÁRIA",
    "cd_classificacao": "17",
    "ds_tipo_risco": "URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "TRTS = 11",
    "ds_explicacao": "A PONTUAÇÃO DO TRTS É FEITA CONSIDERANDO A FREQUÊNCIA RESPIRATÓRIA (0-4), PRESSÃO ARTERIAL SISTÓLICA (0-4) E ESCALA DE COMA DE GLASGOW (0-4) PARA SE OBTER PONTUAÇÃO FINAL DE 0 A 12."
  },
  {
    "cd_sintoma_avaliacao": "159",
    "ds_sintoma": "SITUAÇÃO DE MÚLTIPLAS VÍTIMAS - AVALIAÇÃO SECUNDÁRIA",
    "cd_classificacao": "18",
    "ds_tipo_risco": "POUCO URGENTE",
    "nr_ordem_pergunta": "1",
    "ds_pergunta": "TRTS = 12",
    "ds_explicacao": "A PONTUAÇÃO DO TRTS É FEITA CONSIDERANDO A FREQUÊNCIA RESPIRATÓRIA (0-4), PRESSÃO ARTERIAL SISTÓLICA (0-4) E ESCALA DE COMA DE GLASGOW (0-4) PARA SE OBTER PONTUAÇÃO FINAL DE 0 A 12."
  }
]
