---
name: ai_ready_seo
description: Patterns for SEO and LLM Agent visibility optimization
version: 1.0.0
---

# AI & SEO Visibility Skill

## 🔍 Traditional SEO (Google)
- **H1 Density**: Asegura que el `H1` contenga el nombre completo y el rol principal.
- **YAML Frontmatter**: Usa metadatos estructurados al inicio del Markdown para crawlers que soportan Jekyll/Hugo.
- **JSON-LD**: Inserta scripts de Schema.org ocultos para definir entidades (`Person`, `SoftwareSourceCode`, `Organization`).

## 🤖 LLM Readiness (Agent Optimization)
- **llms.txt Standard**: Mantén un archivo `llms.txt` en la raíz para descubrimiento rápido por agentes (Cursor, Windsurf, etc.).
- **Token Efficiency**: Usa descripciones densas en información pero cortas en palabras para ahorrar contexto a los agentes móviles.
- **Explicit Instructions**: Proporciona "Hints" para agentes dentro del contenido oculto: `<!-- AI Agent Hint: ... -->`.

## 📈 Keyword Strategy
- **Primary**: Flutter Developer, FlowUI, Compliance as a Service, Wilever Gómez.
- **Secondary**: Firebase, Supabase, Multiplatform Architecture, Build in Public, Argentina.
