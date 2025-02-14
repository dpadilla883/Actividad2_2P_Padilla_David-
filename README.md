# EduConnect - Plataforma de Red Social Académica

## Grupo de Desarrollo

*   Nombre: David Padilla
*   NRC: 1406

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
    *   Vite:  Herramienta de construcción para un desarrollo rápido y eficiente.
    *   React:  Biblioteca de JavaScript para construir interfaces de usuario.
    *   TypeScript:  Superset de JavaScript que añade tipado estático.
    *   Material UI:  Framework de componentes de React que implementa el diseño de Material Design.
    *   React Router DOM:  Biblioteca para la navegación en aplicaciones React.

## Instrucciones de Instalación

1.  **Clonar el repositorio:**

    ```bash
    git clone https://github.com/dpadilla883/Actividad2_2P_Padilla_David-.git
    ```

2.  **Navegar al directorio del proyecto:**

    ```bash
    cd Actividad2_2P_Padilla_David-
    ```

3.  **Instalar las dependencias:**

       ```bash
    npm install @mui/material @emotion/react @emotion/styled
   ```

       ```bash
   npm install react-router-dom
  ```

## Instrucciones de Ejecución

1.  **Iniciar el servidor de desarrollo:**

    Con npm:

    ```bash
    npm run dev
    ```

2.  **Abrir la aplicación en el navegador:**

    La aplicación se abrirá automáticamente en el navegador o se podrá acceder a ella a través de la URL que se muestra en la consola ( `http://localhost:5173`).

## Configuración

*   **Variables de Entorno:** Este proyecto no utiliza variables de entorno explícitas. La configuración principal se encuentra dentro del código fuente.
*   **LocalStorage:** Los datos de usuario, publicaciones y comentarios se almacenan en el `LocalStorage` del navegador.

## Roles de Usuario

*   **Administrador:**
    *   Usuario por defecto: `admin`
    *   Contraseña por defecto: `password`

