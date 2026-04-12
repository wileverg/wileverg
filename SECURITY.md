# Security Policy

## Principles
1. **Zero-Secret Tolerance**: This repository is public. We never commit API keys, tokens, or sensitive local paths.
2. **Privacy First**: Sensitive personal data is excluded.
3. **Audited Dependencies**: We use standard GitHub Dependabot alerts to monitor for vulnerabilities.

## Reporting a Vulnerability
If you discover a security vulnerability within this repository, please **do not open a public issue**. Instead:
1. Send an email to [wilevergomez@gmail.com](mailto:wilevergomez@gmail.com).
2. Use the subject line: `[SECURITY] - Vulnerability Report`.
3. Provide a detailed description of the issue and steps to reproduce.

We aim to respond to all reports within **48 hours**.

## Security in Demos
The files `templates/profile_demo.md` and `templates/branding_demo.md` contain placeholders (`YOUR__`). Never replace these with real secrets in files that will be pushed to a public remote.
