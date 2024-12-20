import React, { useState } from 'react';

const Donar = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem',
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      padding: '2rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '600px',
      textAlign: 'center',
    },
    title: {
      fontSize: '2rem',
      color: '#5a3d5c',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.1rem',
      color: '#666',
      marginBottom: '2rem',
    },
    button: {
      width: '100%',
      padding: '1rem',
      marginBottom: '1rem',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#6c63ff',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    input: {
      padding: '0.8rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      fontSize: '1rem',
      marginBottom: '1rem',
      width: '100%',
    },
    backButton: {
      marginTop: '1rem',
      padding: '1rem',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#f44336',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
  };

  const campaigns = [
    'Campaña de Educación',
    'Campaña de Salud',
    'Campaña de Medio Ambiente',
  ];

  const renderDonationForm = () => (
    <div style={styles.card}>
      <h1 style={styles.title}>{selectedCampaign}</h1>
      <form>
        <input
          type="text"
          placeholder="Tu nombre"
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Monto a donar"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Donar</button>
      </form>
      <button
        onClick={() => setSelectedCampaign(null)}
        style={styles.backButton}
      >
        Regresar
      </button>
    </div>
  );

  return (
    <div style={styles.container}>
      {selectedCampaign ? (
        renderDonationForm()
      ) : (
        <div style={styles.card}>
          <h1 style={styles.title}>Página de Donar</h1>
          <p style={styles.subtitle}>Selecciona una campaña de la lista y realiza tu donación.</p>
          {campaigns.map((campaign, index) => (
            <button
              key={index}
              style={styles.button}
              onClick={() => setSelectedCampaign(campaign)}
            >
              Donar para {campaign}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Donar;
