# PIL Lab Homepage

Official website for the **Probabilistic Inference and Learning Lab (PIL Lab)** at Zhejiang University.

Online: [zju-pil-lab.github.io](https://zju-pil-lab.github.io/)

## Local development

```bash
npm install
npm run dev
```

Before publishing:

```bash
npm run validate:content
npm run lint
npm run build
```

## Updating content

Research areas, PI details, publications, member groups, news, and open resources are maintained in `data/site.json`. Portraits live in `public/people/`. Content should be linked to a primary source and member information should only be published after confirmation.

The content validator checks primary-source URLs, local portrait files, duplicate members, and the current 4 PhD / 6 master's roster before each deployment.

Pushing to `main` validates, builds, and deploys the static site through GitHub Actions.
