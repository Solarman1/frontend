<template>
  <v-card>
    {{salads_data}}
  </v-card>
</template>

<script>
export default {
    props: {
      salads_data: {
        type: Object,
        default() {
          return {}
        }
      },
      soups_data: {
        type: Object,
        default() {
          return {}
        }
      },
      drink_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
 
    },
}
</script>
