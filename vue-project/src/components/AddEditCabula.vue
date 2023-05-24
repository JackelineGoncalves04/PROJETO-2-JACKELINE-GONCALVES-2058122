<template>
        <div class="card has-background-success-dark p-4 mb-5">
            <div class="field"> 
                <div class="control">
                    <textarea :value="modelValue" 
                              @input="$event => $emit('update:modelValue', $event.target.value)"
                               ref="textarea" class="textarea" 
                               placeholder="Adicionar apontamento">

                    </textarea>
                </div>
            </div>

            <div class="field is-grouped is-grouped-right">
                <div class="control">
                    <slot name="buttons"></slot>
                    
                </div>
            </div>
        </div>

</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['update:nodelValue'])
const props = defineProps({
    modelValue: {
        type: String,
        required:true
    }
})

const textarea = ref(null)
const focusTextarea = () => {
    textareaRef.value.focus()
}
defineExpose({
    focusTextarea
})
</script>