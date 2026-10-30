// =========================================================================
// MEMBER VERIFICATION & AFFILIATION SERVICE
// Conforme a la Ley 172-13 sobre Protección de Datos de Carácter Personal
// =========================================================================

import { PARTY_INFO } from '../data/initialData';

const STORAGE_KEY_USER_AFFILIATION = 'patria_user_credential';
const STORAGE_KEY_LOCAL_PROPOSALS = 'patria_user_proposals';

// Simulación de generador de token seguro firmado (SHA-256 mock)
const generateSecureToken = (dni, timestamp) => {
  const raw = `${dni}:${timestamp}:patria-libre-samana-secret`;
  let hash = 0;
  for (let i = 0; i < raw.length; i++) {
    hash = (hash << 5) - hash + raw.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0');
  return `pl-sam-v1:${hex}-${Date.now().toString(36)}`;
};

export const memberService = {
  /**
   * Registra una nueva afiliación ciudadana para la sesión del usuario actual
   * Los datos privados permanecen bajo custodia local y no se exponen públicamente a otros usuarios.
   * @param {Object} formData
   * @returns {Promise<Object>} Credencial digital verificada
   */
  async registerMember(formData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          if (!formData.dni || !formData.fullName) {
            reject(new Error('El número de DNI/Cédula y el nombre completo son obligatorios.'));
            return;
          }

          const cleanDni = formData.dni.trim();
          const cleanName = formData.fullName.trim();
          const timestamp = new Date().toISOString();
          const verificationToken = generateSecureToken(cleanDni, timestamp);

          // Estructura segura: el QR no contiene datos sensibles en texto plano
          const credential = {
            id: `AF-SAM-${Date.now().toString().slice(-4)}`,
            dniMasked: cleanDni.length >= 8 ? `${cleanDni.slice(0, 3)}-*******-${cleanDni.slice(-1)}` : cleanDni,
            dni: cleanDni, // Mantenido solo en la sesión del usuario que se registró
            fullName: cleanName,
            region: formData.region || 'Provincia de Samaná',
            role: 'Militante Ciudadano',
            affiliationDate: timestamp.split('T')[0],
            status: 'Acreditado',
            verificationToken: verificationToken,
            // Enlace de verificación seguro que no expone datos personales
            verificationUrl: `https://patrialibre.do/verificar?token=${encodeURIComponent(verificationToken)}`,
            qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`https://patrialibre.do/verificar?token=${verificationToken}`)}`
          };

          // Guardar únicamente la credencial del usuario actual en su dispositivo
          localStorage.setItem(STORAGE_KEY_USER_AFFILIATION, JSON.stringify(credential));

          resolve(credential);
        } catch {
          reject(new Error('Error al procesar la solicitud de afiliación en el entorno local.'));
        }
      }, 500);
    });
  },

  /**
   * Consulta segura de acreditación por DNI / Cédula
   * En cumplimiento con la Ley 172-13, no descarga un padrón completo al navegador.
   * @param {string} dni
   * @returns {Promise<Object|null>}
   */
  async getMemberByDNI(dni) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const cleanInput = (dni || '').trim();
        const storedUser = localStorage.getItem(STORAGE_KEY_USER_AFFILIATION);
        
        if (storedUser) {
          try {
            const userObj = JSON.parse(storedUser);
            if (userObj.dni === cleanInput || userObj.dniMasked === cleanInput) {
              resolve(userObj);
              return;
            }
          } catch {
            // Ignorar error de parsing
          }
        }

        // Si no coincide con la sesión del usuario actual, se devuelve null
        // sin exponer registros ni filtrar padrones en el cliente
        resolve(null);
      }, 400);
    });
  },

  /**
   * Obtiene estadísticas públicas y demográficas de la provincia
   * @returns {Promise<Object>}
   */
  async getStats() {
    return new Promise((resolve) => {
      resolve(PARTY_INFO.provincialStats);
    });
  },

  /**
   * Guarda una propuesta ciudadana localmente
   * @param {Object} proposalData
   */
  async submitProposal(proposalData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY_LOCAL_PROPOSALS) || '[]');
        const newProposal = {
          id: `PROP-SAM-${Date.now().toString().slice(-4)}`,
          ...proposalData,
          createdAt: new Date().toISOString()
        };
        existing.unshift(newProposal);
        localStorage.setItem(STORAGE_KEY_LOCAL_PROPOSALS, JSON.stringify(existing));
        resolve(newProposal);
      }, 400);
    });
  }
};

export default memberService;
