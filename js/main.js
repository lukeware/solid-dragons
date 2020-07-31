//Add a favorite button
$(".handleFavorite").click(function(){ alert('you clicked me')});

//User rating
var count;

function starmark(item){
count=item.id[0];
sessionStorage.starRating = count;
var subid= item.id.substring(1);
for(var i=0;i<5;i++)
{
if(i<count){
document.getElementById((i+1)+subid).style.color="#FDE16D";
}
else{
document.getElementById((i+1)+subid).style.color="white";
  }
 } 
}
