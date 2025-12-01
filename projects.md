---
layout: default
title: Technical Projects
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
}

/* Global link styling */
a {
  text-decoration: none !important;
}

/* Global margin styling */
body {
  max-width: 90%;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.section-header {
  color: #f0f6fc;
  margin: 40px 0 10px 0;
  font-size: 1.8em;
  border-bottom: 2px solid #30363d;
  padding-bottom: 10px;
}

.section-subtitle {
  color: #8b949e;
  margin-bottom: 30px;
  font-style: italic;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.project-card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.project-card:hover {
  border-color: #58a6ff;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(88, 166, 255, 0.1);
}

.project-card.expanded {
  grid-column: 1 / -1;
  cursor: default;
}

.project-header {
  margin-bottom: 12px;
}

.project-title {
  color: #f0f6fc;
  font-size: 1.2em;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-icon {
  font-size: 1.3em;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
}

.status-badge {
  background: #238636;
  color: white;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 600;
}

.wip-badge {
  background: #d29922;
  color: #0d1117;
  padding: 3px 10px;
  border-radius: 12px;
  font-size: 0.75em;
  font-weight: 600;
}

.tech-stack {
  background: #1f6feb;
  color: white;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 0.7em;
}

.project-description {
  color: #8b949e;
  font-size: 0.9em;
  line-height: 1.5;
  margin-bottom: 12px;
}

.expand-indicator {
  color: #58a6ff;
  font-size: 0.85em;
  text-align: center;
  margin-top: 10px;
  font-weight: 500;
}

.expanded-content {
  display: none;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #30363d;
}

.project-card.expanded .expanded-content {
  display: block;
}

.project-card.expanded .expand-indicator {
  display: none;
}

.features-list {
  margin: 15px 0;
}

.features-list h4 {
  color: #f0f6fc;
  margin-bottom: 10px;
}

.features-list ul {
  list-style: none;
  padding-left: 0;
}

.features-list li {
  color: #8b949e;
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.features-list li:before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #58a6ff;
}

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.3);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.project-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.project-link {
  color: #58a6ff;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #58a6ff;
  border-radius: 6px;
  font-size: 0.9em;
  transition: all 0.2s ease;
}

.project-link:hover {
  background: #58a6ff;
  color: #0d1117;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #30363d;
  border: none;
  color: #c9d1d9;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2em;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.project-card.expanded .close-btn {
  display: flex;
}

.close-btn:hover {
  background: #484f58;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  body {
    max-width: 95%;
    padding: 0 10px;
  }
}
</style>

# 🎬 **Animation & VFX Tools**
<p class="section-subtitle">Tools created for Blender, Maya, Houdini, and Nuke. Mainly written in Python and C++.</p>

<div class="projects-grid">
  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🧊</span> Voxel Terrain Generator</h3>
    </div>
    <div class="badges">
      <span class="wip-badge">WIP</span>
      <span class="tech-stack">C++</span>
      <span class="tech-stack">Python</span>
      <span class="tech-stack">Maya API</span>
    </div>
    <p class="project-description">
      Maya plugin that converts heightmap images into voxel terrain using OpenCL for performance.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Key Features:</h4>
        <ul>
          <li>Loading heightmap images</li>
          <li>Extracting voxel data from input</li>
          <li>Creating terrain from voxel data</li>
        </ul>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/jBFBJ6Z2c6I" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="project-links">
        <a href="https://github.com/BrendanBarber/Maya-LegoTerrain" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>

  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🚶</span> Locomotion Auto Animator</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">Python</span>
      <span class="tech-stack">Blender API</span>
    </div>
    <p class="project-description">
      Automatic walking and running animation along paths for Blender rigs.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Key Features:</h4>
        <ul>
          <li>Path generation, editing, and following</li>
          <li>Loading and blending animation cycles and static poses</li>
          <li>Dynamic speed depending on curvature of path and progress</li>
        </ul>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/YfETZoJ_Mw8" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="project-links">
        <a href="https://github.com/BrendanBarber/Blender-LocomotionAutoAnimator" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>

  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🎥</span> Camera Launch Plugin</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">C++</span>
      <span class="tech-stack">Python</span>
      <span class="tech-stack">Maya API</span>
    </div>
    <p class="project-description">
      Launch cameras with physics-based parabolic motion in Maya.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Key Features:</h4>
        <ul>
          <li>Keyframes the parabolic motion of the camera</li>
          <li>Ability to set the velocity, direction, and gravity</li>
          <li>Custom shelf button and interface</li>
        </ul>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/8wjXVHqCinc" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="project-links">
        <a href="https://github.com/BrendanBarber/Maya-CameraLaunch" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>

  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🕸️</span> Spider Web Shot Generator</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">Python</span>
      <span class="tech-stack">Blender API</span>
    </div>
    <p class="project-description">
      Generate stylized spider webs and web-shooting effects in Blender.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Key Features:</h4>
        <ul>
          <li>Generate spider webs of any size, shape, number of spokes/ribs, etc.</li>
          <li>Choice between a shot projectile or a tether connecting the web</li>
          <li>Generates simple animation that can be easily edited by artists</li>
        </ul>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/EzVpIOhXq8c" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="project-links">
        <a href="https://github.com/BrendanBarber/Blender-Spider-Web-Shooter" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>

  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🎮</span> Hytale Model Verifier</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">JavaScript</span>
      <span class="tech-stack">Blockbench API</span>
    </div>
    <p class="project-description">
      Verify and convert models for Hytale game compatibility in Blockbench.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Key Features:</h4>
        <ul>
          <li>Checks model for compliance with game standards</li>
          <li>Tool for converting cuboid and plane meshes into "to/from" cubes</li>
          <li>Tool for automatically scaling the UV and fixing incorrect per-face UVs</li>
        </ul>
      </div>
![Hytale Verify](assets/hytaleVerify.png)
      <div class="project-links">
        <a href="https://github.com/GilanRanger/Blockbench-HytaleVerify" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>
</div>

<h2 class="section-header">🎮 Game Development/Modding</h2>
<p class="section-subtitle">Projects made by modifying client and server-side code in existing games, or created in game engines.</p>

<div class="projects-grid">
  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🏰</span> Knights of the Square Table</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">Java</span>
      <span class="tech-stack">SQL</span>
      <span class="tech-stack">Minecraft</span>
    </div>
    <p class="project-description">
      Tournament-style multiplayer event with 8 custom minigames. My largest project to date.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Key Features:</h4>
        <ul>
          <li>Custom minigame framework with 8 unique games</li>
          <li>Multi-server network architecture</li>
          <li>Player statistics saved for event balancing</li>
          <li>Custom resource packs, textures, and music</li>
        </ul>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/QJSEMpDIwVQ" frameborder="0" allowfullscreen></iframe>
      </div>
      <p style="color: #8b949e; margin-top: 15px; font-style: italic;">Code available upon request.</p>
    </div>
  </div>

  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🐉</span> Pryderi upon the Gwyddbwyll</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">Godot</span>
      <span class="tech-stack">GDScript</span>
    </div>
    <p class="project-description">
      Turn-based battle game inspired by Welsh mythology. Created for Godot Wild Game Jam.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Key Features:</h4>
        <ul>
          <li>Made in Godot game engine</li>
          <li>Turn-based grid combat system</li>
          <li>Custom pixel art by me</li>
          <li>Created in about 20 hours of work</li>
        </ul>
      </div>
![Game Jam](assets/game_jam.png)
      <div class="project-links">
        <a href="https://github.com/GilanRanger/GodotWildJam70" class="project-link" target="_blank">View Code →</a>
      </div>
    </div>
  </div>

  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🎵</span> MCME Music Plugin</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">Java</span>
      <span class="tech-stack">Bukkit API</span>
    </div>
    <p class="project-description">
      Dynamic music system with location-based soundtracks for Middle-earth.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Technical Features:</h4>
        <ul>
          <li>Region-based audio triggers</li>
          <li>Admin tools for creating and editing regions</li>
          <li>Allows for unusual region shapes</li>
        </ul>
      </div>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/mExS-7PdtJM" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="project-links">
        <a href="https://github.com/GilanRanger/MCME-Music" class="project-link" target="_blank">View Code →</a>
        <a href="https://www.mcmiddleearth.com/" class="project-link" target="_blank">Experience it →</a>
      </div>
    </div>
  </div>
</div>

<h2 class="section-header">🤖 Machine Learning</h2>
<p class="section-subtitle">Machine learning models and research projects. Mainly written in Python using PyTorch.</p>

<div class="projects-grid">
  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🎼</span> Automated Music Arrangement</h3>
    </div>
    <div class="badges">
      <span class="status-badge">Complete</span>
      <span class="tech-stack">Python</span>
      <span class="tech-stack">PyTorch</span>
    </div>
    <p class="project-description">
      Research on ML systems for automatic music arrangement and orchestration.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Research Goals:</h4>
        <ul>
          <li>Neural network architectures for identifying parts of complex pieces</li>
          <li>Works with MIDI file format</li>
          <li>Efficient and can run on less powerful hardware</li>
        </ul>
      </div>
![AMA](assets/Towards_AMA.jpg)
    </div>
  </div>

  <div class="project-card" onclick="toggleExpand(this)">
    <button class="close-btn" onclick="event.stopPropagation(); toggleExpand(this.parentElement)">×</button>
    <div class="project-header">
      <h3 class="project-title"><span class="project-icon">🏎️</span> AtiumRL</h3>
    </div>
    <div class="badges">
      <span class="wip-badge">WIP</span>
      <span class="tech-stack">Python</span>
      <span class="tech-stack">Rust</span>
      <span class="tech-stack">PyTorch</span>
    </div>
    <p class="project-description">
      Next-state prediction for Rocket League using machine learning.
    </p>
    <div class="expand-indicator">Click for details →</div>
    
    <div class="expanded-content">
      <div class="features-list">
        <h4>Goals:</h4>
        <ul>
          <li>Predict ball position multiple seconds into the future</li>
          <li>Predict opponent and teammate positions</li>
          <li>Visualize these predictions in-game</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<script>
function toggleExpand(card) {
  const wasExpanded = card.classList.contains('expanded');
  
  // Close all other expanded cards
  document.querySelectorAll('.project-card.expanded').forEach(c => {
    c.classList.remove('expanded');
  });
  
  // Toggle this card
  if (!wasExpanded) {
    card.classList.add('expanded');
    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
</script>