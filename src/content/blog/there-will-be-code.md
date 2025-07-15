---
title: There Will Be Code
description: We will always have code, even with the combination of quantum computing and AI, because code represents the details of the requirements.
heroImage: ../../../public/blog/there-will-be-code.webp
publishedOn: 2024-10-04
tags: [ai, coding]
---

"AI is taking over the world," laments the pessimist. "AI will replace software
engineers," cries the faint-hearted developers. "Everybody in the world is now a
programmer. This is the miracle of artificial intelligence," says NVIDIA CEO
Jensen Huang. "AI is more profound than fire, or electricity, or any of the
other big things we've worked on," says Google CEO Sundar Pichai. The list is
exhaustive, so I'll stop here. 🤦🏿‍♂️

With all these discussions about AI, I've always wanted to share my thoughts on
the issue. But, I've been struggling to write a post about it for a long time.
My mind was willing, but the words were weak—they just wouldn't come out to form
themselves.

One pleasant day, while reading the book "Clean Code" by Robert C. Martin, the
words I had been searching for appeared before me. What I had been longing to
express, especially since ChatGPT took the world by storm, was finally before
me. What I wanted to convey to people who claim AI would replace developers was
finally here. What I wanted to write to my future self was finally here. Behold,
I present it boldly before you too; see with your eyes and reason with your
mind:

> One might argue that a book about code is somehow behind the times - that code
> is no longer the issue; that we should be concerned about models and
> requirements instead. Indeed some have suggested that we are close to the end
> of code. That soon all code will be generated instead of written. That
> programmers simply won’t be needed because business people will generate
> programs from specifications.
>
> Nonsense! We will never be rid of code, because code represents the details of
> the requirements. At some level those details cannot be ignored or abstracted;
> they have to be specified. And specifying requirements in such detail that a
> machine can execute them is programming. Such a specification is code.
>
> I expect that the level of abstraction of our languages will continue to
> increase. I also expect that the number of domain-specific languages will
> continue to grow. This will be a good thing. But it will not eliminate code.
> Indeed, all the specifications written in these higher level and
> domain-specific language will be code! It will still need to be rigorous,
> accurate, and so formal and detailed that a machine can understand and execute
> it.
>
> The folks who think that code will one day disappear are like mathematicians
> who hope one day to discover a mathematics that does not have to be formal.
> They are hoping that one day we will discover a way to create mathematics that
> can do what we want rather than what we say. These machines will have to be
> able to understand us so well that they can translate vaguely specified needs
> into perfectly executing programs that precisely meet those needs.
>
> This will never happen. Not even humans, with all their intuition and
> creativity, have been able to create successful systems from the vague
> feelings of their customers. Indeed, if the discipline of requirements
> specification has taught us anything, it is that well-specified requirements
> are as formal as code and can act as executable tests of that code!
>
> Remember that code is really the language in which we ultimately express the
> requirements. We may create languages that are closer to the requirements. We
> may create tools that help us parse and assemble those requirements into
> formal structures. But we will never eliminate necessary precision—so there
> will always be code.

Let me give you a brief background on Robert C. Martin. He is an American
software engineer, instructor, and author. He is best known for promoting many
software design principles and for being an author and signatory of the
influential Agile Manifesto. When he wrote this book, it was in the year 2009.
To put it into perspective, that was 14 years before ChatGPT, which sparked the
AI revolution we see everywhere today, was publicly released.

The point is that AI for software development is essentially an
**"abstraction."** Whenever you encounter the term AI for software development,
you can replace it with "abstraction for software development." Once you start
doing this, you'll begin to see the bigger picture clearly. You'll start to
understand what AI can and cannot do for software development, as well as the
challenges and risks it presents.

Consider the statement "AI will replace programmers". This couldn't be further
from the truth. According to the Oxford Dictionary, a programmer is defined as
**"a person who writes computer programs."** What is a computer program? It's a
script that helps you calculate the average score of your students in an
examination. It's a website that runs an e-commerce business. It's a mobile
application that helps you text your friends. It's a desktop application that
enables you to calculate your company's account expenses.

So here's the puzzle: If I understand a problem thoroughly and instruct ChatGPT
to provide a script that can solve the problem, does that not make me a
programmer? I just wrote my specifications, so clearly, I now have the solution
to my problem. I just wrote a different kind of code. But, it's still code,
albeit a different one from the one you're used to. So, AI isn't replacing (old)
programmers; it's simply creating new kinds of programmers—those who would be
experts in requirements and specifications.

Now you might argue that I was provided with the code in a programming language.
You are correct, but ultimately, isn't a programming language also an
abstraction? You don't see the compiled code, but in reality, your computer
comprehends only 0's and 1's. Do you understand the point now? It's all
abstraction!

Did you know that programming languages at the beginning of computer innovation
were not as user-friendly as the ones we have today? Initially, it was assembly
language. Then we progressed to the abstraction of C, followed by C++, Java, and
JavaScript. Subsequently, we abstracted to Pseudocode. And now, with ChatGPT, we
are abstracting to everyday language. The only requirement is that you
understand your problem thoroughly and specify it in the requirements you
provide to the AI.

I had the opportunity to learn Assembly Programming Language during my time in
university. I despised every moment of that class because writing programs in
this language required me to pay attention to every tiny detail—like the last
memory location, the recent movement of my variables, the previous content of a
memory pointer, and so on. These challenges often necessitated me to revisit the
code from the beginning to understand what was and what wasn't. But, it also led
me to finally appreciate the programmers who dedicated their time to creating a
programming language that was easily readable, using words I could comprehend
and concepts that abstracted many of these complexities.

But all these came at a cost. As we embraced more abstractions in programming,
we lost touch with the inner workings of technology. This led to issues such as
poor memory management, decreased performance, and various other problems. While
we often credit programming languages for their speed, it's actually the rapid
advancements in computer chip technology that deserve the praise. These chips
are responsible for executing the 0's and 1's that our code gets compiled into.
With the rise of quantum computing and the continued growth of computer chips,
we can expect even more complex abstractions to emerge, potentially surpassing
the complexity of AI.

Get used to it; we are where we are today as humans because of the abstractions
we've built around ourselves. "So AI poses no danger?" you ask. A lot has been
written about the dangers of AI, so I won’t even go into it. But in regards to
the danger AI poses in software development, I'd just leave you with this quote
of Terence McKenna, and then you figure out the meaning and how it applies to
software development yourself:

> We are so much the victims of abstraction that with the Earth in flames we can
> barely rouse ourselves to wander across the room and look at the thermostat.

"So what should we do as software developers?" you ask. **Flow with the tide.**
The software development world is different from any other discipline out there.
In the software world, there is no going back; innovation is the name of the
game. Once a new trend emerges that abstracts away from the foundations, makes
life easier for developers and users of software, and makes more money for
managers, no laws or regulations can come into place to make people go back to
the old way of doing things. If any, they only lessen the way the new
abstraction will be used
(think hard enough; you will find evidence of this everywhere). So you either
position yourself to be on the side that flows with this new abstraction—AI, or
you become obsolete trying to swim against it.

Even when quantum computing combined with AI has gone high and may even be able
to read our thoughts and create software for us, there will still be code,
albeit our thoughts will be the code. But never, never, ever can anyone get rid
of code - there will always be code.
