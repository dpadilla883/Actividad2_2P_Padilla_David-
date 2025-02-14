export const isValidEmail = (email: string): boolean => {
    //  Expresión regular simple para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const isStrongPassword = (password: string): boolean => {
    //  Requisitos mínimos para una contraseña segura:
    //   - Al menos 8 caracteres de longitud
    //   - Al menos una letra mayúscula
    //   - Al menos una letra minúscula
    //   - Al menos un número
    //   - Al menos un carácter especial
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return passwordRegex.test(password);
  };