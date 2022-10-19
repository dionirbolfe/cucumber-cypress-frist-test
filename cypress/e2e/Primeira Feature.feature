Feature: Cadastro de VM
  Como um usuário do sistema
  Fulano deseja criar uma maquina virtual
  Para que seja possível utilizar nos testes futuros

  @Login
  Scenario: Cadastro de VM
    Given que o usuário deseja cadastrar uma uma vm
    And acessa o menu Add > VM
    And informa a senha da VM "Senha123"
    And informa a descrição da VM "VM teste do BDD"
    And seleciona o template "Debian10 ixc sem clientes"
    When no form de criação clica no botão criar
    Then a mensagem de criação deve aparecer
