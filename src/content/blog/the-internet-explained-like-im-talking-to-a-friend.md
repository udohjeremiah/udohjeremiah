---
title: The Internet — Explained Like I'm Talking to a Friend
description: A simple, no-jargon breakdown of how the internet works — what it is, where it came from, why it was built, and how it runs today. No tech degree required.
heroImage: ../../../public/blog/the-internet-explained-like-im-talking-to-a-friend.webp
publishedOn: 2025-08-14
tags: [internet, web]
---

## What's the Internet?

The internet is a network of networks. But what exactly is a network?

A network is a group of computers or devices connected to each other. When your
computer connects to your phone using a cable (or a phone cord, as we know it),
they form a network. When your friend next door to the right connects his
computer to the internet via a modem, that’s a network. When your friend next
door on the left connects his phone to a laptop wirelessly, that’s another
network.

All these networks, when connected together, form the **internet**.

The internet is a global network of computers connected to each other, which
communicate and exchange information using a standardised set of rules called
_protocols_.

## Where it came from — and why it was built

But why was the internet even created in the first place?  

Well, the United States did their thing as usual. In the late 1960s, the U.S.
Department of Defence created the earliest version of the internet. _Defence?_
You can probably guess why. They wanted a decentralised communication network
that could still function in case of a nuclear attack.

Thank goodness, the internet has evolved far beyond its military origins. It's
no longer about bombs and bullets or even protection from nukes they keep
creating themselves. It has become a global force of connection and
communication. It has left the shores of America, now spanning the globe and
giving a voice to the voiceless — sometimes even against the same powers that
built it. Who would've thought?

## How does the Internet work?

Don't worry. I'm not going to bury you in technical jargon you'll forget in five
minutes. Let's stick to the bird’s-eye view.

The internet has **three core parts**:

1. **Connection:** This is the physical and wireless infrastructure that links
  devices together. It includes cables, fibre optics, satellites, cell towers,
  and Wi-Fi networks. Without these, no data can travel between devices. Your
  phone, computer, and the global network would be like islands with no bridges.

2. **Communication:** Computers and devices connect for one main purpose — to
  communicate and exchange data. Every click, video stream, or WhatsApp message
  is just data moving from one place to another. Let that sink in.

3. **Standardised protocols:** These are agreed-upon rules that define how
  information is exchanged between computers and devices. Standardisation allows
  computers and devices from different manufacturers to talk to each other
  smoothly. For example, a web browser made by one company can communicate
  with a web server made by another, as long as both follow the same protocol
  (like HTTP). Without standard protocols, the internet would be standardised
  chaos.

## Data transmission

Ah, I know you've been waiting for this one. Next time you hang out with that
group of friends, you can impress that girl by sounding smart. Let me help you
inflate your ego.

When you send data over the internet, it's broken into small chunks called
**packets**. Each packet is sent from your device to a **router**. A router is a
kind of traffic manager for the internet, as it forwards data packets between
computer networks. The router examines the packet and forwards it to the next
router along the path to its destination.

The number of routers your data passes through depends largely on the distance.
This "pass the packet" process continues until all packets reach their final
destination, where they're reassembled into the original data. This is true for
all kinds of content — whether it's a web page, a video, an audio file, or a cat
meme.

Now, just for a second, imagine a porn video arriving in chunks — and before it
gets to you, the chunks are all out of order. As you watch, your brain is
dragged from one random moment to the next, like a dopamine rollercoaster gone
wrong. Chaos. Confusion. LOL. I bet you'd give up, close the laptop, and go have
a real conversation with that girl.

And that's exactly why protocols like **TCP** exist. It ensures every packet
arrives intact and in the right order, so your data (and your porn experience)
makes sense. LOL. Without it, the internet would be nothing more than scrambled
nonsense flying through cables and airwaves.

## Core Internet protocols

While there are many protocols, here are the essential ones:

- **IP (Internet Protocol)**: Routes packets to their correct destination.

- **TCP (Transmission Control Protocol)**: Ensures packets arrive in the correct
  order reliably and efficiently.

- **DNS (Domain Name System)**: Translates domain names into IP addresses. A
  domain name is a human-readable label for a website, like `google.com`. An IP
  address, on the other hand, is a unique numerical identifier assigned to each
  device on a network. IPv4 addresses are typically written as four numbers
  separated by periods, like `142.250.185.46`. When you type a domain name into
  your web browser, your computer sends a DNS query to a DNS server. The server
  responds with the corresponding IP address, and your computer uses that
  address to connect to the website. Without DNS, you'd have to memorise long
  strings of numbers like `142.250.185.46` instead of simply typing
  `google.com`. You can think of DNS as the internet’s phonebook: you only need
  to remember a person’s name (the domain name) to find them, but you still need
  their phone number (the IP address) to make the call.

- **HTTP (Hypertext Transfer Protocol):** Transfers data between clients
  (e.g., browsers) and servers (e.g., websites). After connecting to a website,
  your web browser sends an HTTP request to the server, asking for the webpage.
  The server then sends an HTTP response back to the client, containing the
  requested data.

- **HTTPS (HTTP Secure):** A secure version of HTTP that encrypts data being
  transmitted between the client and server using SSL/TLS.

- **SSL/TLS (Secure Sockets Layer / Transport Layer Security):** Encrypts
  communication over the internet so others can’t intercept or tamper with it.
  If the website you visited uses HTTPS, which in turn means they’re using
  SSL/TLS, you’ll see "https" instead of "http" at the beginning of the website
  address, and your browser will display a padlock icon somewhere in the address
  bar. This indicates you're on a secure connection.

## Conclusion

I just handed you information that many computer science graduates leave school
without fully understanding. You now know more than the average graduate. So, go
on — make something great with that knowledge.

Remember, **"hackers hack, crackers crack, and whiners whine. Be a hacker."**.
Thanks for listening.
