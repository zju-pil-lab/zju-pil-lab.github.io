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

Research areas, publications, people, news, and open resources are maintained in `data/site.json`. Content should be linked to a primary source and member information should only be published after confirmation.

Pushing to `main` validates, builds, and deploys the static site through GitHub Actions.
