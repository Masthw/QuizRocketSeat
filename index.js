const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Uma linguagem de programação",
        "Um framework",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o símbolo usado para comentários de linha única em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
      respostas: [
        "String",
        "Number",
        "Booleano",
      ],
      correta: 2
    },
    {
      pergunta: "O que o método 'getElementById()' faz em JavaScript?",
      respostas: [
        "Seleciona um elemento pelo nome da classe",
        "Seleciona um elemento pelo ID",
        "Seleciona um elemento pelo nome da tag",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o operador de comparação estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável que pode ser alterada posteriormente em JavaScript?",
      respostas: [
        "const",
        "variable",
        "let",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método utilizado para imprimir no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o resultado de 5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Erro",
      ],
      correta: 1
    },
    {
      pergunta: "O que o método 'querySelector()' faz em JavaScript?",
      respostas: [
        "Seleciona vários elementos pelo ID",
        "Seleciona o primeiro elemento que corresponde a um seletor CSS",
        "Seleciona todos os elementos de uma classe",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a estrutura de controle usada para tomar decisões em JavaScript?",
      respostas: [
        "switch",
        "for",
        "if/else",
      ],
      correta: 2
    }
  ];
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) { 
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)

      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta

        corretas.delete(item)
        if(estaCorreta){
            corretas.add(item)
        }

        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
    
      
      
      quizItem.querySelector('dl').appendChild(dt)
    }
    quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
   }