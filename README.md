# Avaliação MEC — Evidências

Prova de conceito de uma aplicação web para organização e apresentação de evidências regulatórias em avaliações in loco do MEC/INEP.

## Escopo atual

- Curso: Engenharia de Computação
- Dimensão: 4
- Objeto de avaliação: 4.2 — Compreensão crítica das estruturas sociais, culturais e políticas
- Qualificadores: 9
- Evidência utilizada na amostra: PPC de Engenharia de Computação 2027

Nesta primeira versão, o PPC foi associado como evidência a todos os qualificadores do Objeto 4.2, exclusivamente para validar a experiência de navegação e o modelo de relacionamento.

## Objetivo do produto

A solução deverá evoluir para uma plataforma de evidências regulatórias com duas visões principais:

- Visão do Avaliador: navegação simples por dimensão, objeto, atributo, qualificador e evidência.
- Visão de Gestão: acompanhamento de cobertura, lacunas, validações, versões e vínculos entre documentos e qualificadores.

## Arquitetura conceitual

O Google Drive funciona como repositório documental. A aplicação mantém o mapa de evidências e os relacionamentos entre qualificadores e documentos.

Estrutura conceitual:

`Dimensão → Objeto → Atributo → Qualificador → Evidência`

Cada evidência poderá conter metadados como ID, documento, URL, seção, página, versão, validade e curso.

## Próximas etapas

1. Validar o protótipo do Objeto 4.2.
2. Ajustar interface e experiência do avaliador.
3. Estruturar os dados fora do HTML.
4. Criar catálogo de evidências com relacionamentos N:N.
5. Escalonar para todos os objetos de avaliação.
6. Adicionar visão de gestão e, posteriormente, mecanismos de IA para sugestão e validação de evidências.

## Execução

O protótipo atual é estático. Basta abrir `index.html` em um navegador.
