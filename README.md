<h1>What is js-utility-kingdom</h1>

<p>A collection of varoius JavaScript functions</p>

<h1>Installation</h1>

```npm i js-utility-kingdom```

<h1>Utilities</h1>

<h2>Text-related</h2>

<h3>getTextWordsInArray()</h3>

<ul>
<li><em>Parameter :</em>Takes a text as parameter</li>
<li><em>Return :</em>Returns all the words of the text separated as array elements</li>
</ul>

```import { getTextWordsInArray } from 'js-utility-kingdom'```

```const textWordsInArray = getTextWordsInArray(text)```

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
