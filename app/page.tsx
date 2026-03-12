"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import SplashCursor from "@/components/SplashCursor";
import ShinyText from "@/components/ShinyText";
import ProjectCard from "@/components/ProjectCard";

function HomeModel() {
  const gltf = useGLTF("/portfolio-2026/result-optimized.glb");

  return <primitive object={gltf.scene} scale={1.5} />;
}

useGLTF.preload("/portfolio-2026/result-optimized.glb");

// Main Dashboard
export default function Dashboard() {
  return (
    <div className="relative min-h-screen overflow-hidden relative">
      {/* Splash Cursor */}
      <SplashCursor />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-40 glass border-b border-white/10 backdrop-blur-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">Tue Truonga</div>
            <nav className="hidden md:flex gap-8">
              <a
                href="#projects"
                className="text-gray-300 hover:text-white smooth-transition"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-300 hover:text-white smooth-transition"
              >
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <div className="min-h-[668px] flex items-center justify-center px-6 pt-20 relative">
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:flex-nowrap gap-8 md:gap-12 items-center md:items-start md:justify-between">
            <div className="w-full max-w-[320px] h-[260px] md:w-[380px] md:max-w-none md:h-[320px] md:mr-4 md:ml-0">
              <Canvas camera={{ position: [0, 1.2, 4], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 8, 3]} intensity={1.3} />
                <Suspense fallback={null}>
                  <Stage
                    environment="city"
                    intensity={0.6}
                    adjustCamera={false}
                  >
                    <HomeModel />
                  </Stage>
                </Suspense>
                <OrbitControls
                  enablePan={false}
                  enableZoom={false}
                  minPolarAngle={Math.PI / 2.8}
                  maxPolarAngle={Math.PI / 1.6}
                  autoRotate
                  autoRotateSpeed={2}
                />
              </Canvas>
            </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6 md:gap-8 animate-slide-up">
              <ShinyText
                text="Hello, I'm Tue Truong"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
                className="text-4xl md:text-6xl font-bold"
              />
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a{" "}
                <span className="gradient-text font-semibold">
                  software engineer
                </span>{" "}
                specializing in building beautiful and functional web
                applications. Welcome to my portfolio where I showcase my latest
                projects and innovations.
              </p>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent mb-12" />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <section id="projects" className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-16 animate-slide-up">
              <ShinyText
                text="Featured Projects"
                speed={2}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
                className="text-5xl font-bold mb-4 gradient-text"
              />
              <p className="text-gray-400 text-lg">
                Explore my latest work and innovations
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Project 1: Profile Page */}
              <ProjectCard
                title="My Profile"
                description="A dynamic personal profile page showcasing my skills, experience, and achievements. Built with modern web technologies to provide an engaging and interactive user experience."
                icon="👤"
                link="https://me.tue-truonga.work"
                color="#0ea5e9"
                tags={["Portfolio", "Next.js", "TypeScript", "Tailwind"]}
              />

              {/* Project 2: Planning Poker */}
              <ProjectCard
                title="Planning Poker App"
                description="An interactive Planning Poker application for teams to estimate project tasks and user stories. Real-time collaboration tool designed for agile development teams."
                icon="🎲"
                link="https://planning-poker.tue-truonga.work"
                color="#ec4899"
                tags={["Collaboration", "Real-time", "React", "Firebase"]}
              />
            </div>

            {/* Call to Action */}
            <div className="text-center py-12">
              <p className="text-gray-400 mb-6">Want to see more of my work?</p>
              <a
                href="https://github.com/tueanhtruong"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block glass glass-hover px-8 py-3 rounded-lg font-semibold smooth-transition hover:shadow-lg hover:shadow-neon-purple/50"
              >
                Visit My GitHub →
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* About */}
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <p className="text-gray-400 text-sm">
                  Full-stack developer passionate about creating beautiful and
                  functional web experiences.
                </p>
              </div>

              {/* Links */}
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <div className="flex flex-col gap-2 text-sm">
                  <a
                    href="https://me.tue-truonga.work"
                    className="text-gray-400 hover:text-white smooth-transition"
                  >
                    Profile
                  </a>
                  <a
                    href="https://planning-poker.tue-truonga.work"
                    className="text-gray-400 hover:text-white smooth-transition"
                  >
                    Planning Poker
                  </a>
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-bold mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/tueanhtruong"
                    className="text-gray-400 hover:text-neon-purple smooth-transition"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tue-truong-anh/"
                    className="text-gray-400 hover:text-neon-pink smooth-transition"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm">
              <p>
                © 2026 Tue Truonga. All rights reserved. Built with Next.js &
                ReactBits & Three.js.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
