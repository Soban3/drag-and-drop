<template>
<draggable draggable=".item" class="dragArea" tag="tr" style="margin-left: 40px" :list="tasks" :group="{ name: 'g1' }">
    <td v-for="(el, index) in tasks" :key="el.name" style="margin-left:50px">
        <p slot="footer">{{ el.name }}</p>
        <div slot="footer">
            <draggable @change="onChange($event, index)" :options="{swapThreshold: 0.5}" class="dragArea" style="margin-left: 40px" :list="el.tasks" :group="{ name: 'g1' }">
                <div v-for="elChild in el.tasks" :key="elChild.name">
                    <p>{{ elChild.name }}</p>
                </div>
            </draggable>
        </div>
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
    methods: {
        onChange(el, index) {
            let removed = el.removed;

            if(this.tasks.length > 3) {
                this.tasks[index].tasks.push(removed.element)
                this.tasks.splice(-1)
            }
        }
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
    display: table-row !important;
}

.td {
    display: table-cell !important;
}
</style>
