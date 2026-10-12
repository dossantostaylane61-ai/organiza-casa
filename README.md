# Larino Beta Privado

Aplicativo web responsivo para organizar contas, renda, dívidas, cartões, compras, metas e itens para a casa. A beta usa Firebase Authentication e Cloud Firestore para login e sincronização por usuário, após a configuração do projeto.

**Antes de usar dados reais:** siga `LEIA-ME-PRIMEIRO.md`, configure `firebase-config.js` e publique `firestore.rules`. Sem isso, o app bloqueia o login e não permite salvar registros.

## Recursos nesta beta
- Login por e-mail/senha e Google (após configuração), criação de conta e recuperação de senha.
- Dados sincronizados na nuvem sob o UID da pessoa autenticada.
- Painel com saldo atual/projetado, contas e resumo de gastos.
- Contas, entradas, dívidas/cartões e marcação de pagamentos.
- Listas de compras com quantidade e preço.
- Metas de economia e checklist de itens para a casa.
- Relatórios básicos, lembretes internos, backup JSON e exportação CSV.
- Interface responsiva para celular e computador.

## Importante
Esta é uma versão de testes. MFA, revogação remota de sessões, lixeira recuperável, recorrência automática e notificações push ainda exigem implementação/configuração adicional. Não use senhas bancárias ou dados completos de cartão.
