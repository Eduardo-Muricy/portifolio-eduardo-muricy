import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-300 ease-out pointer-events-none"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(0,126,167,0.15), transparent 80%)`,
      }}
    />
  );
}
