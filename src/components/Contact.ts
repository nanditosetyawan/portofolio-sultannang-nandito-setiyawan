import '../styles/contact.css';

export const Contact = (): string => `
  <section id="contact" class="stage relative contact-section">
    <div class="contact-container">
      <div class="contact-grid reveal">
        <div class="contact-left">
          <h2 class="contact-title">Say hello.</h2>
          <p class="contact-subtitle">Whether it's for a project discussion, class assignment, or just to connect.</p>
          
          <div class="contact-info-list">
            <div class="contact-info-card">
              <div class="contact-info-label">Email</div>
              <div class="contact-info-value">124240083@student.upnyk.ac.id</div>
            </div>
            <div class="contact-info-card">
              <div class="contact-info-label">Location</div>
              <div class="contact-info-value">Yogyakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="contact-right">
          <div class="contact-form-wrapper">
            <div class="contact-form-inner">
              <div class="contact-form-title">Quick Message</div>
              <form class="contact-form-fields" onsubmit="event.preventDefault()">
                <input id="contactName" class="contact-input" placeholder="Your name" />
                <input id="contactEmail" class="contact-input" placeholder="Your email" />
                <textarea id="contactMessage" class="contact-textarea" placeholder="Your message"></textarea>
                <button type="button" class="btn-primary contact-send-btn" id="contactSendBtn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ═══ Webmail Fallback Modal ═══ -->
    <div id="contactWebmailModal" class="contact-modal-overlay" style="display:none">
      <div class="contact-modal">
        <div class="contact-modal-header">
          <span class="contact-modal-title">Email Client Tidak Ditemukan</span>
          <button class="contact-modal-close" id="contactModalClose">&times;</button>
        </div>
        <p class="contact-modal-desc">
          Tidak dapat membuka aplikasi email secara otomatis.<br>
          Pilih webmail favorit Anda untuk mengirim pesan:
        </p>
        <div class="contact-modal-buttons">
          <!-- Gmail -->
          <button class="contact-modal-btn contact-modal-btn--gmail" id="contactOpenGmail">
            <svg viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            Gmail
          </button>
          <!-- Outlook -->
          <button class="contact-modal-btn contact-modal-btn--outlook" id="contactOpenOutlook">
            <svg viewBox="0 0 24 24" fill="none"><path d="M7.5 3H19a1.5 1.5 0 0 1 1.5 1.5V18a1.5 1.5 0 0 1-1.5 1.5H7.5A1.5 1.5 0 0 1 6 18V4.5A1.5 1.5 0 0 1 7.5 3z" fill="#0078D4"/><path d="M14 10.5c1.1 0 2-.4 2.7-1.1l-1.4-1.4c-.4.3-.8.5-1.3.5-.6 0-1.1-.2-1.5-.6L11.3 9.4c.6.6.7 1.5.7 1.1z" fill="#fff"/><path d="M10.5 14.5c.8 0 1.6-.3 2.2-.9l-1.1-1.1c-.3.2-.6.3-1.1.3-.5 0-.8-.1-1.1-.3l-1.1 1.1c.6.6 1.4.9 2.2.9z" fill="#fff"/><rect x="5.5" y="9" width="6" height="1.2" rx=".6" fill="#fff" opacity=".6"/><rect x="5.5" y="14" width="6" height="1.2" rx=".6" fill="#fff" opacity=".6"/><rect x="5.5" y="11.5" width="3.5" height="1.2" rx=".6" fill="#fff" opacity=".6"/></svg>
            Outlook
          </button>
        </div>
      </div>
    </div>

    <!-- ═══ Error Popup ═══ -->
    <div id="contactErrorPopup" class="contact-modal-overlay" style="display:none">
      <div class="contact-modal contact-modal--error">
        <div class="contact-modal-header">
          <span class="contact-modal-title">Gagal Mengirim</span>
          <button class="contact-modal-close" id="contactErrorClose">&times;</button>
        </div>
        <p class="contact-modal-desc">
          Tidak dapat membuka email client maupun webmail.<br>
          Silakan kirim pesan secara manual ke:<br>
          <strong style="color:var(--accent)">124240083@student.upnyk.ac.id</strong>
        </p>
        <button class="contact-modal-btn contact-modal-btn--accent" id="contactErrorOk">Mengerti</button>
      </div>
    </div>

  </section>
  
  <footer class="site-footer">
    <div class="site-footer-inner">
      © ${new Date().getFullYear()} Nandito Setiyawan. Designed with precision.
    </div>
  </footer>
`;