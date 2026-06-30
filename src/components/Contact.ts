export const Contact = (): string => `
  <section id="contact" class="stage relative py-20 md:py-28">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 reveal">
        <div class="lg:col-span-5">
          <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight text-text mb-5">Say hello.</h2>
          <p class="text-base md:text-lg leading-7 text-text2 mb-10">Whether it's for a project discussion, class assignment, or just to connect.</p>
          
          <div class="space-y-4">
            <div class="rounded-[1.5rem] p-5 bg-[linear-gradient(180deg,rgba(255,253,248,.98),rgba(252,248,241,.96))] border border-border shadow-soft">
              <div class="text-sm font-bold text-text">Email</div>
              <div class="mt-2 text-sm text-text2">hello@nanditosetiyawan.com</div>
            </div>
            <div class="rounded-[1.5rem] p-5 bg-[linear-gradient(180deg,rgba(255,253,248,.98),rgba(252,248,241,.96))] border border-border shadow-soft">
              <div class="text-sm font-bold text-text">Location</div>
              <div class="mt-2 text-sm text-text2">Yogyakarta, Indonesia</div>
            </div>
          </div>
        </div>
        <div class="lg:col-span-7">
          <div class="rounded-[1.5rem] overflow-hidden border border-border bg-white shadow-soft2">
            <div class="p-6 md:p-8">
              <div class="text-sm font-bold text-text mb-4">Quick Message</div>
              <form class="space-y-4" onsubmit="event.preventDefault()">
                <input class="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition" placeholder="Your name" />
                <input class="w-full rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition" placeholder="Your email" />
                <textarea class="w-full min-h-[140px] rounded-2xl border border-border bg-surface px-4 py-3 outline-none focus:ring-2 focus:ring-accent/20 transition" placeholder="Your message"></textarea>
                <button type="button" class="btn-primary w-full py-3.5 rounded-2xl font-bold text-sm tracking-wide">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <footer class="border-t border-border mt-20 py-8 text-center text-sm text-text2">
    <div class="mx-auto max-w-7xl px-4 md:px-8">
      © ${new Date().getFullYear()} Nandito Setiyawan. Designed with precision.
    </div>
  </footer>
`;