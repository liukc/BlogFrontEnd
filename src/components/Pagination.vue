<template>
<div class="localtionPadding">
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">|&laquo;</span>
          <span class="sr-only">first</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
      <li class="page-item active"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;|</span>
          <span class="sr-only">end</span>
        </a>
      </li>
    </ul>
  </nav>
</div>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style scoped>
.localtionPadding{
  width: 200px;
  height: auto;
  margin: 0 auto;
  text-align: center;
}
</style>
