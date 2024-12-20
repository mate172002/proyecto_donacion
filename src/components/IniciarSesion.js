import React from 'react';

const IniciarSesion = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #f9f9f9, #e9e9e9)',
      margin: 0,
      fontFamily: 'Arial, sans-serif',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      padding: '2.5rem',
      width: '100%',
      maxWidth: '400px',
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      textAlign: 'center',
    },
    title: {
      fontSize: '2rem',
      color: '#4a4a4a',
      marginBottom: '1.5rem',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#6a6a6a',
      marginBottom: '2rem',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.2rem',
    },
    input: {
      width: '100%',
      padding: '0.9rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      fontSize: '1rem',
      outline: 'none',
      boxSizing: 'border-box',
      transition: 'border-color 0.3s ease',
    },
    inputFocus: {
      borderColor: '#bfa5ff',
    },
    button: {
      backgroundColor: '#6c63ff',
      color: '#ffffff',
      padding: '0.9rem',
      border: 'none',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#574bcc',
    },
    registerSection: {
      marginTop: '1.5rem',
    },
    registerText: {
      fontSize: '0.9rem',
      color: '#7a7a7a',
    },
    registerLink: {
      color: '#6c63ff',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    registerLinkHover: {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Iniciar Sesión</h1>
        <p style={styles.subtitle}>
          Accede con tus credenciales o regístrate para empezar a donar.
        </p>
        <form style={styles.form}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Contraseña"
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            Iniciar Sesión
          </button>
        </form>
        <div style={styles.registerSection}>
          <p style={styles.registerText}>
            ¿No tienes cuenta?{' '}
            <a href="#" style={styles.registerLink}>
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IniciarSesion;
