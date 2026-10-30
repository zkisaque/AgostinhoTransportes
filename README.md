# Site — Agostinho Transportes

Site institucional de página única (HTML, CSS e JavaScript puros, sem servidor, sem banco de dados e sem dependências).

## Estrutura

```text
agostinho-transportes/
├── index.html        estrutura da página
├── css/style.css     visual (cores, fontes, layout)
├── js/config.js      ⭐ TODAS as informações editáveis
├── js/script.js      comportamento (não precisa mexer)
├── assets/images/    fotos
├── assets/logo/      logotipo
├── assets/icons/     ícones (reservado)
└── README.md
```

## Abrir localmente

Dê dois cliques em `index.html`. Não precisa instalar nada.

## O que editar (tudo em `js/config.js`)

Procure por **PREENCHER** no arquivo.

| O que | Onde em `config.js` |
|---|---|
| Número do WhatsApp | `whatsapp.numero`, só dígitos com DDI e DDD. Ex.: `"5511999999999"` |
| Mensagem inicial do WhatsApp | `whatsapp.mensagem` |
| Telefone para ligações | `telefone.exibir` (como aparece) e `telefone.numero` (só dígitos) |
| Nome da empresa | `empresa.nome` |
| Textos de cada seção | `hero`, `servicos`, `sobre`, `atendimento`, `diferenciais`, `contato` |
| Anos de atuação | `sobre.anosDeAtuacao`. Só escreva depois de confirmar. Vazio = não aparece |
| Estados atendidos | `atendimento.regioes` (`estados`). Use `mostrarEstados: false` para exibir só Sul e Sudeste |

Todos os botões de WhatsApp (menu, início, contato e botão flutuante) usam o mesmo número automaticamente.

## Logotipo

1. Coloque o arquivo em `assets/logo/` (ex.: `logo.png` ou `logo.svg`).
2. Se o nome for diferente, ajuste `logo` em `config.js`.

Enquanto o arquivo não existir, o site mostra o nome da empresa em texto.

## Fotografias

1. Coloque as fotos em `assets/images/` (prefira `.jpg` ou `.webp`, até ~300 KB cada).
2. Em `config.js`, na seção `imagens`, troque o caminho em `src` e o texto em `alt` (descrição da foto).

As imagens atuais (`hero-caminhao.svg` e `sobre-equipe.svg`) são **provisórias** e estão marcadas com "SUBSTITUIR".

## Cores

Somente azul, azul-escuro e branco. Para ajustar, mude as variáveis no início de `css/style.css` (`--azul`, `--azul-escuro`, etc.).

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie todos os arquivos (`index.html` na raiz).
2. No repositório: **Settings → Pages**.
3. Em **Source**, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`, e salve.
4. Após alguns minutos o site fica em `https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`.

Todos os caminhos são relativos, então funciona dentro de subpasta do GitHub Pages.

## Checklist antes de publicar

- [ ] Número do WhatsApp e telefone preenchidos
- [ ] Logotipo oficial adicionado
- [ ] Fotos reais no lugar das provisórias
- [ ] Textos revisados, principalmente os que ainda não foram confirmados
