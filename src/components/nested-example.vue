<template>
<div class="row">
    <div class="col-8">
        <h3>Nested draggable</h3>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <nested-draggable :tasks="list" />
            </tbody>
        </table>
    </div>

    <rawDisplayer class="col-3" :value="list" title="List" />
</div>
</template>

<script>
import nestedDraggable from "./nested";
import rawDisplayer from './raw-displayer.vue'

export default {
    name: "nested-example",
    display: "Nested",
    order: 15,
    components: {
        nestedDraggable,
        rawDisplayer,
    },
    data() {
        return {
            list: [{
                    name: "task 1",
                    tasks: [{
                        name: "task 2",
                        tasks: []
                    }]
                },
                {
                    name: "task 3",
                    tasks: [{
                        name: "task 4",
                        tasks: []
                    }]
                },
                {
                    name: "task 5",
                    tasks: []
                }
            ]
        };
    }
};
</script>

<style scoped>

</style>
