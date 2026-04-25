# Peaky Blinders — Livro da Família

Site de documentação interna da fac, tema dark inspirado em Peaky Blinders.
React + Vite + Tailwind.

## Rodar

```bash
npm install
npm run dev
```

Produção:

```bash
npm run build
npm run preview
```

## Editar conteúdo

Tudo em **um único arquivo**:

```
src/data/content.js
```

Contém: nomes dos zeros e gerentes, VSL (vídeo do YouTube), metas, premiações,
textos dos locais, evento diário, regras e a navegação da sidebar.

## Imagens

Coloque em `public/images/`:

- `zero-00.jpg`, `zero-01.jpg`, `zero-02.jpg`, `zero-03.jpg` — fotos dos zeros
- `local-p1.jpg` — print da P1
- `local-farm.jpg` — print da quadra de farm

Se algum arquivo não existir, o site mostra um placeholder no lugar.

## Seções do site

1. **Hero** — cabeçalho com o nome da fac
2. **Vídeo de boas-vindas (VSL)** — embed do YouTube
3. **A hierarquia** — pirâmide Liderança / Gerência / Operação
4. **Liderança (Zeros)** — foto + rank + nome
5. **Gerência** — Gerente Geral, Farm e Recrutamento (só descrição curta)
6. **Cargos** — Membro, Recrutador, Supervisor (com metas e premiações)
7. **Locais** — P1 e Quadra de Farm com texto + imagem
8. **Eventos** — reunião diária das 19h
9. **Regras gerais** — 5 mandamentos
10. **Guia do novato** — placeholder (em breve)

## Próximos passos

- [ ] Preencher o Guia do novato
- [ ] Trocar placeholders pelos nomes reais dos zeros/gerentes
- [ ] Adicionar as fotos em `public/images/`
- [ ] Publicar (Vercel, Netlify ou Cloudflare Pages)
