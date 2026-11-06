# Academia KW – Killer Whale (Landing Page Oficial)
**Escuela de Natación · Loja, Ecuador**

Landing page estática de alto rendimiento desarrollada con **React 18**, **Vite** y **Tailwind CSS**, preparada y optimizada para despliegue inmediato en **Vercel**.

---

## 🚀 Despliegue en Vercel (Paso a Paso)

El proyecto ya incluye el archivo de configuración oficial [`vercel.json`](file:///c:/Users/Chritian/Desktop/FabricioSalinas/vercel.json) con reescrituras de rutas SPA y políticas de caché para assets.

### Opción 1: Conectar mediante GitHub (Recomendado)

1. **Sube tu proyecto a GitHub**:
   ```bash
   git add .
   git commit -m "feat: landing page Academia KW"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   git push -u origin main
   ```
2. **Importar en Vercel**:
   - Inicia sesión en [vercel.com](https://vercel.com).
   - Haz clic en **"Add New..."** > **"Project"**.
   - Selecciona tu repositorio de GitHub.
   - Vercel detectará automáticamente:
     - **Framework Preset**: `Vite`
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Haz clic en **"Deploy"**. En ~30 segundos tu web estará en vivo con certificado SSL gratuito (`.vercel.app`).

---

### Opción 2: Despliegue Directo desde Terminal con Vercel CLI

Si tienes Node.js instalado, puedes desplegar directamente desde la carpeta del proyecto sin necesidad de subir a GitHub:

1. **Ejecutar el comando de Vercel**:
   ```bash
   npx vercel
   ```
2. Sigue las preguntas interactivas en tu terminal:
   - `Set up and deploy?`: Presiona **y**
   - `Which scope?`: Selecciona tu cuenta
   - `Link to existing project?`: Presiona **n**
   - `What's your project's name?`: Escribe `academia-kw-loja` (o presiona Enter)
   - `In which directory is your code located?`: Presiona Enter (`./`)
   - `Want to modify settings?`: Presiona **n** (ya está preconfigurado en `vercel.json`)
3. **Desplegar a producción**:
   ```bash
   npx vercel --prod
   ```

---

## 🛠️ Comandos Locales

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo (`http://localhost:5173`) |
| `npm run build` | Compila los archivos estáticos en `dist/` |
| `npm run preview` | Previsualiza localmente el build de producción |

---

## 📁 Archivos de Configuración para Vercel

- [`vercel.json`](file:///c:/Users/Chritian/Desktop/FabricioSalinas/vercel.json): Configuración de framework Vite, directorio `dist`, rewrites SPA hacia `/index.html` y caché inmutable de assets.
- [`vite.config.js`](file:///c:/Users/Chritian/Desktop/FabricioSalinas/vite.config.js): Base de rutas configurada a `/` y salida en `dist`.
- [`.gitignore`](file:///c:/Users/Chritian/Desktop/FabricioSalinas/.gitignore): Excluye `node_modules`, `dist` y `.vercel`.
- [`src/data/academyData.js`](file:///c:/Users/Chritian/Desktop/FabricioSalinas/src/data/academyData.js): Archivo central para modificar textos, programas, horarios y teléfonos.
