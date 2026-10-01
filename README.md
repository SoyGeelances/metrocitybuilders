# Metro City Builders

Sitio web de Metro City Builders, construido con TanStack Start, React, TypeScript y Tailwind CSS.

## Requisitos

- Node.js 20.19+ o 22.12+
- [Bun](https://bun.sh) (o npm)

## Desarrollo

```sh
bun install
bun run dev
```

El sitio queda en http://localhost:8080

## Despliegue

- Un `push` a `master` compila con Vite y sincroniza `dist/` por SSH a Namecheap/cPanel.
- Un `push` a `develop` publica un deployment de preview en Vercel.
- Configura los repository secrets `PRODUCTION_HOST`, `PRODUCTION_USER`, `PRODUCTION_SSH_KEY`, `PRODUCTION_PATH`, `VERCEL_TOKEN` y `VERCEL_PROJECT_ID` en GitHub Actions. El puerto Namecheap/cPanel usa `21098` por defecto; define el secret opcional `PRODUCTION_PORT` si tu servidor usa otro. Define `VERCEL_ORG_ID` como repository variable (o secret).
- El archivo `public/.htaccess` se copia al build y redirige las rutas de la SPA a `index.html` en Apache.

## Estructura

- `src/routes` — páginas (ruteo por archivos de TanStack Start)
- `src/components/site` — Header, Footer y utilidades de UI del sitio
- `src/lib/site-data.ts` — contenido (proyectos, equipo, contacto)
- `src/styles.css` — design system y estilos globales
- `public/images` — imágenes del sitio
