<template>
<draggable draggable=".item" class="dragArea" tag="tr" style="margin-left: 40px" :list="tasks" :group="{ name: 'g1' }">
    <td v-for="el in tasks" :key="el.name" style="margin-left:50px">
      <p>{{ el.name }}</p>
        <draggable :options="{swapThreshold: 0.5}" class="dragArea" style="margin-left: 40px" :list="el.tasks" :group="{ name: 'g1' }">
            <div v-for="elChild in el.tasks" :key="elChild.name">
                <p>{{ elChild.name }}</p>
            </div>
        </draggable>
    </td>
</draggable>

<!-- <li v-for="el in tasks" :key="el.name"> -->
<!-- <p>{{ el.name }}</p> -->
<!-- <nested-draggable :tasks="el.tasks" /> -->
<!-- </li> -->
</template>

<script>
import draggable from "vuedraggable";
export default {
    props: {
        tasks: {
            required: true,
            type: Array
        }
    },
    components: {
        draggable
    },
    name: "nested-draggable"
};
</script>

<style scoped>
.dragArea {
    min-height: 50px;
    outline: 1px dashed;
}

.tr {
    display: table-row!important;
}

.td {
    display: table-cell!important;
}
</style>
