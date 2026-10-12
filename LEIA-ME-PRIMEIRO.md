# Larino Beta Privado — configuração antes de usar

**Importante:** esta versão já tem interface, login por e-mail/senha, entrada por Google, recuperação de senha, dados sincronizados no Firestore, exportação/restauração JSON e exportação CSV. Porém, ela **não fica privada nem salva dados na nuvem até você configurar seu próprio projeto Firebase e publicar as regras**. Não insira dados financeiros reais antes de concluir todos os passos abaixo.

## 1. Criar o projeto Firebase

1. Acesse https://console.firebase.google.com/ e entre com sua conta Google.
2. Crie um projeto chamado `larino-beta` (ou outro nome disponível).
3. Em Authentication → Sign-in method, ative **Email/Password** e **Google**.
4. Em Authentication → Settings → Authorized domains, inclua o domínio onde vai hospedar a beta (por exemplo, `seuusuario.github.io`).
5. Em Project settings → General → Your apps, adicione um aplicativo Web (`</>`). Copie o objeto `firebaseConfig` apresentado.
6. Abra `firebase-config.js` e substitua todos os valores `COLOQUE_...` / `SEU_...` pelos valores reais. O `apiKey` da configuração web do Firebase é um identificador público do projeto; nunca coloque service-account JSON ou credenciais privadas neste arquivo.

## 2. Criar o banco e publicar regras

1. No console Firebase, abra Firestore Database e crie um banco de dados.
2. Abra a área Rules do Firestore e publique o conteúdo do arquivo `firestore.rules` deste pacote.
3. Confira que as regras estão publicadas e que leituras/escritas não autenticadas estão bloqueadas.
4. Em Authentication, configure os modelos de e-mail para redefinição de senha.

As regras incluídas limitam a leitura e gravação do documento de dados ao UID autenticado correspondente. Não enfraqueça essas regras para “fazer funcionar”.

## 3. Publicar para acesso privado

O GitHub Pages serve sites estáticos publicamente; o que torna os dados privados é a autenticação e as regras do banco, não esconder o endereço. Para testar:

1. Envie os arquivos desta pasta para a raiz do repositório `organiza-casa`.
2. Publique pela branch e pasta configuradas no GitHub Pages.
3. No Firebase, autorize o domínio exato do GitHub Pages.
4. Abra o site, crie sua conta e teste login, sair, recuperação de senha, cadastro de conta, pagamento, exportação e restauração com **dados fictícios primeiro**.
5. Teste em outro navegador/dispositivo para confirmar a sincronização.

Se quiser que nem a página de login seja pública, use hospedagem que ofereça controle de acesso na borda/servidor ou um sistema de convite. GitHub Pages não oferece um endereço secreto com autenticação de página por si só.

## 4. Segurança e limitações conhecidas da beta

- Não digite senha bancária, CVV, número completo de cartão ou códigos de autenticação financeira.
- O app armazena os registros do Larino sob a conta autenticada; a sincronização em nuvem não substitui backup histórico independente. Exporte um backup regularmente.
- Login Google e e-mail/senha funcionam após configuração do Firebase. A recuperação de senha depende dos modelos e domínio autorizados.
- A verificação em duas etapas (MFA), revogação remota de todas as sessões e alertas de login suspeito **não estão ativados nesta versão**. Exigem configuração e implementação adicionais; a opção de “ver sessão atual” apenas informa a sessão atual.
- A lixeira recuperável ainda não foi implementada; a exclusão solicita confirmação e é permanente no documento atual. Faça backup antes de excluir.
- As contas recorrentes ainda são cadastradas por vencimento individual; notificações push não estão implementadas.
- Esta é uma beta para avaliação, não uma ferramenta financeira auditada nem uma integração bancária.

## Conteúdo do pacote

- `index.html`, `style.css`, `app.js`: interface e recursos beta.
- `firebase-config.js`: configuração do projeto Firebase (preencher antes de usar).
- `firestore.rules`: regras de isolamento de dados por usuário.
- `manifest.json`, `sw.js`: suporte básico a instalação/PWA.
