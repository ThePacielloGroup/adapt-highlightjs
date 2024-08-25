# HighlightJS

An extension to load [HighlightJS](https://highlightjs.org/) into Adapt.

## Installation

* In this extension the default configuration for MathJax is as follows:
```json
"_hljs": {
	"_src": "//cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js"
}
```


### Usage

To apply highlighting to code snippets, mark them up with (adjust the classname depending on the snippet's language (e.g. `language-css`, `language-html`, etc.). Note that adding code snippets in the Authoring tool requires either editing the html source directly or adding the [codeSnippet CKEditor plugin](https://ckeditor.com/cke4/addon/codesnippet) in the AAT build.

```
<pre>
	<code class="language-javascript">
		// your code goes here
	</code>
</pre>

```
