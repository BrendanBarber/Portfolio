---
layout: default
title: Projects
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
  
  table {
    border-color: #30363d !important;
  }
  
  th, td {
    border-color: #30363d !important;
    background-color: #161b22 !important;
  }
  
  th {
    background-color: #21262d !important;
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

/* Project styling for both light and dark modes */
.project-card {
  border: 1px solid var(--border-color, #e1e4e8);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  background: var(--card-bg, #f8f9fa);
}

.tech-stack {
  background: #0366d6;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  margin: 0 4px;
}

.status-badge {
  background: #28a745;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

.wip-badge {
  background: #ffc107;
  color: #212529;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8em;
}

/* Dark mode specific overrides */
@media (prefers-color-scheme: dark) {
  .project-card {
    --border-color: #30363d;
    --card-bg: #161b22;
    border-color: #30363d;
    background: #161b22;
  }
  
  .tech-stack {
    background: #1f6feb;
  }
  
  .status-badge {
    background: #238636;
  }
  
  .wip-badge {
    background: #d29922;
    color: #f0f6fc;
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


# 🎬 **Animation & VFX Tools**
*Tools created for Blender, Maya, Houdini, and Nuke. Mainly written in Python and Rust.*

---
<br>

### 🕸️ **Spider Web Shot Generator for Blender**
<span class="status-badge">Complete</span> | <span class="tech-stack">Python</span> <span class="tech-stack">Blender API</span>

*A tool for Blender that provides a panel for generating stylized spider webs and web-shooting effects similar to the powers of Spider-Man.*

**🔧 Key Features:**
- Generate spider webs of any size, shape, number of spokes/ribs, etc.
- Choice between a shot projectile or a tether connecting the web
- Generates simple animation that can be easily edited by artists

[Video Example]

**[⚙️ View the Code](https://github.com/BrendanBarber/Blender-Spider-Web-Shooter)**

---
<br>

### 🎆 **Firework Plugin for Houdini**
<span class="wip-badge">Work in Progress</span> | <span class="tech-stack">Python</span> <span class="tech-stack">Houdini Object Model</span>

*An project focused on creating a system for generating spectacular firework shows in Houdini with fully procedural effects and realistic physics simulations.*

**🎯 Planned Features:**
- Procedural firework burst patterns
- Realistic particle physics and lighting
- Ability to iterate designs quickly

🚀 *Currently in development*

<br>

# 🎮 **Minecraft Modding/Plugins**
*Projects made by modifying client and server-side code in the game Minecraft. Mainly written in Java and Kotlin.*

---
<br>

### 🏰 **Knights of the Square Table Event**
<span class="status-badge">Active Development</span> (4+ years) | <span class="tech-stack">Java</span> <span class="tech-stack">SQL</span> <span class="tech-stack">Minecraft Paper/Spigot</span>

*A multiplayer event system in Minecraft where 20 players compete in a tournament-style series of custom minigames. This is my largest and most complex project, with the biggest codebase I have ever built from scratch.*

**🔧 Key Features:**
- Custom minigame framework with 8 unique games
- Multi-server network architecture
- Player statistics saved for event balancing
- Custom resource packs, textures, and music

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/QJSEMpDIwVQ" 
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

💼 *Code available upon request.*

---
<br>

### 🎵 **MCME Music Plugin**
<span class="status-badge">Complete</span> | <span class="tech-stack">Java</span> <span class="tech-stack">Bukkit API</span>

*A dynamic music system that brings Middle-earth to life through location-based soundtracks.*

**🔧 Technical Features:**
- Region-based audio triggers
- Admin tools for creating and editing regions
- Allows for unusual regions shapes

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/mExS-7PdtJM"
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

**[⚙️ View the Code](https://github.com/GilanRanger/MCME-Music)**
**[🎮 Experience it](https://www.mcmiddleearth.com/)**

<br>

## 🤖 **Machine Learning**
*Machine learning models and research projects I have worked on. Mainly written in Python using PyTorch.*

---
<br>

### 🎼 Automated Music Arrangement
<span class="wip-badge">Work in Progress</span> | <span class="tech-stack">Python</span> <span class="tech-stack">PyTorch</span>

*A research project focused on developing machine learning systems capable of automatically arranging and orchestrating music. Working alongside the Computer Science and Engineer Society team at UC San Diego to push the boundaries of AI-assisted music creation.*

**🔬 Research Goals:**
- Neural network architectures for identifying parts of complex pieces
- Works with MIDI file format
- Efficient and can run on less powerful hardware