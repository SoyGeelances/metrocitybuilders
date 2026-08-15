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

## Producción

```sh
bun run build
node .output/server/index.mjs
```

## Estructura

- `src/routes` — páginas (ruteo por archivos de TanStack Start)
- `src/components/site` — Header, Footer y utilidades de UI del sitio
- `src/lib/site-data.ts` — contenido (proyectos, equipo, contacto)
- `src/styles.css` — design system y estilos globales
- `public/images` — imágenes del sitio
