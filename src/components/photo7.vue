<template>
  <figure @click="visible =!visible" class="gallery__item gallery__item--7">
       <v-card style=" height:200px">
         <img src="https://picsum.photos/235/300?random" alt="Gallery image 7" class="gallery__img">
       </v-card>
      <div v-if="visible" class="box" >
        <v-icon @click="visible =! visible" class="fas fa-times" >fas fa-plus-circle</v-icon>
         <div class="container1">
           <img src="https://picsum.photos/235/300?random" alt="Gallery image 7" class="gallery__img">
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
        <div class="icon7">
          <div class="hover7"></div>
          <v-badge class="coment7" color="#00f"  avatar  bordered  overlap>
            <template v-slot:badge>
              <v-avatar>
                {{comment}}
              </v-avatar>
            </template>

            <v-avatar size="40">
              <i class="fa fa-commenting" aria-hidden="true"></i>
            </v-avatar>
          </v-badge>

          <v-badge class="plus green6" color="#00f"  avatar  bordered  overlap>
            <template v-slot:badge>
              <v-avatar >
                {{likes}}
              </v-avatar>
            </template>

            <v-avatar size="40">
              <i class="fa fa-thumbs-up"></i>
              </v-avatar>
          </v-badge>
          <v-badge class="minus blue6" color="#00f"  avatar  bordered  overlap>
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
    .icon7
    {
      position:absolute;
      margin-left: 660px;
      margin-top: 300px;
    }
    .hover7{
      position:absolute;
      opacity: 0;
      right: 610px;
      top: 355px;
      width: 252px;
      height: 70px;
      background: #fff;
      z-index: 1;
    }

      .gallery__item--7:hover .hover7{
        opacity: 1;
        transition:1s;
      }

  .coment7{

    right: 655px;
    top: 370px;
    background: #fff;
    color:grey !important;
    opacity: 0;
    z-index: 3;
    width: 40px;
    height: 40px;
  }

  .plus.green6
  {
    background: #fff;
    color:grey !important;
        right: 390px;
    top: 330px;
    opacity: 0;
    z-index: 3;
  }
  .gallery__item--7:hover .coment7
  {
    height: 40px;
    width: 40px;
    opacity: 1;
    z-index: 3;
  }
  .gallery__item--7:hover .green6
  {
    height: 40px;
    width: 40px;
    opacity: 1;
    z-index: 3;
  }


  .minus.blue6
  {
    right: 470px;
    top: 250px;
    width: 40px;
    margin-top: 50px;
    background: #fff;
    color:grey !important;
        opacity: 0;
    z-index: 3;
  }

  .gallery__item--7:hover .blue6
  {
    height: 40px;
    width: 40px;
    opacity: 1;
  }

  .gallery__item--7:hover .coment7{
    transition:1s;
      opacity: 1;
    }
  .gallery__item--7:hover .green6
  {
    transition:1s;
    opacity: 1;
  }
  .gallery__item--7:hover .blue6
  {
    transition:1s;
    opacity: 1;
  }
</style>
