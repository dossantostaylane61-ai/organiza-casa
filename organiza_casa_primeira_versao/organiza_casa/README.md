# Organiza Casa — primeira versão funcional

Aplicativo web responsivo para organizar contas domésticas, renda, saldo estimado, empréstimos/cartões, relatórios e agenda de vencimentos.

## Como testar no computador

1. Extraia o ZIP para uma pasta.
2. Abra `index.html` no navegador. O aplicativo funciona sem instalar dependências.
3. Os dados ficam salvos no armazenamento local do navegador (`localStorage`) deste dispositivo/navegador.
4. Use o ícone de exportação no topo para salvar um backup JSON. Em Relatórios, use Exportar CSV para abrir os registros em planilhas.

## Como usar no Android

Para instalar como aplicativo (PWA), publique estes arquivos em um endereço HTTPS. Uma opção simples é GitHub Pages:
1. Crie uma conta no GitHub e um repositório público chamado `organiza-casa`.
2. Envie os arquivos desta pasta para a raiz do repositório.
3. Em Settings → Pages, ative a publicação pela branch `main` e pasta `/root`.
4. Abra o endereço HTTPS gerado no Chrome do Android.
5. No menu do Chrome, toque em “Instalar app” ou “Adicionar à tela inicial”.

O service worker/PWA requer HTTP ou HTTPS; por isso, abrir o arquivo local é bom para testar, mas não ativa todos os recursos de instalação.

## O que já funciona

- Cadastro, edição, exclusão e marcação de contas como pagas.
- Cadastro de empréstimos e cartões.
- Registro de renda mensal e cálculo de saldo estimado.
- Painel, gráficos simples e relatório por categoria.
- Agenda interna de contas pendentes e atrasadas.
- Exportação de backup JSON e CSV.
- Layout responsivo para desktop e celular.

## Importante sobre esta versão

- Esta versão é pessoal e local: não tem login, sincronização entre dispositivos, banco de dados na nuvem nem notificações push automáticas.
- Os dados não são enviados para um servidor. Se limpar os dados do navegador, pode perdê-los; faça backups regularmente.
- O campo “renda mensal” é uma renda recorrente; registre as despesas e marque-as como pagas. O saldo mostrado é uma estimativa, não uma integração bancária.
- Para um app Android nativo publicado na Play Store, uma próxima etapa seria empacotar a interface com Capacitor e testar a geração do APK/AAB.
