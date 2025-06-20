# Book Review App

Aplicación web responsive full stack para registrar y consultar reseñas de libros. Desarrollada con Next.js 15 y PostgreSQL.

## 1. Enlace del deployment y usuario de prueba ya creado

- https://readsoulapp.vercel.app
- email: leonardofuentesclaros@gmail.com
- contraseña: 123456789

## 2. Instrucciones para ejecutar localmente

1. Clonar el repositorio:
git clone https://github.com/leonardoGit99/book-review-app.git
cd book-review-app
cd next-app

2. Instalar dependencias:
npm install

3. Configurar variables de entorno:  
Copiar  `.env` dentro de `src`, a la altura de `app`
Configurar variables de entorno

4. Configurar la base de datos:  
Asegurarse de tener PostgreSQLy pgAdmin4 v9.0 corriendo y ejecutar el código sql que se encuentra en:
/src/bd/init.sql

5. Iniciar la app:
npm run dev

## 3. Instrucciones para producción (Vercel)

- Subir el repositorio a GitHub.
- Iniciar sesión en vercel.com con una la cuenta de github donde se encuentra el repositorio
- Importar el proyecto desde vercel
- Seleccionar como tecnologia `NextJs`
- Configurar las variables de entorno.
- Hacer deploy.

## 4. Archivo `.env.example`
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/nombredb
JWT_SECRET=una_clave_secreta
NEXT_PUBLIC_API_URL=http://localhost:3000/api

## 5. Tecnologías utilizadas

- **Next.js 15.3.4** — Framework principal (App Router y API Routes)
- **React 19** — Biblioteca para construir interfaces de usuario
- **Tailwind CSS 4** — Estilos utilitarios para el diseño
- **Tailwind CSS 4** - Componentes UI basados en tailwind
- **PostgreSQL** — Base de datos relacional
- **pg** — Cliente PostgreSQL para Node.js
- **Zod** — Validación y tipado de formularios
- **React Hook Form** — Manejo de formularios
- **Lucide-react** — Iconos
- **Axios** — Cliente HTTP para consumir APIs
- **JOSE & jsonwebtoken** — Gestión de JWT para autenticación
- **bcryptjs** — Hash de contraseñas
- **Vercel** — Plataforma de despliegue NextJS
- **Railway** — Plataforma de despliegue base de datos PostgreSQL

## 6. Descripción del campo "mood"

El campo `mood` representa el estado emocional del usuario al momento de leer el libro. Ejemplos: "feliz", "reflexivo", "inspirado".
El usuario es libre de escribir su estado emocional


## 7. Errores conocidos o limitaciones

- Se intentó desplegar la aplicación Next.js en Railway, pero no fue posible debido a que, aunque el repositorio era público, Railway arrojaba un error al intentar deployar mediante el enlace del repositorio ("only public repositories can be added using the GitHub URL"). Debido a esta limitación y a que la cuenta con acceso expiraba en 2 días, se optó por usar Vercel, que permitió un despliegue sin inconvenientes.
- La base de datos sí se configuró en Railway con otra cuenta, debido a que no requería acceso al repositorio para funcionar correctamente.
- No hay verificación de correo electrónico (si es real o no).
- No hay paginación en la lista de reseñas de libros.
- No se puede eliminar una reseña, sin embargo el endpoit fue creado en el backend, con la limitación de que no verifica que el usuario sea propietario de la reseña.
- No hay validación de formularios estricta en el backend.
- No se incluyó una ruta /add-review, ya que se optó por un enfoque de mejor experiencia de usuario, utilizando una barra lateral (sheet) que se despliega desde la interfaz principal para agregar una nueva reseña sin necesidad de redirigir a otra página.

## 8. Tiempo estimado invertido

- 18/06/2025: 
  De 19:00 - 2:00 --> Configuración inicial, creación y deploy de la base de datos, endpoints para las reseñas (backend)
- 19/06/2025: 
  De 17:00 - 00:00 --> Diseño y UI para las reseñas (frontend), endpoints para login, signup, logout, y obtención de datos del jwt (backend)
- 20/06/2025
  De 10:30 - 12:00 --> Diseño y UI para el login y signup
  De 13:30 - 15:00 --> Corrección de bugs
- De 15:00 - 15:45 --> Deploy y ajustes finales en producción  
- De 16:00 - 17:20 Redacción del README

**Total: 19 horas aprox.**