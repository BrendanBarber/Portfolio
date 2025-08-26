---
layout: default
title: Home
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

/* Hero section styling */
.hero-section {
  text-align: center;
  padding: 40px 20px;
  margin: 20px 0;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.hero-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin-bottom: 0;
}

/* Navigation cards */
.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.nav-card {
  border: 1px solid var(--border-color, #e1e4e8);
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
  background: var(--card-bg, #f8f9fa);
  text-decoration: none;
  color: inherit;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  text-decoration: none;
  color: inherit;
}

.nav-card h3 {
  margin: 20px 0;
  font-size: 1.3em;
}

.nav-card p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.95em;
}

/* Status indicators */
.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  margin: 5px;
}

.status-active {
  background: #d1ecf1;
  color: #0c5460;
}

.status-learning {
  background: #fff3cd;
  color: #856404;
}

/* Quick stats */
.quick-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 25px 0;
}

.stat-item {
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  background: var(--card-bg, #f8f9fa);
  border: 1px solid var(--border-color, #e1e4e8);
}

.stat-number {
  font-size: 1.8em;
  font-weight: bold;
  color: #0366d6;
  display: block;
}

.stat-label {
  font-size: 0.9em;
  opacity: 0.8;
  margin-top: 5px;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  .nav-card {
    --border-color: #30363d;
    --card-bg: #161b22;
    border-color: #30363d;
    background: #161b22;
  }
  
  .stat-item {
    --border-color: #30363d;
    --card-bg: #161b22;
    border-color: #30363d;
    background: #161b22;
  }
  
  .status-active {
    background: #1f2937;
    color: #60a5fa;
  }
  
  .status-learning {
    background: #374151;
    color: #fbbf24;
  }
  
  .stat-number {
    color: #58a6ff;
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

<div class="hero-section">
  <h1 class="hero-title">👋 Hi, I'm Brendan Barber</h1>
  <p class="hero-subtitle">Computer Science Student interested in Graphics Programming </p>
</div>

<div class="nav-grid">
  <a href="./about" class="nav-card">
    <h3>🧑‍💻 About Me</h3>
  </a>

  <a href="./contact" class="nav-card">
    <h3>📬 Get in Touch</h3>
  </a>
  
  <a href="./projects" class="nav-card">
    <h3>⚡ Technical Projects</h3>
  </a>

  <a href="./creativeprojects" class="nav-card">
    <h3>🎨 Creative Projects</h3>
  </a>
  
</div>

<br>

## 🔥 Currently Working On

<span class="status-indicator status-active">🚶 Locomotion Automatic Animator for Blender</span>
<span class="status-indicator status-active">🎼 Automated Music Arrangement</span>
<span class="status-indicator status-learning">⚔️ My Medieval Minecraft Event</span>

<br>

## ⭐ Featured Projects

### 🏰 Knights of the Square Table Event
My most ambitious project - a complete multiplayer tournament system for Minecraft with **100,000+ lines of code**. Features custom minigames for an event with 4 teams with 5 people.

**[🎮 More Info](./projects#-knights-of-the-square-table-event)**

### 🚶 Locomotion Automatic Animator for Blender
A project focused on creativing a tool for automatically animating walking and running along a path for a rig to speed up layout and animating background characters.

**[⚙️ More Info](./projects#-locomotion-automatic-animator-for-blender)**