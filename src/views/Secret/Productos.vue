<template>
    <div class="mt-12">
        <b-row>
            <b-col cols="12">
                
                <producto-list :productos="productossAll"></producto-list>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import ProductoList from '@/components/ProductoList'
export default {
    components: {
        ProductoList 
    },
    mounted(){
        this.fetchProductos()
    },
    methods:{
        ...mapActions('productos', ['fetchProductos'])
    },
    computed:{
        ...mapGetters('productos',['productossAll'])
    }
}
</script>
