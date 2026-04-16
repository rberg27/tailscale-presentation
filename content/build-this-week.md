# Build This Week

## Tailscale Quick-Open: Stop Copy-Pasting Your Own DNS
Every time I want to hit a local port from my phone, I copy a tailnet address, append the port, and paste it into a browser. That's three steps to reach something I already own. A small Tailscale companion app — or even a menu-bar shortcut — could resolve `localhost:3000` to the right MagicDNS address automatically. One tap, you're there. Doom coding proved that the workflow exists; this removes the friction that makes you hesitate to use it.

## Expo Resolver: Let React Native Find Your Backend
React Native with Expo hard-codes your dev server URL. Switch networks or restart a tailnet node and every `fetch('/api/...')` breaks until you find the new address and update it. A lightweight Expo plugin that reads your Tailscale status and injects the current MagicDNS hostname at build time would make mobile development on a tailnet seamless. Same tailnet, zero config edits.

## Arduino-to-Tailnet: IoT Without the Networking PhD
Ethan Mollick [wired a plastic duck to GPT](https://www.oneusefulthing.org/p/getting-started-with-ai-good-enough) with a microcontroller and some duct tape. The hardware was easy — the networking was the hard part. An Arduino library or firmware shim that auto-joins a tailnet on boot would let any sensor or actuator show up as a peer. Suddenly an AI agent can call `duck.tail1234.ts.net/quack` without anyone configuring port forwarding, dynamic DNS, or firewall rules.

## The Bigger Idea
Each of these is a version of the same thesis: Tailscale should be the layer that makes "local" mean "anywhere I am." If you can reach your own machine, you can reach your own intelligence — and the gap between building an idea and showing it to someone disappears.

---
All of these ideas find the friction that keeps using Tailscale as simple and reliable as using localhost.
