---
layout: default
title: Home
---

<section class="hero">
  <h1>Hi, I'm Brendan Barber</h1>
  <p>Computer Science student at UC San Diego. Interested in socio-technical web security, vfx pipelines, and game modding.</p>
</section>

<div class="grid">
  <a class="card c-about" href="{{ '/about' | relative_url }}">
    <svg class="ico"><use href="#i-user"/></svg>
    <h3>About Me <span class="arrow">&#9654;</span></h3>
    <span class="sub">Who I am &amp; what I build</span>
  </a>
  <a class="card c-contact" href="{{ '/contact' | relative_url }}">
    <svg class="ico"><use href="#i-mail"/></svg>
    <h3>Get in Touch <span class="arrow">&#9654;</span></h3>
    <span class="sub">Say hello</span>
  </a>
  <a class="card c-tech" href="{{ '/projects' | relative_url }}">
    <svg class="ico"><use href="#i-zap"/></svg>
    <h3>Technical Projects <span class="arrow">&#9654;</span></h3>
    <span class="sub">Renderers, tools, mods &amp; ML</span>
  </a>
  <a class="card c-creative" href="{{ '/creativeprojects' | relative_url }}">
    <svg class="ico"><use href="#i-movie"/></svg>
    <h3>Creative Projects <span class="arrow">&#9654;</span></h3>
    <span class="sub">Film, animation &amp; music</span>
  </a>
</div>

<h2 class="sec-title working"><svg class="ico"><use href="#i-loader"/></svg> Currently Working On</h2>

<div class="chips">
  <span class="chip"><span class="dot"></span> WoWTale Blockbench Plugin</span>
  <span class="chip build"><span class="dot"></span> Specious Sites</span>
</div>

<div class="spacer"></div>

<h2 class="sec-title featured"><svg class="ico"><use href="#i-flag"/></svg> Featured Projects</h2>

<div class="feature kotst">
  <h3><svg class="ico"><use href="#i-trophy"/></svg> Knights of the Square Table Event</h3>
  <p>My most ambitious project — a complete multiplayer tournament system for Minecraft with <strong>100,000+ lines of code</strong>. Custom minigames for an event with 4 teams of 5.</p>
  <span class="tech-stack" data-tech="Java">Java</span><span class="tech-stack" data-tech="SQL">SQL</span><span class="tech-stack" data-tech="Minecraft">Minecraft</span>
  <div><a class="btn" href="{{ '/projects' | relative_url }}">MORE INFO &#9654;</a></div>
</div>

<div class="feature voxel">
  <h3><svg class="ico"><use href="#i-map"/></svg> Voxel Terrain Generator for Maya</h3>
  <p>A Maya plugin that converts heightmap images into voxel terrain. Uses OpenCL for performance and builds a static particle simulation for the terrain.</p>
  <span class="tech-stack" data-tech="C++">C++</span><span class="tech-stack" data-tech="Python">Python</span><span class="tech-stack" data-tech="Maya API">Maya API</span>
  <div><a class="btn" href="{{ '/projects' | relative_url }}">MORE INFO &#9654;</a></div>
</div>
