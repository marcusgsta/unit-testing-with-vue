<template>
    <div>

        <Rating :maxStars="5" :initialGrade="2"></Rating>

        <ToggleMessage></ToggleMessage>

    </div>
</template>

<script>

import ToggleMessage from '@/components/ToggleMessage.vue';
import Rating from '@/components/Rating.vue';

export default {
    // name: Home,
    components: {
        Rating,
        ToggleMessage
    },
    // data() {
    //     return {
    //         initialGrade: {
    //             2,
    //         maxStars: 5
    //     }
    // }

}
</script>