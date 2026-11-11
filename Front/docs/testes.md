# Testes realizados

| Teste                                   | Passos                                                         | Resultado esperado                              | Situação |
|-----------------------------------------|----------------------------------------------------------------|-------------------------------------------------|----------|
| Navegação pelo menu                     | Clicar em Início, Encomendas e Nova encomenda                  | Troca de página sem recarregar                  | A testar |
| Cadastrar encomenda (Create)            | Preencher o formulário e clicar em Salvar                      | Encomenda aparece na lista e no banco           | A testar |
| Listar encomendas (Read)                | Abrir a página Encomendas                                      | Tabela com as encomendas do banco               | A testar |
| Alterar encomenda (Update)              | Clicar em Editar, mudar o status e salvar                      | Lista mostra o novo status; banco atualizado    | A testar |
| Excluir encomenda (Delete)              | Clicar em Excluir e confirmar                                  | Encomenda some da lista e do banco              | A testar |
| Campos obrigatórios                     | Tentar salvar com Cliente vazio                                | Formulário não é enviado                        | A testar |
| Back-end desligado                      | Parar o back e abrir Encomendas                                | Mensagem de erro amigável                       | A testar |
