---
title: "What is JSONPath"
metadesc: "JSONPath is to JSON what XPath is to XML. This tutorial discusses in detail on how to use JSON path to validate REST API Response in Testsigma"
noindex: false
order: 3.1
page_id: "What is JSONPath"
search_keyword: "JSONPath, Testsigma Tutorials"
warning: false
contextual_links:
- type: section
- name: "Contents"
- type: link
  name: "Pre-requisite:"
  url: "#pre-requisite"
- type: link
  name: "Main advantages of using JSONPath"
  url: "#main-advantages-of-using-jsonpath"
- type: link
  name: "Syntax"
  url: "#syntax"
- type: link
  name: "Path Examples"
  url: "#path-examples"
---

---

JSONPath is to JSON what XPath is to XML. Just as XPath allows us to traverse and fetch information from the XML Document, JSONPath expression allows us to do so for JSON documents. Due to the popularity of JavaScript, JSON is one of the most widely used data storage formats on the web and this, in turn, increases the utility of JSONPath.

---
> ## [Pre-requisite:](#pre-requisite)
> You should be familiar with [JSON](https://www.json.org/).

---

## [Main advantages of using JSONPath:](#main-advantages-of-using-jsonpath)

* Data may be interactively found and extracted out of JSON structures on the client without special scripting.

* JSON data requested by the client can be reduced to the relevant parts on the server, such as minimizing the bandwidth usage of the server response.

---

## [Syntax:](#syntax)

A JSONPath expression contains the following symbols:

* $ – symbol refers to the root object or element.

* @ – symbol refers to the current object or element.

* . – operator is the dot-child operator, which you use to denote a child element of the current element.

* [ ] – is the subscript operator, which you use to denote a child element of the current element (by name or index).
* * – operator is a wildcard, returning all objects or elements regardless of their names.

* , – operator is the union operator, which returns the union of the children or indexes indicated.
  
* : – operator is the array slice operator, so you can slice collections using the syntax [start:end:step] to return a subcollection of a collection.
  
* ( ) – operator lets you pass a script expression in the underlying implementation’s script language. It’s not supported by every implementation of JSONPath, however.
  
* ? ( ) – to query all items that meet certain criteria.

---

## [Path Examples:](#path-examples)

Given the JSON:


```javascript
{
    "store": {
        "book": [
            {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95
            },
            {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99
            },
            {
                "category": "fiction",
                "author": "Herman Melville",
                "title": "Moby Dick",
                "isbn": "0-553-21311-3",
                "price": 8.99
            },
            {
                "category": "fiction",
                "author": "J. R. R. Tolkien",
                "title": "The Lord of the Rings",
                "isbn": "0-395-19395-8",
                "price": 22.99
            }
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95
        }
    },
    "expensive": 10
}

```


JSONPath | Result | 
--- | --- | 
[$.store.book[*].author](http://jsonpath.herokuapp.com/?path=%24.store.book%5B*%5D.author) | The authors of all books
[$..author](http://jsonpath.herokuapp.com/?path=%24..author) | All authors
[$.store.*](http://jsonpath.herokuapp.com/?path=%24.store.*)  | All things, both books and bicycles
[$.store..price](http://jsonpath.herokuapp.com/?path=%24.store..price) | The price of everything
[$..book[2]](http://jsonpath.herokuapp.com/?path=%24..book%5B2%5D) | The third book
[$..book[-2]](http://jsonpath.herokuapp.com/?path=%24..book%5B2%5D) | The second to last book
[$..book[0,1]](http://jsonpath.herokuapp.com/?path=%24..book%5B0,1%5D) | The first two books
[$..book[:2]](http://jsonpath.herokuapp.com/?path=%24..book%5B:2%5D) | All books from index 0 (inclusive) until index 2 (exclusive)
[$..book[1:2]](http://jsonpath.herokuapp.com/?path=%24..book%5B1:2%5D) | All books from index 1 (inclusive) until index 2 (exclusive)
[$..book[-2:]](http://jsonpath.herokuapp.com/?path=%24..book%5B-2:%5D) | Last two books
[$..book[2:]](http://jsonpath.herokuapp.com/?path=%24..book%5B2:%5D) | Book number two from tail
[$..book[?(@.isbn)]](http://jsonpath.herokuapp.com/?path=%24..book%5B?(@.isbn)%5D) | All books with an ISBN number
[$.store.book[?(@.price < 10)]](http://jsonpath.herokuapp.com/?path=%24.store.book%5B?(@.price%20%3C%2010)%5D) | All books in store cheaper than 10
[$..book[?(@.price <= $['expensive'])]](http://jsonpath.herokuapp.com/?path=%24..book%5B?(@.price%20%3C=%20%24%5B%27expensive%27%5D)%5D) | All books in store that are not "expensive"
[$..book[?(@.author =~ /.*REES/i)]](http://jsonpath.herokuapp.com/?path=%24..book%5B?(@.author%20=~%20/.*REES/i)%5D) | All books matching regex (ignore case)
[$..*](http://jsonpath.herokuapp.com/?path=%24..*) | Give me every thing
[$..book.length()](http://jsonpath.herokuapp.com/?path=%24..book.length()) | The number of books

More details can be found here:

[Java port for JSONPath](https://github.com/json-path/JsonPath)

[A simple guide on JSONPath from Restfulapi.net](https://restfulapi.net/json-jsonpath/)

And here's an online JSONPath evaluator: [JSONPath Online evaluator](http://jsonpath.com/)

