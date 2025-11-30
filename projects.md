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
*Tools created for Blender, Maya, Houdini, and Nuke. Mainly written in Python and C++.*

<br>

**2025 TD Reel**

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/sKiDmklvakQ"
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

<br>

### 🧊 **Voxel Terrain Generator for Maya**
<span class="wip-badge">Work in Progress</span> | <span class="tech-stack">C++</span> <span class="tech-stack">Python</span> <span class="tech-stack">Maya API</span>

*A plugin for Maya that allows heightmap images to be converted into voxel terrain. Uses OpenCL for better performance, and creates a static particle simulation for the terrain.*

**Key Features:**
- Loading heightmap images
- Extracting voxel data from input
- Creating terrain from voxel data

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/jBFBJ6Z2c6I"
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

**[View the Code](https://github.com/BrendanBarber/Maya-LegoTerrain)**

<br>

### 🚶 **Locomotion Automatic Animator for Blender**
<span class="status-badge">Complete</span> | <span class="tech-stack">Python</span> <span class="tech-stack">Blender API</span>

*A project focused on creativing a tool for automatically animating walking and running along a path for a rig to speed up layout and animating background characters.*

**Key Features:**
- Path generation, editing, and following
- Loading and blending animation cycles and static poses
- Dynamic speed depending on curvature of path and progress

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/YfETZoJ_Mw8"
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

**[View the Code](https://github.com/BrendanBarber/Blender-LocomotionAutoAnimator)**

<br>

### 🎥 **Camera Launch Plugin for Maya**
<span class="status-badge">Complete</span> | <span class="tech-stack">C++</span> <span class="tech-stack">Python</span> <span class="tech-stack">Maya API</span>

*A plugin for Maya that provides the ability to launch a camera in a direction with a set velocity.*

**Key Features:**
- Keyframes the parabolic motion of the camera
- Ability to set the velocity, direction, and gravity
- Custom shelf button and interface

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/8wjXVHqCinc"
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

**[View the Code](https://github.com/BrendanBarber/Maya-CameraLaunch)**

<br>

### 🕸️ **Spider Web Shot Generator for Blender**
<span class="status-badge">Complete</span> | <span class="tech-stack">Python</span> <span class="tech-stack">Blender API</span>

*A tool for Blender that provides a panel for generating stylized spider webs and web-shooting effects similar to the powers of Spider-Man.*

**Key Features:**
- Generate spider webs of any size, shape, number of spokes/ribs, etc.
- Choice between a shot projectile or a tether connecting the web
- Generates simple animation that can be easily edited by artists

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/EzVpIOhXq8c"
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

**[View the Code](https://github.com/BrendanBarber/Blender-Spider-Web-Shooter)**

<br>

### **Hytale Model Verifier for Blockbench**
<span class="status-badge">Complete</span> | <span class="tech-stack">Javascript</span> <span class="tech-stack">Blockbench API</span>

*A tool for Blockbench that provides tools for verifying that models are made from cuboid regions and have the correct UV mapping to be imported into the game Hytale.*

**Key Features:**
- Checks model for compliance with game standards
- Tool for converting cuboid and plane meshes into "to/from" cubes
- Tool for automatically scaling the UV and fixing incorrect per-face UVs

**[View the Code](https://github.com/GilanRanger/Blockbench-HytaleVerify)**


# 🎮 **Game Development/Modding**
*Projects made by modifying client and server-side code in existing games, or created in game engines.*

<br>

### 🏰 **Knights of the Square Table Event**
<span class="status-badge">Completed</span> (4+ years) | <span class="tech-stack">Java</span> <span class="tech-stack">SQL</span> <span class="tech-stack">Minecraft Paper/Spigot</span>

*A multiplayer event system in Minecraft where 20 players compete in a tournament-style series of custom minigames. This is my largest and most complex project, with the biggest codebase I have ever built from scratch.*

**Key Features:**
- Custom minigame framework with 8 unique games
- Multi-server network architecture
- Player statistics saved for event balancing
- Custom resource packs, textures, and music

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/QJSEMpDIwVQ" 
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

*Code available upon request.*

<br>

### 🐉 **Godot Wild Game Jam: Pryderi upon the Gwyddbwyll**
<span class="status-badge">Complete</span> <span class="tech-stack">Godot</span> <span class="tech-stack">GDScript</span>

*Turn-based battle game on a grid against creatures from Welsh Mythology. The player rolls dice to calculate movement, damage, and blocking. Created in the Godot game engine.*

**Key Features:**
- Made in Godot
- Turn-based game
- Passable pixel art created by me
- Created in about 20 hours of work

![Game Jam](assets/game_jam.png)

**[View the Code](https://github.com/GilanRanger/GodotWildJam70)**

<br>

### 🎵 **MCME Music Plugin**
<span class="status-badge">Complete</span> | <span class="tech-stack">Java</span> <span class="tech-stack">Bukkit API</span>

*A dynamic music system that brings Middle-earth to life through location-based soundtracks.*

**Technical Features:**
- Region-based audio triggers
- Admin tools for creating and editing regions
- Allows for unusual regions shapes

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin: 20px 0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  <iframe src="https://www.youtube.com/embed/mExS-7PdtJM"
  style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
  frameborder="0" allowfullscreen></iframe>
</div>

**[View the Code](https://github.com/GilanRanger/MCME-Music)**
**[Experience it](https://www.mcmiddleearth.com/)**

<br>

## 🤖 **Machine Learning**
*Machine learning models and research projects I have worked on. Mainly written in Python using PyTorch.*

<br>

### 🎼 Automated Music Arrangement
<span class="wip-badge">Work in Progress</span> | <span class="tech-stack">Python</span> <span class="tech-stack">PyTorch</span>

*A research project focused on developing machine learning systems capable of automatically arranging and orchestrating music. Working alongside the Computer Science and Engineer Society team at UC San Diego to push the boundaries of AI-assisted music creation.*

**Research Goals:**
- Neural network architectures for identifying parts of complex pieces
- Works with MIDI file format
- Efficient and can run on less powerful hardware

![AMA Poster](assets/Towards_AMA.jpg)

### 🏎️ AtiumRL
<span class="wip-badge">Work in Progress</span> | <span class="tech-stack">Python</span> <span class="tech-stack">Rust</span> <span class="tech-stack">PyTorch</span>

*A personal machine-learning project intended on predicting next-state in the video-game Rocket League. The intention is to teach the model to predict future position of the ball and other opponents so that it can be used as a brain for a future model that will perform the actions.*

**🎯 Goals:**
- Predict ball position multiple seconds into the future
- Predict opponent and teammate positions 
- Visualize these predictions in-game