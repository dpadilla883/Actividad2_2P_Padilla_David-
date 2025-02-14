


# EduConnect - Plataforma de Red Social Académica


## Descripción General

EduConnect es una plataforma web diseñada para facilitar la comunicación y colaboración entre estudiantes y docentes en un entorno académico. Permite a los usuarios compartir publicaciones, realizar comentarios y gestionar usuarios con roles diferenciados (Publicador y Administrador), promoviendo el intercambio de conocimientos y la discusión de ideas.

## Características Principales

*   **Autenticación de Usuarios:** Sistema de registro e inicio de sesión seguro con roles de usuario diferenciados.
*   **Gestión de Publicaciones:**  Los usuarios pueden crear, leer, actualizar y eliminar publicaciones.
*   **Sistema de Comentarios:**  Los usuarios pueden comentar en las publicaciones de otros usuarios.
*   **Roles de Usuario:**
    *   **Publicador:** Puede crear publicaciones y comentarios.
    *   **Administrador:**  Puede gestionar usuarios, eliminar publicaciones y comentarios.
*   **Panel de Administración:**  Interfaz exclusiva para administradores para gestionar usuarios.
*   **Diseño Responsivo:**  Interfaz de usuario adaptable a diferentes dispositivos y tamaños de pantalla.
*   **Persistencia de Datos:**  La información se guarda en el almacenamiento local del navegador (LocalStorage) para persistir entre sesiones.
*   **Validación de Formularios:**  Validación en tiempo real para asegurar la integridad de los datos.
*   **Navegación Intuitiva:**  Navegación sencilla a través de React Router DOM.

## Tecnologías Utilizadas

*   **Frontend:**
    *   [Vite](https://vitejs.dev/):  Herramienta de construcción para un desarrollo rápido y eficiente.
    *   [React](https://reactjs.org/):  Biblioteca de JavaScript para construir interfaces de usuario.
    *   [TypeScript](https://www.typescriptlang.org/):  Superset de JavaScript que añade tipado estático.
    *   [Material UI](https://mui.com/):  Framework de componentes de React que implementa el diseño de Material Design.
    *   [React Router DOM](https://reactrouter.com/):  Biblioteca para la navegación en aplicaciones React.

## Requisitos

*   [Node.js](https://nodejs.org/) (versión 16 o superior)
*   [npm](https://www.npmjs.com/) (normalmente se instala con Node.js) o [Yarn](https://yarnpkg.com/)

## Instrucciones de Instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    ```

2.  **Navegar al directorio del proyecto:**

    ```bash
    cd EduConnect
    ```

3.  **Instalar las dependencias:**

    Con npm:

    ```bash
    npm install
    ```

    Con Yarn:

    ```bash
    yarn install
    ```

## Instrucciones de Ejecución

1.  **Iniciar el servidor de desarrollo:**

    Con npm:

    ```bash
    npm run dev
    ```

    Con Yarn:

    ```bash
    yarn dev
    ```

2.  **Abrir la aplicación en el navegador:**

    La aplicación se abrirá automáticamente en tu navegador o podrás acceder a ella a través de la URL que se muestra en la consola (normalmente `http://localhost:5173`).

## Estructura del Proyecto

EduConnect/
├── src/
│ ├── components/ # Componentes de React
│ │ ├── Auth/ # Componentes de autenticación (Login, Registro)
│ │ ├── Publication/ # Componentes para la gestión de publicaciones
│ │ ├── Comment/ # Componentes para la gestión de comentarios
│ │ ├── Admin/ # Componentes para el panel de administración
│ │ ├── Layout/ # Componentes para la estructura general de la página (Navbar, Layout)
│ │ ├── Pages/ # Componentes para las vistas principales (Home, About, Publications, Admin)
│ │ └── UI/ # Componentes reutilizables de Material UI
│ ├── context/ # Contexto para gestionar el estado global (AuthContext)
│ ├── services/ # Lógica para interactuar con LocalStorage (authService, publicationService, commentService, userService)
│ ├── models/ # Interfaces de TypeScript para los datos (User, Publication, Comment)
│ ├── utils/ # Funciones de utilidad (validation)
│ ├── App.tsx # Componente principal de la aplicación
│ ├── index.css # Estilos globales
│ └── main.tsx # Punto de entrada de la aplicación
├── public/ # Archivos estáticos
├── README.md # Este archivo
├── package.json # Dependencias y configuración del proyecto
├── .gitignore # Lista de archivos y carpetas ignorados por Git
└── tsconfig.json # Configuración de TypeScript


## Configuración

*   **Variables de Entorno:** Este proyecto no utiliza variables de entorno explícitas. La configuración principal se encuentra dentro del código fuente.
*   **LocalStorage:** Los datos de usuario, publicaciones y comentarios se almacenan en el `LocalStorage` del navegador.

## Roles de Usuario

*   **Administrador:**
    *   Usuario por defecto: `admin`
    *   Contraseña por defecto: `password`
    *   (Se crea automáticamente si no existen usuarios en el sistema)

    **¡Importante!** Cambia la contraseña del administrador por defecto en un entorno de producción.

## Contribución

Las contribuciones son bienvenidas. Si deseas contribuir al proyecto, sigue estos pasos:

1.  Haz un fork del repositorio.
2.  Crea una rama con tu característica o corrección: `git checkout -b feature/nueva-caracteristica` o `git checkout -b fix/correccion-de-error`.
3.  Realiza tus cambios y haz commit: `git commit -m "Añade una nueva característica"`.
4.  Sube los cambios a tu fork: `git push origin feature/nueva-caracteristica`.
5.  Crea un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.

## Equipo de Desarrollo

*   [Nombre del estudiante 1]
*   [Nombre del estudiante 2]
*   [Nombre del estudiante 3]

## Agradecimientos

Agradecemos a las comunidades de React, TypeScript y Material UI por proporcionar excelentes herramientas y documentación.