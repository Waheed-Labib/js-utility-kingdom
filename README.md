<h1>What is js-utility-kingdom</h1>

<p>A collection of varoius JavaScript functions</p>

<h1>Installation</h1>

```npm i js-utility-kingdom```

<h1>Utilities</h1>

<h2>Text-related</h2>

<h3>getLettersInArray()</h3>

<ul>
<li><em>Parameter :</em>Takes a word as parameter</li>
<li><em>Return :</em>Returns all the letters of the word separated as array elements</li>
</ul>

```import { getLettersInArray } from 'js-utility-kingdom'```

```const lettersInArray = getLettersInArray(word)```

<h3>getWordsInArray()</h3>

<ul>
<li><em>Parameter :</em>Takes a text as parameter</li>
<li><em>Return :</em>Returns all the words of the text separated as array elements</li>
</ul>

```import { getWordsInArray } from 'js-utility-kingdom'```

```const wordsInArray = getWordsInArray(text)```

<h3>capitalizeFirstLetter()</h3>

<ul>
<li><em>Parameter :</em>Takes a word as parameter</li>
<li><em>Return :</em>Returns the word with the first letter capitalized</li>
</ul>

```import { capitalizeFirstLetter } from 'js-utility-kingdom'```

```const capitalizedWord = capitalizeFirstLetter(word)```

<h3>capitalizeFirstLetters()</h3>

<ul>
<li><em>Parameter :</em>Takes a text as parameter</li>
<li><em>Return :</em>Returns the text with all the first letters capitalized</li>
</ul>

```import { capitalizeFirstLetters } from 'js-utility-kingdom'```

```const capitalizedText = capitalizeFirstLetters(text)```

<h3>isOneWord()</h3>

<ul>
<li><em>Parameter :</em>Takes a text as parameter</li>
<li><em>Return :</em>Returns true if the text contains only one word. Otherwise, returns false.</li>
</ul>

```import { capitalizeFirstLetters } from 'js-utility-kingdom'```

```const capitalizedText = capitalizeFirstLetters(text)```


<h2>Products-related</h2>

<h3>groupProductsWithCategory()</h3>

<ul>
<li><em>Parameter :</em>Takes an array of products as parameter</li> 
<li>presumes each product has a category, for example 'men's clothing'</li> 
<li>makes an array of categories</li> 
<li>grups each product with its corresponding category</li> 
<li>provides each category a unique id</li>
<li><em>Return :</em>returns the categories array</li> 
</ul>

```import { groupProductsWithCategory } from 'js-utility-kingdom'```

```const categories = groupProductsWithCategory(products);```
