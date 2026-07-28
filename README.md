# Explore Canadá — Landing Page

Landing page responsiva, criada apenas com HTML, CSS, JavaScript e SVG local. Está pronta para ser publicada no GitLab Pages.

## Estrutura

```text
canada-landing-page/
├── .gitlab-ci.yml
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
└── assets/
    ├── canada-hero.svg
    └── maple-leaf.svg
```

## Executar localmente

Você pode abrir o `index.html` diretamente no navegador ou iniciar um servidor local:

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080`.

## Publicar no GitLab Pages

1. Crie um projeto vazio no GitLab.
2. Envie todos os arquivos deste diretório para a branch principal.
3. O pipeline definido em `.gitlab-ci.yml` criará a pasta `public` e publicará o site.
4. Após a conclusão do pipeline, consulte a URL em **Deploy > Pages**.

## Pontos de personalização

- Textos e seções: `index.html`
- Cores, tipografia e responsividade: `css/styles.css`
- Interações do menu, formulário e modal: `js/script.js`
- Ilustração principal: `assets/canada-hero.svg`

## Formulário

O formulário atual é demonstrativo e apresenta uma confirmação no navegador. Para captar contatos de verdade, conecte-o a uma API, ferramenta de automação ou serviço de formulários.
