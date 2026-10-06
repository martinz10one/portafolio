# Portafolio personal

Portafolio personal desarrollado con **React 19, TypeScript y Tailwind CSS 4**, construido con Vite y desplegado en **Vercel**.

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | React 19, TypeScript |
| Estilos | Tailwind CSS 4 |
| Build | Vite 8 |
| Deploy | Vercel |
| Linting | ESLint + typescript-eslint |

## Características

- Diseño responsive para móvil y escritorio
- Componentes modulares (Hero, Skills, Projects, Certifications, Contact)
- Datos centralizados en `src/data` para mantenerlo fácil de actualizar
- Descarga directa del CV

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción (tsc -b && vite build)
npm run lint     # análisis con ESLint
```

## Estructura

```
src/
├── components/    # Hero, Skills, Projects, Certifications, Contact, Navbar, Footer
├── data/          # skills.ts, projects.ts
├── App.tsx
└── index.css      # tema Tailwind
public/
└── cv.pdf         # hoja de vida
```

---

**Martin Eduardo Zapata Garcia** · Full Stack Developer · Front End Focus
[Portafolio](https://portafolio-martinone10.vercel.app) · [GitHub](https://github.com/martinz10one) · [LinkedIn](https://linkedin.com/in/martin-zapata-779086393)
