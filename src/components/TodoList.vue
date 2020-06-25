<template>
    <section class="m-auto my-2">
        <ul>
            <li class="bg-white text-left p-2 my-1 border" v-for="(todoItem, index) in items" :key="index + 'todo-list-id'">
                <span>
                    <i class="fa fa-check-square"></i>
                </span>
                <span :class="{ line : textLine }" @click="textTrue">
                    {{ todoItem }}
                </span>
                <span class="float-right" type="button" @click="removeTodo(todoItem, index)">
                    <i class="fa fa-trash" aria-hidden="true"/>
                </span>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'TodoList',
        props: { //['items'],  상위 컴포넌트에서 보낸 데이터(items)를 받아 사용한다.
          items: {
              //그냥 데이터를 받는 것이 아니라 타입을 지정해서 원하는 타입만 받을 수 있다. 이 경우, string의 타입만 전달 받음.
              required: false, //컴포넌트 실행 시, 무조건 데이터를 보내줘야 한다면 true, 아니면 false
              default: 'default title'  //전달 받은 props가 없을 때 기본 값으로 전해줄 데이터 값을 설정할 수 있다.
              //전달받은 props는 하위 컴포넌트에서 변경을 하면 안 된다. 단방향으로 데이터가 전달되기 때문에 상위 컴포넌트에서만 변경해야 됨.
          }
        },
        data() {
            return {
                textLine : false
            }
        },
        methods: {
            removeTodo(todoItem, index) {
                this.$emit('removed', todoItem, index);
            },
            textTrue() {
                this.textLine = !this.textLine
            }
        }
    }
</script>

<style scoped>
    .line {
        text-decoration: line-through;
    }
</style>