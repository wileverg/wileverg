---
name: markdown_expert
description: Specialized skills for advanced Markdown writing
version: 1.0.0
---

# Markdown Expert Skill

This skill provides advanced patterns and techniques for technical writing.

## Mermaid Diagrams
Use Mermaid to visualize concepts.
Example:
```mermaid
graph TD;
    A[Start] --> B(Process);
    B --> C{Decision};
    C -->|Yes| D[Result 1];
    C -->|No| E[Result 2];
```

## Advanced Tables
Use GFM tables with alignment.
| Feature | Support | Description |
| :--- | :---: | :--- |
| GFM | Yes | Standard GitHub Markdown |
| Footnotes | Yes | Technical references |
| Checkboxes | Yes | Task tracking |

## Metadata (Frontmatter)
Start complex documents with YAML Frontmatter for better indexing.
```yaml
---
title: Document Title
author: Antigravity
tags: [markdown, expert, skill]
---
```

## Accessibility
- Always include `alt` text for images.
- Use semantic headers `#` (not just bold text).
- Avoid "click here" links; use descriptive link text.
