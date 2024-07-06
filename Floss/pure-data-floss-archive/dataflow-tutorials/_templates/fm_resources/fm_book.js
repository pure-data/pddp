
function set_up_chapter_links() {
    var chapters = [];
    var titles = [];
    var here = document.location;

var pathname = document.location.pathname.substring(1);
var parts = pathname.split(/\//);
if (parts.length > 1 ) {
    var result = parts[1];
    if (result =='') here += 'index/';
}

    $(".menu-goes-here a").each(function (i) {
 var thispage = this.href + '/';
                                    if (thispage == here){
                                        $(this).parent().css('background', '#f99b1c');
                                    }
                                    chapters.push(this.href);
                                    titles.push($(this).text());
                                });
    var hide = function(){
        this.style.visibility = 'hidden';
    };

    for (var i = 0; i < chapters.length; i++){
        if (chapters[i] + '/' == here){
            if (i > 0){
                $('.left.arrow a').each(function() {
                                            this.href = chapters[i - 1];
                                            this.title = titles[i - 1];
                                        });
            }
            else{
                $('.left.arrow a').each(hide);
            }
            if (i + 1 < chapters.length){
                $('.right.arrow a').each(function() {
                                             this.href = chapters[i + 1];
                                             this.title = titles[i + 1];
                                         });
                }
            else{
                $('.right.arrow a').each(hide);
            }
        }
    }
    //alert(titles);
    return chapters;
}

var all_book_chapters = $(set_up_chapter_links);

