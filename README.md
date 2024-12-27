# Encriptador desde Cero

Este proyecto es una aplicación para encriptar y desencriptar textos utilizando un sistema de sustitución basado en un desplazamiento de caracteres (Cifrado César). Además, está estructurado con un diseño modular que sigue buenas prácticas de organización de código.

---

## Tabla de Contenidos
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Tecnologías Utilizadas](#tecnologias-utilizadas)
3. [Instalación y Configuración](#instalacion-y-configuracion)
4. [Uso de la Aplicación](#uso-de-la-aplicacion)

---

## Estructura del Proyecto

El proyecto tiene la siguiente estructura:

```plaintext
└── 📁src
    └── 📁app
        └── 📁application
        └── 📁core
        └── 📁infrastructure
    └── 📁pages
        └── index.astro
    └── 📁shared
        └── 📁constants
    └── 📁ui
        └── 📁components
            └── Footer.astro
            └── Header.astro
            └── 📁SEO
                └── HeadSeo.astro
        └── 📁layouts
            └── Layout.astro
        └── 📁styles
            └── _footer.scss
            └── _header.scss
            └── _page.scss
            └── _reset.scss
            └── main.scss
    └── env.d.ts
```

- **src/app**: Contiene la lógica principal de la aplicación.
  - **application**: Lógica de negocio y casos de uso.
  - **core**: Reglas y elementos fundamentales del dominio.
  - **infrastructure**: Implementaciones técnicas (e.g., acceso a datos, servicios).

- **src/pages**: Páginas principales del proyecto.

- **src/shared**: Recursos compartidos como constantes o utilidades.

- **src/ui**: Componentes de la interfaz de usuario.
  - **components**: Componentes reutilizables como Header, Footer y SEO.
  - **layouts**: Estructuras de diseño para páginas.
  - **styles**: Archivos de estilos SCSS.

---

## Tecnologías Utilizadas

- **Astro**: Framework para construir páginas rápidas y modernas.
- **JavaScript/TypeScript**: Lenguajes principales del desarrollo.
- **SCSS**: Preprocesador CSS para organizar y mejorar los estilos.
- **Bun**: Herramienta para compilar y servir el proyecto.

---

## Instalación y Configuración

1. Clona el repositorio:
   ```bash
   git clone https://github.com/KevinRivera1/encriptador-texto.git
   ```

2. Accede al directorio del proyecto:
   ```bash
   cd encriptador
   ```

3. Instala las dependencias:
   ```bash
   npm install
   bun install
   ```

4. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   bun run dev
   ```

---

## Uso de la Aplicación

1. **Encriptar Texto**:
   - Ingresa el texto deseado en el campo de entrada.
   - Haz clic en el botón "Encriptar" para obtener el texto encriptado.

2. **Desencriptar Texto**:
   - Ingresa un texto previamente encriptado.
   - Haz clic en el botón "Desencriptar" para ver el texto original.

3. **Copiar al Portapapeles**:
   - Haz clic en el botón "Copiar" para copiar el resultado al portapapeles.

---

## Código Principal

```typescript
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" as const;
const SPACE_PLACEHOLDER = "#$%&*" as const;

const shiftText = (
  text: string,
  shift: number,
  direction: "encrypt" | "decrypt"
): string => {
  if (!text) return "";

  const shiftAlphabet =
    direction === "encrypt"
      ? ALPHABET.slice(shift) + ALPHABET.slice(0, shift)
      : ALPHABET.slice(-shift) + ALPHABET.slice(0, -shift);

  return text
    .replaceAll(
      direction === "encrypt" ? " " : SPACE_PLACEHOLDER,
      direction === "encrypt" ? SPACE_PLACEHOLDER : " "
    )
    .split("")
    .map((char) => {
      const index = ALPHABET.indexOf(char);
      return index !== -1 ? shiftAlphabet[index] : char;
    })
    .join("");
};
```