<template>
  <v-container>
    <div class="container">
             <div class="gallery">
                 <figure  @click="visible =!visible" class="gallery__item gallery__item--1">
                     <img  src="https://picsum.photos/510/300?random" alt="Gallery image 1" class="gallery__img">
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon">
                         <v-icon class="green">mdi-thumb-up</v-icon>
                         <v-icon class="blue">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure  @click="visible =!visible" class="gallery__item gallery__item--2">
                     <img src="https://picsum.photos/510/300?random" alt="Gallery image 2" class="gallery__img">
                     <div v-show="visible" class="box">
                       <v-icon class="fas fa-times" >fas fa-plus-circle</v-icon>

                        <div class="container1" style="overflow:scroll">
                          <img class="aaa" src="https://picsum.photos/510/300?random" alt="">
                          <div class="comment">

                            <v-col md="9">
                              <i class="far fa-envelope"></i>
                              <p>Comments:{{comment}}</p>
                              <div class="scrolling">
                                <v-textarea auto-grow  outlined  rows="1" row-height="15" label="By Tenor35 Today 02:18PM" value="Lorem ipsum dolor sit amet, consectetur."></v-textarea>
                                <v-textarea auto-grow  outlined  rows="1" row-height="15" label="By Tenor35 Today 09:56AM" value="Lorem ipsum dolor sit amet, consectetur."></v-textarea>
                                <v-textarea auto-grow  outlined  rows="1" row-height="15" label="By Tenor35 Today 10:19AM" value="Lorem ipsum dolor sit amet, consectetur."></v-textarea>
                                <v-textarea auto-grow  outlined  rows="1" row-height="15" label="By Tenor35 Today 05:33PM" value="Lorem ipsum dolor sit amet, consectetur."></v-textarea>
                                <v-textarea auto-grow  outlined  rows="1" row-height="15" label="By Tenor35 Today 11:44AM" value="Lorem ipsum dolor sit amet, consectetur."></v-textarea>
                                <v-textarea auto-grow  outlined  rows="1" row-height="15" label="By Tenor35 Today 11:44AM" value="Lorem ipsum dolor sit amet, consectetur."></v-textarea>
                              </div>
                              <v-textarea auto-grow  outlined  rows="1" row-height="15" class="ShowDialog" placeholder="Add your comment..."></v-textarea>
                              <v-icon class="green10">mdi-thumb-up</v-icon>
                              <v-icon class="blue10">mdi-thumb-down</v-icon>
                            </v-col>
                          </div>
                        </div>
                     </div>
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon1">
                         <v-icon class="green1">mdi-thumb-up</v-icon>
                         <v-icon class="blue1">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure @click="visible =!visible" class="gallery__item gallery__item--3">
                     <img src="https://picsum.photos/510/300?random" alt="Gallery image 3" class="gallery__img">
                     <div class="box">
                     </div>
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon2">
                         <v-icon class="green2">mdi-thumb-up</v-icon>
                         <v-icon class="blue2">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure v-on:click="a" @click="visible =!visible" class="gallery__item gallery__item--4">
                     <img src="https://picsum.photos/510/300?random" alt="Gallery image 4" class="gallery__img">
                     <div class="box">
                     </div>
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon3">
                         <v-icon class="green3">mdi-thumb-up</v-icon>
                         <v-icon class="blue3">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure @click="visible =!visible" class="gallery__item gallery__item--5">
                     <img src="https://picsum.photos/510/300?random" alt="Gallery image 5" class="gallery__img">
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon4">
                         <v-icon class="green4">mdi-thumb-up</v-icon>
                         <v-icon class="blue4">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure @click="visible =!visible" class="gallery__item gallery__item--6">
                     <img src="https://picsum.photos/510/300?random" alt="Gallery image 6" class="gallery__img">
                     <div class="box">
                     </div>
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon5">
                         <v-icon class="green5">mdi-thumb-up</v-icon>
                         <v-icon class="blue5">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure @click="visible =!visible" class="gallery__item gallery__item--7">
                     <img src="https://picsum.photos/510/300?random" alt="Gallery image 7" class="gallery__img">
                     <div class="box">
                     </div>
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon6">
                         <v-icon class="green6">mdi-thumb-up</v-icon>
                         <v-icon class="blue6">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure @click="visible =!visible" class="gallery__item gallery__item--8">
                     <img src="https://picsum.photos/510/300?random" alt="Gallery image 8" class="gallery__img">
                     <div v-show="visible" class="box">


                     </div>
                     <div class="text">
                       <h2></h2>
                       <p></p>
                       <div class="icon7">
                         <v-icon class="green7">mdi-thumb-up</v-icon>
                         <v-icon class="blue7">mdi-thumb-down</v-icon>
                       </div>
                     </div>
                 </figure>
                 <figure class="gallery__item gallery__item--9" >
                   <v-card>
                     <v-icon class="fas fa-plus-circle" large @click="Upload()" >fas fa-plus-circle</v-icon>
                     <v-card-subtitle class="pictext">Add your <br>picture</v-card-subtitle>
                     <input type="file" @change="onfile()" ref="file" accept="image/*"/>
                   </v-card>

                 </figure>

             </div>
         </div>


      <List></List>

  </v-container>
</template>

<script>
import List from './components/List'
export default {
  components:{
    List
  },
  data:() =>({
    visible:false,
    comment:6,
    file:'',
    image:""
  }),
  methods: {
    Upload() {
      this.$refs.file.click()
    },
    onfile(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(file)
      this.image =file
    }
  }
}
</script>

<style>

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




  input[type="file"]{
  position: absolute;
  bottom: 90px;
  left: 20px;
  display:none;
}
.fa-plus-circle{
  color: #00CED1 !important;
}

.fa-plus-circle:hover {
  color: #008B8B !important;
}

.fa-times{
  position: absolute;
  padding-left: 90%;
  top: 60px;
}

.blue10 {
  right: 320px;
  bottom: 190px;
}



.blue10:hover {
  background: red;
  color: #fff !important;
  bottom: 185px;
  right: 340px;
}

.green10 {
  right: 130px;
  bottom: 190px;
}

.green10:hover {
  background: #008000;
  color: #fff	 !important;
  bottom:195px;
  right: 120px;
}

.fa-envelope
{
  transform: skew(-45deg);
  font-size: 40px;
  left: 310px;
  position: relative;
  top: 634px;
  background: #fff;
  color: #00CED1 !important;
  z-index:3

}

.pictext{
  display:block;
  padding-bottom: 23px;
  text-align: center
}

.box
{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  z-index:3
}

.container1{
  overflow:scroll;
  display:flex;
  height: 630px;
  width: 850px;
  background: #fff;
}

.container1 img{
height: 560px;
width: 450px;
}

p {
  color:grey;
  font-family: 'Anton', Medium, sans-serif;
  font-size:40px;
  font-weight: 600;
  line-height: 1.7;

}

.comment
{
  display:inline-block;
  line-height: .7;

}

.ShowDialog{
  width: 500px;
  height: 50px;
  background: #fff;
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
  width: 60%;
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

.gallery__item--1 h2:before,
.gallery__item--1 h2:after
{
  content:'';
  position:absolute;
  width: 133%;
  height: 290%;
}

.gallery__item--1 h2:before
{
  right: 0;
  bottom:-190%;
  background: rgba(0, 0, 0, 0.3);
  transform: skew(-45deg) translateX(40%) translateY(0%);
}

.gallery__item--1 h2:after
{
  left: 0;
  top:-134%;
  background: rgba(0, 0, 3, 0.4);
  transform: skew(135deg) translateX(-35%) translateY(45%);

}

.gallery__item--1:hover h2:before
{
  transition:1.8s;
  transform: skew(-45deg)  translateX(-130%) translateY(0%);
  mix-blend-mode:darken;

}

.gallery__item--1:hover h2:after
{
  transition:1.5s;
  transform: skew(90deg)  translateX(50%) translateY(65%);
  mix-blend-mode:darken;
}


.icon
{
  padding: 0;
  margin-left: 250px;
  margin-top:120px;
}

.green,
.blue
{
  opacity:0;
}

figure:hover .green
{
  opacity:1;
  background: green;
  width: 45px;
  height: 45px;
}
figure:hover .blue
{
  opacity:1;
  background: blue;
  width: 45px;
  height: 45px;
}

.text
{
  color:#fff;
  position:absolute;
  top:0;
  left:0;
  text-align:center;
}

.gallery__item--2 {
    grid-column-start: 7;
    grid-column-end: 10;
    grid-row-start: 1;
    grid-row-end: 6;

}

.gallery__item--2 h2:before,
.gallery__item--2 h2:after
{
  content:'';
  margin-left: 680px;
  margin-top: 85px;
  width: 270px;
  height: 440px;
  overflow: hidden;
  position:absolute;
  background: rgba(0, 0, 0, 0.4);
}

.gallery__item--2:hover h2:before
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}

.gallery__item--2:hover h2:after
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}

.green1
{
  background: green;
  opacity: 0;

}

.gallery__item--2:hover .green1
{
  opacity: 1;
  width: 50px;
  height: 50px;
}
.blue1
{
  background: blue;
  opacity: 0;
}

.gallery__item--2:hover .blue1
{
  opacity: 1;
  width: 50px;
  height: 50px;
}


.icon1
{
  position:absolute;
  margin-left: 660px;
  margin-top: 300px;
}

.gallery__item--3 {
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 3;
}

.gallery__item--3 h2:before,
.gallery__item--3 h2:after
{
  content:'';
  margin-left: 390px;
  margin-top: 85px;
  width: 170px;
  height: 170px;
  overflow: hidden;
  position:absolute;
  background: rgba(0, 0, 0, 0.4);
}

.gallery__item--3:hover h2:before
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}

.gallery__item--3:hover h2:after
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}


.icon2
{
  position:relative;
  margin-left: 932px;
  margin-top: 135px;
}

.green2
{
  background: green;
  opacity: 0;
}

.gallery__item--3:hover .green2
{
  height: 40px;
  width: 40px;
  opacity: 1;
}

.blue2
{
  background: blue;
  opacity: 0;
}

.gallery__item--3:hover .blue2
{
  height: 40px;
  width: 40px;
  opacity: 1;
}

.gallery__item--4 {
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 3;
    grid-row-end: 6;
}

.gallery__item--4 h2:before,
.gallery__item--4 h2:after
{
  content:'';
  margin-left:110px;
  margin-top: 360px;
  width: 260px;
  height: 160px;
  position:relative;
  background: rgba(0, 0, 0, 0.4);
}

.gallery__item--4:hover h2:before
{
  transition:2s;
  background: rgba(0, 0, 0, 0.5);
}

.gallery__item--4:hover h2:after
{
  transition:2s;
  background: rgba(0, 0, 0, 0.8);
}

.icon3
{
  position:absolute;
  margin-left: 55px;
  margin-top: 310px;
}

.green3
{
  background: green;
  opacity: 0;
}

.gallery__item--4:hover .green3
{
  height: 50px;
  width: 50px;
  opacity: 1;
}


.blue3
{
  background: blue;
  opacity: 0;
}

.gallery__item--4:hover .blue3
{
  height: 50px;
  width: 50px;
  opacity: 1;
}

.gallery__item--5 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 4;
    grid-row-end: 6;
}

.gallery__item--5 h2:before,
.gallery__item--5 h2:after
{
  content:'';
  margin-left: 90px;
  margin-top: 360px;
  width: 266px;
  height: 170px;
  overflow: hidden;
  position:absolute;
  background: rgba(0, 0, 0, 0.4);
}

.gallery__item--5:hover h2:before
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}

.gallery__item--5:hover h2:after
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}


.icon4
{
  position:relative;
  margin-left: 375px;
  margin-top: 390px;
}

.green4
{
  background: green;
  opacity: 0;
}

.gallery__item--5:hover .green4
{
  height: 50px;
  width: 50px;
  opacity: 1;
}

.blue4
{
  background: blue;
  opacity: 0;
}

.gallery__item--5:hover .blue4
{
  height: 50px;
  width: 50px;
  opacity: 1;
}

.gallery__item--6 {
    grid-column-start: 4;
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 6;
}

.gallery__item--6 h2:before,
.gallery__item--6 h2:after
{
  content:'';
  margin-right: 100px;
  margin-left: 980px;
  margin-top: 270px;
  width: 170px;
  height: 250px;
  overflow: hidden;
  position:absolute;
  background: rgba(0, 0, 0, 0.4);
}

.gallery__item--6:hover h2:before
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}

.gallery__item--6:hover h2:after
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}


.icon5
{
  position:absolute;
  margin-left: 925px;
  margin-top: 280px;
}

.green5
{
  background: green;
  opacity: 0;
}

.gallery__item--6:hover .green5
{
  height: 50px;
  width: 50px;
  opacity: 1;
}

.blue5
{
  background: blue;
  opacity: 0;
}

.gallery__item--6:hover .blue5
{
  height: 50px;
  width: 50px;
  opacity: 1;
}


.gallery__item--7 {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 6;
    grid-row-end: 8;
}

.gallery__item--7 h2:before,
.gallery__item--7 h2:after
{
  content:'';
  margin-left: -40px;
  margin-top: 546px;
  width: 270px;
  height: 165px;
  overflow: hidden;
  position:absolute;
  background: rgba(0, 0, 0, 0.4);
}

.gallery__item--7:hover h2:before
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}

.gallery__item--7:hover h2:after
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}


.icon6
{
  position:relative;
  margin-left: 50px;
  margin-top: 590px;
}

.green6
{
  background: green;
  opacity: 0;
}

.gallery__item--7:hover .green6
{
  height: 50px;
  width: 50px;
  opacity: 1;
}

.blue6
{
  background: blue;
  opacity: 0;
}

.gallery__item--7:hover .blue6
{
  height: 50px;
  width: 50px;
  opacity: 1;
}


.gallery__item--8 {
    grid-column-start: 4;
    grid-column-end: 10;
    grid-row-start: 6;
    grid-row-end: 8;
}

.gallery__item--8 h2:before,
.gallery__item--8 h2:after
{
  content:'';
  margin-left: 100px;
  margin-top: 548px;
  width: 566px;
  height: 165px;
  overflow: hidden;
  position:absolute;
  background: rgba(0, 0, 0, 0.4);
}

.gallery__item--8:hover h2:before
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}

.gallery__item--8:hover h2:after
{
  transition:2s;
  background: rgba(0, 0, 0, 0);
}


.icon7
{
  position:relative;
  margin-left: 340px;
  margin-top: 586px;
}

.green7
{
  background: green;
  opacity: 0;
}

.gallery__item--8:hover .green7
{
  height: 50px;
  width: 50px;
  opacity: 1;
}

.blue7
{
  background: blue;
  opacity: 0;
}

.gallery__item--8:hover .blue7
{
  height: 50px;
  width: 50px;
  opacity: 1;
}


.gallery__item--9 {
    grid-column-start: 10;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 8;
    background: #fff;
}

.v-icon
{
  width:60px;
  height:60px;
  margin-left:60px;
  margin-top:60px;
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

  form{
  outline: 2px dashed grey; /* обводка*/
  outline-offset: -10px;
  background: Aquamarine;
  color: dimgray;
  padding: 10px 10px;
  height: 200px;
  position: relative;
  cursor: pointer;
  }

  .gallery__item--2 h2:before,
  .gallery__item--2 h2:after
  {
    content:'';
    margin-left: 965px;
    margin-top: 85px;
    width: 415px;
    height: 580px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
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

  .gallery__item--3 h2:before,
  .gallery__item--3 h2:after
  {
    content:'';
    margin-left: 1405px;
    margin-top: 85px;
    width: 270px;
    height: 220px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon2
  {
    position:absolute;
    margin-left: 1402px;
    margin-top: 105px;
  }

  .gallery__item--4 h2:before,
  .gallery__item--4 h2:after
  {
    content:'';
    margin-left:85px;
    margin-top: 445px;
    width: 415px;
    height: 220px;
    position:absolute;
    background: rgba(0, 0, 0, 0.5);
  }

    .icon3
    {
      position: absolute;
      margin-left: 5px;
      margin-top: 20px;
    }

  .gallery__item--5 h2:before,
  .gallery__item--5 h2:after
  {
    content:'';
    margin-left: 165px;
    margin-top: 450px;
    width: 415px;
    height: 220px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon4
  {
    margin-left: 475px;
    margin-top: 520px;
  }

  .gallery__item--6 h2:before,
  .gallery__item--6 h2:after
  {
    content:'';
    margin-left: 1405px;
    margin-top: 330px;
    width: 270px;
    height: 335px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon5
  {
    position:absolute;
    margin-left: 1350px;
    margin-top: 430px;
  }

  .gallery__item--7 h2:before,
  .gallery__item--7 h2:after
  {
    content:'';
    margin-left: -60px;
    margin-top: 690px;
    width: 415px;
    height: 220px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon6
  {
    position:relative;
    margin-left: 50px;
    margin-top: 790px;
  }

  .gallery__item--8 h2:before,
  .gallery__item--8 h2:after
  {
    content:'';
    margin-left: 170px;
    margin-top: 690px;
    width: 855px;
    height: 220px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
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

  form{
  outline: 2px dashed grey; /* обводка*/
  outline-offset: -10px;
  background: Aquamarine;
  color: dimgray;
  padding: 10px 10px;
  height: 250px;
  position: relative;
  cursor: pointer;
  }

  .gallery__item--2 h2:before,
  .gallery__item--2 h2:after
  {
    content:'';
    margin-left: 1365px;
    margin-top: 85px;
    width: 415px;
    height: 780px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
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
    margin-left: 1360px;
    margin-top: 600px;
  }

  .gallery__item--3 h2:before,
  .gallery__item--3 h2:after
  {
    content:'';
    margin-left: 1805px;
    margin-top: 85px;
    width: 270px;
    height: 300px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon2
  {
    position:absolute;
    margin-left: 1802px;
    margin-top: 135px;
    width: 80px;
    height: 80px;
  }

  .gallery__item--4 h2:before,
  .gallery__item--4 h2:after
  {
    content:'';
    margin-left:485px;
    margin-top: 565px;
    width: 415px;
    height: 300px;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }
  .icon3
  {
    position: absolute;
    margin-left: 475px;
    margin-top: 620px;
  }

  .gallery__item--5 h2:before,
  .gallery__item--5 h2:after
  {
    content:'';
    margin-left: 920px;
    margin-top: 570px;
    width: 415px;
    height: 290px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon4
  {
    position: absolute;
    margin-left: 875px;
    margin-top: 520px;
  }

  .gallery__item--6 h2:before,
  .gallery__item--6 h2:after
  {
    content:'';
    margin-left: 1805px;
    margin-top: 410px;
    width: 270px;
    height: 455px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon5
  {
    position:absolute;
    margin-left: 1750px;
    margin-top: 630px;
  }

  .gallery__item--7 h2:before,
  .gallery__item--7 h2:after
  {
    content:'';
    margin-left: 480px;
    margin-top: 890px;
    width: 415px;
    height: 290px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
  }

  .icon6
  {
    position:absolute;
    margin-left: 450px;
    margin-top: 885px;
  }

  .gallery__item--8 h2:before,
  .gallery__item--8 h2:after
  {
    content:'';
    margin-left: 920px;
    margin-top: 890px;
    width: 860px;
    height: 290px;
    overflow: hidden;
    position:absolute;
    background: rgba(0, 0, 0, 0.4);
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
