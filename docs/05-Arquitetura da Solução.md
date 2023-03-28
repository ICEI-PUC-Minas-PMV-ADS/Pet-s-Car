# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Classes”.

> - [Diagramas de Classes - Documentação da IBM](https://www.ibm.com/docs/pt-br/rational-soft-arch/9.6.1?topic=diagrams-class)
> - [O que é um diagrama de classe UML? | Lucidchart](https://www.lucidchart.com/pages/pt/o-que-e-diagrama-de-classe-uml)

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

As referências abaixo irão auxiliá-lo na geração do artefato “Modelo ER”.

> - [Como fazer um diagrama entidade relacionamento | Lucidchart](https://www.lucidchart.com/pages/pt/como-fazer-um-diagrama-entidade-relacionamento)

## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
As referências abaixo irão auxiliá-lo na geração do artefato “Esquema Relacional”.

> - [Criando um modelo relacional - Documentação da IBM](https://www.ibm.com/docs/pt-br/cognos-analytics/10.2.2?topic=designer-creating-relational-model)

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

O que é qualidade de software?  

Para ajudar nessa questão, a International Organization Standardization - ISO e a International Electrotechnical Comission-IEC, que são organismos normalizadores com importância internacional reconhecida no setor de software, se uniram para editar normas internacionais conjuntas. A norma internacional ISO/IEC, define qualidade de software como a totalidade de características de um produto de software que lhe confere a capacidade de satisfazer necessidades explícitas e implícitas. 

Necessidades explícitas são aquelas definidas no requisito proposto. Esses requisitos devem definir as condições em que o produto deve ser utilizado e dizer seus objetivos, funções e desempenho esperado. São, portanto, fatores relativos à qualidade do processo do desenvolvimento do produto que são percebidos somente pelas pessoas que trabalharam no seu desenvolvimento. 

Necessidades implícitas são aquelas que, embora não expressas no documento do produtor, são necessárias para o usuário. Estão englobados em esta classe os requisitos que não precisam ser declarados por serem óbvios, mas que pela gravidade de suas consequências devem ser levados em consideração 

Já o grau da qualidade é resultante do conjunto de requisitos do produto e da dificuldade para sua execução. Portanto, deve ser avaliada na definição do escopo. Já a qualidade com seus padrões, processos, controles e direcionamentos normalmente é descrita na política de qualidade 

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software. 

![image](https://user-images.githubusercontent.com/123743005/228100853-4d2bbc0d-5ff6-43c1-965d-c01f6fe5aaf4.png)
![image](https://user-images.githubusercontent.com/123743005/228100913-0ffcc4d1-fee3-43ce-8185-6c17c643a3dd.png)
![image](https://user-images.githubusercontent.com/123743005/228100956-ea9aa93b-2ba1-40b7-815e-e37e7b5fc363.png)
![image](https://user-images.githubusercontent.com/123743005/228101043-39439414-955f-42b6-b7c0-d6a85551d419.png)

O que são as Métricas?

As métricas são parte do nosso esforço de medir um software. São perguntas focadas no objeto de interesse do que se deseja medir, acompanhadas de uma escala quantitativa de valores a serem utilizadas e interpretadas por um avaliador. São utilizadas para a caracterização e melhor entendimento sobre a maneira de como os processos, os produtos, os recursos os métodos e as técnicas de desenvolvi-me no de software estão relacionadas. 

![image](https://user-images.githubusercontent.com/123743005/228108887-114634c3-b722-4182-b745-007935f138d2.png)
![image](https://user-images.githubusercontent.com/123743005/228108941-10e5e61a-ca75-4bda-bd5e-e1874438872b.png)
![image](https://user-images.githubusercontent.com/123743005/228108994-dc8b3e10-58bf-4fbb-8e9f-c7a0b1d99a13.png)

Processo de avaliação

O propósito do processo de avalição, se dá com o objetivo de mensurar a usabilidade, funcionalidade e segurança da aplicação, pra ambos os usuários: cliente e motorista. Para o aplicativo pet’s car, iremos utilizar as métricas acima pertencentes as suas respectivas características/subcaracterísticas. As métricas implícitas, serão avaliadas por uma das pesonas do projeto, Criatiane, uma das usuárias ideais do sistema, e as métrica explícitas serão avaliadas pela gerencia de qualidade.




							


> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
