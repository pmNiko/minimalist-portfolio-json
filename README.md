# 🚀 Portfolio Minimalista con JSON

[![Deploy to GitHub Pages](https://github.com/pmNiko/minimalist-portfolio-json/actions/workflows/deploy.yml/badge.svg)](https://github.com/pmNiko/minimalist-portfolio-json/actions/workflows/deploy.yml)

Un portfolio web minimalista, elegante y completamente personalizable a través de un archivo JSON. Construido con **Astro**, **TypeScript** y **Tailwind CSS**.

## ✨ Características

- 🎨 **Diseño minimalista** y responsivo
- 📝 **Configuración completa vía JSON** - Sin necesidad de tocar código
- ⚡ **Astro** para máximo rendimiento y SEO
- 🎯 **TypeScript** para mayor robustez del código
- 💅 **Tailwind CSS** para estilos modernos
- ⌨️ **Navegación por teclado** con shortcuts personalizados
- 🚀 **Deploy automático** a GitHub Pages y Netlify
- 📱 **Totalmente responsivo** en todos los dispositivos
- 🎪 **Animaciones suaves** y transiciones elegantes

## 🌐 Demo

**GitHub Pages**: [https://pmniko.github.io/minimalist-portfolio-json/](https://pmniko.github.io/minimalist-portfolio-json/)

## 🛠️ Tecnologías

- [Astro](https://astro.build/) - Framework web moderno y rápido
- [TypeScript](https://www.typescriptlang.org/) - JavaScript con tipos estáticos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [Ninja Keys](https://github.com/ssleptsov/ninja-keys) - Navegación por teclado
- [Hotkeypad](https://github.com/itsMapleLeaf/hotkeypad) - Gestión de shortcuts

## 📋 Requisitos Previos

- Node.js 18+ 
- npm o pnpm

## 🚀 Inicio Rápido

### 1. Clona el repositorio

```bash
git clone https://github.com/pmNiko/minimalist-portfolio-json.git
cd minimalist-portfolio-json
```

### 2. Instala las dependencias

```bash
npm install
# o
pnpm install
```

### 3. Personaliza tu información

Edita el archivo `cv.json` con tus datos personales:

```json
{
  "basics": {
    "name": "Tu Nombre",
    "label": "Tu Título Profesional",
    "email": "tu-email@ejemplo.com",
    "summary": "Una breve descripción sobre ti...",
    // ... más configuraciones
  },
  "work": [
    // Tu experiencia laboral
  ],
  "education": [
    // Tu formación académica
  ],
  "skills": [
    // Tus habilidades técnicas
  ],
  "projects": [
    // Tus proyectos destacados
  ]
}
```

### 4. Ejecuta el proyecto localmente

```bash
npm run dev
```

Visita `http://localhost:4321` para ver tu portfolio en acción.

## � Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   ├── sections/          # Secciones del portfolio
│   │   │   ├── Hero.astro     # Sección principal
│   │   │   ├── About.astro    # Sobre mí
│   │   │   ├── Experience.astro # Experiencia
│   │   │   ├── Education.astro  # Educación
│   │   │   ├── Skills.astro     # Habilidades
│   │   │   └── Projects.astro   # Proyectos
│   │   ├── Section.astro      # Componente base de sección
│   │   └── KeyboardManager.astro # Gestión de shortcuts
│   ├── icons/                 # Iconos SVG personalizados
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal
│   └── pages/
│       └── index.astro        # Página principal
├── cv.json                    # ¡Tu información personal aquí!
├── astro.config.mjs          # Configuración de Astro
└── package.json
```

## ⚙️ Configuración

### Archivo `cv.json`

Este es el corazón de tu portfolio. Todas las secciones se generan automáticamente desde este archivo:

#### `basics` - Información personal
```json
{
  "name": "Tu nombre completo",
  "label": "Tu título profesional",
  "image": "ruta-a-tu-foto.jpg",
  "email": "contacto@ejemplo.com",
  "phone": "+1234567890",
  "url": "https://tu-sitio-web.com",
  "summary": "Descripción profesional breve",
  "location": {
    "city": "Tu ciudad",
    "countryCode": "XX",
    "region": "Tu región/estado"
  },
  "profiles": [
    {
      "network": "GitHub",
      "username": "tu-usuario",
      "url": "https://github.com/tu-usuario"
    }
  ]
}
```

#### `work` - Experiencia laboral
```json
{
  "name": "Nombre de la empresa",
  "position": "Tu cargo",
  "url": "https://empresa.com",
  "startDate": "2023-01-01",
  "endDate": null, // null para trabajo actual
  "summary": "Descripción del rol",
  "highlights": [
    "Logro importante 1",
    "Logro importante 2"
  ]
}
```

### Personalización de estilos

El proyecto usa Tailwind CSS. Puedes personalizar los estilos editando los componentes en `src/components/`.

### Configuración de deployment

#### GitHub Pages
El proyecto incluye un workflow de GitHub Actions que se ejecuta automáticamente al hacer push a `main`. La configuración está en `astro.config.mjs`.

#### Netlify
Configuración automática a través de `netlify.toml`. Solo conecta tu repositorio en Netlify.

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Construcción
npm run build        # Construye para producción (con deploy a docs/)
npm run preview      # Previsualiza build local

# Utilidades
npm run format       # Formatea código con Prettier
npm run astro        # Comandos de Astro CLI
```

## ⌨️ Atajos de Teclado

- `Ctrl/Cmd + K` - Abre el menú de navegación rápida
- `1-6` - Navega entre secciones directamente
- `Esc` - Cierra menús abiertos

## 🚀 Deploy

### Opción 1: GitHub Pages (Automático)

1. Haz fork del repositorio
2. Activa GitHub Pages en Settings → Pages
3. Selecciona source: "Deploy from a branch"
4. Branch: `main`, folder: `/docs`
5. Cada push a `main` actualizará automáticamente tu sitio

### Opción 2: Netlify (Automático)

1. Conecta tu repositorio en [Netlify](https://netlify.com)
2. Netlify detectará automáticamente la configuración
3. Tu sitio se actualizará con cada push

### Opción 3: Manual

```bash
npm run build
# Los archivos estarán en la carpeta dist/
```

## 🎨 Personalización Avanzada

### Añadir nuevos iconos

1. Crea un archivo `.astro` en `src/icons/`
2. Añade tu SVG como componente Astro
3. Importa y usa en las secciones correspondientes

### Modificar el diseño

Los componentes están en `src/components/sections/`. Cada uno es autocontenido y fácil de modificar.

### Cambiar colores y tipografía

Edita las clases de Tailwind en los componentes o configura un tema personalizado en `tailwind.config.js`.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

Un agradecimiento especial a la **comunidad de [Midudev](https://twitch.tv/midudev)** por la inspiración, el aprendizaje continuo y por fomentar una comunidad tan increíble de desarrolladores. 

Este proyecto está inspirado en los conceptos y mejores prácticas compartidas en el canal de Midudev, especialmente en sus tutoriales sobre desarrollo web moderno, Astro y buenas prácticas de frontend.

### Gracias también a:

- [Miguel Ángel Durán (Midudev)](https://github.com/midudev) por su contenido educativo excepcional
- La comunidad de Astro por crear un framework increíble
- Todos los contributors de las librerías open source utilizadas
- La comunidad dev de habla hispana por su apoyo y feedback

---

**⭐ Si este proyecto te ha sido útil, no olvides darle una estrella en GitHub**

**🐦 Sígueme en [Twitter/X](https://x.com/_nikodev) para más contenido sobre desarrollo web**

**💼 Conecta conmigo en [LinkedIn](https://www.linkedin.com/in/nicol%C3%A1s-paneblanco-527108190/)**

## 🔧 Recurso Adicional

- [Squoosh](https://squoosh.app/) - Para optimizar imágenes
