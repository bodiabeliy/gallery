<template>
  <figure @click="visible =!visible" class="gallery__item gallery__item--8">
       <v-card style=" height:200px">
         <img src="https://picsum.photos/600/201?random" alt="Gallery image 8" class="gallery__img">
       </v-card>
      <div v-if="visible" class="box" >
        <v-icon @click="visible =! visible" class="fas fa-times" >fas fa-plus-circle</v-icon>
         <div class="container1">
           <img src="https://picsum.photos/600/201?random" alt="Gallery image 8" class="gallery__img">
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
        <div class="icon8">
          <div class="hover8"></div>
          <v-badge class="coment8" color="#00f"  avatar  bordered  overlap>
            <template v-slot:badge>
              <v-avatar>
                {{comment}}
              </v-avatar>
            </template>

            <v-avatar size="40">
              <i class="fa fa-commenting" aria-hidden="true"></i>
            </v-avatar>
          </v-badge>

          <v-badge class="plus green7" color="#00f"  avatar  bordered  overlap>
            <template v-slot:badge>
              <v-avatar >
                {{likes}}
              </v-avatar>
            </template>

            <v-avatar size="40">
              <i class="fa fa-thumbs-up"></i>
              </v-avatar>
          </v-badge>
          <v-badge class="minus blue7" color="#00f"  avatar  bordered  overlap>
            <template v-slot:badge>
              <v-avatar>
                {{dislikes}}
              </v-avatar>
            </template>

            <v-avatar size="40">
              <i class="fa fa-thumbs-down" aria-hidden="true"></i>
            </v-avatar>
          </v-badge>
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
.plus{
  margin-right: 300px;
  margin-bottom: -25px;
}

.icon8{

  position:absolute;
  top: 700px;
  left: 450px;
  background: #fff;
  color:grey !important;
  width: 40px;
  height: 40px;
  z-index: 3;

}

.hover8{
  position:absolute;
  opacity: 0;
  right: -453px;
  bottom: -7px;
  width: 530px;
  height: 80px;
  background: #fff;
  z-index: -1;
}

  .gallery__item--8:hover .hover8{
    opacity: 1;
    transition:1s;
  }

.coment8{
  opacity: 1;
}

  .green7{
    opacity: 0;
    left: 340px;
    bottom: 40px;
    background: #fff;
    color:grey !important;
    z-index: 3;
   }
  .blue7
  {
    opacity: 0;
    left: 420px;
    bottom: 65px;
    background: #fff;
    color:grey !important;
    z-index: 2;
   }

  .gallery__item--8:hover .coment8{
    transition:1s;
      opacity: 1;
    }
  .gallery__item--8:hover .green7
  {
    transition:1s;
    opacity: 1;
  }
  .gallery__item--8:hover .blue7
  {
    transition:1s;
    opacity: 1;
  }



</style>
