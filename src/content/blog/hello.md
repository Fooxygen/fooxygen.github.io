---
title: "GitHub Flavored Markdown: Full Reference GitHub Flavored Markdown: Full Reference"
date: 2026-08-11
tags: [gfm, markdown, example]
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Emphasis

**Bold**, *italic*, ***bold and italic***, ~~strikethrough~~, and `inline code`.

## Links & Autolinks

[Inline link](https://example.com)

Bare URL autolink: https://example.com

Angle-bracket autolink: <https://example.com>

## Images

![Banner](/images/banner.jpg)

## Lists

Unordered with nesting:

- Alpha
- Beta
  - Nested
    - Deeper

Ordered with nesting:

1. First
2. Second
   1. Nested item
3. Third

Mixed list:

- Item
  1. Ordered inside unordered
- Another

## Task Lists

- [x] Completed task
- [x] Another completed
- [ ] Pending task

## Tables

| Left-aligned | Center-aligned | Right-aligned |
| :----------- | :------------: | ------------: |
| 1            |      one       |             1 |
| 22           |      two       |            22 |

## Blockquotes

> Single line quote.

> Multi-line quote
> with continued lines.
>
> - List inside a quote
> 1. Ordered inside a quote

Nested blockquote:

> Outer
>
> > Inner

## Code Blocks

Fenced block with language:

```js
function hello(name) {
  return `Hello, ${name}!`;
}
```

Plain fenced block (no language):

```
plain text block
```

## Footnotes

This sentence has a footnote[^1] and another[^2].

[^1]: First footnote text.
[^2]: Second footnote text.

## Horizontal Rules

---

## HTML

<details>
<summary>Click to expand</summary>

Content hidden behind the fold.

</details>

## Emoji

Unicode emoji render directly: 🔥 🚀 ✅

`:smile:` shortcodes are NOT converted (GitHub-only feature).
