import React, { useState } from 'react';
import { Search, CreditCard, AlertCircle, ShieldCheck } from 'lucide-react';
import { Modal } from '../common/Modal';
import { Input } from '../common/Input';
import { Button } from '../common/Button';
import { DigitalIDCard } from './DigitalIDCard';
import { memberService } from '../../services/memberService';
import './MemberLookupModal.css';

export function MemberLookupModal({ isOpen, onClose }) {
  const [searchDni, setSearchDni] = useState('');
  const [loading, setLoading] = useState(false);
  const [foundMember, setFoundMember] = useState(null);
  const [searched, setSearched] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchDni.trim()) return;

    setLoading(true);
    setErrorMsg('');
    setSearched(false);
    setFoundMember(null);

    try {
      const member = await memberService.getMemberByDNI(searchDni);
      setFoundMember(member);
      setSearched(true);
      if (!member) {
        setErrorMsg(`No se encontró ninguna afiliación registrada bajo el DNI/Cédula "${searchDni}".`);
      }
    } catch (err) {
      setErrorMsg('Error al consultar el padrón de afiliados.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSearchDni('');
    setFoundMember(null);
    setSearched(false);
    setErrorMsg('');
  };

  return (
    <Modal isOpen={isOpen} onClose={() => { handleReset(); onClose(); }} title="Consulta de Militancia y Carnet Digital" maxWidth="620px">
      <div className="lookup-modal-container">
        <p className="lookup-intro-txt">
          Ingresa el número de DNI / Cédula para verificar la acreditación oficial de militante y emitir su carnet institucional.
        </p>

        <form onSubmit={handleSearch} className="lookup-form">
          <Input
            label="Número de DNI / Cédula"
            name="searchDni"
            placeholder="Ej. 065-0012345-6"
            value={searchDni}
            onChange={(e) => setSearchDni(e.target.value)}
            icon={CreditCard}
            required
          />

          <div className="lookup-btn-row">
            <Button type="submit" variant="gold" icon={Search} loading={loading} fullWidth>
              {loading ? 'Consultando Padrón...' : 'Verificar Acreditación'}
            </Button>
          </div>
        </form>

        {errorMsg && (
          <div className="lookup-error-box animate-fade-in">
            <AlertCircle size={20} />
            <div>
              <span className="error-title">Búsqueda sin resultados</span>
              <p>{errorMsg}</p>
            </div>
          </div>
        )}

        {foundMember && (
          <div className="lookup-result animate-fade-in">
            <div className="result-header-status">
              <ShieldCheck size={22} className="text-gold" />
              <span>Acreditación Oficial Verificada</span>
            </div>
            <DigitalIDCard member={foundMember} />
          </div>
        )}
      </div>
    </Modal>
  );
}
