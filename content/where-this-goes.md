# Where This Goes

## Companies Will Want to Own Their Intelligence
AI compute is [hitting a wall](https://www.wsj.com/tech/ai/ai-is-using-so-much-energy-that-computing-firepower-is-running-out-156e5c85?st=prqW56&reflink=article_imessage_share). Energy costs are surging, cloud capacity is finite, and the best frontier models are getting more expensive to run, not less. At the same time, open-source models — [Gemma 4](https://developers.googleblog.com/bring-state-of-the-art-agentic-skills-to-the-edge-with-gemma-4/), Llama, Mistral — are closing the capability gap fast. The economics point one direction: companies will stop renting intelligence and start running it themselves. The ones who move first will treat a locally hosted model the same way they treat a locally hosted database — critical infrastructure, not a SaaS line item.

## Tailscale as the Localhost for AI
Developers prototype on localhost because it's simple: no deploy, no permissions, no latency. Tailscale already extends that simplicity across machines. Extend it one more step and it becomes the default way to connect a local model to the rest of a company's stack — APIs, databases, frontends — without ever touching the public internet. While you can argue that cloud inference will stay cheaper for small teams, the moment a company needs privacy, compliance, or uptime guarantees, "local-first" stops being a preference and becomes a requirement.

## I Tested This Today
This afternoon I demoed an AI tutoring skill to my peers using my doom-coding setup: Claude running on my machine, accessed from my phone over Tailscale. No hosted endpoint, no API gateway, no deployment pipeline. When the prompt needed improvement, I asked Claude to rewrite the skill directly — no redeploy. Once the functionality was right, I could choose to migrate it to a properly networked app. But the point is I didn't have to. The prototype was the product for long enough to get real feedback.

## The Tailscale Opportunity
Every company that runs its own model will need to connect that model to internal tools, test it across devices, and iterate without a deployment cycle. That's a networking problem disguised as an AI problem — and it's exactly the problem Tailscale already solves.

---
The future isn't just AI getting smarter. It's AI getting closer — running on your hardware, on your network, under your control. Tailscale is how you wire it all together.
