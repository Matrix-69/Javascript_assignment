/* syntax for code
var <objectname> =
{
property1: value1,
property1: value1,
property1: value1,
property1: value1,
<functionname>:function()
{
function definition code;
}
};*/


var book=
{
    title: "My Experiments with Truth",
    author: "Gandhi",
    yearPublished: 1990,
    printBookdata: function()
    {
        console.log("The Book Titled " + this.title + "is written by " + this.author);
    }
};
console.log(book.printBookdata());
book.yearPublished= 1930;
console.log(book.yearPublished);