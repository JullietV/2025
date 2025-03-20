# Portfolio Personal

Este es mi portfolio personal construido con Next.js 13+, utilizando las últimas características y mejores prácticas de desarrollo web.

## 🚀 Tecnologías

- [Next.js 13+](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/) para internacionalización

## ✨ Características

- 🌐 Soporte multiidioma (Español e Inglés) (En proceso)
- 🎨 Diseño responsive y moderno
- 🔄 Transiciones de página fluidas
- 🎯 Optimización SEO
- 🖌️ Efectos visuales con gradientes dinámicos

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/jullietv/2025.git
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   └── globals.css
│   ├── components/
│   ├── messages/
│   └── ...
├── public/
└── ...
```

## 🌍 Internacionalización (En proceso)

El proyecto soporta múltiples idiomas utilizando `next-intl`. Los archivos de traducción se encuentran en `src/messages/`.

Idiomas soportados:
- 🇪🇸 Español
- 🇺🇸 Inglés

## 📝 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run start`: Inicia la aplicación en modo producción
- `npm run lint`: Ejecuta el linter
