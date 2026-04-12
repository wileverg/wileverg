---
name: github_profile_expert
description: Advanced patterns for designing and automating GitHub Profile READMEs
version: 1.0.0
---

# GitHub Profile Expert Skill

## Dynamic Stats & Metrics
### GitHub Readme Stats
```markdown
![Your Stats](https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&show_icons=true&theme=radical)
```

### Metrics (by lowlighter)
The most powerful tool for dynamic SVGs.
```markdown
![Metrics](https://metrics.lecoq.io/YOUR_USERNAME?base=header,activity,community,repositories,metadata&base.indepth=true&config.timezone=America/Argentina/Buenos_Aires)
```

## Professional Tech Stack
Use **Skill Icons** for a clean grid:
```markdown
[![My Skills](https://skillicons.dev/icons?i=js,ts,react,nextjs,nodejs,postgres,supabase,flutter,dart,ps,figma)](https://skillicons.dev)
```

## Automated Workflows
### Latest Blog Posts
File: `.github/workflows/blog-posts.yml`
```yaml
name: Latest blog post workflow
on:
  schedule:
    - cron: '0 * * * *'
  workflow_dispatch:
jobs:
  update-readme-with-blog:
    name: Update README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          feed_list: "YOUR_RSS_FEED_URL"
```

## Aesthetic Layouts
### Hero Banner
Best used with an animated SVG or a clean banner image.
```markdown
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=F7F7F7&center=true&vCenter=true&width=435&lines=Full+Stack+Developer;Cloud+Architecture;AI+Automation+Specialist" alt="Typing SVG" />
</p>
```
