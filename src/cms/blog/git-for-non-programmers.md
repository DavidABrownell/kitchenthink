---
slug: git-for-non-programmers
date: 2021-03-12T00:34:42.907Z
title: Git for Non-Programmers
---
We software developers hoard our tools. Perhaps differently than others. While the free and open source software movements have been an enormous boon to developers, one fact surfaces time and time again: developers are not designers. We exist so far outside of how "normal" people use software that we have no reference point. Our *you-must-be-this-tall-to-ride* requirement is knowledge, time, and perseverance. This hampers cross-discipline use of the tools we create, even when such use would be beneficial for both fields. 

[Git](https://git-scm.com/) is a free-software versioning system. It is in wide use among programmers and other technical types<sup>[citation needed]</sup>. This essay does not aim to convince non-technical readers to use Git, but rather to explore the reasons they probably do not.

## Advantages of Git
Git provides a distributed, non-linear history of every change the files it is tracking have undergone. This is powerful. It changes your workflow. On the fence about including that block of text? Delete it. You can recover it if you change your mind. Accidentally deleted an important file? Find it in the repository history. Need to know when you made that change? `git log` will show you. Git removes the need for `important_report-6-final-FINAL-revision-03-FINAL-FOR-REAL.whatever`.

## Downsides of Git

* ### Hard to Learn, Hard to Explain

  Git operations are often thin wrappers around operations on the abstract [directed acyclic graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph). Graph theory, the foundational logic upon which the DAG rests, is common throughout computer science, but if you don't have that background, then you're in the dark. Learning undergrad (in my part of the world) mathematics is a steep requirement. And you *do* have to learn how Git works on the inside; there is very little abstraction between the innards and the interface. [Anecdotal](https://github.com/k88hudson/git-flight-rules) [evidence](https://rogerdudler.github.io/git-guide/) [suggests](https://ohshitgit.com/) that even career programmers struggle to understand how Git works, and *we use it every day.* I'm also not interested in explaining Git because
  * it's a lot to explain,
  * I know I'm inevitably going to become the support contact *when (not if)* something goes wrong, and
  * *I don't understand Git well enough to explain it.*

  We should remember: Git was designed by Linus Torvalds, noted Linux kernel developer, to address the problems he perceived with other source control programs. For those of you in the audience, kernel developers are as to most other programmers as programmers are to the rest of the population. They're a class above. What I'm trying to convey is that Linus is a smarty smartpants and his ideas, while possible to understand, aren't *easy* to understand.

* ### Only Works on Plaintext

  Programmers mitigate this downside by the fact that plaintext has been our preferred document format since it became possible to store plaintext on computers. It's a virtuous cycle, wherein we create tools to manipulate plaintext because that's the standard we adhere to, and we continue to use plaintext because that's what we have the tools for. Git is such a tool. It relies on the fact that the actual bytes in the file on the disk have nearly a 1:1 relationship with the data that is displayed to the user, as would happen with plaintext.

  But other fields are not burdened with our dogmas. Writing and publishing has long moved to `.docx`, `.pdf`, `.odt`, and others. Accounting uses `.xlsx` despite our our stubborn insistance on providing plaintext tab- and comma-separated-values for tabular data. Mechanical engineers, civil engineers, and architects use any of dozens of proprietary file formats depending on what software they use. Apologies if I've forgotten your field. I expect they use similar. [What You See Is What You Get (WYSIWYG)](https://en.wikipedia.org/wiki/WYSIWYG) formats have overtaken plaintext in non-computer fields, for good reason. Their ease of use results in lower training time and a better user experience. But the exact property that makes them so nice for everyday users---the fact that the content the user sees does not map neatly to data in the file---makes version control in its current incarnation untenable. Plaintext is the universal document format understood by Git, et al. If it's not plaintext, it's binary; our current logic doesn't have a good method of dealing with binary files because they could, by definition, contain *any* data.

  We can't deal with binary files without any other context. We can't merge them. We can't patch them. We can only replace them in whole. And in doing so, we lose the expressiveness and power. The magic has fizzled.

  And it doesn't even particularly matter if the format is technically plaintext under the hood. I understand, say, Solidworks has plaintext and binary variants of its file formats. But it doesn't matter. What matters is that *the representation the user sees* is plaintext as well. Otherwise, how could they make a reasoned choice on how to merge something? What would they do if there was a merge conflict?

* ### The Workflow is Different

  Partly as a consequence of the plaintext requirement, using Git requires that one upend their entire workflow. Throw out Microsoft Word. You're writing this in Markdown. Or, god forbid, LaTeX. It's definitely not impossible. Folks have done it. But I don't think it's reasonable to expect an author to learn to use not only Git itself, but also a new editor, file format, and document converter (hi, [Pandoc](https://pandoc.org/)!) just to get their job done.

* ### Does it Serve Us

  Midway through writing this screed I stopped to think: What would the average person gain from using Git to organize their files? My answer is: probably yes, but it would be difficult to measure. The costs are so clear, while the benefits are so hazy. It's hard to convince people to take a concrete risk (with their time, at the least) now and promise some vague benefit later. *I* still haven't learned how to use either Vim or Emacs despite the rapturous praise heaped upon each. Even if they would improve my everyday experience, I don't do my daily work in either. Because the cost is tangible. The benefits are not.

## What's the Point

We have a long way to go towards designing software so ordinary people can use it. Git was first published 15 years ago. I'm sure that research will in time find ways to mitigate these problems, but we're not there yet. These are social as well as technical problems.

I'm tired. Good night.

