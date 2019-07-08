<template>
  <div class="myCourse">
    <div class="main">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        :header-cell-style="{background:'#f1c8c8',color:'#606266'}"
      >
        <!-- <el-table-column type="index" width="50" align="center"></el-table-column> -->
        <el-table-column label="课程号" width="120" align="center">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column prop="name" label="课程" width="120" align="center"></el-table-column>
        <el-table-column prop="category" label="类别" width="120" align="center"></el-table-column>
        <el-table-column prop="credit" label="学分" show-overflow-tooltip align="center"></el-table-column>
        <el-table-column prop="time" label="上课时间" width="150" align="center"></el-table-column>
        <el-table-column prop="address" label="上课地点" width="120" align="center"></el-table-column>
        <el-table-column prop="teacher" label="任课老师" width="120" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope" width="100">
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          category: "自然科学类",
          credit: "上海市普陀区金沙江路 1518 弄",
          time: "每周三7，8节课，周五3,4节课",
          address: "204",
          teacher: "李燕"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
      this.tableData.splice(index,1)
      console.log(this.tableData[index]);
    }
  }
};
</script>

<style>
.myCourse {
  width: 85%;
  height: 100%;
  margin: 80px auto;
}
.el-table {
  margin: 0px auto;
  background-color: #f1c8c8;
}
</style>