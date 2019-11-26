<template>
 <div class="history" >
    <div style="display: flex; justify-content: space-between">
      <div style="width: 97%;padding: 15px;margin: 0px 10px 20px 5px;">
        <HistoryTable ref="historyTable"/>
      </div>
    </div>
  </div>
</template>
<script>
import HistoryTable from "../components/HistoryTable.vue";
export default {
  name: "history",
  components: {
     HistoryTable
  },
  data() {
    return {

    };
  },
  methods:{

  },
  watch: {

  }
};
</script>