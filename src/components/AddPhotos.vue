<template>
  <figure class="gallery__item gallery__item--9" >
    <v-card>
      <v-icon class="fas fa-plus-circle" large @click="Upload()" >fas fa-plus-circle</v-icon>
      <v-card-subtitle class="pictext">Add your <br>picture</v-card-subtitle>
      <input type="file" @change="ChangeFile()" ref="file"  accept="image/*"/>
    </v-card>
  </figure>
</template>

<script>
  import axios from 'axios';
  export default {
    data:() =>({
      visible:false,
      file:'',
      image:null,
    }),

    methods:{
      Upload() {
        let formData = new FormData();
        formData.append('file', this.file);
        axios.post('/gallery',
        formData,
        {
          // де взяти конфиг для запроса,
          //который позволяет добавить к нему другие заголовки
        }).then(function(){
          console.log('SUCCESS!!');
        })
        .catch(function(){
          console.log('FAILURE!!');
        });;

        /*
         this.$refs.file.click();
         const load = new FormData();
         load.append('image', this.image)
         axios.post('http://localhost:3000');
         */

      },
      //функція яка знаходить перший обраний об'єкт
      ChangeFile()
      {
        this.file = this.$refs.file.files[0]
      },
    }
  }
</script>

<style>

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


</style>
