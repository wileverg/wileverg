---
name: trust_and_ux
description: Security, Accessibility, and Responsive design for Markdown
version: 1.0.0
---

# Trust, UX & Responsive Skill

## 📱 Responsive Documentation
Markdown no es responsivo por defecto. Usa estas técnicas:
- **Widths de Imagen**: Usa anchos en porcentaje (`width="80%"` o `width="48%"`) para que las imágenes escalen en móviles.
- **Tablas Limpias**: Evita tablas con demasiadas columnas. Si necesitas muchas columnas, usa listas anidadas para la vista móvil.
- **Code Blocks**: Asegúrate de que los bloques de código no tengan líneas excesivamente largas para evitar el scroll horizontal infinito.

## ♿ UX & Accessibility (A11y)
- **Alt-Text Descriptivo**: No uses `alt="imagen"`. Usa `alt="Diagrama de flujo de la arquitectura de pagos en FlowUI"`.
- **Jerarquía Semántica**: Respeta el orden de `#`, `##`, `###`. Nunca saltes de `#` a `###`.
- **Contraste de Color**: Si usas Badges de Shields.io, asegura que el texto sea legible sobre el fondo.

## 🔒 Security Best Practices
- **No Secrets**: Nunca incluyas `.env`, claves de API o tokens en el repo público.
- **Gitignore robusto**: Mantén excluidas las carpetas `node_modules`, `.vscode`, y cualquier caché local.
- **Widget Audit**: Solo usa widgets de GitHub de fuentes confiables para evitar inyecciones de código en SVGs dinámicos.
- **Privacy First**: Oculta correos electrónicos si es posible (usa formularios o enlaces de LinkedIn) para evitar spam bots.
