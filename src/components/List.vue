<template>
  <div class="container">
           <div class="gallery">
               <photo1></photo1>
               <photo2></photo2>
               <photo3></photo3>
               <photo4></photo4>
               <photo5></photo5>
               <photo6></photo6>
               <photo7></photo7>
               <photo8></photo8>
               <AddPhotos></AddPhotos>
           </div>
       </div>

</template>
<script>
  import photo1 from './photo1'
  import photo2 from './photo2'
  import photo3 from './photo3'
  import photo4 from './photo4'
  import photo5 from './photo5'
  import photo6 from './photo6'
  import photo7 from './photo7'
  import photo8 from './photo8'
  import AddPhotos from './AddPhotos'
  export default {
    components:{
      photo1,
      photo2,
      photo3,
      photo4,
      photo5,
      photo6,
      photo7,
      photo8,
      AddPhotos
    }
  }


</script>

<style >
  /* width */
  ::-webkit-scrollbar {

    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;

  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #00CED1;
    border-radius: 10px;

  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #008B8B;
  }
.btn-primary{
  position:absolute;
  margin-left: 230px;
  margin-top: 390px;
  z-index:4;
}


  *,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body {

  font-family: "Nunito", sans-serif;
  color: #333;
  font-weight: 300;
  line-height: 1.6;
}

.container {
  overflow-x:scroll;
  overflow-y:hidden;
  display: block;
  width: 1366px;
  height: 768px;
  margin: 2rem auto;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 5vw);
  grid-gap: 1.5rem;
}

.gallery__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;

}

.gallery__item--1 {
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 4;
    position:relative;
    overflow:hidden;
}

.text
{
  color:#fff;
  position:absolute;
  top:0;
  left:0;
  text-align:center;
}

.gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 6;
}


.gallery__item--6 {
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 6;
}



.gallery__item--7 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 8;
}



.gallery__item--8 {
    grid-column-start: 4;
    grid-column-end: 10;
    grid-row-start: 6;
    grid-row-end: 8;
}




@media (min-width: 1800px)
{
  .file-listing{
  display:block;
  width: 200px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  }
  .file-listing img{
  height: 50%;
  width:100%;
  z-index:3
  }

  .icon
  {
    padding: 0;
    margin-left: 500px;
    margin-top:190px;
  }

  .gallery__item--2:hover h2:before
  {
    transition:2s;
    background: rgba(0, 0, 0, 0);
  }

  .icon1
  {
    position:absolute;
    margin-left: 960px;
    margin-top: 400px;
  }


  .icon2
  {
    position:absolute;
    margin-left: 1402px;
    margin-top: 105px;
  }


    .icon3
    {
      position: absolute;
      margin-left: 5px;
      margin-top: 20px;
    }

    .icon4
  {
    margin-left: 475px;
    margin-top: 520px;
  }



  .icon5
  {
    position:absolute;
    margin-left: 1350px;
    margin-top: 430px;
  }


  .icon6
  {
    position:relative;
    margin-left: 50px;
    margin-top: 790px;
  }


  .icon7
  {
    position:relative;
    margin-left: 470px;
    margin-top: 786px;
  }
  .v-icon
  {
    position: absolute;
    width:60px;
    height:60px;
    margin-left:60px;
    margin-top:60px;
  }
}

@media (min-width: 2300px)
{
  .file-listing{
  display:block;
  width: 200px;
  margin: auto;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  }
  .file-listing img{
    padding-top: 20px;
  height: 50%;
  width:100%;
  }

  .icon
  {
    padding: 0;
    margin-left: 500px;
    margin-top:190px;
  }

  .icon1
  {
    position:absolute;
    margin-left: 1360px;
    margin-top: 600px;
  }

  .icon2
  {
    position:absolute;
    margin-left: 1802px;
    margin-top: 135px;
    width: 80px;
    height: 80px;
  }

  .icon3
  {
    position: absolute;
    margin-left: 475px;
    margin-top: 620px;
  }



  .icon4
  {
    position: absolute;
    margin-left: 875px;
    margin-top: 520px;
  }

    .icon5
  {
    position:absolute;
    margin-left: 1750px;
    margin-top: 630px;
  }


  .icon6
  {
    position:absolute;
    margin-left: 450px;
    margin-top: 885px;
  }


  .icon7
  {
    position:absolute;
    margin-left: 900px;
    margin-top: 956px;
  }
  .v-icon
  {
    position: absolute;
    width:60px;
    height:60px;
    margin-left:60px;
    margin-top:60px;
  }
}

</style>
