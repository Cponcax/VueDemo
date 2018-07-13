<template>
  <div>
    <pagination :urlPrefix="'/'" :currentPage="2" :lastPage="100" />
  </div>
</template>

<script>
import Pagination from 'vue-bulma-pagination/src/Pagination'

export default {
  components: {
    Pagination
  }
}
</script>
