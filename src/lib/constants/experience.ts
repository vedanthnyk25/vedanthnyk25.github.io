import type { Experience } from "../types";

export const EXPERIENCES: Experience[] = [
  {
    company: "OTSF Maglev",
    positions: [
      {
        title: "Open Source Contributor",
        year: "Dec 2025 - Jan 2026",
        description: `
- ♦ Refactored core trip distance calculation logic to optimize computational overhead.
- ♦ Achieved a **~46x speedup** in performance through algorithmic improvements.
- ♦ Collaborated with maintainers to ensure thread-safety and reliability of the new implementation.
            `,
        skills: ["C++", "Performance Optimization", "Algorithms", "Git"],
      },
    ],
  },
  {
    company: "rabbitmq-amqp-go-client",
    positions: [
      {
        title: "Open Source Contributor",
        year: "Jan 2026",
        description: `
- ♦ Contributed a critical fix to enable **WebSocket connections** through restrictive corporate firewalls.
- ♦ Debugged protocol-level connection issues within the Go AMQP client.
- ♦ Ensured backward compatibility while expanding connectivity options for enterprise environments.
            `,
        skills: ["Go", "RabbitMQ", "Networking", "AMQP", "WebSockets"],
      },
    ],
  },
];
