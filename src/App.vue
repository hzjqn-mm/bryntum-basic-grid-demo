<!-- Application -->

<script>
// vue imports
import {
    BryntumGrid
} from '@bryntum/grid-vue-3';
import { useGridConfig } from './AppConfig';
import DataGenerator from '../src/lib/generateData';


export default {
    name : 'App',
    components : {
        BryntumGrid
    },
    data() {
        return {
            DataGenerator,
            // extraData is available as a property of the grid in renderer
        };
    },

    methods : {
        addColumn() {
            const column = {
                field: 'extraData',
                text: 'Extra Data',
                width: 150,
            };
            const gridColumnolumnsStoreInstance = this.$refs.grid.instance.value.columns;
            gridColumnolumnsStoreInstance.add(column)
        }
    },
    computed: {
        store() {
            console.log(this.$store);
            return this.$store;
        }, 
        gridConfig() { return useGridConfig(this, this.$store.state.items.gridModel) } 
    },
};
</script>

<style lang="scss">
@import './App.scss';
</style>


<template>
    <!-- BryntumDemoHeader component is used for Bryntum example styling only and can be removed -->
    <bryntum-grid
        ref="grid"
        v-bind="gridConfig"
    />
</template>
 