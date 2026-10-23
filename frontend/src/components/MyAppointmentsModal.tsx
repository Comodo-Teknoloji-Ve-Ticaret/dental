import React from 'react';
import type { Appointment } from '../types';
import { X, Calendar, Clock, User, Trash2, MapPin, Share2, AlertCircle } from 'lucide-react';

interface MyAppointmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  appointments: Appointment[];
  onCancelAppointment: (id: string) => void;
  onNewBookingClick: () => void;
}

export const MyAppointmentsModal: React.FC<MyAppointmentsModalProps> = ({
  isOpen,
  onClose,
  appointments,
  onCancelAppointment,
  onNewBookingClick
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container my-appointments-modal" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <span className="badge-tag blue">RANDEVU TAKİP</span>
            <h2 className="modal-title">Kayıtlı Randevularınız ({appointments.length})</h2>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Kapat">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="modal-body">
          {appointments.length === 0 ? (
            <div className="empty-appointments">
              <AlertCircle size={48} className="empty-icon" />
              <h3>Henüz Kayıtlı Randevunuz Bulunmuyor</h3>
              <p>Comodo Dental Centre online randevu sistemi ile birkaç adımda randevunuzu oluşturabilirsiniz.</p>
              <button 
                onClick={() => {
                  onClose();
                  onNewBookingClick();
                }} 
                className="btn btn-accent btn-md"
              >
                Yeni Randevu Oluştur
              </button>
            </div>
          ) : (
            <div className="appointments-list">
              {appointments.map((app) => (
                <div key={app.id} className="appointment-card-item">
                  <div className="app-card-header">
                    <div>
                      <span className="app-code">{app.code}</span>
                      <h4 className="app-treatment">{app.treatmentTitle}</h4>
                    </div>
                    <span className={`app-status ${app.status}`}>
                      {app.status === 'onaylandi' ? '✓ Onaylandı' : app.status}
                    </span>
                  </div>

                  <div className="app-card-details">
                    <div className="app-detail-item">
                      <Calendar size={14} className="detail-icon" />
                      <span>{app.date}</span>
                    </div>
                    <div className="app-detail-item">
                      <Clock size={14} className="detail-icon" />
                      <span>Saat {app.timeSlot}</span>
                    </div>
                    <div className="app-detail-item">
                      <User size={14} className="detail-icon" />
                      <span>Hekim: <strong>{app.doctorName}</strong></span>
                    </div>
                    <div className="app-detail-item">
                      <MapPin size={14} className="detail-icon" />
                      <span>Konyaaltı / Antalya</span>
                    </div>
                  </div>

                  {app.notes && (
                    <div className="app-card-notes">
                      <strong>Notunuz:</strong> {app.notes}
                    </div>
                  )}

                  <div className="app-card-footer">
                    <a
                      href={`https://wa.me/905078505287?text=Merhaba,%20${app.code}%20kodlu%20randevum%20hakkında%20bilgi%20almak%20istiyorum.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-whatsapp"
                    >
                      <Share2 size={14} />
                      <span>WhatsApp İletişim</span>
                    </a>

                    <button
                      onClick={() => onCancelAppointment(app.id)}
                      className="btn btn-sm btn-outline cancel-btn"
                      title="Randevuyu İptal Et"
                    >
                      <Trash2 size={14} />
                      <span>İptal Et</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button 
            onClick={() => {
              onClose();
              onNewBookingClick();
            }} 
            className="btn btn-accent btn-sm"
          >
            + Yeni Randevu Al
          </button>
          <button onClick={onClose} className="btn btn-primary btn-sm">
            Kapat
          </button>
        </div>
      </div>

      <style>{`
        .my-appointments-modal {
          max-width: 680px;
          width: 100%;
        }
        .empty-appointments {
          text-align: center;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .empty-icon {
          color: var(--color-text-muted);
        }
        .empty-appointments h3 {
          font-size: 1.25rem;
          color: var(--color-primary);
        }
        .empty-appointments p {
          font-size: 0.9375rem;
          color: var(--color-text-secondary);
          max-width: 400px;
          margin-bottom: 8px;
        }
        .appointments-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .appointment-card-item {
          background-color: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 20px;
          box-shadow: var(--shadow-sm);
        }
        .app-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 14px;
        }
        .app-code {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--color-brand);
          letter-spacing: 0.05em;
        }
        .app-treatment {
          font-size: 1.15rem;
          color: var(--color-primary);
          margin-top: 2px;
        }
        .app-status {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          text-transform: uppercase;
        }
        .app-status.onaylandi {
          background-color: var(--color-success-bg);
          color: var(--color-success);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        .app-card-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 14px;
          background-color: var(--color-surface-subtle);
          padding: 12px 14px;
          border-radius: var(--radius-sm);
          font-size: 0.8125rem;
        }
        .app-detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--color-text-main);
        }
        .detail-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .app-card-notes {
          font-size: 0.8125rem;
          color: var(--color-text-secondary);
          margin-bottom: 14px;
          padding-left: 8px;
          border-left: 2px solid var(--color-brand);
        }
        .app-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px solid var(--color-border-subtle);
        }
        .cancel-btn:hover {
          color: var(--color-danger);
          border-color: var(--color-danger);
          background-color: var(--color-danger-bg);
        }
      `}</style>
    </div>
  );
};
