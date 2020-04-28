<template>
<figure @click="visible =!visible" class="gallery__item gallery__item--6">
     <v-card style="height:160px">
        <img src="https://picsum.photos/230/300?random" alt="Gallery image 6" class="gallery__img">
       </v-card>
     <div v-if="visible" class="box" >
       <v-icon @click="visible =! visible" class="fas fa-times" >fas fa-plus-circle</v-icon>
        <div class="container1">
          <img src="https://picsum.photos/230/300?random" alt="Gallery image 4" class="gallery__img">
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
<v-badge class="plus" color="#00f"  avatar  bordered  overlap>
<template v-slot:badge>
<v-avatar >
{{likes}}
</v-avatar>
</template>

<v-avatar size="40" @click="like">
<i class="fa fa-thumbs-up"></i>
</v-avatar>
</v-badge>
<v-badge class="minus" color="#00f"  avatar  bordered  overlap>
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
      <div class="icon3">
        <v-icon class="green3">mdi-thumb-up</v-icon>
        <v-icon class="blue3">mdi-thumb-down</v-icon>
      </div>
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

</style>
