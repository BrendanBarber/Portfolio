---
layout: default
title: Contact
---

<style>
/* Dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #0d1117 !important;
    color: #c9d1d9 !important;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: #f0f6fc !important;
  }
  
  a {
    color: #58a6ff !important;
  }
  
  a:hover {
    color: #79c0ff !important;
  }
  
  hr {
    border-color: #30363d !important;
  }
}

/* Global link styling - no underlines */
a {
  text-decoration: none !important;
}

a:hover {
  text-decoration: none !important;
}

/* Global margin styling - 25% on each side */
body {
  max-width: 50%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

/* Simple contact styling */
.contact-section {
  background: var(--card-bg, #f8f9fa);
  border: 1px solid var(--border-color, #e1e4e8);
  border-radius: 8px;
  padding: 25px;
  margin: 20px 0;
}

.contact-section h2 {
  margin-top: 0;
  color: #0366d6;
  border-bottom: 2px solid #e1e4e8;
  padding-bottom: 10px;
}

.contact-section p {
  margin: 15px 0;
  font-size: 1.1em;
}

.contact-email {
  font-family: monospace;
  background: var(--code-bg, #f6f8fa);
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid var(--border-color, #e1e4e8);
  display: inline-block;
}

.contact-links {
  margin: 15px 0;
}

.contact-links a {
  display: block;
  margin: 8px 0;
  font-size: 1.1em;
}

.contact-button {
  display: inline-block;
  background: #0366d6;
  color: white !important;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.contact-button:hover {
  background: #0256cc;
  color: white !important;
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.email-button {
  background: #28a745;
}

.email-button:hover {
  background: #218838;
}

.github-button {
  background: #6f42c1;
}

.github-button:hover {
  background: #5a2d91;
}

.gitlab-button {
  background: #fd7e14;
}

.gitlab-button:hover {
  background: #e8650e;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  .contact-section {
    --border-color: #30363d;
    --card-bg: #161b22;
    --code-bg: #0d1117;
    border-color: #30363d;
    background: #161b22;
  }
  
  .contact-section h2 {
    color: #58a6ff;
    border-bottom-color: #30363d;
  }
  
  .contact-email {
    background: #0d1117;
    border-color: #30363d;
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  body {
    max-width: 90%;
    padding: 0 10px;
  }
}
</style>

# 📬 Contact

<div class="contact-section">
  <h2>💼 LinkedIn</h2>
  <p>
    <a href="https://www.linkedin.com/in/brendan-barber-830a51213/" target="_blank" class="contact-button">
      🌟 My LinkedIn
    </a>
  </p>
</div>

<div class="contact-section">
  <h2>📧 Email</h2>
  <p><span class="contact-email">brendan.t.barber@gmail.com</span></p>
  <p>
    <a href="mailto:brendan.t.barber@gmail.com" class="contact-button email-button">
      📧 Send Email
    </a>
  </p>
</div>

<div class="contact-section">
  <h2>📍 Location</h2>
  <p>☀️ San Diego, California</p>
</div>

<div class="contact-section">
  <h2>⚙️ Other Githubs</h2>
  <div class="contact-links">
    <a href="https://github.com/GilanRanger" target="_blank" class="contact-button github-button">⚙️ Other Github</a>
    <a href="https://git.capollomedia.net/gilan" target="_blank" class="contact-button gitlab-button">💼 Work GitLab</a>
  </div>
</div>