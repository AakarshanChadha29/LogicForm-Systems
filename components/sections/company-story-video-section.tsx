"use client";

import { Play, Pause } from "lucide-react";
import { useRef, useState } from "react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { GlassCard } from "@/components/ui/glass-card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const VIDEO_SRC = "/videos/logicform-overview.mp4";

export function CompanyStoryVideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUnavailable, setVideoUnavailable] = useState(false);

  const togglePlayback = () => {
    if (!videoRef.current || videoUnavailable) return;
    if (videoRef.current.paused) {
      void videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Section id="company-story-video" className="section-divider">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-eyebrow">Company Story</p>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              From business chaos to working digital systems
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
              A short overview of how Logicform Systems connects websites, workflows, dashboards,
              AI, and human control.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <GlassCard className="relative mt-8 overflow-hidden p-3 md:p-4 premium-glow">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22)_0%,rgba(212,175,55,0.05)_52%,transparent_78%)] blur-3xl" />

            <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[rgba(0,0,0,0.42)]">
              {videoUnavailable ? (
                <div className="relative flex min-h-[240px] items-center justify-center bg-[linear-gradient(160deg,rgba(212,175,55,0.08),rgba(255,255,255,0.02))] px-6 py-12 sm:min-h-[320px] md:min-h-[420px]">
                  <div className="text-center">
                    <button
                      type="button"
                      aria-label="Play company story video"
                      className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[rgba(0,0,0,0.55)] text-accent shadow-[0_0_28px_-10px_rgba(212,175,55,0.5)]"
                    >
                      <Play size={20} fill="currentColor" />
                    </button>
                    <p className="mt-4 text-sm text-[var(--foreground-secondary)]">
                      Company overview video placeholder
                    </p>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <video
                    ref={videoRef}
                    src={VIDEO_SRC}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-video w-full object-cover"
                    onError={() => setVideoUnavailable(true)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                  />

                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="absolute bottom-4 left-4 inline-flex h-11 items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[rgba(0,0,0,0.64)] px-4 text-sm font-medium text-foreground backdrop-blur-md transition-colors hover:border-[var(--accent)] hover:text-accent"
                    aria-label={isPlaying ? "Pause company story video" : "Play company story video"}
                  >
                    {isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                </div>
              )}
            </div>
          </GlassCard>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
