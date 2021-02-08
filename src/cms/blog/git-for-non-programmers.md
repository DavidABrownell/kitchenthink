---
slug: git-for-non-programmers
date: 2021-02-08T21:05:18.320Z
title: Git for Non-Programmers
---
We software developers hoard our tools. Perhaps differently than others. While the free and open source software movements have been an enormous boon to developers, one fact surfaces time and time again: developers are not designers. We exist so far outside of how "normal" people use software that we have no reference point. Our *you-must-be-this-tall-to-ride* requirement is knowledge, time, and preservance. This hampers cross-discipline use of the tools we create, even when such use would be beneficial for both fields. 

[Git](https://git-scm.com/) is a free-software versioning system. It is in wide use among programmers and other technical types<sup>[citation needed]</sup>. This essay does not aim to convince non-technical readers to use Git, but rather to explore the reasons they probably do not.

## Advantages of Git
Git provides a distributed, non-linear history of every change the files it is tracking have undergone. This is powerful. It changes your workflow. On the fence about that block of text? Delete it. You can recover it if you change your mind. Accidentally deleted an important file? Find it in the repository history. Need to know when you made that change? `git log` will show you. Git removes the need for `important_report-6-final-FINAL-revision-03.whatever`.

## Downsides of Git

* ### Hard to Learn, Hard to Explain

  Git operations are often thin wrappers around operations on the abstract [directed acyclic graph (DAG)](https://en.wikipedia.org/wiki/Directed_acyclic_graph). Graph theory, the foundational logic upon which the DAG rests, is common throughout computer science, but if you don't have that background, then you're in the dark. Learning undergrad (in my part of the world) mathematics is a steep requirement. And you *do* have to learn how Git works on the inside; there is very little abstraction between the innards and the interface. [Anecdotal](https://github.com/k88hudson/git-flight-rules) [evidence](https://rogerdudler.github.io/git-guide/) [suggests](https://ohshitgit.com/) that even career programmers struggle to understand how Git works, and *we use it every day.* I'm also not interested in explaining Git because
  * it's a lot to explain, and
  * I know I'm inevitably going to become the support contact *when (not if)* something goes wrong.

* ### Only Works on Plaintext

  This is, perhaps, one of the most onerous requirements. Programmers mitigate this downside by the simple fact that plaintext has been our preferred document format since it became possible to store plaintext on computers. It's a virtuous cycle, wherein we create tools to manipulate plaintext because that's the standard we adhere to, and we continue to use plaintext because that's what we have the tools for. Git is such a tool. It relies on the fact that the actual bytes in the file on the disk have nearly a 1:1 relationship with the data that is displayed to the user, as would happen with plaintext.

  But other fields don't share our dogmas. Writing and publishing has long moved to `.docx`, `.pdf`, `.odt`, and others. Accounting uses `.xlsx` despite our our stubborn insistance on providing plaintext tab- and comma-separated-values for tabular data. Mechanical engineers, civil engineers, and architects use any of dozens of proprietary file formats depending on what software they use. Apologies if I've forgotten your field. I expect they use similar. [What You See Is What You Get (WYSIWYG)](https://en.wikipedia.org/wiki/WYSIWYG) formats have overtaken plaintext in non-computer fields, for good reason. Their ease of use results in lower training time and a better user experience. But that