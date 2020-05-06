<template>
<figure @click="visible =!visible" class="gallery__item gallery__item--3">
     <v-card style="height:160px">
       <img src="https://picsum.photos/190/190?random" alt="Gallery image 3" class="gallery__img">
     </v-card>
     <div v-if="visible" class="box" >
       <v-icon @click="visible =! visible" class="fas fa-times" >fas fa-plus-circle</v-icon>
        <div class="container1">
          <img src="https://picsum.photos/190/190?random" alt="Gallery image 3" class="gallery__img">
          <div class="comment">
            <v-col md="9">
              <i class="far fa-envelope"></i>
              <p>Comments:{{comment}}</p>
              <div class="scrolling" style="height:430px">
<v-app style="height:370px">
<div>
<v-container id="scroll-target"  style="height: 340px" class="overflow-y-auto overflow-x-hidden">
<div id="todo-list-example">
  <form v-on:submit.prevent="addNewTodo">
    <button style="opacity:0" class="btn btn-primary" @click="count_comment">Добавить</button>
  </form>
  <ul>
    <li
      style="list-style:none"
      is="todo-item"
      v-for="(todo) in todos"
      v-bind:key="todo.id"
      v-bind:title="todo.title"
    >{{title}}</li>
  </ul>
</div>
<v-row
v-scroll:#scroll-target="onScroll"
style="height: 200px"
>
</v-row>
</v-container>
</div>
</v-app>
<v-text-field label="Type your nickname here..."></v-text-field>
</div>
<v-textarea auto-grow  outlined  rows="1" row-height="15" class="ShowDialog" placeholder="Add your comment..."></v-textarea>
<v-badge class="plus" color="#A9A9A9"  avatar  bordered  overlap>
<template v-slot:badge>
<v-avatar>
{{likes}}
</v-avatar>
</template>

<v-avatar size="40" @click="like">
<i class="fa fa-thumbs-up"></i>
</v-avatar>
</v-badge>
<v-badge class="minus" color="#A9A9A9"  avatar  bordered  overlap>
    <template v-slot:badge>
      <v-avatar>
        {{dislikes}}
      </v-avatar>
    </template>
    <v-avatar size="40" @click="dislike">
      <i class="fa fa-thumbs-down" aria-hidden="true"></i>
    </v-avatar>
  </v-badge>
            </v-col>
          </div>
        </div>
     </div>
    <div class="text">
      <h2></h2>
      <p></p>
      <div class="icon2">
        <div class="hover3"></div>
        <v-badge class="coment3" color="#A9A9A9"  avatar  bordered  overlap>
          <template v-slot:badge>
            <v-avatar>
              {{comment}}
            </v-avatar>
          </template>

          <v-avatar size="40">
            <i class="fa fa-commenting" aria-hidden="true"></i>
          </v-avatar>
        </v-badge>

        <v-badge class="plus green2" color="#A9A9A9"  avatar  bordered  overlap>
          <template v-slot:badge>
            <v-avatar >
              {{likes}}
            </v-avatar>
          </template>

          <v-avatar size="40">
            <i class="fa fa-thumbs-up"></i>
            </v-avatar>
        </v-badge>
        <v-badge class="minus blue2" color="#A9A9A9"  avatar  bordered  overlap>
          <template v-slot:badge>
            <v-avatar>
              {{dislikes}}
            </v-avatar>
          </template>

          <v-avatar size="40">
            <i class="fa fa-thumbs-down" aria-hidden="true"></i>
          </v-avatar>
        </v-badge>      </div>
    </div>
</figure>
</template>

<script>
  import todoItem from './todoItem'
  export default{
    components: {
      todoItem

  },
  data:() =>({
    snackbar: true,
    visible:false,
    comment:"5",
    file:'',
    image:null,
    likes:0,
    dislikes:0,
    newTodoText: '',



  //массив комментариев (мини-бот)
 todos: [
   {
     id: 1,
     title: ''
   },
   {
     id: 2,
     title: ''
   },
   {
     id: 3,
     title: ''
   },
   {
     id: 4,
     title: ''
   },
   {
     id: 5,
     title: ''
   }
 ],


 nextTodoId: 6
  }),

  methods: {
    addNewTodo() {
    this.todos.push({
      id: this.nextTodoId++,
      title: this.newTodoText
    })
    this.newTodoText = ''
  },
  count_comment(){
    this.comment++;
  },
    //фунція відстежування натиску на кнопку
    Upload() {  //
       this.$refs.file.click();
       const load = new FormData();
       load.append('image', this.image)

    },
    //функція яка знаходить перший обраний об'єкт
    ChangeFile(event)
    {
      this.image = event.target.files[0]
    },


    like(){
      this.likes++
    },
    dislike(){
      this.dislikes++
    },

  }
}

</script>

<style>
  .btn-primary{
    position:absolute;
    margin-left: 230px;
    margin-top: 390px;
    z-index:4;
  }

  .minus
  {
    background: #D1D0CE;
    color: grey !important;
    bottom: 60px;
    right: 130px;
  }

  .minus:hover{
    background: #800000;
    bottom:55px;
  }
  .plus{
    background: grey;
    bottom:37px;
    right: 85px;
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
    bottom: 890px;
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
    left: 290px;
    position: relative;
    top: 560px;
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
    display:flex;
    height: 630px;
    width: 900px;
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
  .gallery__item--3 {
      grid-column-start: 10;
      grid-column-end: 12;
      grid-row-start: 1;
      grid-row-end: 3;
  }


  .icon2
  {
    margin-left: 932px;
    margin-top: 135px;
    z-index: 3;
  }
  .coment3{
    left: 40px;
    top: 60px;
    background: #fff;
    color:grey !important;
    opacity: 0;
    z-index: 2;
  }

  .green2
  {
    background: #fff;
    color:grey !important;
    left: 55px;
    top: 63px;
    opacity: 0;
    z-index: 2;
  }

  .gallery__item--3:hover .green2
  {
    height: 40px;
    width: 40px;
    opacity: 1;
  }

  .hover3{
    position:absolute;
    opacity: 0;
    left: 965px;
    top: 190px;
    width: 162px;
    height: 60px;
    background: #fff;
    z-index: 1;
  }
.gallery__item--3:hover .hover3{
  opacity: 1;
  transition:1s;
}


  .blue2
  {
    background: #fff;
    color:grey !important;
    right: 230px;
    top: 63px;
    opacity: 0;
    z-index: 2;

  }
  .gallery__item--3:hover .coment3{
    transition:1s;
      opacity: 1;
    }
  .gallery__item--3:hover .green2
  {
    transition:1s;
    opacity: 1;
  }
  .gallery__item--3:hover .blue2
  {
    transition:1s;
    opacity: 1;
  }

</style>
