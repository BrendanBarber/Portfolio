---
layout: default
title: About
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
  
  blockquote {
    border-left-color: #30363d !important;
    color: #8b949e !important;
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

/* About page specific styling */
.intro-section {
  display: grid;
  grid-template-columns: 1fr 0px;
  gap: 30px;
  margin: 30px 0;
  align-items: start;
}

.intro-text {
  font-size: 1.1em;
  line-height: 1.6;
}

.interest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 30px 0;
}

.interest-card {
  background: var(--card-bg, #f8f9fa);
  border: 1px solid var(--border-color, #e1e4e8);
  border-radius: 12px;
  padding: 25px;
  transition: transform 0.2s;
}

.interest-card:hover {
  transform: translateY(-3px);
}

.interest-card h3 {
  margin-top: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.interest-list {
  list-style: none;
  padding: 0;
}

.interest-list li {
  background: var(--item-bg, #ffffff);
  border: 1px solid var(--border-color, #e1e4e8);
  border-radius: 8px;
  padding: 12px 15px;
  margin: 8px 0;
  transition: background-color 0.2s;
}

.interest-list li:hover {
  background: var(--item-hover, #f0f0f0);
}

.education-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  margin: 30px 0;
}

.education-section h2 {
  color: white !important;
  margin-top: 0;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.skill-tag {
  background: #0366d6;
  color: white;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 500;
}

.fun-fact {
  background: var(--card-bg, #f8f9fa);
  border-left: 4px solid #0366d6;
  padding: 15px 20px;
  margin: 20px 0;
  border-radius: 0 8px 8px 0;
  font-style: italic;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  .interest-card, .profile-stats {
    --border-color: #30363d;
    --card-bg: #161b22;
    border-color: #30363d;
    background: #161b22;
  }
  
  .interest-list li {
    --border-color: #30363d;
    --item-bg: #0d1117;
    --item-hover: #21262d;
    border-color: #30363d;
    background: #0d1117;
  }
  
  .interest-list li:hover {
    background: #21262d;
  }
  
  .skill-tag {
    background: #1f6feb;
  }
  
  .fun-fact {
    --card-bg: #161b22;
    background: #161b22;
    border-left-color: #58a6ff;
  }
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  body {
    max-width: 90%;
    padding: 0 10px;
  }
  
  .intro-section {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .interest-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="intro-section">
  <div class="intro-text">
    Hello! I'm Brendan, a computer science student with a fascination for graphics programming and creative technologies. I love bridging the gap between artistic vision and technical implementation, whether that's building VFX tools for artists or creating games.

    When I'm not coding, you'll find me practicing violin 🎻, playing casual ice hockey 🏒, or getting lost in a good book 📚.
  </div>
</div>

<div class="interest-grid">
  <div class="interest-card">
    <h3>🎮 Games I'm Playing</h3>
    <ul class="interest-list">
      <li>🚗 Rocket League</li>
      <li>⛏️ Vintage Story</li>
      <li>⚔️ Kingdom Come Deliverance II</li>
      <li>🕵️ Return of the Obra Dinn</li>
    </ul>
  </div>

  <div class="interest-card">
    <h3>📖 Currently Reading</h3>
    <ul class="interest-list">
      <li>🪱 "Dune" by Frank Herbert</li>
      <li>🦠 "Everything is Tuberculosis" by John Green</li>
    </ul>
  </div>
</div>

<div class="education-section">
  <h2>🎓 Education</h2>
  <h3>University of California, San Diego</h3>
  <p><strong>Bachelor of Science in Computer Science</strong></p>
  <p>Sophomore Year • Expected Graduation: 2028</p>
  
  <div style="margin-top: 20px;">
    <strong>Relevant Coursework:</strong> Data Structures & Algorithms, Computer Graphics, Software Engineering
  </div>
</div>