<template>
     <div id="peekaboo" >
             <div class="container-fluid"> 
              <div class="panel-header">
                <div class="headerTopLeft" id="headerTopLeft"> </div>
                <div class="headerTopCenter" id="Panel"><a href="#headerBottomCenter" class="titleHead" id="titleHeadCenter" rel="internal">
                   Messages
                   </a>
                 </div>
                 <ul class="d-flex mt-4">
                    <li><i class="fs-3 text-primary bi bi-facebook"></i></li>
                    <li><i class="fs-3 text-primary bi bi-twitter"></i></li>
                    <li><i class="fs-3 text-danger bi bi-instagram"></i></li>
                  </ul>
              </div>
                   <div class="well">
            <p id="headerBottomLeft"><strong>Merci de votre visite</strong>, si vous voulez me contactez,  laissez un message ici je vous répond en temps réelle !!</p>
            <p id="headerBottomCenter">sa va !</p>
            <p id="headerBottomRight">sa va pas.</p>
        </div>
    </div>
   </div>
</template>
<script>
export default {
   name:'PeekBox',
   methods:{
    yScrollHandler(){   
    let win = document.getElementById("peekaboo");
    if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight){
	win.style.transition = "right 0.7s ease-in-out 0s";
	win.style.right = "10px";
    } else {
	win.style.transition = "right 0.7s ease-in-out 0s";
	win.style.right = "-452px";
    }
   },
   computed(){
       this.yScrollHandler();
   } 
   }
}
</script>
<style lang="scss" scoped>
div#peekaboo{
    position:fixed;
    bottom:0px;
    top:384px;
    right:10px;
    background: rgba(242, 244, 245, 0.993);
    padding:15px;
    width:300px;
    height:380px;
    font-size:18px;
}
 .panel-header {
    z-index: 100;
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 1;
    grid-row-end: 1;
    display: grid;
    grid-template-columns: 80px 1px 1px 1px 0px;
    grid-template-rows:50px 4px 3px 5px;
    height:15%;
    width: 100%;
    cursor: move;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(45, 54, 76, 0.2) 0px 4px 12px 0px, rgba(45, 54, 76, 0.05) 0px 2px 5px 0px;
    grid-row-gap: 0px;
    grid-column-gap: 0px;
    border-radius: 2px;
}
/*.panel-header .headerTopLeft{
//background-image: url("../img/michael.jpg");
 background-repeat: no-repeat;
 margin-left:10px;
 
}
.headerBottomLeft{ 
    grid-column-end: 1;
    grid-row-start: 4;
    grid-row-end: 4;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer;
    color: rgb(45, 54, 76);
    padding-left:5px;
    border-bottom: 3px solid rgb(255, 255, 255);   
}
/*.headerBottomCenter{   
    grid-row-start:6;
    grid-row-end:4;
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.2;
    letter-spacing: normal;
    text-align: center;
    cursor: pointer;
    color: rgb(45, 54, 76);
    padding-left:5px;
    border-bottom: 3px solid rgb(255, 255, 255);     
}
/*.headerBottomRight{ 
    grid-column-start:2;
       grid-column-end: 1;
       grid-row-start: 4;
       grid-row-end: 4;
       font-family: "Open Sans", sans-serif;
       font-size: 15px;
       font-weight: 600;
       font-style: normal;
       font-stretch: normal;
       line-height: 1.2;
       letter-spacing: normal;
       text-align: center;
       cursor: pointer;
       color: rgb(45, 54, 76);
       padding-left:5px;
       border-bottom: 3px solid rgb(255, 255, 255);   
   }
.panel-header .headerTopCenter {
  background-image: url("https://img.icons8.com/color/48/000000/circled-user-male-skin-type-6.png");
  background-repeat: no-repeat;  
  margin-left:5px; 
}
.headerTopRight{
  grid-column-start: 8;
    grid-column-end: 8;
    grid-row-start: 1;
    grid-row-end: 1;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
}*/
.headerTopMin {
    grid-column-start: 6;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 1;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center center;
}
.headerTopHelp{
    grid-column-start: 4;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 1;
    background-color:transparent;
    padding: 6px 8px;
    background-repeat:no-repeat;
    background-position:center center;
}
.headerTopSettings {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
    background-color: transparent;
    padding: 4px;
    background-repeat: no-repeat;
    background-position: center center;
}
.titleHead{
    color:rgb(218, 173, 50);
}
#headerBottomLeft{
 position:fixed;
 padding-right:15px;

}
#headerBottomCenter{
    position:fixed;
  display:none;
}
#headerBottomRight{
   position:fixed;
   display:none;
   justify-self: end;
 
  
}
</style>