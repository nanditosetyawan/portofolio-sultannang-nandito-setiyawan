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
              <div class="contact-info-value">hello@nanditosetiyawan.com</div>
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
                <input class="contact-input" placeholder="Your name" />
                <input class="contact-input" placeholder="Your email" />
                <textarea class="contact-textarea" placeholder="Your message"></textarea>
                <button type="button" class="btn-primary contact-send-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="site-footer">
    <div class="site-footer-inner">
      © ${new Date().getFullYear()} Nandito Setiyawan. Designed with precision.
    </div>
  </footer>
`;