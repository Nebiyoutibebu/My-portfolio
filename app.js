<script type ="text/javascript">
let dictionary = [
    {
        word : "addition ",
        meaning:"መደመር",
        pic:,
        pronounciation:"ʾme-de-me-r",
    },

{
    word : "minus ",
    def:"መቀነስ"
    pic:,
    pronounciation: "me-qe-ne-s",
},

];
init = function() {
    for (  i= 0; i < dictionary.length; i++) {

    }
    document.getElementById('word_list').innerHTML += < li onclick='show (" + i + ")'>" +
                  dictionary[i].word + "</li>";
}
}
init();

show = function(i) {
    document.getElementById('word_text').innerHTML = dictionary[i].word;
    document.getElementById('definition').innerHTML = dictionary[i].definition;
      
    let list = "";

    for ( j = 0; j < dictionary [i].pic.length; j++){
        list += "<li>" + dictionary [i].pic[j] + "</li>";
        document.getElementById('pic').innerHTML =list;
    }
}
</script>